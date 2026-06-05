import HeaderComponent from "@/app/components/Header";
import FooterComponent from "@/app/components/Footer";
import { BOOK_CALL_URL, CONSOLE_URL } from "../constants/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderComponent />
      
      <main className="container mx-auto px-6 pt-24 pb-20">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Models at scale for <br />
            <span className="text-primary">Agentic Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-10">
            Wetrocloud provides the control plane for engineering teams to manage, 
            optimize, and predict AI costs. Stop worrying about unpredictable bills 
            and focus on building.
          </p>
          <div className="flex gap-4">
            <a href={CONSOLE_URL} target="_blank" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition">
              Get started
            </a>
            <a href={BOOK_CALL_URL} target="_blank" className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary/80 transition">
              Book a demo
            </a>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 border-t border-border">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Cost Optimization</h3>
              <p className="text-muted-foreground">
                Granular visibility into your AI spend. Set budgets and alerts to 
                prevent runaway costs before they happen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Model Management</h3>
              <p className="text-muted-foreground">
                Easily switch between top-tier models. Route requests based on 
                performance, cost, or latency requirements.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Agentic Control</h3>
              <p className="text-muted-foreground">
                Specifically designed for agentic workflows. Manage complex 
                multi-step interactions with predictable billing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </div>
  );
}
