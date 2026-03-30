function Breadcrumps({
    navigations,
}: {
    navigations: { [key: string]: string };
}) {
    return (
        <nav className="flex pt-4 sticky top-0 bg-white" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-1 rtl:space-x-reverse">
                {Object.keys(navigations).map((val, ind) => (
                    <li className="inline-flex items-center" key={ind}>
                        <a
                            href="#"
                            className={`inline-flex items-center text-sm font-medium text-body hover:text-fg-brand capitalize ${Object.keys(navigations).length - 1 === ind ? "text-neutral-800" : "text-neutral-600"}`}
                        >
                            {ind !== 0 && (
                                <svg
                                    className="w-3.5 h-3.5 rtl:rotate-180 text-body text-neutral-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m9 5 7 7-7 7"
                                    />
                                </svg>
                            )}
                            {val}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumps;
