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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black py-20 px-6"
        >
            {/* Background with Parallax and Zoom */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black/90 to-black opacity-95 z-10" />
                <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-70 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center w-full max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 border border-neon-blue/40 rounded-full bg-neon-blue/15 backdrop-blur-md">
                        <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold uppercase text-neon-blue">
                            Innovation in Public Health
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Hygiene, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan text-glow">
                            Enforced by Design
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base md:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed px-4"
                >
                    An intelligent gateway that ensures mandatory hand sanitation before entry.
                    <br className="hidden sm:block" />
                    <span className="italic text-neon-blue font-semibold"> No compliance — no access.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="pt-10 flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gray-300 flex flex-col items-center gap-2 cursor-pointer pb-10"
                    >
                        <span className="text-xs uppercase tracking-widest text-neon-blue font-bold">Explore</span>
                        <ArrowDown className="w-5 h-5 text-neon-blue" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-blue/20 blur-[130px] rounded-full pointer-events-none" />
        </section>
    );
}
