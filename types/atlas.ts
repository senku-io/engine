export type AtlasNode = {
    path: string;
    title: string;
    type: string;
};

export type Atlas = {
    nodes: Record<string, AtlasNode>;
};
