"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import React, { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="hero-section bg-black"
            style={{ zIndex: 1 }}
        >
            {/* Background Parallax Layer */}
            <motion.div
                style={{ y: bgY }}
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{ duration: 12, ease: "easeOut" }}
                aria-hidden="true"
                className="hero-bg-layer"
            >
                {/* Hero image */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/hero.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.55,
                }} />
                {/* Radial gradient overlay */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse at center, rgba(0,20,30,0.4) 0%, rgba(5,5,5,0.92) 80%)",
                    zIndex: 1,
                }} />
                {/* Bottom fade */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, #050505 0%, transparent 60%)",
                    zIndex: 2,
                }} />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity: contentOpacity }}
                className="hero-content container"
            >
                {/* Pill badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "6px 14px",
                        marginBottom: "clamp(16px, 3vw, 24px)",
                        border: "1px solid rgba(0,243,255,0.35)",
                        borderRadius: 999,
                        background: "rgba(0,243,255,0.1)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    <span style={{
                        fontSize: "clamp(0.6rem, 1.5vw, 0.72rem)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                        color: "var(--neon-blue)",
                    }}>
                        Innovation in Public Health
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    style={{
                        fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
                        fontWeight: 900,
                        lineHeight: 1.08,
                        letterSpacing: "-0.03em",
                        color: "#fff",
                        marginBottom: "clamp(14px, 3vw, 24px)",
                        maxWidth: "14ch",
                        margin: "0 auto clamp(14px, 3vw, 24px)",
                    }}
                >
                    Hygiene,{" "}
                    <span className="gradient-text text-glow">
                        Enforced by Design
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.55 }}
                    style={{
                        fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
                        color: "#d1d5db",
                        maxWidth: "44ch",
                        margin: "0 auto clamp(32px, 6vw, 56px)",
                        lineHeight: 1.65,
                        padding: "0 8px",
                    }}
                >
                    An intelligent gateway that ensures mandatory hand sanitation before entry.{" "}
                    <span style={{ color: "var(--neon-blue)", fontStyle: "italic", fontWeight: 600 }}>
                        No compliance — no access.
                    </span>
                </motion.p>

                {/* Scroll indicator */}
                <motion.a
                    href="#problem"
                    aria-label="Scroll to explore"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                        textDecoration: "none",
                        color: "#9ca3af",
                        minHeight: 44,
                        justifyContent: "center",
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}
                    >
                        <span style={{
                            fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            fontWeight: 700,
                            color: "var(--neon-blue)",
                        }}>
                            Explore
                        </span>
                        <ArrowDown style={{ width: 18, height: 18, color: "var(--neon-blue)" }} />
                    </motion.div>
                </motion.a>
            </motion.div>

            {/* Ambient glow */}
            <div aria-hidden="true" style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "min(700px, 90vw)",
                height: "min(400px, 60vw)",
                background: "rgba(0,243,255,0.12)",
                filter: "blur(110px)",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0,
            }} />

            <style>{`
                .hero-bg-layer {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }
                .hero-content {
                    position: relative;
                    z-index: 10;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    width: 100%;
                }
            `}</style>
        </section>
    );
}
