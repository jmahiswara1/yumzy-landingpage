import { Cursor } from "@/components/ui/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("@/components/ui/Marquee").then((mod) => mod.Marquee));
const Products = dynamic(() => import("@/components/sections/Products").then((mod) => mod.Products));
const Story = dynamic(() => import("@/components/sections/Story").then((mod) => mod.Story));
const Perks = dynamic(() => import("@/components/sections/Perks").then((mod) => mod.Perks));
const Stats = dynamic(() => import("@/components/sections/Stats").then((mod) => mod.Stats));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials));
const CTA = dynamic(() => import("@/components/sections/CTA").then((mod) => mod.CTA));

export default function Home() {
  const marqueeItems = [
    "Lemon Zing",
    "Berry Bliss",
    "Peach Cloud",
    "Mint Breeze",
    "Lavender Cream",
    "Sage & Honey",
    "Mango Soft",
    "Strawberry Dew",
  ];

  return (
    <main className="relative min-h-screen bg-bg antialiased text-dark">
      <Cursor />
      <Navbar />

      <Hero />
      <Marquee items={marqueeItems} speed={30} />
      <Products />
      <Story />
      <Perks />
      <Stats />
      <Testimonials />
      <CTA />

      <Footer />
    </main>
  );
}
