"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/canvas/HeroScene").then((mod) => mod.HeroScene), {
    ssr: false,
});

export function Hero() {
    return (
        <section className="relative h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden bg-gradient-to-br from-light via-white to-mint/20">
            {/* LEFT CONTENT */}
            <div className="relative z-10 flex flex-col justify-center px-6 pt-28 pb-8 md:px-8 md:pt-28 lg:px-16 lg:pt-24 lg:pb-12 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                    className="mb-5 lg:mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-mint px-4.5 py-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.12em] text-dark shadow-sm"
                >
                    <span className="h-[1.5px] w-4 bg-mint-dark" />
                    Honest Snacks, Real Flavors
                </motion.div>

                <h1 className="mb-5 lg:mb-6 font-serif text-[clamp(2.8rem,5vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.02em] text-dark">
                    <span className="block overflow-hidden py-0.5">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="inline-block"
                        >
                            Good food
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden py-0.5">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="inline-block italic text-coral"
                        >
                            deserves
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden py-0.5">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="inline-block text-purple"
                        >
                            a great snack.
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    className="mb-8 lg:mb-10 max-w-[400px] text-sm lg:text-base font-normal leading-[1.8] text-mid"
                >
                    Yumzy is made for those who care about what they eat — soft textures, bright flavors, and ingredients you can actually pronounce.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    className="flex flex-col sm:flex-row sm:items-center gap-4.5"
                >
                    <button className="rounded-full bg-dark px-7 py-3.5 md:px-8.5 md:py-4 font-sans text-[0.75rem] md:text-[0.82rem] font-bold uppercase tracking-[0.08em] text-bg shadow-[0_6px_24px_rgba(26,26,46,0.18)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_8px_28px_rgba(204,84,84,0.4)]">
                        Explore Flavors
                    </button>
                    <button className="group flex items-center justify-center gap-2 rounded-full border-none bg-transparent font-sans text-[0.75rem] md:text-[0.82rem] font-semibold tracking-[0.04em] text-mid transition-colors hover:text-dark">
                        Read our story
                        <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>

            {/* RIGHT CONTENT - 3D CANVAS */}
            <div
                className="relative z-10 flex items-center justify-center min-h-[400px] lg:min-h-0 lg:h-full"
            >
                <HeroScene />

                {/* Floating Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "backOut", delay: 1.0 }}
                    className="hidden md:flex absolute right-8 top-[18%] items-center gap-2 rounded-full bg-white px-4.5 py-2.5 font-sans shadow-[0_8px_24px_rgba(26,26,46,0.08)] z-20 pointer-events-none"
                >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-mint" />
                    <span className="text-[0.72rem] font-bold text-dark">No Preservatives</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "backOut", delay: 1.15 }}
                    className="absolute left-4 md:left-12 bottom-[8%] md:bottom-[18%] flex items-center gap-2 rounded-full bg-yellow px-4.5 py-2.5 font-sans shadow-[0_8px_24px_rgba(26,26,46,0.08)] z-20 pointer-events-none"
                >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-yellow-dark" />
                    <span className="text-[0.72rem] font-bold text-dark">120 kcal / pack</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "backOut", delay: 1.3 }}
                    className="absolute right-4 md:right-16 top-[18%] md:top-auto md:bottom-[12%] flex items-center gap-2 rounded-full bg-purple text-white px-4.5 py-2.5 font-sans shadow-[0_8px_24px_rgba(26,26,46,0.08)] z-20 pointer-events-none"
                >
                    <div className="h-2 w-2 shrink-0 rounded-full bg-white" />
                    <span className="text-[0.72rem] font-bold">Real Ingredients</span>
                </motion.div>
            </div>
        </section>
    );
}
