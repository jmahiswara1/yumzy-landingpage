"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Central Donut */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                <mesh position={[0, 0.5, 0]}>
                    <torusGeometry args={[1.5, 0.6, 32, 64]} />
                    <meshStandardMaterial color="#FF6B6B" roughness={0.2} metalness={0.1} />
                </mesh>
            </Float>

            {/* Sphere 1 - Mint */}
            <Float speed={3} rotationIntensity={2} floatIntensity={3}>
                <mesh position={[-2, 1.5, -1]} scale={0.6}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#6BCB77" roughness={0.1} metalness={0.2} />
                </mesh>
            </Float>

            {/* Sphere 2 - Yellow */}
            <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
                <mesh position={[2, 2, 0.5]} scale={0.4}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshStandardMaterial color="#FFD93D" roughness={0.3} metalness={0.1} />
                </mesh>
            </Float>

            {/* Icosahedron - Purple */}
            <Float speed={1.5} rotationIntensity={3} floatIntensity={1.5}>
                <mesh position={[1.5, -1, 1]} scale={0.7}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#9B5DE5" roughness={0.2} metalness={0.3} flatShading />
                </mesh>
            </Float>

            {/* Box - Pink */}
            <Float speed={2.2} rotationIntensity={2.5} floatIntensity={2.2}>
                <mesh position={[-1.5, -1.2, 0.5]} scale={0.5}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#F15BB5" roughness={0.4} metalness={0.1} />
                </mesh>
            </Float>

            {/* Tiny particles */}
            {Array.from({ length: 15 }).map((_, i) => (
                <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={2} floatIntensity={3}>
                    <mesh
                        position={[
                            (Math.random() - 0.5) * 8,
                            (Math.random() - 0.5) * 6,
                            (Math.random() - 0.5) * 4 - 2,
                        ]}
                        scale={0.05 + Math.random() * 0.1}
                    >
                        <sphereGeometry />
                        <meshStandardMaterial color={["#FF6B6B", "#FFD93D", "#00BBF9", "#F15BB5"][Math.floor(Math.random() * 4)]} />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export function HeroScene() {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className="absolute inset-0 cursor-grab active:cursor-grabbing z-10">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />

                <React.Suspense fallback={null}>
                    <PresentationControls
                        global
                        snap={true}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <FloatingShapes />
                    </PresentationControls>

                    <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
                    <Environment preset="city" />
                </React.Suspense>
            </Canvas>
        </div>
    );
}
