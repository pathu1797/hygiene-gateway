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
        <section id="technology" className="py-24 px-6 relative overflow-hidden bg-neutral-950">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Powered by <span className="text-neon-blue text-glow">Intelligent Automation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        Built using industry-standard robotics components for reliability and scale.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-neon-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                                <tech.icon className="w-6 h-6 text-neon-blue" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{tech.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Decorative Circuit Lines (CSS only) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://placehold.co/1920x1080/000000/ffffff/png?text=Circuit+Lines')] bg-cover bg-center mix-blend-overlay" />
        </section>
    );
}
