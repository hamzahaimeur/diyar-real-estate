"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FavoritesContextValue = { favorites: string[]; toggleFavorite: (id: string) => void; isFavorite: (id: string) => boolean };
const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => { try { setFavorites(JSON.parse(window.localStorage.getItem("diyar-favorites") || "[]")); } catch { setFavorites([]); } }, []);
  useEffect(() => { window.localStorage.setItem("diyar-favorites", JSON.stringify(favorites)); }, [favorites]);
  const value = useMemo(() => ({ favorites, toggleFavorite: (id: string) => setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]), isFavorite: (id: string) => favorites.includes(id) }), [favorites]);
  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}
export function useFavorites() { const value = useContext(FavoritesContext); if (!value) throw new Error("useFavorites must be used within FavoritesProvider"); return value; }

export function SaveButton({ propertyId }: { propertyId: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(propertyId);
  return <button type="button" aria-label={saved ? "Remove from favorites" : "Save property"} aria-pressed={saved} onClick={() => toggleFavorite(propertyId)} className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-forest-900 shadow-sm transition hover:scale-105 dark:bg-forest-950/90 dark:text-cream"><span aria-hidden="true">{saved ? "♥" : "♡"}</span></button>;
}
