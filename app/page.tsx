import Link from "next/link";
import raw from "../atlas.json";
import { Atlas } from "@/types/atlas";

export default async function Home() {
    const search = raw as Atlas;

    return (
        <div className="prose">
            {Object.keys(search.nodes).map((items, index) => (
                <Link href={"/" + items} key={index}>
                    {search.nodes[items].title}
                </Link>
            ))}
        </div>
    );
}
