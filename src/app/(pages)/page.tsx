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
  { value: "200+", label: "Models, one endpoint" },
  { value: "99.99%", label: "Gateway uptime SLA" },
  { value: "<50ms", label: "Routing overhead" },
  { value: "40%", label: "Avg. cost reduction" },
];

const features = [
  {
    title: "Intelligent routing",
    body: "Route every request to the best model by cost, latency, or quality. Load-balance across providers and regions automatically.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Cost controls & budgets",
    body: "Set hard spend limits per team, key, or project. Real-time usage analytics and alerts keep AI bills predictable.",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Semantic caching",
    body: "Cut latency and spend with response caching that understands meaning, not just exact-match keys. Configurable per route.",
    icon: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z",
  },
  {
    title: "Automatic fallbacks",
    body: "Define ordered fallback chains so a provider outage never takes down your product. Retries and failover happen in-flight.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99",
  },
  {
    title: "Unified observability",
    body: "Trace every prompt, token, and dollar across providers in one dashboard. Export logs to your SIEM and data warehouse.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Enterprise security",
    body: "SOC 2 Type II, SSO/SAML, role-based access, and zero data retention. Deploy in your own VPC for full data residency.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

const enterprise = [
  "SOC 2 Type II & GDPR compliant",
  "SSO / SAML & SCIM provisioning",
  "Role-based access control (RBAC)",
  "Private VPC & on-prem deployment",
  "99.99% uptime SLA & 24/7 support",
  "Zero data retention by default",
];

const steps = [
  {
    step: "01",
    title: "Point your SDK at the gateway",
    body: "Change one base URL. Keep the OpenAI-compatible SDK you already use — no rewrites, no new abstractions.",
  },
  {
    step: "02",
    title: "Choose models & policies",
    body: "Pick from 200+ models and set routing, caching, fallback, and budget policies per team or environment.",
  },
  {
    step: "03",
    title: "Ship & govern at scale",
    body: "Monitor spend, latency, and quality across every provider from a single pane of glass with full audit trails.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-blacktext">
      <HeaderComponent />

      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden bg-blackconstant text-white pt-40 pb-24">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-default/20 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              The enterprise AI gateway
            </span>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              One API for every
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                AI model in production
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
              Wetrocloud routes, caches, and governs traffic to 200+ LLMs through a
              single endpoint — with enterprise-grade security, automatic failover,
              and costs you can actually predict.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CONSOLE_URL}
                target="_blank"
                className="w-full rounded-full bg-white px-8 py-3.5 font-medium text-black transition hover:bg-gray-200 sm:w-auto"
              >
                Start for free
              </a>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                className="w-full rounded-full border border-white/20 px-8 py-3.5 font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                Book a demo
              </a>
            </div>

            {/* Provider strip */}
            <div className="mt-16">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Unified access to leading model providers
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80">
                {providers.map((p) => (
                  <Image
                    key={p.name}
                    src={p.src}
                    alt={p.name}
                    className="h-7 w-auto object-contain brightness-0 invert"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- Code showcase ---------------- */}
        <section className="bg-blackconstant pb-28 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Integrate in minutes, not migrations
              </h2>
              <p className="mt-4 text-gray-400">
                Keep the OpenAI-compatible SDK you already use. Change one line, and
                instantly reach every provider with routing and failover built in.
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

        {/* ---------------- Features ---------------- */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              The control plane for production AI
            </h2>
            <p className="mt-4 text-gray-500">
              Everything platform teams need to run LLMs reliably, securely, and
              cost-effectively at enterprise scale.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition hover:border-default hover:shadow-lg"
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
                Live in three steps
              </h2>
              <p className="mt-4 text-gray-500">
                From first request to organization-wide rollout without re-architecting
                your stack.
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
        <section className="bg-blackconstant py-24 text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Built for the enterprise
              </span>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Security and compliance, by default
              </h2>
              <p className="mt-4 text-gray-400">
                Wetrocloud is the trusted gateway between your applications and the
                world&apos;s AI models. Govern access, protect sensitive data, and meet
                your compliance obligations — without slowing teams down.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  className="rounded-full bg-white px-7 py-3 text-center font-medium text-black transition hover:bg-gray-200"
                >
                  Talk to sales
                </a>
                <a
                  href={DOCS_URL}
                  target="_blank"
                  className="rounded-full border border-white/20 px-7 py-3 text-center font-medium text-white transition hover:bg-white/10"
                >
                  Read the docs
                </a>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {enterprise.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400"
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
                  <span className="text-sm text-gray-200">{item}</span>
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
