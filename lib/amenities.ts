import {
  Bell,
  Car,
  Cpu,
  DoorOpen,
  Dumbbell,
  ShieldCheck,
  Sun,
  Trees,
  Waves,
  type LucideIcon,
} from "lucide-react";

export const AMENITY_ICONS: Record<string, LucideIcon> = {
  Pool: Waves,
  Gym: Dumbbell,
  Parking: Car,
  Garden: Trees,
  "Sea View": Sun,
  Concierge: Bell,
  "Smart Home": Cpu,
  "Maid Room": DoorOpen,
  Security: ShieldCheck,
};
