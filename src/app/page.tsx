import HeaderComponent from "./components/Header";
import Image from 'next/image'
import heroImage from '@/app/assets/img/hero-img.png'


export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />
          <main className="flex-grow flex flex-col items-center justify-center text-center mt-32 max-width-90 mx-auto">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 max-w-5xl">
              Scale your business with custom AI solutions
            </h2>
            <p className="text-gray-500 text-lg mt-5 mb-8 max-w-xl">
              Empower your business with tailored AI solutions. Increase work rate and efficiency by 600%.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-sm hover:bg-blue-950">Get started for free</button>
              <button className="bg-white text-blue-950 px-6 py-3 rounded-sm border border-blue-950">Book a demo</button>
            </div>

            <Image src={heroImage} alt="Wetrocloud" className='hero-image mt-10'/>

            <p className="text-3xl mt-10"><span className="text-2xl text-default">20x</span> faster than traditional AI models with the use of inference</p>
          </main>
    </div>
  );
}
