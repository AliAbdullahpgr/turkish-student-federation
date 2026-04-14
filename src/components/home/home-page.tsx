import type { HomePageContent } from "@/app/home-content";
import { CurriculumSection } from "./curriculum-section";
import { FeaturedVideoSection } from "./featured-video-section";
import { HomeFooter } from "./home-footer";
import { HomeHeader } from "./home-header";
import { HeroSection } from "./hero-section";
import { ImpactSection } from "./impact-section";
import { MissionSection } from "./mission-section";
import { NewsletterSection } from "./newsletter-section";
import { PillarsSection } from "./pillars-section";
import { UpdatesSection } from "./updates-section";

export function HomePage({ content }: { content: HomePageContent }) {
  const {
    brand,
    curriculum,
    featuredVideo,
    footer,
    hero,
    impact,
    mission,
    navigation,
    newsletter,
    pillars,
    updates,
  } = content;

  return (
    <>
      <HomeHeader brand={brand} navigation={navigation} />

      <main className="overflow-x-clip" id="top">
        <HeroSection hero={hero} />
        <MissionSection mission={mission} />
        <PillarsSection pillars={pillars} />
        <ImpactSection impact={impact} />
        <FeaturedVideoSection featuredVideo={featuredVideo} />
        <UpdatesSection newsletterId={newsletter.id} updates={updates} />
        <CurriculumSection curriculum={curriculum} />
        <NewsletterSection newsletter={newsletter} />
      </main>

      <HomeFooter brandName={brand.name} footer={footer} />
    </>
  );
}
