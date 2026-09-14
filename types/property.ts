export type PropertyType = "Apartment" | "Villa" | "Office" | "Land";

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
