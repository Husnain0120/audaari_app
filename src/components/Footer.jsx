"use client"

import { useState } from "react"
import { FaXTwitter, FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa6"
import { ChevronDown, HandCoins } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({
    weight: ["900"],
    subsets: ["latin"],
})

const SocialIcons = {
    twitter: <FaXTwitter className="w-6 h-6" />,
    instagram: <FaInstagram className="w-6 h-6" />,
    facebook: <FaFacebook className="w-6 h-6" />,
    youtube: <FaYoutube className="w-6 h-6" />,
    tiktok: <FaTiktok className="w-6 h-6" />,
}

export default function Footer() {
    const [language, setLanguage] = useState("English (UK)")
    const [showLanguageMenu, setShowLanguageMenu] = useState(false)

    const sections = {
        product: [
            { label: "Download", href: "#" },
            { label: "Nitro", href: "#" },
            { label: "Status", href: "#" },
            { label: "App Directory", href: "#" },
        ],
        company: [
            { label: "About", href: "#" },
            { label: "Jobs", href: "#" },
            { label: "Brand", href: "#" },
            { label: "Newsroom", href: "#" },
        ],
        resources: [
            { label: "Support", href: "#" },
            { label: "Safety", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Creators", href: "#" },
            { label: "Community", href: "#" },
            { label: "Developers", href: "#" },
            { label: "Quests", href: "#" },
            { label: "Official Third-Party Merch", href: "#" },
            { label: "Feedback", href: "#" },
        ],
        policies: [
            { label: "Terms", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Cookie Settings", href: "#" },
            { label: "Guidelines", href: "#" },
            { label: "Acknowledgements", href: "#" },
            { label: "Licences", href: "#" },
            { label: "Company Information", href: "#" },
        ],
    }

    return (
        <footer className="w-full bg-gradient-to-b from-[#0c0c31] to-[#5561EB] text-white overflow-hidden font-sans">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Left Section */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Brand */}
                        <div className="flex items-center gap-2 text-white">
                            <HandCoins className="w-10 h-10 dark:text-white" />
                        </div>

                        {/* Language Selector */}
                        <div className="relative w-full max-w-[200px]">
                            <p className="text-xs font-bold uppercase tracking-wide mb-2 opacity-90">Language</p>
                            <button
                                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                                className="w-full flex items-center justify-between rounded-full border bg-transparent hover:bg-black/10 transition-colors px-2 py-2 text-sm font-medium cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="w-5 h-4 relative overflow-hidden rounded-sm">
                                        <img src="https://flagcdn.com/gb.svg" alt="UK Flag" className="w-full h-full object-cover" />
                                    </span>
                                    <span>{language}</span>
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform ${showLanguageMenu ? "rotate-180" : ""}`} />
                            </button>

                            {showLanguageMenu && (
                                <div className="absolute top-full left-0 mt-1 w-full bg-white text-black rounded shadow-lg py-1 z-50 max-h-60 overflow-y-auto text-sm">
                                    {["English (UK)", "English (US)", "Español", "Français", "Deutsch", "Italiano"].map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => {
                                                setLanguage(lang)
                                                setShowLanguageMenu(false)
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                                        >
                                            {lang}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-6 mt-4">
                            {Object.entries(SocialIcons).map(([key, icon]) => (
                                <a key={key} href="#" className="hover:opacity-80 transition-opacity" aria-label={key}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                        {Object.entries(sections).map(([title, links]) => (
                            <div key={title} className="flex flex-col gap-4">
                                <h3 className="text-sm font-bold text-white/90 capitalize">{title}</h3>
                                <ul className="flex flex-col gap-2">
                                    {links.map((item) => (
                                        <li key={item.label}>
                                            <a href={item.href} className="text-white hover:underline text-[15px]">
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#5865F2] mt-4"></div>

                {/* Bottom Brand */}
                <div className="w-full flex flex-col items-center mt-[10px] overflow-hidden relative">
                    <h1
                        className={`${poppins.className} text-[19vw] select-none opacity-50 leading-[1] lg:block hidden font-extrabold text-[#d9e0ff] tracking-[25px]`}
                    >
                        Audarri
                    </h1>


                </div>{/* 👇 Added inspiration credit line */}
                <p className="text-xs mt-2 text-white/60">
                    Design inspired by{" "}
                    <Link
                        href="https://discord.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition"
                    >
                        Discord
                    </Link>
                </p>
            </div>
        </footer>
    )
}
