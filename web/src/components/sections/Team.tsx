"use client";

import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";

const teamMembers = [
    {
        name: "Prathmesh Santosh Ghule",
        role: "Innovator",
        description: "Designs and develops creative hardware solutions and brings new ideas to life.",
        degree: "B.Tech Computer Engineering",
        year: "First Year",
        image: "/prathmesh2.png",
    },
    {
        name: "Prathamesh Sidhyeshwar Joshi",
        role: "Software Specialist",
        description: "Develops intelligent software and controls system functionality.",
        degree: "B.Tech Computer Engineering",
        year: "First Year",
        image: "/prathamesh.jpeg",
    },
    {
        name: "Shri Someshwar Hundekari",
        role: "Technical Presenter",
        description: "Communicates project vision and delivers clear, impactful presentations.",
        degree: "B.Tech Computer Engineering",
        year: "First Year",
        image: "/shri2.png",
    },
    {
        name: "Atharv Vijay Patil",
        role: "Problem Solver",
        description: "Analyzes challenges and develops effective technical solutions.",
        degree: "B.Tech Computer Engineering",
        year: "First Year",
        image: "/atharv4.png",
    },
];

export default function Team() {
    return (
        <section
            id="team"
            className="section"
            style={{ background: "#030303", overflow: "hidden", position: "relative" }}
        >
            <div className="container">
                {/* Header */}
                <div style={{
                    textAlign: "center",
                    maxWidth: "48ch",
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
                            color: "#fff",
                            marginBottom: "clamp(10px, 2vw, 16px)",
                        }}
                    >
                        Engineered by{" "}
                        <span className="text-glow" style={{ color: "var(--neon-blue)" }}>
                            Future Innovators
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: "clamp(0.85rem, 2vw, 1rem)",
                            color: "#6b7280",
                            lineHeight: 1.7,
                        }}
                    >
                        Meet the team from Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering &amp; Technology, Baramati.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
                    gap: "clamp(14px, 2.5vw, 24px)",
                }}>
                    {teamMembers.map((member, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, type: "spring", stiffness: 280, damping: 22 }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                            className="glass-card"
                            style={{
                                padding: "clamp(20px, 4vw, 32px)",
                                borderRadius: 18,
                                border: "1px solid rgba(255,255,255,0.08)",
                                display: "flex",
                                flexDirection: "column",
                                position: "relative",
                                overflow: "hidden",
                                cursor: "default",
                                transition: "border-color 0.25s ease",
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(0,243,255,0.25)"}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                        >
                            {/* Decorative cap icon */}
                            <div style={{
                                position: "absolute",
                                top: 12,
                                right: 12,
                                opacity: 0.08,
                                pointerEvents: "none",
                            }}>
                                <GraduationCap size={36} color="var(--neon-blue)" />
                            </div>

                            {/* Avatar */}
                            <div style={{
                                position: "relative",
                                width: "clamp(64px, 14vw, 88px)",
                                height: "clamp(64px, 14vw, 88px)",
                                marginBottom: "clamp(14px, 3vw, 22px)",
                                flexShrink: 0,
                            }}>
                                {/* Glow ring */}
                                <div style={{
                                    position: "absolute",
                                    inset: -4,
                                    borderRadius: "50%",
                                    background: "rgba(0,243,255,0.15)",
                                    filter: "blur(8px)",
                                }} />
                                <div style={{
                                    position: "relative",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    border: "2px solid rgba(0,243,255,0.35)",
                                    overflow: "hidden",
                                    background: "#000",
                                }}>
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={`Photo of ${member.name}`}
                                            fill
                                            priority={i < 2}
                                            style={{ objectFit: "cover", objectPosition: "center" }}
                                        />
                                    ) : (
                                        <div style={{
                                            width: "100%",
                                            height: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}>
                                            <User style={{ width: 32, height: 32, color: "rgba(0,243,255,0.5)" }} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Name & role */}
                            <h3 style={{
                                fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                                fontWeight: 800,
                                color: "#fff",
                                letterSpacing: "-0.02em",
                                marginBottom: 4,
                                lineHeight: 1.25,
                            }}>
                                {member.name}
                            </h3>
                            <p style={{
                                fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: "0.14em",
                                color: "var(--neon-blue)",
                                marginBottom: "clamp(12px, 2.5vw, 18px)",
                            }}>
                                {member.role}
                            </p>

                            <p style={{
                                fontSize: "clamp(0.78rem, 1.6vw, 0.9rem)",
                                color: "#9ca3af",
                                lineHeight: 1.65,
                                flex: 1,
                                marginBottom: "clamp(12px, 2.5vw, 18px)",
                            }}>
                                {member.description}
                            </p>

                            {/* Degree footer */}
                            <div style={{
                                paddingTop: "clamp(12px, 2.5vw, 16px)",
                                borderTop: "1px solid rgba(255,255,255,0.07)",
                            }}>
                                <p style={{
                                    fontSize: "clamp(0.7rem, 1.4vw, 0.8rem)",
                                    color: "#e5e7eb",
                                    fontWeight: 600,
                                    marginBottom: 3,
                                }}>
                                    {member.degree}
                                </p>
                                <p style={{
                                    fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                                    color: "#6b7280",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.12em",
                                    fontWeight: 700,
                                }}>
                                    {member.year}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Institute note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    style={{
                        textAlign: "center",
                        marginTop: "clamp(32px, 6vw, 56px)",
                        fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        color: "#4b5563",
                        fontStyle: "italic",
                        lineHeight: 1.6,
                        padding: "0 16px",
                    }}
                >
                    Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering &amp; Technology, Baramati, Pune.
                </motion.p>
            </div>

            {/* Ambient glows */}
            <div aria-hidden="true" style={{
                position: "absolute",
                top: "20%",
                left: "-15%",
                width: "min(400px, 50vw)",
                height: "min(400px, 50vw)",
                background: "rgba(0,243,255,0.04)",
                filter: "blur(90px)",
                borderRadius: "50%",
                pointerEvents: "none",
            }} />
            <div aria-hidden="true" style={{
                position: "absolute",
                bottom: "20%",
                right: "-15%",
                width: "min(400px, 50vw)",
                height: "min(400px, 50vw)",
                background: "rgba(0,243,255,0.04)",
                filter: "blur(90px)",
                borderRadius: "50%",
                pointerEvents: "none",
            }} />
        </section>
    );
}
