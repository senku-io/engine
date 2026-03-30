import Link from "next/link";
import raw from "../atlas.json";
import { Atlas } from "@/types/atlas";

export default async function Home() {
    const search = raw as Atlas;

    return (
        <div className="mx-auto w-4xl">
            {/* Header */}
            <Header />

            {/* Main Section */}
            <main className="flex flex-col text-center items-center gap-4 min-h-screen">
                {/* Introduction */}
                <h3 className="text-5xl font-medium leading-[1.2] mt-12">Rebuild Civilization from First Priciples</h3>
                <p className="text-[20px] font-light leading-1.5">
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
                    className="border-2 border-neutral-500/25 w-3/5 rounded-md p-1 px-4 shadow"
                />

                {/* Items */}
                {Object.keys(search.nodes).map((items, index) => (
                    <Link href={"/" + items} key={index}>
                        {search.nodes[items].title}
                    </Link>
                ))}
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}
