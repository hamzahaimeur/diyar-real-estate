import propertiesData from "@/data/properties.json";
import type { Agent, Property, PropertyDetail } from "@/types/property";

const allProperties = propertiesData as Property[];

const AGENTS: Agent[] = [
  {
    name: "Hamza",
    role: "Senior Property Consultant",
    phone: "+971 0 000 0000",
    email: "hamza@example.invalid",
    photo: "",
  },
  {
    name: "Yusuf",
    role: "Residential Specialist",
    phone: "+971 0 000 0000",
    email: "yousef@example.invalid",
    photo: "",
  },
  {
    name: "Khalid",
    role: "Luxury Homes Advisor",
    phone: "+971 0 000 0000",
    email: "khalid@example.invalid",
    photo: "",
  },
  {
    name: "Omar",
    role: "Commercial Broker",
    phone: "+971 0 000 0000",
    email: "omar@example.invalid",
    photo: "",
  },
];

const GALLERY_EXTRAS = [
  "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdbc?auto=format&fit=crop&w=1600&q=80",
];

const DESCRIPTIONS: Record<string, string> = {
  "diyar-001":
    "A refined penthouse on the Palm with generous living spaces, floor-to-ceiling glass, and a private terrace facing the Gulf. Residences are finished to a high standard, with smart-home controls, a dedicated concierge, and access to the building’s pool and gym. An easy choice for buyers who want a lock-up-and-leave home with hotel-level service.",
  "diyar-002":
    "This garden villa in Al Barari sits among landscaped plots and quiet internal roads. The layout favours family living: a large kitchen, formal and informal sitting rooms, and a private pool courtyard. Smart lighting and a maid’s room complete a house designed for everyday comfort rather than display.",
  "diyar-003":
    "An executive office in Marina Gate with an efficient floor plate, meeting rooms, and marina views. The tower offers parking, gym access, and a staffed lobby. Suited to professional firms that want a credible address without excess space.",
  "diyar-004":
    "A bright three-bedroom apartment on the Corniche, with a practical split of living and sleeping areas and a balcony overlooking the water. Residents share a gym, concierge desk, and covered parking. Well placed for those who work in Abu Dhabi and want a walkable waterfront setting.",
  "diyar-005":
    "A substantial coastal villa on Saadiyat Island, planned around a garden, pool, and sea-facing terrace. Six bedrooms, a formal dining room, and a staff wing give it the scale of a family compound. Finishes are contemporary, with smart-home systems throughout.",
  "diyar-006":
    "A rectangular development plot in Al Jurf with road frontage and straightforward access. Zoning supports low-rise residential or mixed use, subject to municipality approval. Parking is available on site during inspection. A clean canvas for a builder or long-term investor.",
  "diyar-007":
    "A two-bedroom apartment on the Al Majaz canal, with a simple, well-lit plan and a balcony towards the water. The community includes a pool, gym, and allocated parking. A sensible Sharjah home for first-time buyers or a compact pied-à-terre.",
  "diyar-008":
    "A four-bedroom villa on Al Marjan Island with a private garden, pool, and sea views. Interiors are open and coastal in tone, with a maid’s room and covered parking. Weekend living is the point: beach, marina, and a quieter rhythm than the larger emirates.",
  "diyar-009":
    "A studio loft in Business Bay with a compact, efficient layout, smart-home fittings, and building amenities including gym, concierge, and parking. Ideal as a city base close to Downtown and the canal.",
  "diyar-010":
    "A fitted office on Yas Island with a clear floor plate, two washrooms, and parking in the podium. Gym and concierge services come with the building. Practical space for a growing team that wants to be near the island’s business cluster.",
  "diyar-011":
    "A two-bedroom residence on Boulevard, Downtown Dubai, with a balcony towards the city and access to pool, gym, and concierge. Smart-home features and allocated parking make it a straightforward lock-up apartment in the heart of the city.",
  "diyar-012":
    "A commercial plot in Muwaileh with road access and on-site parking for inspections. The land is suited to warehouse, showroom, or mixed commercial use, subject to Sharjah planning rules. A clear holding for operators who need space rather than a finished building.",
};

function galleryFor(property: Property, index: number) {
  const extras = GALLERY_EXTRAS.map(
    (_, offset) => GALLERY_EXTRAS[(index + offset) % GALLERY_EXTRAS.length],
  ).filter((url) => url !== property.image);
  return [property.image, ...extras].slice(0, 4);
}

export function getAllProperties(): Property[] {
  return allProperties;
}

export function toPropertyDetail(property: Property, index = 0): PropertyDetail {
  return {
    ...property,
    description: DESCRIPTIONS[property.id] ?? `${property.title} in ${property.location}.`,
    images: galleryFor(property, index),
    agent: AGENTS[index % AGENTS.length],
  };
}

export function getPropertyDetail(id: string): PropertyDetail | undefined {
  const index = allProperties.findIndex((item) => item.id === id);
  if (index === -1) return undefined;
  return toPropertyDetail(allProperties[index], index);
}

export function getSimilarProperties(property: Property, limit = 3): Property[] {
  const scored = allProperties
    .filter((item) => item.id !== property.id)
    .map((item) => {
      let score = 0;
      if (item.type === property.type) score += 3;
      if (item.city === property.city) score += 2;
      return { item, score };
    })
    .sort((a, b) => b.score - a.score || a.item.price - b.item.price);

  return scored.slice(0, limit).map((entry) => entry.item);
}
