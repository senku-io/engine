"use client";

import { useMemo, useState } from "react";

type ActionType = "create" | "update" | "delete";

type FormState = {
    id: string;
    name: string;
    type: string;
    keywords: string;
    requires: string;
    produces: string;
    byproducts: string;
    temperature: string;
    timeValue: string;
    timeUnit: string;
    terrain: string;
    hazardLevel: string;
    risks: string;
    measurement: string;
    markdown: string;
    deleteReason: string;
};

const recipeTypes = [
    "material",
    "tool",
    "food",
    "fuel",
    "metal",
    "medicine",
    "structure",
    "knowledge",
    "water",
    "process",
];

const mockRecipes = [
    "coal",
    "charcoal",
    "stone-axe",
    "fire",
    "rope",
    "clay-pot",
];

export default function WriterPage() {
    const [action, setAction] = useState<ActionType>("create");
    const [selectedRecipe, setSelectedRecipe] = useState("coal");

    const [form, setForm] = useState<FormState>({
        id: "rec_coal",
        name: "Coal",
        type: "material",
        keywords: "coal,charcoal,carbon",
        requires: "wood x1",
        produces: "charcoal x0.25",
        byproducts: "wood tar",
        temperature: "600",
        timeValue: "6",
        timeUnit: "h",
        terrain: "forest",
        hazardLevel: "2",
        risks: "smoke",
        measurement: "proportional",
        markdown:
            "## Overview\nDescribe the recipe here.\n\n## Steps\n1. Gather resources\n2. Process materials\n3. Finalize output",
        deleteReason: "",
    });

    function updateField<K extends keyof FormState>(
        key: K,
        value: FormState[K]
    ) {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function generateId(name: string) {
        return (
            "rec_" +
            name
                .toLowerCase()
                .trim()
                .replace(/[^a-z0-9]+/g, "_")
                .replace(/^_+|_+$/g, "")
        );
    }

    const generatedMarkdown = useMemo(() => {
        if (action === "delete") {
            return `Delete Request

Recipe: ${selectedRecipe}
Reason: ${form.deleteReason || "No reason provided"}

Suggested Action:
- Remove markdown file
- Remove atlas entry
- Review linked references`;
        }

        return `---
id: ${form.id}
name: ${form.name}
type: ${form.type}
keywords:
${form.keywords
    .split(",")
    .map((k) => `  - ${k.trim()}`)
    .join("\n")}
requires: ${form.requires}
produces: ${form.produces}
byproducts: ${form.byproducts}
temperature_c: ${form.temperature}
time:
  value: ${form.timeValue}
  unit: ${form.timeUnit}
terrain:
${form.terrain
    .split(",")
    .map((k) => `  - ${k.trim()}`)
    .join("\n")}
hazards:
  level: ${form.hazardLevel}
  risks:
${form.risks
    .split(",")
    .map((k) => `    - ${k.trim()}`)
    .join("\n")}
measurement:
  mode: ${form.measurement}
---

# ${form.name}

${form.markdown}
`;
    }, [form, action, selectedRecipe]);

    function downloadFile() {
        const blob = new Blob([generatedMarkdown], {
            type: "text/markdown;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download =
            action === "delete"
                ? `delete-${selectedRecipe}.txt`
                : `${form.name.toLowerCase().replace(/\s+/g, "-")}.md`;

        a.click();
        URL.revokeObjectURL(url);
    }

    async function copyToClipboard() {
        await navigator.clipboard.writeText(generatedMarkdown);
    }

    return (
            <main className="min-h-screen bg-zinc-950 text-zinc-100">
                <section className="border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
                    <div className="mx-auto max-w-7xl px-6 py-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">
                            Contribution Tool
                        </p>

                        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
                            Senku Writer
                        </h1>

                        <p className="mt-5 max-w-3xl text-zinc-400">
                            Create, update, or request deletion of structured
                            Senku recipe data without manually writing metadata.
                        </p>
                    </div>
                </section>

                <section className="mx-auto max-w-7xl px-6 py-10">
                    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                        <div className="space-y-8">
                            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                                <h2 className="text-xl font-semibold">
                                    Select Action
                                </h2>

                                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                    {(["create", "update", "delete"] as const).map(
                                        (item) => (
                                            <button
                                                key={item}
                                                onClick={() => setAction(item)}
                                                className={`rounded-xl px-4 py-3 text-sm font-medium capitalize transition ${
                                                    action === item
                                                        ? "bg-emerald-500 text-black"
                                                        : "border border-zinc-700 bg-zinc-950 hover:bg-zinc-800"
                                                }`}
                                            >
                                                {item}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>

                            {(action === "update" ||
                                action === "delete") && (
                                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                                    <label className="text-sm font-medium text-zinc-300">
                                        Select Recipe
                                    </label>

                                    <select
                                        value={selectedRecipe}
                                        onChange={(e) =>
                                            setSelectedRecipe(e.target.value)
                                        }
                                        className="mt-3 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none"
                                    >
                                        {mockRecipes.map((item) => (
                                            <option key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            {action !== "delete" ? (
                                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 space-y-6">
                                    <h2 className="text-xl font-semibold">
                                        Recipe Form
                                    </h2>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <Input
                                            label="Name"
                                            value={form.name}
                                            onChange={(v) => {
                                                updateField("name", v);
                                                updateField(
                                                    "id",
                                                    generateId(v)
                                                );
                                            }}
                                        />

                                        <Input
                                            label="ID"
                                            value={form.id}
                                            onChange={(v) =>
                                                updateField("id", v)
                                            }
                                        />

                                        <Select
                                            label="Type"
                                            value={form.type}
                                            onChange={(v) =>
                                                updateField("type", v)
                                            }
                                            options={recipeTypes}
                                        />

                                        <Input
                                            label="Keywords (comma separated)"
                                            value={form.keywords}
                                            onChange={(v) =>
                                                updateField(
                                                    "keywords",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Requires"
                                            value={form.requires}
                                            onChange={(v) =>
                                                updateField(
                                                    "requires",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Produces"
                                            value={form.produces}
                                            onChange={(v) =>
                                                updateField(
                                                    "produces",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Byproducts"
                                            value={form.byproducts}
                                            onChange={(v) =>
                                                updateField(
                                                    "byproducts",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Temperature °C"
                                            value={form.temperature}
                                            onChange={(v) =>
                                                updateField(
                                                    "temperature",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Time Value"
                                            value={form.timeValue}
                                            onChange={(v) =>
                                                updateField(
                                                    "timeValue",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Time Unit"
                                            value={form.timeUnit}
                                            onChange={(v) =>
                                                updateField(
                                                    "timeUnit",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Terrain"
                                            value={form.terrain}
                                            onChange={(v) =>
                                                updateField(
                                                    "terrain",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Hazard Level"
                                            value={form.hazardLevel}
                                            onChange={(v) =>
                                                updateField(
                                                    "hazardLevel",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Risks"
                                            value={form.risks}
                                            onChange={(v) =>
                                                updateField(
                                                    "risks",
                                                    v
                                                )
                                            }
                                        />

                                        <Input
                                            label="Measurement Mode"
                                            value={form.measurement}
                                            onChange={(v) =>
                                                updateField(
                                                    "measurement",
                                                    v
                                                )
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label className="text-sm font-medium text-zinc-300">
                                            Guide Markdown
                                        </label>

                                        <textarea
                                            rows={14}
                                            value={form.markdown}
                                            onChange={(e) =>
                                                updateField(
                                                    "markdown",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                                    <h2 className="text-xl font-semibold">
                                        Delete Request
                                    </h2>

                                    <label className="mt-5 block text-sm font-medium text-zinc-300">
                                        Reason
                                    </label>

                                    <textarea
                                        rows={8}
                                        value={form.deleteReason}
                                        onChange={(e) =>
                                            updateField(
                                                "deleteReason",
                                                e.target.value
                                            )
                                        }
                                        className="mt-3 w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <h2 className="text-xl font-semibold">
                                        Generated Output
                                    </h2>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={copyToClipboard}
                                            className="rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800"
                                        >
                                            Copy
                                        </button>

                                        <button
                                            onClick={downloadFile}
                                            className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400"
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>

                                <pre className="mt-6 max-h-[800px] overflow-auto rounded-2xl bg-zinc-950 p-5 text-sm leading-7 text-zinc-300">
                                    {generatedMarkdown}
                                </pre>
                            </div>

                            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
                                <h2 className="text-xl font-semibold">
                                    Next Steps
                                </h2>

                                <ol className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
                                    <li>1. Copy or download the output.</li>
                                    <li>
                                        2. Fork the Senku Store repository.
                                    </li>
                                    <li>
                                        3. Add or replace the markdown file in
                                        the correct folder.
                                    </li>
                                    <li>
                                        4. Open Pull Request with clear notes.
                                    </li>
                                    <li>
                                        5. CI will validate the contribution.
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    );
}

function Input({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div>
            <label className="text-sm font-medium text-zinc-300">
                {label}
            </label>

            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-3 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none"
            />
        </div>
    );
}

function Select({
    label,
    value,
    onChange,
    options,
}: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    options: string[];
}) {
    return (
        <div>
            <label className="text-sm font-medium text-zinc-300">
                {label}
            </label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-3 w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none"
            >
                {options.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}