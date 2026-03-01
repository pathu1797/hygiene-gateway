"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import React, { useRef } from "react";

export default function Problem() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
    const y = useTransform(scrollYProgress, [0.05, 0.25], [40, 0]);
    const xRight = useTransform(scrollYProgress, [0.05, 0.25], [40, 0]);

    return (
        <section
            id="problem"
            ref={containerRef}
            className="section"
            style={{ background: "#050505" }}
        >
            <div className="container">
                <div className="grid-2col">
                    {/* Text Content */}
                    <motion.div style={{ opacity, y }}>
                        <div className="section-label" style={{ color: "var(--red-accent)", marginBottom: "clamp(12px, 2.5vw, 20px)" }}>
                            <AlertTriangle style={{ width: 16, height: 16, flexShrink: 0 }} />
                            The Critical Flaw
                        </div>

                        <h2 style={{
                            fontSize: "clamp(1.75rem, 5vw, 3.2rem)",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: "-0.025em",
                            color: "#fff",
                            marginBottom: "clamp(16px, 3vw, 24px)",
                        }}>
                            Optional hygiene creates{" "}
                            <span className="text-glow" style={{ color: "var(--red-accent)" }}>
                                invisible risks.
                            </span>
                        </h2>

                        <p style={{
                            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                            color: "#d1d5db",
                            lineHeight: 1.75,
                            marginBottom: "clamp(20px, 4vw, 32px)",
                        }}>
                            In hospitals and laboratories, handwashing is recommended but{" "}
                            <strong style={{ color: "#fff" }}>not enforced</strong>. This compliance
                            gap allows infections to spread silently. During pandemics, this gap
                            becomes catastrophic.
                        </p>

                        <blockquote style={{
                            padding: "clamp(14px, 3vw, 20px)",
                            borderLeft: "3px solid var(--red-accent)",
                            background: "rgba(239,68,68,0.08)",
                            borderRadius: "0 8px 8px 0",
                        }}>
                            <p style={{
                                fontSize: "clamp(0.85rem, 1.8vw, 1rem)",
                                color: "#fecaca",
                                fontStyle: "italic",
                                fontWeight: 500,
                            }}>
                                "Safety should never depend on human memory."
                            </p>
                        </blockquote>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        style={{ opacity, x: xRight }}
                        className="glass-card media-visual"
                    >
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(120,20,20,0.18)",
                            zIndex: 1,
                        }} />
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.45)",
                            zIndex: 2,
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
                                filter: "grayscale(1)",
                            }}
                        >
                            <source src="/animate2.mp4" type="video/mp4" />
                        </video>
                        <div style={{
                            position: "absolute",
                            bottom: "clamp(16px, 3vw, 24px)",
                            left: "clamp(16px, 3vw, 24px)",
                            zIndex: 10,
                        }}>
                            <span className="text-caption" style={{ color: "var(--red-accent)" }}>DANGER</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Ambient glow */}
            <div aria-hidden="true" style={{
                position: "absolute",
                top: "50%",
                right: "-10%",
                transform: "translateY(-50%)",
                width: "min(500px, 60vw)",
                height: "min(500px, 60vw)",
                background: "rgba(239,68,68,0.04)",
                filter: "blur(90px)",
                borderRadius: "50%",
                pointerEvents: "none",
            }} />
        </section>
    );
}
