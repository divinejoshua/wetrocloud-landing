"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * GatewayCodeShowcase
 * -------------------
 * Marketing code block that demonstrates the core promise of an AI gateway:
 * one endpoint, any model. Users can flip between languages and see how a
 * single integration routes to OpenAI, Anthropic, Google and more.
 */

const SNIPPETS = {
  python: `# pip install openai
from openai import OpenAI

# Point any OpenAI-compatible SDK at the Wetrocloud gateway
client = OpenAI(
    base_url="https://gateway.wetrocloud.com/v1",
    api_key="wetro_sk_live_..."
)

# Swap models with a single string — no code changes
response = client.chat.completions.create(
    model="anthropic/claude-opus-4",   # or openai/gpt-4o, google/gemini-2.5-pro
    messages=[{"role": "user", "content": "Summarize Q3 revenue."}],
    extra_body={
        "fallbacks": ["openai/gpt-4o"],   # automatic failover
        "cache": True,                     # semantic caching
    },
)

print(response.choices[0].message.content)`,

  node: `// npm install openai
import OpenAI from "openai";

// Point any OpenAI-compatible SDK at the Wetrocloud gateway
const client = new OpenAI({
  baseURL: "https://gateway.wetrocloud.com/v1",
  apiKey: process.env.WETRO_API_KEY,
});

// Swap models with a single string — no code changes
const response = await client.chat.completions.create({
  model: "anthropic/claude-opus-4", // or openai/gpt-4o, google/gemini-2.5-pro
  messages: [{ role: "user", content: "Summarize Q3 revenue." }],
  // @ts-expect-error gateway extensions
  fallbacks: ["openai/gpt-4o"], // automatic failover
  cache: true,                   // semantic caching
});

console.log(response.choices[0].message.content);`,

  curl: `curl https://gateway.wetrocloud.com/v1/chat/completions \\
  -H "Authorization: Bearer $WETRO_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "anthropic/claude-opus-4",
    "messages": [{ "role": "user", "content": "Summarize Q3 revenue." }],
    "fallbacks": ["openai/gpt-4o"],
    "cache": true
  }'`,
};

const TABS = [
  { id: "python", label: "Python" },
  { id: "node", label: "Node.js" },
  { id: "curl", label: "cURL" },
] as const;

type Lang = (typeof TABS)[number]["id"];

const LANG_MAP: Record<Lang, string> = {
  python: "python",
  node: "javascript",
  curl: "bash",
};

export default function GatewayCodeShowcase() {
  const [lang, setLang] = useState<Lang>("python");
  const [copied, setCopied] = useState(false);

  const code = SNIPPETS[lang];

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-black/40 p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setLang(tab.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                lang === tab.id
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="text-xs font-medium text-gray-400 hover:text-white transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <SyntaxHighlighter
        language={LANG_MAP[lang]}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          background: "transparent",
          fontSize: "0.8rem",
        }}
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
