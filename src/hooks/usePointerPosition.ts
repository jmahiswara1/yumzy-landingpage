"use client";

import { useEffect, useState } from "react";

export function usePointerPosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handlePointerMove(e: PointerEvent) {
            setPosition({ x: e.clientX, y: e.clientY });
        }

        // Initialize position if possible
        window.addEventListener("pointermove", handlePointerMove);
        return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);

    return position;
}
