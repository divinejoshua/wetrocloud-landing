import HeaderComponent from "./components/Header";

export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />

        <div className="min-h-screen flex flex-col items-center justify-center">

        <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Scale your business with custom AI solutions
          </h2>
          <p className="text-gray-600 mb-8">
            Empower your business with tailored AI solutions. Increase work rate and efficiency by 600%.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get started for free
            </button>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg border border-blue-600 hover:bg-blue-50">
              Book a demo
            </button>
          </div>
          <p className="text-gray-600 mt-8">
            Reduce workload and increase productivity.
          </p>
        </main>
      </div>
    </div>
  );
}
