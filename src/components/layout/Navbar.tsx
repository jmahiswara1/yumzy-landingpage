"use client";

import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("");

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 60);
        if (latest < 200) {
            setActiveTab("");
        }
    });

    useEffect(() => {
        const sections = ["flavors", "story", "reviews"];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveTab(id);
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 py-4 md:px-8 md:py-7 lg:px-14 transition-all duration-400",
                scrolled && "bg-bg/85 backdrop-blur-md py-3 md:py-4 border-b border-mint/60 shadow-sm"
            )}
        >
            <Link href="/" className="flex items-center gap-2.5 text-[1.6rem] md:text-[1.9rem] font-bold font-serif tracking-tight text-dark no-underline">
                <Image src="/logo.png" alt="Yumzy Logo" width={36} height={36} className="w-8 h-8 md:w-9 md:h-9 rounded-lg object-contain" unoptimized />
                Yumzy
                <span className="hidden sm:inline-block bg-coral text-white font-sans text-[0.6rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    New Flavor
                </span>
            </Link>
            <ul className="hidden md:flex gap-9 list-none items-center relative">
                {["flavors", "story", "reviews"].map((id) => (
                    <li key={id} className="relative">
                        <a
                            href={`#${id}`}
                            onClick={(e) => scrollToSection(e, id)}
                            className={cn(
                                "relative z-10 text-[0.82rem] font-semibold tracking-wide no-underline transition-colors px-3 py-1.5 rounded-full",
                                activeTab === id ? "text-dark" : "text-mid hover:text-dark"
                            )}
                        >
                            {id === "flavors" ? "Flavors" : id === "story" ? "Our Story" : "Reviews"}
                        </a>
                        {activeTab === id && (
                            <motion.div
                                layoutId="nav-active"
                                className="absolute inset-0 bg-coral/10 rounded-full z-0 pointer-events-none border border-coral/20"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                        )}
                    </li>
                ))}
            </ul>
            <button className="bg-coral-dark text-white font-sans text-[0.65rem] md:text-xs font-bold tracking-widest uppercase border-none px-5 py-2.5 md:px-6 md:py-3 rounded-full cursor-none md:cursor-none transition-all duration-300 shadow-[0_4px_16px_rgba(255,107,107,0.35)] hover:bg-dark hover:shadow-[0_6px_20px_rgba(26,26,46,0.2)] hover:-translate-y-px active:scale-95">
                Order Now
            </button>
        </nav>
    );
}
