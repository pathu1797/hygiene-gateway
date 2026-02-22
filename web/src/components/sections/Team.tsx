"use client";

import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";
import React from "react";
import Image from "next/image";

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
        <section id="team" className="py-16 sm:py-24 px-6 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold"
                    >
                        Engineered by <span className="text-neon-blue text-glow">Future Innovators</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base sm:text-lg"
                    >
                        Meet the team from Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology, Baramati.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -10,
                                borderColor: "rgba(0, 243, 255, 0.3)",
                                backgroundColor: "rgba(255, 255, 255, 0.01)"
                            }}
                            viewport={{ once: true }}
                            transition={{
                                layout: { duration: 0.3 },
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="glass p-6 sm:p-8 rounded-2xl border border-white/5 transition-colors group relative overflow-hidden flex flex-col"
                        >
                            <motion.div
                                whileHover={{ opacity: 0.2 }}
                                className="absolute top-0 right-0 p-4 opacity-10 transition-opacity"
                            >
                                <GraduationCap size={40} className="text-neon-blue" />
                            </motion.div>

                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6">
                                <motion.div
                                    whileHover={{ backgroundColor: "rgba(0, 243, 255, 0.4)", scale: 1.15 }}
                                    className="absolute inset-0 bg-neon-blue/20 rounded-full blur-md transition-all duration-300"
                                />
                                <motion.div
                                    whileHover={{ borderColor: "rgba(0, 243, 255, 1)" }}
                                    className="relative w-full h-full rounded-full border-2 border-neon-blue/30 overflow-hidden bg-black flex items-center justify-center transition-colors duration-300"
                                >
                                    {member.image ? (
                                        <motion.div
                                            className="relative w-full h-full"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                priority
                                                className="object-cover object-center"
                                            />
                                        </motion.div>
                                    ) : (
                                        <User className="w-10 h-10 sm:w-12 sm:h-12 text-neon-blue/50" />
                                    )}
                                </motion.div>
                            </div>

                            <motion.h3
                                whileHover={{ color: "#00f3ff" }}
                                className="text-lg sm:text-xl font-bold mb-1 text-white transition-colors"
                            >
                                {member.name}
                            </motion.h3>
                            <p className="text-neon-blue text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>

                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
                                {member.description}
                            </p>

                            <div className="pt-4 border-t border-white/5">
                                <p className="text-gray-400 text-[10px] sm:text-xs font-medium">{member.degree}</p>
                                <p className="text-gray-500 text-[9px] sm:text-[10px] mt-1 uppercase tracking-widest">{member.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 text-xs sm:text-sm italic px-4">
                        Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Technology, Baramati, Pune.
                    </p>
                </motion.div>
            </div>

            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[100px]" />
            </div>
        </section>
    );
}
