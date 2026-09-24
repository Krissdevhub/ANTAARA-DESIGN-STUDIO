import fs from "fs";
import path from "path";
import crypto from "crypto";

export interface AdminCredentials {
  username: string;
  passwordHash: string;
  salt: string;
  updatedAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const AUTH_FILE = path.join(DATA_DIR, "admin-auth.json");

// Default tough credentials (initialized securely on server side only)
const DEFAULT_USERNAME = process.env.ADMIN_USERNAME || "antaara_admin";
const DEFAULT_PASSWORD = process.env.ADMIN_PASSWORD || "Antaara#Design@2026!Studio";
const AUTH_SECRET =
  process.env.ADMIN_AUTH_SECRET ||
  "antaara_studio_super_secret_auth_token_key_2026_indore_kirti_design";

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
}

function getStoredCredentials(): AdminCredentials {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(AUTH_FILE)) {
      const salt = crypto.randomBytes(16).toString("hex");
      const passwordHash = hashPassword(DEFAULT_PASSWORD, salt);
      const initial: AdminCredentials = {
        username: DEFAULT_USERNAME,
        passwordHash,
        salt,
        updatedAt: new Date().toISOString(),
      };
      fs.writeFileSync(AUTH_FILE, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }

    const content = fs.readFileSync(AUTH_FILE, "utf-8");
    return JSON.parse(content) as AdminCredentials;
  } catch (err) {
    console.error("Error reading admin auth file:", err);
    const salt = "antaara_default_salt_2026";
    return {
      username: DEFAULT_USERNAME,
      passwordHash: hashPassword(DEFAULT_PASSWORD, salt),
      salt,
      updatedAt: new Date().toISOString(),
    };
  }
}

export function verifyAdminCredentials(usernameAttempt: string, passwordAttempt: string): boolean {
  if (!usernameAttempt || !passwordAttempt) return false;

  const creds = getStoredCredentials();
  const trimmedUsername = usernameAttempt.trim();

  // Username match
  if (trimmedUsername !== creds.username) {
    return false;
  }

  // Hash check
  const calculatedHash = hashPassword(passwordAttempt, creds.salt);
  return crypto.timingSafeEqual(
    Buffer.from(calculatedHash, "hex"),
    Buffer.from(creds.passwordHash, "hex")
  );
}

export function updateAdminPassword(
  currentPasswordAttempt: string,
  newPassword: string
): { success: boolean; error?: string } {
  const creds = getStoredCredentials();

  // Verify current password first
  const currentHash = hashPassword(currentPasswordAttempt, creds.salt);
  const isValid = crypto.timingSafeEqual(
    Buffer.from(currentHash, "hex"),
    Buffer.from(creds.passwordHash, "hex")
  );

  if (!isValid) {
    return { success: false, error: "Current password does not match." };
  }

  if (!newPassword || newPassword.length < 8) {
    return { success: false, error: "New password must be at least 8 characters long." };
  }

  // Generate new salt and update hash
  const newSalt = crypto.randomBytes(16).toString("hex");
  const newHash = hashPassword(newPassword, newSalt);

  const updated: AdminCredentials = {
    ...creds,
    passwordHash: newHash,
    salt: newSalt,
    updatedAt: new Date().toISOString(),
  };

  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(AUTH_FILE, JSON.stringify(updated, null, 2), "utf-8");
    return { success: true };
  } catch (err: any) {
    console.error("Error writing updated credentials:", err);
    return { success: false, error: "Failed to persist new credentials." };
  }
}

// Generate signed session token for cookie
export function createSessionToken(): string {
  const payload = JSON.stringify({
    role: "admin",
    iat: Date.now(),
    nonce: crypto.randomBytes(16).toString("hex"),
  });
  const signature = crypto
    .createHmac("sha256", AUTH_SECRET)
    .update(payload)
    .digest("hex");
  return `${Buffer.from(payload).toString("base64")}.${signature}`;
}

// Verify session token
export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  try {
    const [b64Payload, signature] = token.split(".");
    if (!b64Payload || !signature) return false;

    const payloadStr = Buffer.from(b64Payload, "base64").toString("utf-8");
    const expectedSignature = crypto
      .createHmac("sha256", AUTH_SECRET)
      .update(payloadStr)
      .digest("hex");

    if (
      !crypto.timingSafeEqual(
        Buffer.from(signature, "hex"),
        Buffer.from(expectedSignature, "hex")
      )
    ) {
      return false;
    }

    const payload = JSON.parse(payloadStr);
    // Optional check: expires after 14 days
    const maxAgeMs = 14 * 24 * 60 * 60 * 1000;
    if (Date.now() - payload.iat > maxAgeMs) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}
