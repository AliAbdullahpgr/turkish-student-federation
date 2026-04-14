import type { HomePageContent } from "@/app/home-content";
import { BackToTop } from "./back-to-top";
import { CredibilitySection } from "./credibility-section";
import { CurriculumSection } from "./curriculum-section";
import { FeaturedVideoSection } from "./featured-video-section";
import { HomeFooter } from "./home-footer";
import { HomeHeader } from "./home-header";
import { HeroSection } from "./hero-section";
import { ImpactSection } from "./impact-section";
import { LeadershipSection } from "./leadership-section";
import { MissionSection } from "./mission-section";
import { NewsletterSection } from "./newsletter-section";
import { PartnersSection } from "./partners-section";
import { PillarsSection } from "./pillars-section";
import { TestimonialsSection } from "./testimonials-section";
import { UpdatesSection } from "./updates-section";
import { WaveDivider } from "./wave-divider";
import { WhyJoinSection } from "./why-join-section";

export function HomePage({ content }: { content: HomePageContent }) {
  const {
    announcement,
    brand,
    credibility,
    curriculum,
    featuredVideo,
    footer,
    hero,
    impact,
    leadership,
    mission,
    navigation,
    newsletter,
    pillars,
    updates,
    whyJoin,
  } = content;

  return (
    <>
      <HomeHeader announcement={announcement} brand={brand} navigation={navigation} />

      <main className="overflow-x-clip" id="top">
        <HeroSection hero={hero} />
        <CredibilitySection credibility={credibility} />
        <MissionSection mission={mission} />
        <LeadershipSection leadership={leadership} />
        <PartnersSection />
        <WhyJoinSection whyJoin={whyJoin} />
        <CurriculumSection curriculum={curriculum} />
        <TestimonialsSection />
        <UpdatesSection newsletterId={newsletter.id} updates={updates} />
        <PillarsSection pillars={pillars} />
        <WaveDivider fromColor="var(--surface-low)" toColor="#003623" />
        <ImpactSection impact={impact} />
        <WaveDivider flip fromColor="var(--background)" toColor="#002c1d" />
        <FeaturedVideoSection featuredVideo={featuredVideo} />
        <NewsletterSection newsletter={newsletter} />
      </main>

      <HomeFooter brandName={brand.name} footer={footer} shortName={brand.shortName} />
      <BackToTop />
    </>
  );
}
