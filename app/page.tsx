"use client";

import Link from "next/link";
import raw from "@/atlas.json";
import Image from "next/image";
import { Atlas } from "@/types/atlas";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { searchNodes } from "@/lib/search";
import { useState } from "react";
import { IconMap } from "@/constants/iconMap";

export default function Home() {
    const search = raw as Atlas;

    // Search data from raw
    const [sr, setSr] = useState(search.nodes);

    return (
        <main className="py-10 text-center flex flex-col gap-4">
            {/* Introduction */}
            <h3 className="text-5xl font-bold tracking-tight text-[#141414]">
                Rebuild Civilization from First Priciples
            </h3>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                A comrephensive survival knowledge library structured for
                clarity and usablity.
            </p>

            {/* Landing page Search bar */}
            <label htmlFor="main-search" className="sr-only">
                Search recipie
            </label>
            <input
                type="text"
                name="main-search"
                id="main-search"
                placeholder="Search"
                onChange={(e) =>
                    setSr(searchNodes(e.currentTarget.value, search.nodes))
                }
                className="relative max-w-162.5 mx-auto w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-white shadow-sm text-base focus:shadow-md transition-shadow outline-none"
            />

            {/* Items */}
            <div className="h-[42dvh] overflow-y-scroll p-2 shadow-lg border border-neutral-500/25 rounded-md items">
                {Object.keys(sr).map((items, index) => (
                    <Link
                        href={`/library/${sr[items].type}/${items}`}
                        key={index}
                        className="flex items-center gap-4 px-6 py-4 border-b border-gray-500/25 hover:bg-[#F4FBF6] transition-colors cursor-pointer group"
                    >
                        <Image
                            src={IconMap[search.nodes[items].type]}
                            alt="icon"
                            width={32}
                            height={32}
                        />
                        <span className="uppercase tracking-wider text-[#28ED58]">
                            [{search.nodes[items].type}]:
                        </span>
                        <span className="text-[15px] font-medium text-[#141414]">
                            {search.nodes[items].title}
                        </span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
