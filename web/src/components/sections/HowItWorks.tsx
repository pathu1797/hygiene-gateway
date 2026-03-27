"use client";

import { motion, useScroll } from "framer-motion";
import { Hand, Droplets, ShieldCheck, LockOpen } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const steps = [
    {
        icon: Hand,
        title: "Detect",
        description: "An IR sensor detects hand presence within the sanitation zone.",
        color: "var(--neon-blue)",
        bg: "rgba(0,128,255,0.1)",
    },
    {
        icon: Droplets,
        title: "Dispense",
        description: "Soap or sanitizer is dispensed automatically. The system confirms successful dispensing.",
        color: "#0ea5e9",
        bg: "rgba(14,165,233,0.1)",
    },
    {
        icon: ShieldCheck,
        title: "Verify",
        description: "If no hygiene action is detected, access remains denied.",
        color: "#16a34a",
        bg: "rgba(22,163,74,0.1)",
    },
    {
        icon: LockOpen,
        title: "Allow",
        description: "Only after verification does the gateway unlock for 2–3 seconds.",
        color: "#0f172a",
        bg: "rgba(15,23,42,0.06)",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const step = Math.min(steps.length - 1, Math.floor(latest * steps.length));
            setActiveStep(step);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const ActiveIcon = steps[activeStep].icon;

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            style={{ position: "relative", height: "300vh", background: "#f1f5f9" }}
        >
            {/* Sticky panel */}
            <div style={{
                position: "sticky",
                top: 0,
                width: "100%",
                minHeight: "100svh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                padding: "clamp(80px, 10vw, 120px) 0 clamp(40px, 6vw, 64px)",
            }}>
                <div className="container">
                    <div className="grid-2col">

                        {/* Left: Text + Steps */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 4vw, 40px)" }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 style={{
                                    fontSize: "clamp(1.6rem, 4.5vw, 3rem)",
                                    fontWeight: 800,
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.025em",
                                    color: "#0f172a",
                                    marginBottom: "clamp(10px, 2vw, 16px)",
                                }}>
                                    Detect. Verify.{" "}
                                    <span style={{ color: "var(--neon-blue)" }}>Allow.</span>
                                </h2>
                                <p style={{
                                    fontSize: "clamp(0.88rem, 1.8vw, 1.05rem)",
                                    color: "#64748b",
                                    lineHeight: 1.65,
                                }}>
                                    A seamless sequential process ensures compliance without delay.
                                </p>
                            </motion.div>

                            {/* Step list */}
                            <div style={{ position: "relative", paddingLeft: "clamp(28px, 5vw, 40px)" }}>
                                {/* Track line */}
                                <div className="step-line" />
                                {/* Progress fill */}
                                <div
                                    className="step-line"
                                    style={{
                                        background: "var(--neon-blue)",
                                        boxShadow: "0 0 8px rgba(0,128,255,0.5)",
                                        height: `${(activeStep / (steps.length - 1)) * 100}%`,
                                        transition: "height 0.5s ease",
                                        bottom: "auto",
                                    }}
                                />

                                <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 4vw, 32px)" }}>
                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                opacity: index === activeStep ? 1 : 0.32,
                                                transition: "opacity 0.4s ease",
                                            }}
                                        >
                                            {/* Step dot */}
                                            <div style={{
                                                position: "absolute",
                                                left: "clamp(4px, 1vw, 7px)",
                                                width: "clamp(16px, 2.5vw, 20px)",
                                                height: "clamp(16px, 2.5vw, 20px)",
                                                borderRadius: "50%",
                                                border: `2px solid ${index <= activeStep ? "var(--neon-blue)" : "#cbd5e1"}`,
                                                boxShadow: index <= activeStep ? "0 0 8px rgba(0,128,255,0.4)" : "none",
                                                background: "#f1f5f9",
                                                zIndex: 1,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "border-color 0.4s ease, box-shadow 0.4s ease",
                                            }}>
                                                {index <= activeStep && (
                                                    <div style={{
                                                        width: 6,
                                                        height: 6,
                                                        borderRadius: "50%",
                                                        background: "var(--neon-blue)",
                                                    }} />
                                                )}
                                            </div>

                                            <h3 style={{
                                                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                                                fontWeight: 800,
                                                color: step.color,
                                                letterSpacing: "-0.02em",
                                                marginBottom: 6,
                                            }}>
                                                {step.title}
                                            </h3>
                                            <p style={{
                                                fontSize: "clamp(0.82rem, 1.6vw, 0.95rem)",
                                                color: "#475569",
                                                lineHeight: 1.65,
                                                fontWeight: 500,
                                            }}>
                                                {step.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Icon Showcase */}
                        <div style={{
                            position: "relative",
                            borderRadius: 20,
                            overflow: "hidden",
                            aspectRatio: "1 / 1",
                            maxHeight: "min(420px, 55vw)",
                            margin: "0 auto",
                            width: "100%",
                            background: "#ffffff",
                            border: "1px solid #e2e8f0",
                            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {/* Grid bg */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                                opacity: 0.5,
                            }} />

                            {/* Active icon */}
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 15 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                style={{
                                    position: "relative",
                                    zIndex: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <div style={{
                                    padding: "clamp(24px, 5vw, 48px)",
                                    borderRadius: "50%",
                                    background: steps[activeStep].bg,
                                    boxShadow: `0 0 40px ${steps[activeStep].color}22, 0 0 80px ${steps[activeStep].color}11`,
                                    backdropFilter: "blur(12px)",
                                }}>
                                    <ActiveIcon style={{
                                        width: "clamp(48px, 10vw, 96px)",
                                        height: "clamp(48px, 10vw, 96px)",
                                        color: steps[activeStep].color,
                                    }} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
