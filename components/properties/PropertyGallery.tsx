"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export function PropertyGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      <div className="relative h-64 overflow-hidden rounded-2xl sm:h-96 lg:h-[28rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src={current}
              alt={`${title} photo ${active + 1}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === active}
              className={`relative h-16 overflow-hidden rounded-xl transition duration-300 ease-in-out sm:h-20 ${
                index === active
                  ? "ring-2 ring-gold-500 ring-offset-2 ring-offset-cream dark:ring-offset-forest-950"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="160px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}