export type PropertyType = "Apartment" | "Villa" | "Office" | "Land";

export interface Agent {
  name: string;
  role: string;
  phone: string;
  email: string;
  photo: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  currency: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured: boolean;
  amenities: string[];
}

export interface PropertyDetail extends Property {
  description: string;
  images: string[];
  agent: Agent;
}
