"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Future() {
    return (
        <section
            id="future"
            className="section"
            style={{
                position: "relative",
                minHeight: "100svh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "#000",
                paddingTop: "clamp(64px, 12vw, 120px)",
                paddingBottom: "clamp(64px, 12vw, 120px)",
            }}
        >
            {/* Background image with slow zoom */}
            <motion.div
                aria-hidden="true"
                style={{ position: "absolute", inset: 0, zIndex: 0 }}
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 12, ease: "easeOut" }}
            >
                <div style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url('/future.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.5,
                }} />
                {/* Gradient overlays */}
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, #000 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                    zIndex: 1,
                }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.35)",
                    zIndex: 2,
                }} />
            </motion.div>

            {/* Content */}
            <div
                className="container"
                style={{ position: "relative", zIndex: 10, textAlign: "center" }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    style={{ maxWidth: "52ch", margin: "0 auto" }}
                >
                    {/* Badge */}
                    <span style={{
                        display: "inline-block",
                        padding: "6px 16px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        fontSize: "clamp(0.6rem, 1.3vw, 0.72rem)",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.25em",
                        color: "#e5e7eb",
                        marginBottom: "clamp(20px, 4vw, 32px)",
                    }}>
                        Vision 2030
                    </span>

                    {/* Headline */}
                    <h2 style={{
                        fontSize: "clamp(1.8rem, 6vw, 4rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "#fff",
                        marginBottom: "clamp(16px, 3.5vw, 28px)",
                    }}>
                        Imagine smart cities where{" "}
                        <span className="gradient-text text-glow">
                            hygiene is infrastructure.
                        </span>
                    </h2>

                    {/* Body */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "clamp(10px, 2vw, 16px)",
                        marginBottom: "clamp(24px, 5vw, 40px)",
                    }}>
                        <p style={{
                            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                            color: "#9ca3af",
                            lineHeight: 1.7,
                        }}>
                            Automated gateways at hospital entrances. Public facilities with enforced sanitation.
                        </p>
                        <p style={{
                            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                            color: "#fff",
                            fontWeight: 600,
                        }}>
                            Zero dependency on manual monitoring.
                        </p>
                        <p style={{
                            fontSize: "clamp(0.82rem, 1.7vw, 1rem)",
                            color: "#6b7280",
                            fontStyle: "italic",
                            marginTop: "clamp(8px, 2vw, 16px)",
                        }}>
                            "This is not just a machine. It is a shift in public health architecture."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
