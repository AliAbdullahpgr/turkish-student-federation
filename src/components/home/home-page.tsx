import type { HomePageContent } from "@/app/home-content";
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
import { PillarsSection } from "./pillars-section";
import { UpdatesSection } from "./updates-section";
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
        <WhyJoinSection whyJoin={whyJoin} />
        <CurriculumSection curriculum={curriculum} />
        <UpdatesSection newsletterId={newsletter.id} updates={updates} />
        <PillarsSection pillars={pillars} />
        <ImpactSection impact={impact} />
        <FeaturedVideoSection featuredVideo={featuredVideo} />
        <NewsletterSection newsletter={newsletter} />
      </main>

      <HomeFooter brandName={brand.name} footer={footer} shortName={brand.shortName} />
    </>
  );
}
