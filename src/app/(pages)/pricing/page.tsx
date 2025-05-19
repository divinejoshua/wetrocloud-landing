import HeaderComponent from "@/app/components/Header";
import FooterComponent from "@/app/components/Footer";
import PricingPlansComponent from "@/app/components/PricingPlansComponent";



export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />
          <main className="flex-grow flex flex-col items-center justify-center mt-48 mx-auto max-width-90 mb-20">

            {/* Hero */}
            <h2 className="text-6xl font-medium text-blackconstant mb-4 max-w-5xl text-center">
              Pricing
            </h2>
            <p className="text-gray-500 text-lg mt-5 mb-1 max-w-4xl text-center">
              Pricing available for all services and APIs
            </p>


          {/* Pricing plans */}
          <section className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-16 mx-auto">
          <PricingPlansComponent />
          </section>

          </main>

        {/* Footer component */}
        <FooterComponent />


    </div>
  );
}
