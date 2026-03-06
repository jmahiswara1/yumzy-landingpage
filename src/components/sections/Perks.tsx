"use client";

import { motion } from "framer-motion";
import { Leaf, RefreshCcw, Zap } from "lucide-react";

const PERKS = [
    {
        icon: <Leaf className="h-6 w-6 text-mint-dark" />,
        title: "Real Ingredients Only",
        desc: "Everything in our snacks comes from nature. No artificial flavors, colors, or preservatives — ever.",
        color: "bg-mint",
    },
    {
        icon: <RefreshCcw className="h-6 w-6 text-peach-dark" />,
        title: "Eco-Friendly Packaging",
        desc: "Our bags are 100% compostable. Because a snack that tastes good shouldn't cost the planet anything extra.",
        color: "bg-peach",
    },
    {
        icon: <Zap className="h-6 w-6 text-purple-dark" />,
        title: "Same-Day Delivery",
        desc: "Order before 3pm and get Yumzy at your door by evening. Because cravings have their own schedule.",
        color: "bg-purple",
    },
];

export function Perks() {
    return (
        <section className="bg-bg px-5 py-24 md:px-8 md:py-32 lg:px-16 lg:py-32">
            <motion.p
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="mb-3 flex items-center gap-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-light"
            >
                <span className="h-[1.5px] w-5 bg-light" />
                Why Yumzy
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-dark"
            >
                A snack you can <em className="italic text-peach-dark">feel good about</em>
            </motion.h2>

            <div className="mt-16 overflow-hidden rounded-[28px] bg-dark/5 grid grid-cols-1 gap-px sm:grid-cols-3">
                {PERKS.map((perk, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.75, delay: idx * 0.1, ease: "easeOut" }}
                        className="group bg-bg p-11 pb-14 transition-colors duration-300 hover:bg-mint"
                    >
                        <div className={`mb-7 flex h-[52px] w-[52px] items-center justify-center rounded-2xl ${perk.color}`}>
                            {perk.icon}
                        </div>
                        <h3 className="mb-3 font-serif text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.01em] text-dark">
                            {perk.title}
                        </h3>
                        <p className="text-[0.88rem] font-normal leading-[1.75] text-mid">
                            {perk.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
