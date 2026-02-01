"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleDashed, LayoutGrid, X } from "lucide-react"; // Make sure you have lucide-react installed
import Image from "next/image";
import Link from "next/link";

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 w-full max-w-[280px] animate-in slide-in-from-bottom-5 duration-500">
            {/* Main Card Container */}
            <div className="relative flex flex-col gap-4 rounded-xl border border-white bg-[#97144d] p-4 shadow-2xl text-white">

                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-2 top-2 text-gray-500 hover:text-white transition-colors"
                >
                    <X className="h-4 w-4" />
                </button>

                {/* Top Section: Image + Text */}
                <div className="flex gap-4 items-start pr-6">
                    {/* Thumbnail Image */}
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-gray-800 bg-white">
                        {/* Using your logo here */}
                        <Image
                            src="/logo.svg"
                            alt="SRsaathi Logo"
                            fill
                            className="object-contain p-1"
                        />
                    </div>

                    <div className="space-y-1">
                        <h3 className="font-semibold leading-tight text-xs">
                            Are you ready for a new adventure?
                        </h3>
                        <p className="text-xs text-gray-400 font-medium">
                            We are hiring.
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Action Button */}

                <button className="flex items-center gap-2 px-3 py-1.5 border bg-white border-[#043270] rounded text-[#043270] text-sm font-bold   hover:text-[#97144d] hover:border-[#97144d] transition uppercase">
                    <LayoutGrid size={16} />
                    Explore Opportunities
                </button>
            </div>
        </div>
    );
}