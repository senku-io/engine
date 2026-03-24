import matter from "gray-matter";

export function formatMarkdown(md: string) {
    const {data, content} = matter(md);

    return {metadata: data, content};
}