import type { Metadata } from "next";
import { GallerySection } from "@/components/home/gallery-section";
import { HomeHeader } from "@/components/home/home-header";
import { HomeFooter } from "@/components/home/home-footer";
import { homePageContent } from "@/app/home-content";

export const metadata: Metadata = {
  title: "Gallery | Turkish Student Federation",
  description: "Photos from events, programs, and community life at the Turkish Student Federation.",
};

export default function GalleryPage() {
  const { announcement, brand, navigation, footer } = homePageContent;

  return (
    <>
      <HomeHeader announcement={announcement} brand={brand} navigation={navigation} />
      <main className="overflow-x-clip pt-8" id="top">
        <GallerySection />
      </main>
      <HomeFooter brandName={brand.name} footer={footer} shortName={brand.shortName} />
    </>
  );
}
