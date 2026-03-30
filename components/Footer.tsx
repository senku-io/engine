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
                        <a href="">GitHub</a>
                    </li>
                    <li className="flex justify-center gap-6 text-[13px] text-gray-600 hover:text-gray-900">
                        <a href="">Contribute</a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;
