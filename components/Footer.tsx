function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="py-10 border-t border-neutral-300">
                <ul className="flex gap-4 justify-center items-center">
                    <li className="flex justify-center gap-6 text-[13px] text-gray-600 hover:text-gray-900">
                        <a href="">Docs</a>
                    </li>
                    <li className="flex justify-center gap-6 text-[13px] text-gray-600 hover:text-gray-900">
                        <a href="https://www.github.com/senku-io">GitHub</a>
                    </li>
                    <li className="flex justify-center gap-6 text-[13px] text-gray-600 hover:text-gray-900">
                        <a href="/contribute">Contribute</a>
                    </li>
                </ul>
                <a href="https://www.flaticon.com/free-icons" className="flex justify-center gap-6 text-[13px] text-gray-600 hover:text-gray-900" title="Icons">Icons created by Flat Icons - Flaticon</a>
            </footer>
        </>
    );
}

export default Footer;
