import Image from "next/image";
import HeaderComponent from "@/app/components/Header";
import FooterComponent from "@/app/components/Footer";
import GatewayCodeShowcase from "@/app/components/GatewayCodeShowcase";
import { BOOK_CALL_URL, CONSOLE_URL, DOCS_URL } from "../constants/constants";

import openaiLogo from "@/app/assets/img/openai-logo.png";
import claudeLogo from "@/app/assets/img/claude-logo.png";
import geminiLogo from "@/app/assets/img/gemini-logo.png";
import mistralLogo from "@/app/assets/img/mistral-logo.png";
import metaLogo from "@/app/assets/img/meta-logo.png";

const providers = [
  { src: openaiLogo, name: "OpenAI" },
  { src: claudeLogo, name: "Anthropic" },
  { src: geminiLogo, name: "Google Gemini" },
  { src: mistralLogo, name: "Mistral" },
  { src: metaLogo, name: "Meta Llama" },
];

const stats = [
  { value: "End-to-end", label: "From strategy to deployment" },
  { value: "RAG & Agents", label: "Our core specialties" },
  { value: "200+", label: "AI models we build with" },
  { value: "24/7", label: "Support & monitoring" },
];

const features = [
  {
    title: "Custom AI solutions & integrations",
    body: "Bespoke AI applications built around your workflows and wired into the tools your business already runs on.",
    icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.281z",
  },
  {
    title: "RAG systems",
    body: "Retrieval-augmented generation that grounds AI in your own data, so answers stay accurate, current, and source-backed.",
    icon: "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776",
  },
  {
    title: "Agent automation & setup",
    body: "Autonomous agents that handle multi-step work — research, operations, support — wired into your stack and monitored end to end.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z",
  },
  {
    title: "AI system audits",
    body: "Independent review of your existing AI systems for cost, performance, security, and reliability — with a clear roadmap to improve them.",
    icon: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z",
  },
];

const enterprise = [
  "Senior AI engineers, not juniors",
  "Production-grade, documented code",
  "Security & compliance built in (SOC 2, GDPR)",
  "Your data stays yours — zero retention",
  "Ongoing support & maintenance",
  "Flexible fixed-scope or retainer engagements",
];

const steps = [
  {
    step: "01",
    title: "Audit & discovery",
    body: "We map your goals, data, and existing systems — including a full AI audit where one's needed — to pinpoint the highest-impact opportunities.",
  },
  {
    step: "02",
    title: "Design & build",
    body: "We architect and develop your custom solution — RAG, agents, or integrations — with your team in the loop at every milestone.",
  },
  {
    step: "03",
    title: "Deploy & support",
    body: "We ship to production, hand over documentation, and keep your systems monitored, maintained, and continuously improving.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blacktext">
      <HeaderComponent />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden bg-white pt-40 pb-24">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-default/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs font-medium text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Custom AI development & automation
            </span>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-blackconstant md:text-6xl lg:text-7xl">
              Build custom{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl lg:text-7xl">
                AI solutions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
              Wetrocloud designs and builds custom AI applications and automation for
              businesses — from RAG systems and autonomous agents to integrations and
              AI system audits. We turn your AI ambitions into production-grade systems.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                className="w-full rounded-full bg-blackconstant px-8 py-3.5 font-medium text-white transition hover:bg-gray-800 sm:w-auto"
              >
                Book a consultation
              </a>
              <a
                href="#services"
                className="w-full rounded-full border border-gray-300 px-8 py-3.5 font-medium text-blacktext transition hover:bg-gray-50 sm:w-auto"
              >
                Explore our services
              </a>
            </div>

            {/* Provider strip */}
            <div className="mt-16">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                We build with the world&apos;s leading AI models
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {providers.map((p) => (
                  <Image
                    key={p.name}
                    src={p.src}
                    alt={p.name}
                    className="h-7 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Product: AI Gateway ---------------- */}
        <section className="bg-white pb-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-default">
                Our product
              </span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                The Wetrocloud AI Gateway
              </h2>
              <p className="mt-4 text-gray-500">
                Alongside our custom builds, we offer the Wetrocloud AI Gateway — one
                API to access 200+ LLMs with intelligent routing, caching, and
                failover. Use it in your own stack, or let us build on it for you.
              </p>
            </div>
            <GatewayCodeShowcase />
          </div>
        </section>

        {/* ---------------- Stats ---------------- */}
        <section className="border-y border-gray-200 bg-gray-50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-6 py-16 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-4 text-center">
                <div className="text-4xl font-semibold text-blackconstant md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              What we build
            </h2>
            <p className="mt-4 text-gray-500">
              End-to-end AI development — from strategy and audits to fully deployed
              systems your team can rely on.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white p-7 transition"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-default">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- How it works ---------------- */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                How we work
              </h2>
              <p className="mt-4 text-gray-500">
                A clear, collaborative process that takes you from idea to a
                production AI system — without the guesswork.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.step} className="relative">
                  <div className="text-sm font-semibold text-default">{s.step}</div>
                  <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Enterprise ---------------- */}
        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-default">
                Why teams choose us
              </span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                A partner you can build on
              </h2>
              <p className="mt-4 text-gray-500">
                We&apos;re an AI engineering team that ships. Businesses trust Wetrocloud
                to design, build, and maintain the AI systems they depend on — with
                security and reliability built in from day one.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  className="rounded-full bg-blackconstant px-7 py-3 text-center font-medium text-white transition hover:bg-gray-800"
                >
                  Talk to sales
                </a>
                <a
                  href={DOCS_URL}
                  target="_blank"
                  className="rounded-full border border-gray-300 px-7 py-3 text-center font-medium text-blacktext transition hover:bg-gray-50"
                >
                  Read the docs
                </a>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {enterprise.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}
