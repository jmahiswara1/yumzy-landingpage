"use client";

import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const REVIEWS = [
    {
        initial: "A",
        name: "Anindya Ratri",
        loc: "Jakarta, ID",
        text: '"Lemon Zing is now a permanent fixture at my desk. The flavor is clean and bright without being overwhelming. Exactly what I was looking for."',
        color: "bg-mint",
    },
    {
        initial: "G",
        name: "Gadang Mahiswara",
        loc: "Jakarta, ID",
        text: '"Lavender Cream sounded unusual but I took a chance and I\'m so glad I did. It\'s subtle, creamy, and genuinely unlike anything I\'ve tasted."',
        color: "bg-purple",
    },
    {
        initial: "M",
        name: "Masayu Sekar",
        loc: "Kediri, ID",
        text: '"The packaging is beautiful and the snacks taste even better. Peach Cloud is everything. I\'ve already ordered three times this month."',
        color: "bg-peach",
    },
];

export function Testimonials() {
    return (
        <section id="reviews" className="relative overflow-hidden bg-purple/10 px-5 py-24 md:px-8 md:py-32 lg:px-16 lg:py-32">
            <div className="pointer-events-none absolute -bottom-[200px] -right-[150px] h-[500px] w-[500px] rounded-full bg-white/40" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.p variants={itemVariants} className="mb-3 flex items-center gap-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-purple-dark">
                    <span className="h-[1.5px] w-5 bg-purple-dark" />
                    Reviews
                </motion.p>

                <motion.h2 variants={itemVariants} className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-dark">
                    What people are <em className="italic text-coral">saying</em>
                </motion.h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3"
            >
                {REVIEWS.map((review, idx) => (
                    <motion.div
                        variants={itemVariants}
                        key={idx}
                        className="group rounded-3xl bg-white p-9 shadow-[0_4px_24px_rgba(26,26,46,0.06)]"
                    >
                        <div className="mb-5 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-peach-dark text-peach-dark" />
                            ))}
                        </div>
                        <p className="mb-7 font-serif text-[1.05rem] font-normal italic leading-[1.75] text-dark">
                            {review.text}
                        </p>
                        <div className="flex items-center gap-3.5">
                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-[1.1rem] font-bold text-dark ${review.color}`}>
                                {review.initial}
                            </div>
                            <div>
                                <p className="font-sans text-[0.88rem] font-bold text-dark">{review.name}</p>
                                <p className="text-[0.75rem] text-mid">{review.loc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}