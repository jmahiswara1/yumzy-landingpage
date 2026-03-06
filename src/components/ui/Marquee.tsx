"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarqueeProps {
    items: ReactNode[];
    className?: string;
    speed?: number;
}

export function Marquee({ items, className, speed = 25 }: MarqueeProps) {
    // Duplicate items to ensure smooth infinite scrolling
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className={cn("overflow-hidden flex w-full border-y border-dark/10 bg-mint py-5", className)}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-33.333333%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className="inline-flex items-center gap-4 px-8 font-serif text-base italic text-dark/70 tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-mint-dark shrink-0" />
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
