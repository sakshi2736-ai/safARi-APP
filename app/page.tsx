import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Problem from "../components/Problem";
import ProposedSolution from "../components/ProposedSolution";
import VisionMission from "../components/VisionMission";
import CoreFeatures from "../components/CoreFeatures";
import AppPreview from "../components/AppPreview";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col">

      <Hero />

      <Demo />

      <Problem />

      <ProposedSolution />

      <VisionMission />

      <CoreFeatures />

      <AppPreview />

      <Team />

      {/* Footer added at bottom */}
      <Footer />

    </main>
  );
}