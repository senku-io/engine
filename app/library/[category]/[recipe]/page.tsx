import MarkdownIt from "markdown-it";
import { loadMarkdown } from "@/lib/loader";
import { formatMarkdown } from "@/lib/parser";
import raw from "@/atlas.json";
import { Atlas } from "@/types/atlas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Breadcrumps from "@/components/Breadcrumps";

const converter = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
});

export default async function Recipe({
    params,
}: {
    params: Promise<{ category: string, recipe: string }>;
}) {
    const { category, recipe } = await params;

    const items = raw as Atlas;

    const md = await loadMarkdown(items.nodes[recipe].path);
    const { metadata, content } = formatMarkdown(md);
    const data = converter.render(content);

    return (
        <div className="min-h-screen font-sans antialiased text-[#141414] min-w-275 max-w-275 mx-auto">
            {/* Header */}
            <Header />

            {/* <!-- Breadcrumb --> */}
            <Breadcrumps
                navigations={{
                    library: "/library",
                    [category]: "/" + category,
                    [metadata.name]: "/" + metadata.name,
                }}
            />

            {/* Main Section */}
            <main className="prose py-4 flex flex-col gap-4">
                <article dangerouslySetInnerHTML={{ __html: data }}></article>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
