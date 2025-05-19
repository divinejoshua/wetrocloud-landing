"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

/** -------------------------------------------------------------------
 *  FeaturesSection.jsx
 *  -------------------------------------------------------------------
 *  Replicates the marketing code‑snippet section shown in the reference
 *  screenshot. The UI is split into two product categories –
 *  "Data Extraction API" and "RAG API" – each with a trio of feature
 *  cards and a language‑toggleable live code block.
 *  -------------------------------------------------------------------
 */

// ---------------------------------------------------------------------
// Demo snippets – replace with your own real examples later
// ---------------------------------------------------------------------
const DEMO_SNIPPETS = {
  "data-extraction": {
    python: `# pip install wetrocloud\nfrom wetrocloud import WetrocloudApp\napp = WetrocloudApp(api_key="wc-YOUR_API_KEY")\napp.scrape_url('wetrocloud.dev')`,
    node: `// npm i wetrocloud\nimport { WetrocloudApp } from 'wetrocloud'\nconst app = new WetrocloudApp({ apiKey: 'wc-YOUR_API_KEY' })\nawait app.scrapeUrl('wetrocloud.dev')`,
    curl: `curl --request POST \\\n  --url https://api.wetrocloud.com/scrape \\\n  --header 'x-api-key: wc-YOUR_API_KEY' \\\n  --data '{"url": "wetrocloud.dev"}'`,
  },
  rag: {
    python: `from ragcloud import RagClient\nclient = RagClient(api_key="rc-KEY")\nanswer = client.query("What is vector search?")\nprint(answer)`,
    node: `import { RagClient } from 'ragcloud'\nconst client = new RagClient('rc-KEY')\nconsole.log(await client.query('What is vector search?'))`,
    curl: `curl -H "x-api-key: rc-KEY" \\\n  -d '{"query":"What is vector search?"}' \\\n  https://api.ragcloud.dev/query`,
  },
};

// ---------------------------------------------------------------------
// Shared helper components
// ---------------------------------------------------------------------
const TabButton = ({ id, label, active, onClick } : any) => (
  <button
    onClick={() => onClick(id)}
    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
      active ? "bg-white text-black shadow" : "text-gray-300"
    }`}
  >
    {label}
  </button>
);

const CodeBlock = ({ language, code } : any) => (
  <div className="relative">
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{ borderRadius: "0.75rem", padding: "1rem" }}
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>

    {/* Copy button */}
    <button
      onClick={(event: any) => {
        navigator.clipboard.writeText(code);
        const button = event.currentTarget;
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      }}
      className="absolute top-2 right-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors bg-muted/50 text-gray-300 hover:text-white"
    >
      Copy
    </button>
  </div>
);

const FeatureCard = ({ title, children } : any) => (
  <div className="flex flex-col gap-2 bg-muted/50 rounded-2xl p-6 backdrop-blur-lg shadow-inner max-w-xs w-full">
    <h3 className="font-medium text-md text-white">{title}</h3>
    <p className="text-sm leading-relaxed text-gray-300">{children}</p>
  </div>
);

// ---------------------------------------------------------------------
// Category block (cards + snippet)
// ---------------------------------------  ------------------------------
function Category({ id, heading, features } : any) {
  const [lang, setLang] = useState("python");
  const snippets = DEMO_SNIPPETS[id];

  return (
    <section className="w-full flex flex-col items-center py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xl text-center text-white"
      >
        {heading}
      </motion.h2>

      {/* feature cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>

      {/* language tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-5xl mx-auto text-center space-y-6 p-4"
      >
        <div className="flex justify-center gap-2 bg-muted rounded-xl p-1 shadow-inner w-fit mt-5">
          {[
            { id: "python", label: "Python" },
            { id: "node", label: "Node.js" },
            { id: "curl", label: "cURL" },
          ].map((tab) => (
            <TabButton key={tab.id} {...tab} active={lang === tab.id} onClick={setLang} />
          ))}
        </div>

        <div className="mt-4 text-left">
          {lang === "python" && <CodeBlock language="python" code={snippets.python} />}
          {lang === "node" && <CodeBlock language="javascript" code={snippets.node} />}
          {lang === "curl" && <CodeBlock language="bash" code={snippets.curl} />}
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------
// Main exported component
// ---------------------------------------------------------------------
export default function FeaturesSection() {
  return (
    <div className="w-full flex flex-col">
      <Category
        id="data-extraction"
        heading="Data Extraction API"
        features={[
          {
            title: "Files",
            children: "Get LLM‑ready data from any data source: PDF, Excel, CSV, JSON, and more.",
          },
          {
            title: "Web",
            children: "Scrape any website and collect structured data automatically.",
          },
          {
            title: "Media",
            children: "Extract LLM ready data from videos, audio, YouTube, TikTok, and more.",
          },
        ]}
      />

      <Category
        id="rag"
        heading="Fully Managed RAG API"
        features={[
          {
            title: "Insert resources",
            children: "Embed and store documents in highly‑optimized vector indices in minutes.",
          },
          {
            title: "Query resources",
            children: "Ask natural‑language questions and get fully‑referenced answers instantly.",
          },
        ]}
      />
    </div>
  );
}
