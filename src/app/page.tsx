import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  About,
  Explore,
  Hero,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "@/sections";

export default function Home() {
  return (
    <div className="overflow-hidden bg-primary-black">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}
