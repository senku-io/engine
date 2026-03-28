import Link from "next/link";
import raw from "../atlas.json";
import { Atlas } from "@/types/atlas";

export default async function Home() {
    const search = raw as Atlas;

    return (
        <div className="mx-auto w-4xl">
            {/* Header */}
            <header className="">
                {/* Nav bar */}
                <nav className="flex justify-between items-center">
                    <Link href={"/"}>
                        <h2 className="font-medium text-xl">
                            Senku <span className="text-[#28ED58]">IO</span>
                        </h2>
                    </Link>

                    <ul className="flex gap-4 items-center">
                        <li className="font-light hover:font-normal">
                            <a href="">Library</a>
                        </li>
                        <li className="font-light hover:font-normal">
                            <a href="">Contribute</a>
                        </li>
                        <li className="font-light hover:font-normal">
                            <a href="">About</a>
                        </li>
                        <li>
                            <label htmlFor="search" className="sr-only">
                                Search recipie
                            </label>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search survival knowledge"
                                
                            />
                        </li>
                    </ul>
                </nav>
            </header>

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
            <footer>
                <ul className="flex gap-4 justify-center items-center">
                    <li>
                        <a href="">Docs</a>
                    </li>
                    <li>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <a href="">Contribute</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
