import Link from "next/link";

export default function ContributePage() {
    const steps = [
        {
            title: "1. Open Writer",
            desc: "Go to the Senku IO Engine writer route and choose the type of contribution you want to make.",
        },
        {
            title: "2. Select Action",
            desc: "Choose Create, Update, or Delete. The form adapts based on your selection.",
        },
        {
            title: "3. Fill the Form",
            desc: "Enter metadata, recipe details, steps, notes, warnings, or requested changes.",
        },
        {
            title: "4. Export Markdown",
            desc: "Copy or download the generated Markdown file after validation.",
        },
        {
            title: "5. Fork Repository",
            desc: "Fork the Store repository on GitHub to your own account.",
        },
        {
            title: "6. Add Changes",
            desc: "Create a new file or replace the existing Markdown file in the correct folder path.",
        },
        {
            title: "7. Open Pull Request",
            desc: "Submit a PR with clear notes. Link any related issue if available.",
        },
        {
            title: "8. Review Process",
            desc: "Maintainers may request clarifications or revisions before merge.",
        },
    ];

    const actions = [
        {
            title: "Create",
            desc: "Add a brand-new recipe, guide, or survival knowledge entry.",
        },
        {
            title: "Update",
            desc: "Improve an existing recipe with corrections, clearer steps, or missing data.",
        },
        {
            title: "Delete",
            desc: "Request removal of outdated, duplicate, unsafe, or invalid entries.",
        },
    ];

    return (
        <main className="min-h-screen">
            <section>
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                        Community Driven
                    </p>

                    <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                        Contribute to Senku IO
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
                        Help expand the open survival knowledge archive. Submit
                        recipes, improve existing data, fix mistakes, or propose
                        removals through a structured workflow.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/writer"
                            className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                        >
                            Open Writer
                        </Link>

                        <Link
                            href="https://github.com/senku-io/store"
                            className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-100"
                        >
                            View Store Repo
                        </Link>

                        <Link
                            href="https://github.com/senku-io/engine"
                            className="rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-500 hover:bg-zinc-100"
                        >
                            View Engine Repo
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16 bg-zinc-100 ">
                <div className="grid gap-6 md:grid-cols-3 rounded-sm">
                    {actions.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-zinc-300 p-6 bg-white"
                        >
                            <h2 className="text-xl font-semibold">
                                {item.title}
                            </h2>

                            <p className="mt-3 leading-7 text-zinc-700">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Contribution Workflow
                    </h2>

                    <p className="mt-3 text-zinc-700">
                        Follow these steps to submit clean, review-ready changes
                        with fewer formatting mistakes.
                    </p>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">
                        {steps.map((step) => (
                            <div
                                key={step.title}
                                className="rounded-2xl border border-zinc-300 bg-zinc-50 p-6"
                            >
                                <h3 className="text-lg font-semibold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 leading-7 text-zinc-700">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-16">
                <div className="rounded-3xl border border-zinc-300 bg-zinc-100 p-8 md:p-12">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Contribution Standards
                    </h2>

                    <ul className="mt-6 ml-5 space-y-4 text-zinc-700 list-decimal">
                        <li>Use factual, practical, and reproducible data.</li>
                        <li>Avoid duplicate entries when updating recipes.</li>
                        <li>Keep steps clear, concise, and structured.</li>
                        <li>Include warnings where safety risks exist.</li>
                        <li>Respect repository structure and CI checks.</li>
                    </ul>

                    <div className="mt-8">
                        <Link
                            href="/writer"
                            className="inline-flex rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
                        >
                            Start Contributing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
