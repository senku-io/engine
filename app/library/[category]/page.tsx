import { Atlas } from "@/types/atlas";
import raw from "@/atlas.json";
import { searchNodes } from "@/lib/search";
import Image from "next/image";
import { IconMap } from "@/constants/iconMap";
import Link from "next/link";

export default async function Category({
    params,
}: {
    params: Promise<{ category: string }>;
}) {
    const { category } = await params;

    const search = searchNodes(category, (raw as Atlas).nodes, "type");

    return (
            <main className="py-10 text-center flex flex-col gap-8">
                <div className="items">
                    <h2 className="text-start capitalize font-bold text-xl pb-4">
                        {category.replaceAll("_", " ")}
                    </h2>
                    <div className="flex gap-4">
                        {Object.keys(search).map((items, index) => (
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
                                    {search[items].title}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
    );
}
