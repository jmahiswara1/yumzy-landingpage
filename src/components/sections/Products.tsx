"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MoveRight, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const PRODUCTS = [
    {
        id: 1,
        name: "Lemon Zing",
        desc: "Bright, citrusy, and refreshingly light. The one that started everything.",
        price: "Rp 35.000",
        badge: "Bestseller",
        color: "bg-mint",
        badgeColor: "bg-mint-dark",
        image: "/yumzy_lemon.png",
        shape1: "bg-mint-dark/50",
        shape2: "bg-mint-dark/80",
        shadow: "hover:shadow-mint/20 hover:border-mint-dark/50",
    },
    {
        id: 2,
        name: "Peach Cloud",
        desc: "Soft, sweet, and delicate. Like biting into a summer afternoon.",
        price: "Rp 38.000",
        badge: "New",
        color: "bg-peach",
        badgeColor: "bg-peach-dark",
        image: "/yumzy_peach.png",
        shape1: "bg-peach-dark/30",
        shape2: "bg-peach-dark/90",
        shadow: "hover:shadow-peach/40 hover:border-peach-dark/50",
    },
    {
        id: 3,
        name: "Lavender Cream",
        desc: "Floral, calm, and unexpectedly addictive. For the adventurous palate.",
        price: "Rp 42.000",
        badge: "Limited",
        color: "bg-purple-dark/20",
        badgeColor: "bg-purple",
        image: "/yumzy_lavender.png",
        shape1: "bg-purple/30",
        shape2: "bg-purple/80",
        shadow: "hover:shadow-purple/20 hover:border-purple/50",
    },
    {
        id: 4,
        name: "Sage & Honey",
        desc: "Earthy sage meets golden honey. A surprisingly soothing combination.",
        price: "Rp 38.000",
        badge: "Seasonal",
        color: "bg-yellow",
        badgeColor: "bg-[#D4A84B]",
        image: "/yumzy_sage.png",
        shape1: "bg-[#D4A84B]/20",
        shape2: "bg-[#D4A84B]/95",
        shadow: "hover:shadow-yellow/40 hover:border-yellow-dark/50",
    },
];

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`group relative rounded-[28px] bg-white p-7 cursor-none transition-all duration-300 shadow-[0_2px_16px_rgba(26,26,46,0.05)] border border-dark/5 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(26,26,46,0.1)] ${product.shadow}`}
        >
            <div
                className={`relative mb-5.5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] transition-transform duration-350 group-hover:scale-[1.02] ${product.color}`}
            >
                <div
                    className={`absolute h-[140px] w-[140px] rounded-full transition-transform duration-400 group-hover:rotate-12 group-hover:scale-110 ${product.shape1}`}
                />
                <div
                    className={`absolute left-[15%] top-[20%] h-[90px] w-[90px] rounded-[40%_60%_55%_45%] opacity-80 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-95 ${product.shape2}`}
                />
                <div className="relative z-10 w-4/5 h-4/5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain drop-shadow-2xl"
                    />
                </div>
                <span
                    className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white ${product.badgeColor}`}
                >
                    {product.badge}
                </span>
            </div>
            <h3 className="mb-1.5 font-serif text-[1.35rem] font-semibold tracking-[-0.01em] text-dark">
                {product.name}
            </h3>
            <p className="mb-4.5 text-[0.82rem] font-normal leading-[1.65] text-mid">
                {product.desc}
            </p>
            <div className="flex items-center justify-between">
                <span className="font-serif text-[1.45rem] font-bold text-dark">
                    {product.price}
                </span>
                <button
                    className={`flex h-9.5 w-9.5 items-center justify-center rounded-full border-none cursor-none text-[1.1rem] font-light text-dark transition-all duration-250 hover:scale-110 ${product.color}`}
                >
                    <Plus className="h-4 w-4" />
                </button>
            </div>
        </motion.div>
    );
}

export function Products() {
    return (
        <section id="flavors" className="relative px-5 py-24 md:px-8 md:py-32 lg:px-16 lg:py-32">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-dark/10 to-transparent" />

            <div className="mb-16 flex items-end justify-between">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="mb-3 flex items-center gap-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#C4B89A]"
                    >
                        <span className="h-[1.5px] w-5 bg-[#C4B89A]" />
                        Our Flavors
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                        className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-dark"
                    >
                        Find your <em className="text-pink italic">favourite</em>
                    </motion.h2>
                </div>
                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.2 }}
                    className="group flex items-center gap-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-mid no-underline transition-colors cursor-none hover:text-dark"
                >
                    View all flavors
                    <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
            </div>

            <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
                {PRODUCTS.map((prod, idx) => (
                    <ProductCard key={prod.id} product={prod} index={idx} />
                ))}
            </div>
        </section>
    );
}
