import { readFile } from "fs/promises";
import path from "path";

const STORE_PATH = process.env.STORE_PATH || "";

export async function loadMarkdown(relativePath: string) {
    const sanitized = path.normalize(path.join(STORE_PATH, relativePath));

    if (!sanitized.startsWith(STORE_PATH)) {
        throw new Error("Invalid path")
    }

    return await readFile(sanitized, {encoding: "utf-8"})
}
