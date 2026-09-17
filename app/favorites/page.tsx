"use client";
import { PropertyCard } from "@/components/home/PropertyCard";
import { useFavorites } from "@/components/providers/FavoritesProvider";
import { getAllProperties } from "@/lib/properties";
export default function FavoritesPage(){const {favorites}=useFavorites();const items=getAllProperties().filter((p)=>favorites.includes(p.id));return <main className="container-page py-16"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Your collection</p><h1 className="section-heading mt-3">Saved properties</h1>{items.length?<div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{items.map((p)=><PropertyCard key={p.id} property={p}/>)}</div>:<div className="mt-10 rounded-2xl border border-dashed border-forest-800/20 p-12 text-center"><p className="font-display text-2xl">Nothing saved yet.</p><p className="section-sub mx-auto">Tap the heart on a property to keep it here.</p></div>}</main>}
