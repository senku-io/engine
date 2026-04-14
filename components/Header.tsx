import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/logo.png";

function Header() {
    return (
        <>
            {/* Header */}
            <header className="">
                {/* Nav bar */}
                <nav className="h-20 flex items-center justify-between border-b border-neutral-300">
                    <Link
                        href={"/"}
                        className="flex gap-2 items-center"
                    >
                        <Image
                            src={Logo}
                            alt=""
                            width={32}
                            height={32}
                            className="rounded-md"
                        />
                        <h2 className="text-xl font-bold tracking-tight text-[#141414]">
                            Senku <span className="text-[#28ED58]">IO</span>
                        </h2>
                    </Link>

                    <ul className="flex gap-4 items-center">
                        <li className="flex gap-8 text-sm font-medium text-gray-600 hover:text-[#141414] transition-colors">
                            <Link href="/library" title="Library">Library</Link>
                        </li>
                        <li className="flex gap-8 text-sm font-medium text-gray-600 hover:text-[#141414] transition-colors">
                            <a href="https://www.github.com/senku-io/"  target="_blank" title="Senku.io GitHub" rel="noopener noreferrer">Contribute</a>
                        </li>
                        <li className="flex gap-8 text-sm font-medium text-gray-600 hover:text-[#141414] transition-colors">
                            <a href="">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
