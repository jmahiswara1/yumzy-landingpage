import { Cursor } from "@/components/ui/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { Products } from "@/components/sections/Products";
import { Story } from "@/components/sections/Story";
import { Perks } from "@/components/sections/Perks";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

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
