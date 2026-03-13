"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-bg px-6 py-28 md:px-8 md:py-40 text-center lg:px-16 lg:py-48">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(255,217,200,0.4)_0%,transparent_65%)]" />

            <motion.p
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="mb-6 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-light"
            >
                Ready to taste?
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                className="mb-7 font-serif text-[clamp(3.2rem,6vw,7rem)] font-semibold leading-[0.97] tracking-[-0.03em] text-dark"
            >
                Your new<br />
                <em className="italic text-peach-dark">favourite snack</em><br />
                is waiting.
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                className="mx-auto mb-13 max-w-[420px] text-[1rem] font-normal leading-[1.8] text-mid"
            >
                Free shipping on your first order. No minimum. Just pick your flavor and we&apos;ll handle the rest.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4 relative z-10"
            >
                <button className="rounded-full bg-dark px-8.5 py-4 font-sans text-[0.82rem] font-bold uppercase tracking-[0.08em] text-bg shadow-[0_6px_24px_rgba(26,26,46,0.18)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-peach-dark hover:shadow-[0_8px_28px_rgba(244,160,122,0.4)]">
                    Shop All Flavors
                </button>
                <button className="group flex items-center gap-2 rounded-full border-none bg-transparent px-4 font-sans text-[0.82rem] font-semibold tracking-[0.04em] text-mid transition-colors hover:text-dark">
                    Find a store near you
                    <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
            </motion.div>
        </section>
    );
}
