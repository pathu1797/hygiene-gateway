"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Zap, Activity } from "lucide-react";
import React from "react";

const techStack = [
    {
        icon: Cpu,
        title: "Arduino UNO",
        desc: "The central processing unit handling sensor logic and motor control with millisecond precision.",
    },
    {
        icon: Eye,
        title: "IR Sensors",
        desc: "Active infrared detection for touchless hand sensing and obstacle avoidance.",
    },
    {
        icon: Zap,
        title: "Servo Actuation",
        desc: "High-torque MG995 servo motors provide reliable physical gateway operation.",
    },
    {
        icon: Activity,
        title: "Relay Logic",
        desc: "Solid-state relay modules control high-voltage pump systems safely.",
    },
];

export default function Technology() {
    return (
        <section
            id="technology"
            className="section"
            style={{ background: "#f1f5f9", position: "relative", overflow: "hidden" }}
        >
            <div className="container">

                <div style={{
                    textAlign: "center",
                    maxWidth: "52ch",
                    margin: "0 auto",
                    marginBottom: "clamp(32px, 6vw, 64px)",
                }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                            fontWeight: 800,
                            lineHeight: 1.15,
                            letterSpacing: "-0.025em",
                            color: "#0f172a",
                            marginBottom: "clamp(10px, 2vw, 16px)",
                        }}
                    >
                        Powered by{" "}
                        <span className="text-glow" style={{ color: "var(--neon-blue)" }}>
                            Intelligent Automation
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                            color: "#64748b",
                            lineHeight: 1.65,
                        }}
                    >
                        Built using industry-standard robotics components for reliability and scale.
                    </motion.p>
                </div>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
                    gap: "clamp(14px, 2.5vw, 24px)",
                }}>
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="glass-card"
                            style={{
                                padding: "clamp(20px, 4vw, 32px)",
                                borderRadius: 16,
                                border: "1px solid #e2e8f0",
                                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(0,128,255,0.3)";
                                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,128,255,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#e2e8f0";
                                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                            }}
                        >
                            <div style={{
                                width: 48,
                                height: 48,
                                background: "rgba(0,128,255,0.1)",
                                borderRadius: 12,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "clamp(14px, 3vw, 24px)",
                            }}>
                                <tech.icon style={{ width: 24, height: 24, color: "var(--neon-blue)" }} />
                            </div>
                            <h3 style={{
                                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                                fontWeight: 800,
                                color: "#0f172a",
                                marginBottom: "clamp(8px, 1.5vw, 12px)",
                                letterSpacing: "-0.01em",
                            }}>
                                {tech.title}
                            </h3>
                            <p style={{
                                fontSize: "clamp(0.8rem, 1.6vw, 0.9rem)",
                                color: "#64748b",
                                lineHeight: 1.65,
                            }}>
                                {tech.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
