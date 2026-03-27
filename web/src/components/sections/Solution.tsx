"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle, ShieldCheck } from "lucide-react";
import React, { useRef } from "react";

export default function Solution() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
    const y = useTransform(scrollYProgress, [0.05, 0.25], [40, 0]);
    const xLeft = useTransform(scrollYProgress, [0.05, 0.25], [-40, 0]);

    const features = [
        "No monitoring required.",
        "No reminders needed.",
        "No bypassing possible.",
    ];

    return (
        <section
            id="solution"
            ref={containerRef}
            className="section"
            style={{ background: "#f1f5f9" }}
        >
            <div className="container">
                {/* On mobile: visual first, text second. On desktop: visual left, text right */}
                <div className="grid-2col">

                    {/* Visual — appears first on mobile, left on desktop */}
                    <motion.div
                        style={{ opacity, x: xLeft }}
                        className="glass-card media-visual"
                    >
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,128,255,0.04)",
                            zIndex: 1,
                        }} />
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        >
                            <source src="/access.mp4" type="video/mp4" />
                        </video>

                        {/* Gradient overlay */}
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(0,128,255,0.2), transparent)",
                            opacity: 0.5,
                            zIndex: 2,
                        }} />

                        {/* Scanning line */}
                        <motion.div
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                height: 2,
                                background: "var(--neon-blue)",
                                boxShadow: "0 0 16px rgba(0,128,255,0.7)",
                                zIndex: 5,
                            }}
                        />

                        <div style={{
                            position: "absolute",
                            bottom: "clamp(16px, 3vw, 24px)",
                            left: "clamp(16px, 3vw, 24px)",
                            zIndex: 6,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }}>
                            <ShieldCheck style={{ width: 16, height: 16, color: "var(--neon-blue)", flexShrink: 0 }} />
                            <span className="text-caption" style={{ color: "var(--neon-blue)" }}>ACCESS GRANTED</span>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div style={{ opacity, y }}>
                        <div className="section-label" style={{ color: "var(--neon-blue)", marginBottom: "clamp(12px, 2.5vw, 20px)" }}>
                            <CheckCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
                            The Solution
                        </div>

                        <h2 style={{
                            fontSize: "clamp(1.75rem, 5vw, 3.2rem)",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: "-0.025em",
                            color: "#0f172a",
                            marginBottom: "clamp(16px, 3vw, 24px)",
                        }}>
                            Transform hygiene from optional to{" "}
                            <span className="gradient-text text-glow">mandatory.</span>
                        </h2>

                        <p style={{
                            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                            color: "#475569",
                            lineHeight: 1.75,
                            marginBottom: "clamp(20px, 4vw, 32px)",
                        }}>
                            Integrate touchless sanitation with automated gateway access control.
                            The gateway remains <strong style={{ color: "#0f172a" }}>physically locked</strong>{" "}
                            until sanitation is verified by sensors.
                        </p>

                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                            {features.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 + i * 0.1 }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
                                        color: "#334155",
                                        fontWeight: 500,
                                    }}
                                >
                                    <span style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        background: "var(--neon-blue)",
                                        boxShadow: "0 0 8px rgba(0,128,255,0.5)",
                                        flexShrink: 0,
                                    }} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Ambient glow */}
            <div aria-hidden="true" style={{
                position: "absolute",
                top: "50%",
                left: "-10%",
                transform: "translateY(-50%)",
                width: "min(500px, 60vw)",
                height: "min(500px, 60vw)",
                background: "rgba(0,128,255,0.05)",
                filter: "blur(90px)",
                borderRadius: "50%",
                pointerEvents: "none",
            }} />
        </section>
    );
}
