import { Atlas, AtlasNode } from "@/types/atlas";

export function searchNodes(query: string, nodes: Atlas["nodes"]) {
    const q = query.toLowerCase();

    let result: Record<string, AtlasNode> = {};

    const rawResult = Object.entries(nodes).filter(([key, value]) => {
        return (
            key.includes(q) ||
            value.keywords.includes(q) ||
            value.title.toLowerCase() === q
        );
    });

    rawResult.slice(0, limit ? limit : rawResult.length).forEach((raw) => {
        result[raw[0]] = raw[1];
    });

    return result;
}
