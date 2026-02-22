import Link from "next/link";
import React from "react";

const teamContacts = [
    { name: "Prathmesh Santosh Ghule", email: "prathmesh.ghule.comp.25@vpkbiet.org", phone: "+91 7385546253" },
    { name: "Prathmesh Sidhyeshwar Joshi", email: "prathmesh.joshi.comp.25@vpkbiet.org", phone: "+91 8766933497" },
    { name: "Shri Someshwar Hundekari", email: "shri.hundekari.comp.25@vpkbiet.org", phone: "+91 8055575005" },
    { name: "Atharv Vijay Patil", email: "atharv.patil.comp.25@vpkbiet.org", phone: "+91 8407990628" },
];

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-16">
                    {teamContacts.map((contact, i) => (
                        <div key={i} className="space-y-3 p-4 rounded-xl border border-white/10 hover:border-neon-blue/40 transition-all group bg-white/0 hover:bg-white/[0.02]">
                            <h4 className="text-white font-black text-sm tracking-tight group-hover:text-neon-blue transition-colors">
                                {contact.name}
                            </h4>
                            <div className="space-y-1">
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="block text-xs text-gray-400 hover:text-neon-blue transition-colors truncate font-medium"
                                    title={contact.email}
                                >
                                    {contact.email}
                                </a>
                                <a
                                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                                    className="block text-xs text-gray-400 hover:text-neon-blue transition-colors font-medium"
                                >
                                    {contact.phone}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 pt-8 border-t border-white/10">
                    <div className="text-center md:text-left">
                        <h3 className="text-white font-black text-lg mb-1 tracking-tighter">
                            <span className="text-neon-blue">HYGIENE</span> GATEWAY
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black">Innovation for a Safer Tomorrow.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                        <Link
                            href="/privacy.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-neon-blue transition-colors text-gray-400"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/termsofuse.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-neon-blue transition-colors text-gray-400"
                        >
                            Terms of Use
                        </Link>
                        <Link href="#team" className="hover:text-neon-blue transition-colors text-gray-400">About Us</Link>
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdXjH5dZ1kygninccKuD2vLg8u8wzj74A2-B5X6tHVUIDtcqA/viewform?usp=publish-editor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neon-blue hover:text-white transition-colors font-black"
                        >
                            Feedback
                        </Link>
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 text-center font-bold">
                        &copy; {new Date().getFullYear()} Hygiene Gateway Project.
                    </div>
                </div>
            </div>
        </footer>
    );
}
