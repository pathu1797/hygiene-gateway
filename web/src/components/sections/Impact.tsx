"use client";

import { motion } from "framer-motion";
import { Activity, Users, Globe, Shield } from "lucide-react";
import React from "react";

const stats = [
    { label: "Compliance", value: "100%", icon: Shield },
    { label: "Infection Reduction", value: "99.9%", icon: Activity },
    { label: "Scalability", value: "Global", icon: Globe },
    { label: "Public Safety", value: "Maximized", icon: Users },
];

export default function Impact() {
    return (
        <section
            id="impact"
            className="section"
            style={{ background: "#fff", color: "#111", position: "relative", overflow: "hidden" }}
        >
            <div className="container">
                <div className="grid-2col">

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: "clamp(1.75rem, 5vw, 3.2rem)",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: "-0.025em",
                            color: "#111",
                            marginBottom: "clamp(14px, 3vw, 22px)",
                        }}>
                            A New Standard for{" "}
                            <span style={{ color: "var(--neon-blue)" }}>Hygiene Infrastructure</span>
                        </h2>
                        <p style={{
                            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                            color: "#374151",
                            lineHeight: 1.75,
                            marginBottom: "clamp(12px, 2.5vw, 18px)",
                        }}>
                            Reduces hospital-acquired infections. Improves compliance. Minimizes waste.
                            Protects healthcare professionals and patients alike.
                        </p>
                        <p style={{
                            fontSize: "clamp(0.88rem, 1.8vw, 1rem)",
                            color: "#111",
                            fontWeight: 700,
                        }}>
                            Designed not only for today — but for future pandemics.
                        </p>
                    </motion.div>

                    {/* Stats grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "clamp(12px, 2vw, 18px)",
                    }}>
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
                                className="stat-card"
                            >
                                <stat.icon style={{
                                    width: "clamp(22px, 4vw, 32px)",
                                    height: "clamp(22px, 4vw, 32px)",
                                    color: "var(--neon-blue)",
                                    marginBottom: "clamp(8px, 1.5vw, 12px)",
                                }} />
                                <p style={{
                                    fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                                    fontWeight: 900,
                                    color: "#111",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                    marginBottom: 4,
                                }}>
                                    {stat.value}
                                </p>
                                <p style={{
                                    fontSize: "clamp(0.6rem, 1.3vw, 0.72rem)",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    color: "#374151",
                                }}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative shape */}
            <div aria-hidden="true" style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "30%",
                height: "100%",
                background: "linear-gradient(to left, #f3f4f6, transparent)",
                transform: "skewX(-8deg) translateX(20%)",
                pointerEvents: "none",
            }} />
        </section>
    );
}
