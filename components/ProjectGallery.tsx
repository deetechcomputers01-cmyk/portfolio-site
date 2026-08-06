"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import type { ProjectGalleryDevice } from "@/lib/projects";

export function ProjectGallery({ devices }: { devices: ProjectGalleryDevice[] }) {
  const [activeDeviceId, setActiveDeviceId] = useState(devices[0]?.id);
  const [activeGroupId, setActiveGroupId] = useState(devices[0]?.groups[0]?.id);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeDevice = devices.find((device) => device.id === activeDeviceId) ?? devices[0];
  const activeGroup =
    activeDevice?.groups.find((group) => group.id === activeGroupId) ?? activeDevice?.groups[0];
  const items = activeGroup?.items ?? [];
  const isMobile = activeDevice?.id === "mobile";

  useEffect(() => {
    if (lightboxIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));
      if (event.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, items.length]);

  if (!activeDevice || !activeGroup) return null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {devices.map((device) => (
          <button
            key={device.id}
            type="button"
            onClick={() => {
              setActiveDeviceId(device.id);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              device.id === activeDevice.id
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {device.label}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {activeDevice.groups.map((group) => (
          <button
            key={group.id}
            type="button"
            onClick={() => {
              setActiveGroupId(group.id);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              group.id === activeGroup.id
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>

      {activeGroup.note ? (
        <p className="mt-4 text-sm text-muted-foreground">{activeGroup.note}</p>
      ) : null}

      <div
        className={`mt-8 grid gap-4 ${
          isMobile ? "grid-cols-3 sm:grid-cols-4 lg:grid-cols-5" : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={`group relative overflow-hidden rounded-lg border border-border bg-muted text-left ${
              isMobile ? "aspect-[9/16]" : "aspect-video"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={isMobile ? "(min-width: 640px) 20vw, 33vw" : "(min-width: 640px) 33vw, 50vw"}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
              <ZoomIn className="size-5 text-white" aria-hidden="true" />
            </span>
            <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {item.alt}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close preview"
              className="absolute right-4 top-4 inline-flex size-11 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X className="size-5" />
            </button>

            {items.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-6"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setLightboxIndex((i) => (i === null ? i : (i + 1) % items.length));
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            ) : null}

            <motion.div
              key={items[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-full max-w-4xl flex-col items-center gap-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative max-h-[75vh] w-full overflow-hidden rounded-lg">
                <Image
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].alt}
                  width={1600}
                  height={1000}
                  sizes="90vw"
                  className="h-auto max-h-[75vh] w-full object-contain"
                />
              </div>
              <p className="text-sm text-white/70">
                {items[lightboxIndex].alt}
                <span className="text-white/40">
                  {" "}
                  — {lightboxIndex + 1} / {items.length}
                </span>
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
