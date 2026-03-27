"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Team", href: "#team" },
    { name: "Impact", href: "#impact" },
    { name: "Future", href: "#future" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        if (!isOpen) return;
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [isOpen]);

    // Prevent scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleNavClick = () => setIsOpen(false);

    return (
        <>
            <nav
                role="navigation"
                aria-label="Main navigation"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: "12px clamp(16px, 5vw, 48px)",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                    background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
                    backdropFilter: scrolled ? "blur(14px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
                    boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.04)" : "none",
                }}
            >
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}>
                    {/* Logo */}
                    <Link
                        href="/"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            textDecoration: "none",
                            flexShrink: 0,
                        }}
                    >
                        <div style={{ position: "relative", width: 36, height: 36, flexShrink: 0 }}>
                            <Image src="/logo.webp" alt="Hygiene Gateway Logo" fill style={{ objectFit: "contain" }} />
                        </div>
                        <span style={{
                            fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                        }}>
                            <span style={{ color: "var(--neon-blue)" }}>HYGIENE</span>
                            <span style={{ color: "#0f172a" }}> GATEWAY</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{
                        display: "none",
                        alignItems: "center",
                        gap: "clamp(16px, 2.5vw, 36px)",
                    }} className="desktop-nav">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    color: "#475569",
                                    textDecoration: "none",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.12em",
                                    transition: "color 0.2s",
                                    padding: "8px 0",
                                    minHeight: 44,
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neon-blue)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Hamburger Button - mobile only */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="hamburger-btn"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                            padding: "10px",
                            background: "transparent",
                            border: "none",
                            cursor: "pointer",
                            minWidth: 44,
                            minHeight: 44,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 8,
                        }}
                    >
                        <span style={{
                            display: "block",
                            width: 22,
                            height: 2,
                            background: "#0f172a",
                            borderRadius: 2,
                            transition: "transform 0.25s ease, opacity 0.25s ease",
                            transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
                        }} />
                        <span style={{
                            display: "block",
                            width: 22,
                            height: 2,
                            background: "#0f172a",
                            borderRadius: 2,
                            transition: "opacity 0.25s ease",
                            opacity: isOpen ? 0 : 1,
                        }} />
                        <span style={{
                            display: "block",
                            width: 22,
                            height: 2,
                            background: "#0f172a",
                            borderRadius: 2,
                            transition: "transform 0.25s ease, opacity 0.25s ease",
                            transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
                        }} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        inset: 0,
                        background: "rgba(15,23,42,0.35)",
                        zIndex: 40,
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                    }}
                    aria-hidden="true"
                    onClick={() => setIsOpen(false)}
                />
            )}
            <div
                id="mobile-menu"
                ref={menuRef}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile menu"
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: "min(280px, 85vw)",
                    background: "#ffffff",
                    borderLeft: "1px solid #e2e8f0",
                    zIndex: 49,
                    display: "flex",
                    flexDirection: "column",
                    padding: "80px 24px 40px",
                    gap: 4,
                    transform: isOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    overflowY: "auto",
                    boxShadow: "-4px 0 24px rgba(0,0,0,0.08)",
                }}
                className="mobile-menu-panel"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={handleNavClick}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            minHeight: 52,
                            padding: "12px 16px",
                            fontSize: "1rem",
                            fontWeight: 600,
                            color: "#334155",
                            textDecoration: "none",
                            borderRadius: 10,
                            transition: "color 0.2s, background 0.2s",
                            letterSpacing: "-0.01em",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--neon-blue)";
                            e.currentTarget.style.background = "rgba(0,128,255,0.06)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#334155";
                            e.currentTarget.style.background = "transparent";
                        }}
                    >
                        {item.name}
                    </Link>
                ))}

                <div style={{
                    marginTop: "auto",
                    paddingTop: 24,
                    borderTop: "1px solid #e2e8f0",
                    fontSize: "0.7rem",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontWeight: 700,
                }}>
                    <span style={{ color: "var(--neon-blue)" }}>Hygiene</span> Gateway
                </div>
            </div>

            {/* Styles to show/hide desktop nav */}
            <style>{`
                @media (min-width: 768px) {
                    .desktop-nav { display: flex !important; }
                    .hamburger-btn { display: none !important; }
                    .mobile-menu-panel { display: none !important; }
                }
            `}</style>
        </>
    );
}
