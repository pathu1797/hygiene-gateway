"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Future() {
    return (
        <section id="future" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">

            {/* Background Image with Slow Zoom */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-[url('/future.png')] bg-cover bg-center opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
            </motion.div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-[0.3em] uppercase mb-8">
                        Vision 2030
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Imagine smart cities where <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white text-glow">hygiene is infrastructure.</span>
                    </h2>

                    <div className="space-y-4 text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                        <p>Automated gateways at hospital entrances. Public facilities with enforced sanitation.</p>
                        <p className="text-white font-medium">Zero dependency on manual monitoring.</p>
                        <p className="italic text-gray-400 mt-8">
                            "This is not just a machine. It is a shift in public health architecture."
                        </p>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
