import HeaderComponent from "./components/Header";
import Image from 'next/image'
import heroImage from '@/app/assets/img/hero-img.png'
import mistralLogo from '@/app/assets/img/mistral-logo.png'
import openaiLogo from '@/app/assets/img/openai-logo.png'
import metaLogo from '@/app/assets/img/meta-logo.png'
import geminiLogo from '@/app/assets/img/gemini-logo.png'
import ragIcon from '@/app/assets/img/rag-icon.png'
import textGenerationIcon from '@/app/assets/img/text-generation-icon.png'
import imageGenerationIcon from '@/app/assets/img/image-generation-icon.png'


export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />
          <main className="flex-grow flex flex-col items-center justify-center mt-32 mx-auto max-width-90 mb-20">
            <h2 className="text-5xl font-medium text-black mb-4 max-w-5xl text-center">
              Scale your business with custom AI solutions
            </h2>
            <p className="text-gray-500 text-lg mt-5 mb-8 max-w-xl text-center">
              Empower your business with tailored AI solutions. Increase work rate and efficiency by 600%.
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-sm hover:bg-blue-950">Get started for free</button>
              <button className="bg-white text-blue-950 px-6 py-3 rounded-sm border border-blue-950">Book a demo</button>
            </div>

            {/* Hero image */}
            <Image src={heroImage} alt="Wetrocloud" className='hero-image mt-10'/>

            <p className="text-3xl mt-16 font-medium"><span className="text-3xl font-medium text-default">20x</span> faster than traditional AI models with the use of inference</p>

            {/* Model logos */}
            <div className="flex space-x-12 mt-16 mx-auto w-full justify-center">
              <div><Image src={mistralLogo} alt="Wetrocloud" className="model-logo mt-3"/></div>
              <div><Image src={openaiLogo} alt="Wetrocloud" className="model-logo mt-3"/></div>
              <div><Image src={metaLogo} alt="Wetrocloud" className="model-logo mt-4"/></div>
              <div><Image src={geminiLogo} alt="Wetrocloud" className="model-logo"/></div>
            </div>


            {/* AI suite */}
            <section className="mt-20">
              <h4 className="text-4xl font-medium text-center">Custom AI Software suite</h4>

              <p className="mt-7 text-gray-500 text-center">Wetrocloud provides various custom tools that you can use to automate your workflow</p>


                <div className="bg-white py-16">
                  <div className="container mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-gray-200 p-6 rounded-sm h-80 flex flex-col justify-between">
                        <div>
                          <Image src={ragIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">RAG and AI Agent APIs</h3>
                          <p className="text-gray-600">
                          Easy to integrate APIs to build your AI Infrastructure.
                          </p>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-sm h-80 flex flex-col justify-between">
                        <div>
                          <Image src={textGenerationIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Text to Audio</h3>
                          <p className="text-gray-600">
                          Convert text to audio seamlessly.
                          </p>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-sm h-80 flex flex-col justify-between">
                        <div>
                          <Image src={imageGenerationIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Video Transcriber</h3>
                          <p className="text-gray-600">
                          Transcribe videos with high accuracy.
                          </p>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-sm h-80 flex flex-col justify-between">
                        <div>
                          <Image src={ragIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">RAG and AI Agent APIs</h3>
                          <p className="text-gray-600">
                          Easy to integrate APIs to build your AI Infrastructure.
                          </p>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-sm h-80 flex flex-col justify-between">
                        <div>
                          <Image src={textGenerationIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Text to Audio</h3>
                          <p className="text-gray-600">
                          Convert text to audio seamlessly.
                          </p>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-sm h-80 flex flex-col justify-between">
                        <div>
                          <Image src={imageGenerationIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Video Transcriber</h3>
                          <p className="text-gray-600">
                          Transcribe videos with high accuracy.
                          </p>
                        </div>
                        <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button>
                        </div>

                    


                    </div>
                  </div>
                </div>
            </section>

          </main>
    </div>
  );
}
