"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Hand, Droplets, ShieldCheck, LockOpen } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const steps = [
    {
        icon: Hand,
        title: "Detect",
        description: "An IR sensor detects hand presence within the sanitation zone.",
        color: "text-neon-blue",
        bg: "bg-neon-blue/10",
    },
    {
        icon: Droplets,
        title: "Dispense",
        description: "Soap or sanitizer is dispensed automatically. The system confirms successful dispensing.",
        color: "text-neon-cyan",
        bg: "bg-neon-cyan/10",
    },
    {
        icon: ShieldCheck,
        title: "Verify",
        description: "If no hygiene action is detected, access remains denied.",
        color: "text-green-400",
        bg: "bg-green-400/10",
    },
    {
        icon: LockOpen,
        title: "Allow",
        description: "Only after verification does the gateway unlock for 2–3 seconds.",
        color: "text-white",
        bg: "bg-white/10",
    },
];

export default function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Update active step based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const step = Math.min(
                steps.length - 1,
                Math.floor(latest * steps.length)
            );
            setActiveStep(step);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section
            id="how-it-works"
            ref={containerRef}
            className="relative h-[300vh] bg-black"
        >
            <div className="sticky top-0 min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-12 md:py-0">

                <div className="max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left: Text Content & Steps */}
                    <div className="space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Detect. Verify. <span className="text-neon-blue">Allow.</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg">
                                A seamless sequential process ensures compliance without delay.
                            </p>
                        </motion.div>

                        <div className="space-y-6 md:space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-800" />
                            <motion.div
                                className="absolute left-6 top-0 w-[2px] bg-neon-blue shadow-[0_0_10px_#00f3ff]"
                                style={{ height: `${((activeStep) / (steps.length - 1)) * 100}%`, transition: 'height 0.5s ease' }}
                            />

                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "relative pl-12 sm:pl-16 transition-opacity duration-500",
                                        index === activeStep ? "opacity-100" : "opacity-30"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute left-3 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-colors duration-500 bg-black z-10 flex items-center justify-center",
                                        index <= activeStep ? "border-neon-blue shadow-[0_0_10px_#00f3ff]" : "border-gray-700"
                                    )}>
                                        {index <= activeStep && <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neon-blue" />}
                                    </div>

                                    <h3 className={cn("text-xl sm:text-2xl font-bold mb-1 md:mb-2 transition-colors", step.color)}>
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative h-[250px] sm:h-[350px] md:h-[500px] glass rounded-2xl p-6 md:p-8 flex items-center justify-center border border-gray-800 scale-90 sm:scale-100 transition-transform">
                        {/* Animated Central Icon based on Step */}
                        <div className="relative z-10">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                                        animate={{
                                            opacity: index === activeStep ? 1 : 0,
                                            scale: index === activeStep ? 1 : 0.8,
                                            rotate: index === activeStep ? 0 : 20,
                                            display: index === activeStep ? "block" : "none"
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <div className={cn("p-8 sm:p-12 rounded-full ring-4 ring-opacity-20 backdrop-blur-3xl", step.bg, `ring-${step.color.split('-')[1]}`)}>
                                            <Icon className={cn("w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32", step.color)} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Background Grid/Effects */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent opacity-80" />
                    </div>

                </div>
            </div>
        </section>
    );
}
