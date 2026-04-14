"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionFrame } from "./primitives";
import { Reveal } from "./animated";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDITwyjDQCGI1TqgrNqO8RklWIpmaLkhS6LqL9VqHkE3t1YBITn0DF8Gv-Gvxc4HryjgyloJiCCOF7ZXHdWcO1iAc8SxswA58Ie6IOMMNqk8-ywxkXbdB-JFyb8pNyMuj3E07qddM9qlidi4fnZN3pzdbAqtptoWbQ5rvaQWoBLG3x7KMbbfek95ESgdWVhVs_khEfd8T7boHUFc7COjzVMGAvYsZaNwgCnQPe7dnIj6U9DWEeevQZA7ULmFcRTO-HBDyO3XrS1xQ",
    alt: "Leadership conference",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIzu76_U9WWpm_MbssbQxKfoR7FgqgdJhfQzw-G-SdvXyYFYq2BYYq_7iAu4GCM5L3F4hkmDNW3Bcniak0LMbR0J73fEPe5DH3ehQoKn1xg1tvacu1QRn1oLZ-lz17hUBOYvNoZ2jyS1tCtzc5ZgPAVS3zlO6ZDs38SudBuiPdYFe0Hmub__O6uJoWYQf7GOV1xlWKdzqvLibrAUo_YBz5VYJ8kpUoWudOpsbjHSoH-lS5Q0lYyiad9JHydj8LZTpxWVI6FLKzkg",
    alt: "Community collaboration",
    span: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1ss4dLkcYvG7JBUCPIq1A_9lx1IrbYsnFcQUP81JN23DxWHo6NjPGq4LLU8WRd6W8k66xTpnTeW3y-s8thyncbKt3UaaIGVkoaP3-i_CIPSYiJd0HeXDS00ftZLznZm3lVmGLZkSvdPiCHix41Q99wWLlox1Lqr18KCuR9NyFqi-O1YFslSdU__Iss2momwK1wxzsw9yyeUlo2UOk_9NrjTLm6Zx4hsvTeSi2sv11VS3U0pGcndz3vxePlx63BfRnZjHuKP5wUQ",
    alt: "Campus discussion",
    span: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXVkRANJ2Y1_0FkPYQL_wDpJm-tBnMHjNbLf72cjcqRv_zA4RotG15vZI19ZEBBx1GZMgaArzT3X7qsnUA8Rl6RL-t6E_HIshXeLXpQPFqiuX2aUPgEc9uWYcNETJ8Uraa1ZFzNF21kY9rLNSbvz681tGlCUAr4P6H43lTiAInuFIb22a62U6jaqHonCqW_JjggFACvBZNaz2DHP3VHjVMT8nNs9HrbVIJmNjXQ4s0EJ01w2HOjoPZfTE0YLwitDyQqtInoxvGw",
    alt: "Community gathering",
    span: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqxanbn1F212GF5nTylnBBhOqi718yquiIUn68fQNnFKmqcNaKLehySHHjCuB_l2nSleKkXsKQCDZSyEN9MlMZhB3ajmaqffbOuWZvXi9z0C8FQtH-AhwkrjZLFINg9JjYiYzaWLgOjWI5VQOM4rGB-xmEGzntrm3AEE2eKKpeXgMqI6FXRhNRRNy4xoN3D8o5bIiHYNhDpbZNjtHI-RzFNV3clVYRKcz12ZUb5EsgZGFsECPSXP6kD_dJYDPFq2SzLGkb2YeXNQ",
    alt: "Study session",
    span: "",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_1dcrcfWxy42nx01U2zxUhWDTn6b4RdbRBSi1IDtf2BsNcKrbAGOoxwEA_hpoC2DTxfFt2QnMqGoCNIzYVdqCu3jqUngShNf0Vuhm-L-r7dv2hcG0_bt0XI_JTS9Mw9Stltq8mhyWdCxOBLayD_MkTKFE9Ig_SCGNWifiCugnH5tElR4KRsGc7C04Ge3S-QiwCEs7o88cKKRbq6hTd5XH1q5YBjULqst303zLIGk5TThsxnNDscu6VMI5g1hg2Tt03ykJPzw_CA",
    alt: "Library collaboration",
    span: "col-span-2",
  },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 sm:py-24 md:py-32">
        <SectionFrame>
          <Reveal className="mb-12 text-center sm:mb-16">
            <p className="mb-3 font-label text-[0.68rem] uppercase tracking-[0.3em] text-secondary">
              Life in the Federation
            </p>
            <h2 className="font-headline text-[2.2rem] font-extrabold tracking-[-0.05em] text-primary sm:text-4xl md:text-5xl">
              Photo <span className="italic text-secondary">Gallery</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <Reveal
                key={img.alt}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-surface-high ${img.span}`}
                delay={i * 80}
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    fill
                    alt={img.alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    src={img.src}
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/30" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-4 py-2 font-label text-xs font-bold text-primary">
                      View
                    </span>
                  </div>
                </div>
                <button
                  aria-label={`View ${img.alt}`}
                  className="absolute inset-0"
                  onClick={() => setLightbox(i)}
                  type="button"
                />
              </Reveal>
            ))}
          </div>
        </SectionFrame>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close lightbox"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="relative mx-4 max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl">
            <Image
              alt={galleryImages[lightbox].alt}
              className="object-contain"
              height={800}
              src={galleryImages[lightbox].src}
              width={1200}
            />
          </div>
          {/* Nav arrows */}
          <button
            aria-label="Previous image"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-8"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
            }}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Next image"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-8"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            type="button"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
