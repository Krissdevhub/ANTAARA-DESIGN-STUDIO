import json

photo_map = {
    "coffee-by-di-bella": {
        "cover": "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
        "gallery": [
            "/images/projects/coffee-by-di-bella/p3_3_1310x1201.png",
            "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
            "/images/projects/coffee-by-di-bella/p3_4_657x599.png",
            "/images/projects/coffee-by-di-bella/p3_0_240x287.jpeg"
        ]
    },
    "residence-at-omaxe-mathura": {
        "cover": "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
        "gallery": [
            "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
            "/images/projects/omaxe-mathura-residence/p4_1_1032x1172.jpeg",
            "/images/projects/omaxe-mathura-residence/p4_3_720x1280.jpeg",
            "/images/projects/omaxe-mathura-residence/p4_0_1600x720.jpeg"
        ]
    },
    "corporate-office-kolkata": {
        "cover": "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/corporate-office-kolkata/p5_0_1536x1024.jpeg",
            "/images/projects/corporate-office-kolkata/p5_4_1536x1024.jpeg"
        ]
    },
    "bcm-planet-luxury-residence": {
        "cover": "/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg",
        "gallery": [
            "/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg",
            "/images/projects/bcm-planet-luxury-residence/p6_4_1536x1024.jpeg"
        ]
    },
    "hotel-pride-cottages": {
        "cover": "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
        "gallery": [
            "/images/projects/hotel-pride-cottages/p7_1_1536x1024.jpeg",
            "/images/projects/hotel-pride-cottages/p7_2_1536x1024.jpeg"
        ]
    },
    "after-hours-nightclub": {
        "cover": "/images/projects/after-hours-nightclub/p8_4_1535x1024.jpeg",
        "gallery": [
            "/images/projects/after-hours-nightclub/p8_4_1535x1024.jpeg",
            "/images/projects/after-hours-nightclub/p8_5_1535x1024.jpeg",
            "/images/projects/after-hours-nightclub/p8_6_1535x1024.jpeg",
            "/images/projects/after-hours-nightclub/p8_7_1535x1024.jpeg",
            "/images/projects/after-hours-nightclub/p8_8_1535x1024.jpeg"
        ]
    },
    "tiffany-blues-fine-dining": {
        "cover": "/images/projects/tiffany-blues-dining/p9_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/tiffany-blues-dining/p9_0_1536x1024.jpeg",
            "/images/projects/tiffany-blues-dining/p9_3_1536x1024.jpeg"
        ]
    },
    "hotel-pride-convention-centre": {
        "cover": "/images/projects/hotel-pride-convention/p10_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/hotel-pride-convention/p10_0_1536x1024.jpeg",
            "/images/projects/hotel-pride-convention/p10_3_1536x1024.jpeg"
        ]
    },
    "kamna-joshi-beauty-academy": {
        "cover": "/images/projects/kamna-joshi-beauty-academy/p11_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/kamna-joshi-beauty-academy/p11_0_1536x1024.jpeg",
            "/images/projects/kamna-joshi-beauty-academy/p11_5_1536x1024.jpeg"
        ]
    },
    "vinod-dhar-residence": {
        "cover": "/images/projects/vinod-dhar-residence/p12_4_1536x1024.jpeg",
        "gallery": [
            "/images/projects/vinod-dhar-residence/p12_4_1536x1024.jpeg",
            "/images/projects/vinod-dhar-residence/p12_7_1229x820.jpeg"
        ]
    },
    "bengali-square-3bhk": {
        "cover": "/images/projects/bengali-square-residence/p13_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/bengali-square-residence/p13_0_1536x1024.jpeg",
            "/images/projects/bengali-square-residence/p13_4_1536x1024.jpeg"
        ]
    },
    "platinum-paradise-residence": {
        "cover": "/images/projects/platinum-paradise-residence/p14_1_1536x1024.jpeg",
        "gallery": [
            "/images/projects/platinum-paradise-residence/p14_1_1536x1024.jpeg",
            "/images/projects/platinum-paradise-residence/p14_6_674x842.jpeg"
        ]
    },
    "grand-exotica-upendra-dhar": {
        "cover": "/images/projects/grand-exotica-upendra-dhar/p15_4_1024x1536.jpeg",
        "gallery": [
            "/images/projects/grand-exotica-upendra-dhar/p15_4_1024x1536.jpeg",
            "/images/projects/grand-exotica-upendra-dhar/p15_5_1024x1536.jpeg"
        ]
    },
    "luxury-bridal-experience-studio": {
        "cover": "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/luxury-bridal-experience-studio/p16_0_1536x1024.jpeg",
            "/images/projects/luxury-bridal-experience-studio/p16_4_1536x1024.jpeg"
        ]
    },
    "luxury-automotive-experience": {
        "cover": "/images/projects/luxury-automotive-dealership/p17_0_1024x1536.jpeg",
        "gallery": [
            "/images/projects/luxury-automotive-dealership/p17_0_1024x1536.jpeg",
            "/images/projects/luxury-automotive-dealership/p17_5_1024x1536.jpeg"
        ]
    },
    "sky-luxuria-4bhk": {
        "cover": "/images/projects/sky-luxuria-4bhk/p21_3_1682x577.png",
        "gallery": [
            "/images/projects/sky-luxuria-4bhk/p21_3_1682x577.png",
            "/images/projects/bcm-planet-luxury-residence/p6_3_1536x1024.jpeg"
        ]
    },
    "cravings-beats-and-treats": {
        "cover": "/images/projects/cravings-beats-and-treats/p23_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/cravings-beats-and-treats/p23_0_1536x1024.jpeg"
        ]
    },
    "interiors-selfie-salon": {
        "cover": "/images/projects/interiors-selfie-salon/p28_0_1536x1024.jpeg",
        "gallery": [
            "/images/projects/interiors-selfie-salon/p28_0_1536x1024.jpeg"
        ]
    },
    "delhi-world-public-school": {
        "cover": "/images/projects/delhi-world-public-school/p29_0_1112x742.png",
        "gallery": [
            "/images/projects/delhi-world-public-school/p29_0_1112x742.png",
            "/images/projects/delhi-world-public-school/p29_1_1024x572.png",
            "/images/projects/delhi-world-public-school/p29_2_1024x572.png"
        ]
    }
}

with open("data/projects.json", "r", encoding="utf-8") as f:
    projects = json.load(f)

for p in projects:
    slug = p["slug"]
    if slug in photo_map:
        p["coverImage"] = photo_map[slug]["cover"]
        p["galleryImages"] = photo_map[slug]["gallery"]

with open("data/projects.json", "w", encoding="utf-8") as f:
    json.dump(projects, f, indent=2, ensure_ascii=False)

ts_content = """export interface Project {
  slug: string;
  title: string;
  category: "Residential" | "Hospitality" | "Commercial" | "Retail" | "Institutional";
  subtitle: string;
  location: string;
  client: string;
  scope: string;
  year: string;
  featured: boolean;
  order: number;
  summary: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  page?: number;
}

export const INITIAL_PROJECTS: Project[] = """ + json.dumps(projects, indent=2, ensure_ascii=False) + ";\n"

with open("data/seed-projects.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print("Updated projects with pure architectural photography!")
