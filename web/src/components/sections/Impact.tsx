"use client";

import { motion } from "framer-motion";
import { Activity, Users, Globe, Shield } from "lucide-react";
import React from "react";

const stats = [
    { label: "Compliance", value: "100%", icon: Shield },
    { label: "Infection Reduction", value: "99.9%", icon: Activity },
    { label: "Scalability", value: "Global", icon: Globe },
    { label: "Public Safety", value: "Maximized", icon: Users },
];

export default function Impact() {
    return (
        <section id="impact" className="py-16 sm:py-24 px-6 bg-white text-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 z-10 text-center md:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            A New Standard for <br className="hidden sm:block" />
                            <span className="text-neon-blue">Hygiene Infrastructure</span>
                        </h2>
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-medium">
                            Reduces hospital-acquired infections. Improves compliance. Minimizes waste.
                            Protects healthcare professionals and patients alike.
                        </p>
                        <p className="text-sm sm:text-base text-gray-900 font-bold">
                            Designed not only for today — but for future pandemics.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-neon-blue/50 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                            >
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-neon-blue mb-2" />
                                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">{stat.value}</h3>
                                <p className="text-xs sm:text-sm text-gray-700 font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100 to-transparent skew-x-12" />
        </section>
    );
}
