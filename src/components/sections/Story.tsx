"use client";

import { motion } from "framer-motion";

export function Story() {
    return (
        <section id="story" className="relative grid grid-cols-1 items-center gap-16 md:gap-24 overflow-hidden bg-peach px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2 lg:px-16 lg:py-32">
            <div className="pointer-events-none absolute -right-[100px] -top-[150px] h-[400px] w-[400px] rounded-full bg-white/30" />

            {/* VISUAL LEFT */}
            <div className="relative h-[460px] w-full">
                <motion.div
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute left-0 top-0 flex h-[360px] w-[280px] flex-col justify-end overflow-hidden rounded-[28px] bg-purple p-7 shadow-[0_16px_48px_rgba(26,26,46,0.12)]"
                >
                    <p className="font-serif text-[1.1rem] font-semibold italic text-dark/70">
                        Happy snackers
                    </p>
                    <p className="font-serif text-[2.8rem] font-bold leading-none tracking-[-0.03em] text-dark">
                        120k+
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
                    className="absolute bottom-0 right-0 flex h-[220px] w-[180px] flex-col justify-end overflow-hidden rounded-[28px] bg-mint p-5.5 shadow-[0_16px_48px_rgba(26,26,46,0.12)] sm:right-12 lg:right-0 z-10"
                >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-mid">
                        Founded
                    </p>
                    <p className="font-serif text-[2rem] font-bold leading-none tracking-[-0.03em] text-dark">
                        2021
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
                    className="absolute bottom-[140px] left-[200px] h-[100px] w-[100px] rounded-full bg-yellow shadow-[0_8px_24px_rgba(26,26,46,0.08)] z-20"
                />
            </div>

            {/* CONTENT RIGHT */}
            <div>
                <motion.p
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-3 flex items-center gap-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-peach-dark"
                >
                    <span className="h-[1.5px] w-5 bg-peach-dark" />
                    Our Story
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="mb-6 font-serif text-[clamp(2.6rem,4vw,4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-dark"
                >
                    Made with <em className="italic text-purple-dark">care,</em>
                    <br />
                    eaten with joy.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                    className="mb-9 max-w-[420px] text-[0.96rem] font-normal leading-[1.85] text-[#7a4030]"
                >
                    Yumzy started in a small kitchen in 2021 with one simple idea: snacks
                    should make you feel good — inside and out. We use only real
                    ingredients, work with local farmers, and pack everything by hand with
                    compostable materials. No shortcuts. No compromise. Just honest,
                    delicious snacks that earn their place in your day.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, x: 36 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="w-fit rounded-full bg-dark px-8.5 py-4 font-sans text-[0.82rem] font-bold uppercase tracking-[0.08em] text-bg shadow-[0_6px_24px_rgba(26,26,46,0.18)] transition-all duration-250 hover:-translate-y-0.5 hover:bg-peach-dark hover:shadow-[0_8px_28px_rgba(244,160,122,0.4)]"
                >
                    Read our full story
                </motion.button>
            </div>
        </section>
    );
}
