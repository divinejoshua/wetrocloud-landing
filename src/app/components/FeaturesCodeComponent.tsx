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
    python: `#pip install wetro
import requests

url = "https://api.wetrocloud.com/v2/markdown-converter/"

payload = {
  'link': 'https://docs.wetrocloud.com/quickstart',
  'resource_type': 'file'
}
files=[

]
headers = {
  'Authorization': 'Token <YOUR_API_KEY>'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
`,
    node: `//npm install wetro-sdk\nconst axios = require('axios');\nconst FormData = require('form-data');\nlet data = new FormData();\ndata.append('link', 'https://docs.wetrocloud.com/quickstart');\ndata.append('resource_type', 'file');\nlet config = {  method: 'post',  maxBodyLength: Infinity, url: 'https://api.wetrocloud.com/v2/markdown-converter/',headers: {'Authorization': 'Token YOUR_API_KEY',     ...data.getHeaders()  },  data : data};\naxios.request(config).then((response) => {  console.log(JSON.stringify(response.data));})
      .catch((error) => {  console.log(error);});`,
    curl: `curl --location 'https://api.wetrocloud.com/v2/markdown-converter/' \
    \n--header 'Authorization: Token YOUR_API_KEY' \
    \n--form 'link="https://docs.wetrocloud.com/quickstart"' \
    \n--form 'resource_type="file"'`,
  },
  rag: {
    python: `# pip install wetro\n\nfrom wetro import Wetrocloud

# initialize client
client = Wetrocloud(api_key="YOUR_API_KEY")

# --- 1. create / ensure collection exists ---
client.collection.create_collection(collection_id="quickstart")

# --- 2. insert a web resource ---
client.collection.insert_resource(
    collection_id="quickstart",
    resource="https://docs.wetrocloud.com/quickstart",
    type="web",
)

# --- 3. query the collection ---
response = client.collection.query_collection(
    collection_id="quickstart",
    request_query="What are the key points?",
)
print(response)`,
    node: `//npm install wetro-sdk\n
import Wetrocloud from 'wetro-sdk'

const client = new Wetrocloud({ apiKey: 'YOUR_API_KEY' })

// 1. create / ensure collection exists
await client.createCollection({ collection_id: 'quickstart' })

// 2. insert a resource
await client.insertResource({
  collection_id: 'quickstart',
  resource: 'https://docs.wetrocloud.com/quickstart',
  type: 'web'
})

// 3. query the collection
const response = await client.queryCollection({
  collection_id: 'quickstart',
  request_query: 'What are the key points?'
})
console.log(response)`,
    curl: `# 1. create / ensure collection exists
curl --request POST \
  --url https://api.wetrocloud.com/v1/collection/create/ \
  --header 'Authorization: Token YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"collection_id":"quickstart"}'

# 2. insert a resource
curl --request POST \
  --url https://api.wetrocloud.com/v1/resource/insert/ \
  --header 'Authorization: Token YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"collection_id":"quickstart","resource":"https://docs.wetrocloud.com/quickstart","type":"web"}'

# 3. query the collection
curl --request POST \
  --url https://api.wetrocloud.com/v1/collection/query/ \
  --header 'Authorization: Token YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"collection_id":"quickstart","request_query":"What are the key points?"}'`,
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
        className="text-2xl text-center text-white"
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
