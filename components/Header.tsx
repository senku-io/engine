import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/images/logo.png"

function Header() {
    return (
        <>
            {/* Header */}
            <header className="">
                {/* Nav bar */}
                <nav className="h-20 flex items-center justify-between border-b border-gray-100">
                    <Link href={"/"} className="flex gap-2 items-center outline-0">
                        <Image src={Logo} alt="" width={32} height={32} className="rounded-md" />
                        <h2 className="text-xl font-bold tracking-tight text-[#141414]">
                            Senku <span className="text-[#28ED58]">IO</span>
                        </h2>
                    </Link>

                    <ul className="flex gap-4 items-center">
                        <li className="flex gap-8 text-sm font-medium text-gray-600 hover:text-[#141414] transition-colors">
                            <a href="">Library</a>
                        </li>
                        <li className="flex gap-8 text-sm font-medium text-gray-600 hover:text-[#141414] transition-colors">
                            <a href="">Contribute</a>
                        </li>
                        <li className="flex gap-8 text-sm font-medium text-gray-600 hover:text-[#141414] transition-colors">
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
                                className="w-60 h-9 px-4 rounded-full bg-white border border-gray-200 text-xs focus:ring-1 focus:ring-[#28ED58] outline-none"
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
