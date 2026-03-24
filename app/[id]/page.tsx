import MarkdownIt from "markdown-it";
import { loadMarkdown } from "@/lib/loader";
import { formatMarkdown } from "@/lib/parser";
import raw from "../../atlas.json";
import { Atlas } from "@/types/atlas";

const converter = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: true,
});

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const items = raw as Atlas;

    const md = await loadMarkdown(items.nodes[id].path);
    const { metadata, content } = formatMarkdown(md);
    const data = converter.render(content);

    return (
        <div className="prose">
            <article
                className="mx-8"
                dangerouslySetInnerHTML={{ __html: data }}
            ></article>
        </div>
    );
}
