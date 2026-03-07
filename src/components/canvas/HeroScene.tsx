"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// Reusable gummy material with sub-surface scattering like properties
const gummyMaterialProps = {
    transmission: 0.6,
    opacity: 0.9,
    metalness: 0,
    roughness: 0.2,
    ior: 1.5,
    thickness: 3,
    specularIntensity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    envMapIntensity: 1.5,
};

function GummyBite({ color, ...props }: { color: string } & React.ComponentProps<typeof RoundedBox>) {
    return (
        <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.4} smoothness={4} {...props}>
            <meshPhysicalMaterial color={color} {...gummyMaterialProps} />
        </RoundedBox>
    );
}

function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Lemon Zing */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
                <GummyBite color="#EAF2A1" position={[-1.8, 1.2, -0.5]} scale={1.2} />
            </Float>

            {/* Peach Cloud */}
            <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
                <GummyBite color="#FFB5A7" position={[1.5, 1.5, 0.5]} scale={1} />
            </Float>

            {/* Lavender Cream */}
            <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
                <GummyBite color="#D8B4E2" position={[-1.2, -1.2, 1]} scale={1.3} />
            </Float>

            {/* Sage & Honey */}
            <Float speed={2.2} rotationIntensity={1.8} floatIntensity={2}>
                <GummyBite color="#D4A84B" position={[1.2, -1, -0.5]} scale={1.1} />
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
                        <meshStandardMaterial color={["#EAF2A1", "#FFB5A7", "#D8B4E2", "#D4A84B"][Math.floor(Math.random() * 4)]} />
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
