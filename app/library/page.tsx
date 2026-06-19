import Link from "next/link";
import raw from "@/atlas.json";
import Image from "next/image";
import { Atlas } from "@/types/atlas";
import { searchNodes } from "@/lib/search";
import { IconMap } from "@/constants/iconMap";

export default function Library() {
    const search = (raw as Atlas).nodes;

    const categories = ["material", "food"];

    return (
            <main className="py-10 text-center flex flex-col gap-8">
                {categories.map((val, ind) => (
                    <div className="items" key={ind}>
                        <h2 className="text-start capitalize font-bold text-xl pb-4">
                            {val.replaceAll("_", " ")}
                        </h2>
                        <div className="flex gap-4">
                            {Object.keys(
                                searchNodes(val, search, "type", 10),
                            ).map((items, index) => (
                                <Link
                                    href={`/library/${search[items].type}/${items}`}
                                    key={index}
                                    className="w-fit flex items-center gap-4 px-6 py-4 border border-gray-500/25 shadow shadow-gray-500/25 hover:bg-[#F4FBF6] transition-colors cursor-pointer group"
                                >
                                    <Image
                                        src={IconMap[search[items].type]}
                                        alt="icon"
                                        width={32}
                                        height={32}
                                    />
                                    <span className="text-[15px] font-medium text-[#141414]">
                                        {search[items].name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
    );
}
