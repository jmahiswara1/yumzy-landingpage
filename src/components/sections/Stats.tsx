"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ target, isDecimal = false, suffix = "" }: { target: number, isDecimal?: boolean, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, { stiffness: 50, damping: 20 });
    const display = useTransform(spring, (current) => {
        return isDecimal ? current.toFixed(1) : Math.round(current).toString();
    });

    useEffect(() => {
        if (inView) {
            spring.set(target);
        }
    }, [inView, spring, target]);

    return (
        <span ref={ref}>
            <motion.span>{display}</motion.span>{suffix}
        </span>
    );
}

const STATS = [
    { target: 120, label: "Happy Snackers", suffix: "k+", color: "text-peach-dark" },
    { target: 8, label: "Active Flavors", suffix: "", color: "text-mint-dark" },
    { target: 4.9, label: "Average Rating", suffix: "★", isDecimal: true, color: "text-yellow" },
    { target: 98, label: "Would Reorder", suffix: "%", color: "text-purple-dark" },
];

export function Stats() {
    return (
        <section className="bg-dark border-t border-white/5">
            <div className="grid grid-cols-2 md:grid-cols-4">
                {STATS.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75, delay: idx * 0.15, ease: "easeOut" }}
                        className={`border-b md:border-b-0 border-white/5 p-8 md:p-12 lg:p-18 text-center ${idx % 2 === 0 ? 'border-r' : ''} md:border-r last:border-r-0`}
                    >
                        <div className={`mb-2.5 font-serif text-[clamp(2.5rem,4.5vw,4.8rem)] font-bold leading-none tracking-[-0.04em] ${stat.color}`}>
                            <AnimatedNumber target={stat.target} isDecimal={stat.isDecimal} suffix={stat.suffix} />
                        </div>
                        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-white/30">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
