export type AtlasNode = {
    path: string;
    title: string;
};

export type Atlas = {
    nodes: Record<string, AtlasNode>;
};
