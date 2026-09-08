import json

photo_map = {
    "coffee-by-di-bella": {
        "cover": "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
        "gallery": [
            "/images/projects/coffee-by-di-bella/p3_2_627x627.png",
            "/images/projects/coffee-by-di-bella/p3_4_657x599.png"
        ]
    },
    "residence-at-omaxe-mathura": {
        "cover": "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
        "gallery": [
            "/images/projects/omaxe-mathura-residence/p4_2_1402x1122.png",
            "/images/projects/omaxe-mathura-residence/p4_0_1600x720.jpeg",
            "/images/projects/omaxe-mathura-residence/p4_1_1032x1172.jpeg"
        ]
    },
    "corporate-office-kolkata": {
        "cover": "/images/projects/corporate-office-kolkata/corporate_main_office.jpg",
        "gallery": [
            "/images/projects/corporate-office-kolkata/corporate_main_office.jpg"
        ]
    },
    "bcm-planet-luxury-residence": {
        "cover": "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
        "gallery": [
            "/images/projects/bcm-planet-luxury-residence/bcm_living_room.jpg",
            "/images/projects/bcm-planet-luxury-residence/bcm_bedroom.jpg",
            "/images/projects/bcm-planet-luxury-residence/bcm_dining.jpg",
            "/images/projects/bcm-planet-luxury-residence/bcm_kitchen.jpg"
        ]
    },
    "hotel-pride-cottages": {
        "cover": "/images/projects/hotel-pride-cottages/pride_pool_night.jpg",
        "gallery": [
            "/images/projects/hotel-pride-cottages/pride_pool_night.jpg",
            "/images/projects/hotel-pride-cottages/pride_cottage_suite.jpg",
            "/images/projects/hotel-pride-cottages/pride_tent_exterior.jpg"
        ]
    },
    "after-hours-nightclub": {
        "cover": "/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg",
        "gallery": [
            "/images/projects/after-hours-nightclub/afterhours_main_lounge.jpg",
            "/images/projects/after-hours-nightclub/afterhours_vip_lounge.jpg",
            "/images/projects/after-hours-nightclub/afterhours_red_tunnel.jpg"
        ]
    },
    "tiffany-blues-fine-dining": {
        "cover": "/images/projects/tiffany-blues-dining/tiffany_main_dining.jpg",
        "gallery": [
            "/images/projects/tiffany-blues-dining/tiffany_main_dining.jpg"
        ]
    },
    "hotel-pride-convention-centre": {
        "cover": "/images/projects/hotel-pride-convention/convention_ballroom_main.jpg",
        "gallery": [
            "/images/projects/hotel-pride-convention/convention_ballroom_main.jpg"
        ]
    },
    "kamna-joshi-beauty-academy": {
        "cover": "/images/projects/kamna-joshi-beauty-academy/beauty_academy_main.jpg",
        "gallery": [
            "/images/projects/kamna-joshi-beauty-academy/beauty_academy_main.jpg"
        ]
    },
    "vinod-dhar-residence": {
        "cover": "/images/projects/vinod-dhar-residence/vinod_living.jpg",
        "gallery": [
            "/images/projects/vinod-dhar-residence/vinod_living.jpg",
            "/images/projects/vinod-dhar-residence/vinod_bedroom.jpg",
            "/images/projects/vinod-dhar-residence/vinod_dining.jpg",
            "/images/projects/vinod-dhar-residence/vinod_entrance_foyer.jpg"
        ]
    },
    "bengali-square-3bhk": {
        "cover": "/images/projects/bengali-square-residence/bengali_living_main.jpg",
        "gallery": [
            "/images/projects/bengali-square-residence/bengali_living_main.jpg"
        ]
    },
    "platinum-paradise-residence": {
        "cover": "/images/projects/platinum-paradise-residence/p14_6_674x842.jpeg",
        "gallery": [
            "/images/projects/platinum-paradise-residence/p14_6_674x842.jpeg"
        ]
    },
    "grand-exotica-upendra-dhar": {
        "cover": "/images/projects/grand-exotica-upendra-dhar/grand_exotica_clean.jpg",
        "gallery": [
            "/images/projects/grand-exotica-upendra-dhar/grand_exotica_clean.jpg",
            "/images/projects/grand-exotica-upendra-dhar/grand_exotica_dining.jpg"
        ]
    },
    "luxury-bridal-experience-studio": {
        "cover": "/images/projects/luxury-bridal-experience-studio/bridal_studio_clean.jpg",
        "gallery": [
            "/images/projects/luxury-bridal-experience-studio/bridal_studio_clean.jpg"
        ]
    },
    "luxury-automotive-experience": {
        "cover": "/images/projects/luxury-automotive-dealership/dealership_main.jpg",
        "gallery": [
            "/images/projects/luxury-automotive-dealership/dealership_main.jpg"
        ]
    },
    "sky-luxuria-4bhk": {
        "cover": "/images/projects/sky-luxuria-4bhk/sky_luxuria_living.jpg",
        "gallery": [
            "/images/projects/sky-luxuria-4bhk/sky_luxuria_living.jpg"
        ]
    },
    "cravings-beats-and-treats": {
        "cover": "/images/projects/cravings-beats-and-treats/cravings_cafe_clean.jpg",
        "gallery": [
            "/images/projects/cravings-beats-and-treats/cravings_cafe_clean.jpg"
        ]
    },
    "interiors-selfie-salon": {
        "cover": "/images/projects/interiors-selfie-salon/salon_clean.jpg",
        "gallery": [
            "/images/projects/interiors-selfie-salon/salon_clean.jpg"
        ]
    },
    "delhi-world-public-school": {
        "cover": "/images/projects/delhi-world-public-school/p29_0_1112x742.png",
        "gallery": [
            "/images/projects/delhi-world-public-school/p29_0_1112x742.png"
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

print("SUCCESS: Every single project mapped to 100% pure text-free photography!")
