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

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    return (
        <section
            id="solution"
            ref={containerRef}
            className="max-w-7xl mx-auto px-6 py-16 sm:py-24 min-h-[100dvh] flex items-center justify-center relative"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                {/* Visual / Image Placeholder (Left on desktop) */}
                <motion.div
                    style={{ opacity, x: useTransform(scrollYProgress, [0.1, 0.3], [-50, 0]) }}
                    className="relative h-[300px] sm:h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-card order-2 md:order-1 group"
                >
                    <div className="absolute inset-0 bg-neon-blue/5 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                    >
                        <source src="/access.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent opacity-50 z-20" />

                    {/* Scanning Line Animation */}
                    <motion.div
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.8)] z-30"
                    />

                    <div className="absolute bottom-6 left-6 z-30">
                        <div className="flex items-center gap-2 text-neon-blue">
                            <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                            <p className="text-xs sm:text-sm font-black font-mono tracking-widest uppercase">ACCESS GRANTED</p>
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div style={{ opacity, y }} className="space-y-6 z-10 order-1 md:order-2 text-left">
                    <div className="flex items-center gap-2 text-neon-blue mb-4">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">The Solution</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Transform hygiene from <br className="hidden sm:block" />
                        optional to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan text-glow">mandatory.</span>
                    </h2>
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                        Integrate touchless sanitation with automated gateway access control.
                        The gateway remains <span className="text-white font-semibold">physically locked</span> until sanitation is verified by sensors.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {["No monitoring required.", "No reminders needed.", "No bypassing possible."].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-center gap-3 text-gray-100 text-sm sm:text-base font-medium"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_10px_#00f3ff] flex-shrink-0" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>

            {/* Decorative Background Glow (Blue) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
