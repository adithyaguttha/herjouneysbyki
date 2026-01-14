import Hero from "@/components/hero/Hero";
import {
  LatestStories,
  DestinationsGrid,
  AboutTraveler,
  Newsletter,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      <Hero />
      <LatestStories />
      <DestinationsGrid />
      <AboutTraveler />
      <Newsletter />
      <Footer />
    </main>
  );
}
