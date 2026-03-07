"use client";

import { MoveRight, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
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

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
    return (
        <motion.div
            variants={itemVariants}
            className={`group relative rounded-[28px] bg-white p-7 cursor-pointer shadow-[0_2px_16px_rgba(26,26,46,0.05)] border border-dark/5 hover:shadow-[0_16px_48px_rgba(26,26,46,0.1)] ${product.shadow}`}
        >
            <div
                className={`relative mb-5.5 flex aspect-square w-full items-center justify-center overflow-hidden rounded-[20px] ${product.color}`}
            >
                <div
                    className={`absolute h-[140px] w-[140px] rounded-full ${product.shape1}`}
                />
                <div
                    className={`absolute left-[15%] top-[20%] h-[90px] w-[90px] rounded-[40%_60%_55%_45%] opacity-80 ${product.shape2}`}
                />
                <div className="relative z-10 w-full h-full">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover drop-shadow-2xl"
                    />
                </div>
                <span
                    className={`absolute left-3.5 top-3.5 z-20 rounded-full px-3 py-1 font-sans text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white ${product.badgeColor}`}
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
                    className={`flex h-9.5 w-9.5 items-center justify-center rounded-full border-none cursor-pointer text-[1.1rem] font-light text-dark hover:opacity-80 ${product.color}`}
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

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-16 flex items-end justify-between"
            >
                <motion.div variants={itemVariants}>
                    <p className="mb-3 flex items-center gap-2.5 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#C4B89A]">
                        <span className="h-[1.5px] w-5 bg-[#C4B89A]" />
                        Our Flavors
                    </p>
                    <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-dark">
                        Find your <em className="text-pink italic">favourite</em>
                    </h2>
                </motion.div>
                <motion.a
                    variants={itemVariants}
                    href="#"
                    className="flex items-center gap-2 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.06em] text-mid no-underline cursor-pointer hover:text-dark"
                >
                    View all flavors
                    <MoveRight className="h-4 w-4" />
                </motion.a>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4"
            >
                {PRODUCTS.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </motion.div>
        </section>
    );
}