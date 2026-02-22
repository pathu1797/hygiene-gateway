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

    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    return (
        <section
            id="problem"
            ref={containerRef}
            className="max-w-7xl mx-auto px-6 py-24 min-h-screen flex items-center justify-center relative"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div style={{ opacity, y }} className="space-y-6 z-10">
                    <div className="flex items-center gap-2 text-red-500 mb-4">
                        <AlertTriangle className="w-5 h-5" />
                        <span className="text-sm font-bold tracking-widest uppercase">The Critical Flaw</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Optional hygiene creates <br />
                        <span className="text-red-500 text-glow">invisible risks.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        In hospitals and laboratories, handwashing is recommended but <span className="text-white">not enforced</span>.
                        This compliance gap allows infections to spread silently.
                        During pandemics, this gap becomes catastrophic.
                    </p>
                    <div className="p-4 border-l-2 border-red-500 bg-red-500/5 backdrop-blur-sm">
                        <p className="text-red-200 italic">
                            "Safety should never depend on human memory."
                        </p>
                    </div>
                </motion.div>

                {/* Visual / Image Placeholder */}
                <motion.div
                    style={{ opacity, x: useTransform(scrollYProgress, [0.1, 0.3], [50, 0]) }}
                    className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden glass-card group"
                >
                    <div className="absolute inset-0 bg-red-900/10 transition-colors group-hover:bg-red-900/20" />
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 transition-all duration-700"
                    >
                        <source src="/animate2.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute bottom-6 left-6">
                        <p className="text-red-500 text-sm font-bold font-mono tracking-[0.3em] uppercase">DANGER</p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Background Glow (Red) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
