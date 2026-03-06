"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    }, []);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorXSpring = useSpring(cursorX, { stiffness: 500, damping: 40 });
    const cursorYSpring = useSpring(cursorY, { stiffness: 500, damping: 40 });

    const cursorOuterX = useMotionValue(-100);
    const cursorOuterY = useMotionValue(-100);
    const cursorOuterXSpring = useSpring(cursorOuterX, { stiffness: 100, damping: 20 });
    const cursorOuterYSpring = useSpring(cursorOuterY, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            cursorOuterX.set(e.clientX);
            cursorOuterY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, cursorOuterX, cursorOuterY]);

    if (isTouchDevice) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-coral-dark rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
            <motion.div
                className="fixed top-0 left-0 border-[1.5px] border-coral-dark rounded-full pointer-events-none z-[9998] transition-colors duration-300"
                style={{
                    x: cursorOuterXSpring,
                    y: cursorOuterYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 54 : 38,
                    height: isHovering ? 54 : 38,
                    borderColor: isHovering ? "var(--color-mint-dark)" : "var(--color-coral-dark)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
}
