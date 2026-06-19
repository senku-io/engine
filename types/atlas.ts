export type AtlasNode = {
    path: string;
    name: string;
    type: string;
    keywords: string[];
};

export type Atlas = {
    nodes: Record<string, AtlasNode>;
};
