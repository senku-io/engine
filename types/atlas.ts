export type AtlasNode = {
    path: string;
    title: string;
    type: string;
    keywords: string[];
};

export type Atlas = {
    nodes: Record<string, AtlasNode>;
};
