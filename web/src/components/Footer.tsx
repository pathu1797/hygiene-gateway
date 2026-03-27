"use client";

import Link from "next/link";
import React from "react";

const teamContacts = [
    { name: "Prathmesh Santosh Ghule", email: "prathmesh.ghule.comp.25@vpkbiet.org", phone: "+91 7385546253" },
    { name: "Prathamesh Sidhyeshwar Joshi", email: "prathamesh.joshi.comp.25@vpkbiet.org", phone: "+91 8766933497" },
    { name: "Shri Someshwar Hundekari", email: "shri.hundekari.comp.25@vpkbiet.org", phone: "+91 8055575005" },
    { name: "Atharv Vijay Patil", email: "atharv.patil.comp.25@vpkbiet.org", phone: "+91 8407990628" },
];

const footerLinks = [
    { label: "Privacy Policy", href: "/privacy.pdf", external: true },
    { label: "Terms of Use", href: "/termsofuse.pdf", external: true },
    { label: "About Us", href: "#team", external: false },
    {
        label: "Feedback",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdXjH5dZ1kygninccKuD2vLg8u8wzj74A2-B5X6tHVUIDtcqA/viewform?usp=publish-editor",
        external: true,
        highlight: true,
    },
];

export default function Footer() {
    return (
        <footer style={{
            background: "#fff",
            color: "#64748b",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "clamp(40px, 8vw, 80px)",
            paddingBottom: "clamp(24px, 5vw, 48px)",
        }}>
            <div className="container">

                {/* Team contacts grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
                    gap: "clamp(10px, 2vw, 16px)",
                    marginBottom: "clamp(32px, 6vw, 56px)",
                }}>
                    {teamContacts.map((contact, i) => (
                        <div
                            key={i}
                            style={{
                                padding: "clamp(14px, 2.5vw, 20px)",
                                borderRadius: 12,
                                border: "1px solid #e2e8f0",
                                background: "#f8fafc",
                                transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(0,128,255,0.25)";
                                e.currentTarget.style.background = "#fff";
                                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,128,255,0.07)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "#e2e8f0";
                                e.currentTarget.style.background = "#f8fafc";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <h4 style={{
                                fontSize: "clamp(0.8rem, 1.8vw, 0.9rem)",
                                fontWeight: 700,
                                color: "#0f172a",
                                letterSpacing: "-0.01em",
                                marginBottom: "clamp(8px, 1.5vw, 12px)",
                                lineHeight: 1.3,
                            }}>
                                {contact.name}
                            </h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                                <a
                                    href={`mailto:${contact.email}`}
                                    title={contact.email}
                                    style={{
                                        fontSize: "clamp(0.65rem, 1.3vw, 0.75rem)",
                                        color: "#94a3b8",
                                        textDecoration: "none",
                                        fontWeight: 500,
                                        display: "block",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                        transition: "color 0.2s",
                                        minHeight: 28,
                                        lineHeight: "28px",
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-blue)"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
                                >
                                    {contact.email}
                                </a>
                                <a
                                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                                    style={{
                                        fontSize: "clamp(0.65rem, 1.3vw, 0.75rem)",
                                        color: "#94a3b8",
                                        textDecoration: "none",
                                        fontWeight: 500,
                                        transition: "color 0.2s",
                                        minHeight: 28,
                                        lineHeight: "28px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--neon-blue)"}
                                    onMouseLeave={(e) => e.currentTarget.style.color = "#94a3b8"}
                                >
                                    {contact.phone}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    paddingTop: "clamp(20px, 4vw, 32px)",
                    borderTop: "1px solid #e2e8f0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "clamp(16px, 3vw, 24px)",
                    textAlign: "center",
                }}>
                    {/* Brand */}
                    <div>
                        <p style={{
                            fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
                            fontWeight: 800,
                            color: "#0f172a",
                            letterSpacing: "-0.02em",
                            marginBottom: 4,
                        }}>
                            <span style={{ color: "var(--neon-blue)" }}>HYGIENE</span> GATEWAY
                        </p>
                        <p style={{
                            fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                            textTransform: "uppercase",
                            letterSpacing: "0.2em",
                            color: "#94a3b8",
                            fontWeight: 700,
                        }}>
                            Innovation for a Safer Tomorrow.
                        </p>
                    </div>

                    {/* Links */}
                    <nav aria-label="Footer navigation">
                        <ul style={{
                            listStyle: "none",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "clamp(14px, 3vw, 28px)",
                        }}>
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        style={{
                                            fontSize: "clamp(0.65rem, 1.3vw, 0.75rem)",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.12em",
                                            textDecoration: "none",
                                            color: link.highlight ? "var(--neon-blue)" : "#94a3b8",
                                            transition: "color 0.2s",
                                            minHeight: 44,
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = link.highlight ? "#0066cc" : "var(--neon-blue)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = link.highlight ? "var(--neon-blue)" : "#94a3b8";
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Copyright */}
                    <p style={{
                        fontSize: "clamp(0.6rem, 1.2vw, 0.7rem)",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        color: "#cbd5e1",
                        fontWeight: 600,
                    }}>
                        &copy; {new Date().getFullYear()} Hygiene Gateway Project.
                    </p>
                </div>
            </div>
        </footer>
    );
}
