import HeaderComponent from "@/app/components/Header";
import Image from 'next/image'
import mistralLogo from '@/app/assets/img/mistral-logo.png'
import openaiLogo from '@/app/assets/img/openai-logo.png'
import metaLogo from '@/app/assets/img/meta-logo.png'
import geminiLogo from '@/app/assets/img/gemini-logo.png'
import ragIcon from '@/app/assets/img/rag-icon.png'
import textGenerationIcon from '@/app/assets/img/text-generation-icon.png'
import imageGenerationIcon from '@/app/assets/img/image-generation-icon.png'
import audioIcon from '@/app/assets/img/audio-icon.png'
import videoTranscribeIcon from '@/app/assets/img/video-transcriber.png'
import textExtractIcon from '@/app/assets/img/text-extract-icon.png'
import slackLogo from '@/app/assets/img/slack-logo.png'
import notionLogo from '@/app/assets/img/notion-logo.png'
import gmailLogo from '@/app/assets/img/gmail-logo.png'
import whatsappLogo from '@/app/assets/img/whatsapp-logo.png'
import ms365Logo from '@/app/assets/img/microsoft-logo.png'
import stripeLogo from '@/app/assets/img/stripe-logo.png'
import adobeLogo from '@/app/assets/img/adobe-logo.png'
import shopifyLogo from '@/app/assets/img/shopify-logo.png'
import discordLogo from '@/app/assets/img/discord-logo.png'
import githubLogo from '@/app/assets/img/github-logo.png'
import FooterComponent from "@/app/components/Footer";
import { BOOK_CALL_URL, CONSOLE_URL, DOCS_DATA_EXTRACTION_URL, DOCS_IMAGE_TO_TEXT_URL, DOCS_QUICK_START_URL, DOCS_TEXT_GENERATION_API_URL } from "../constants/constants";



export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />
          <main className="flex-grow flex flex-col items-center justify-center mt-32 mx-auto max-width-90 mb-20">
            <h2 className="text-5xl font-medium text-black mb-4 max-w-5xl text-center">
              AI <span className="text-5xl font-medium">+</span> <span className="text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">Your Resources</span>.
            </h2>
            <p className="text-gray-500 text-lg mt-5 mb-1 max-w-xl text-center">
                Build, Deploy, and Scale with Our RAG and Agents APIs.
            </p>
            <p className="text-gray-500 text-lg mb-5 max-w-xlr">
                AI inference with 10X speed.
            </p>
            <div className="block sm:flex space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center max-width-90 mx-auto">
              <a href={CONSOLE_URL} target="_blank"><button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-sm hover:bg-blue-950 mt-3">Get started for free</button></a>
              <a href={BOOK_CALL_URL} target="_blank"><button className="w-full sm:w-auto bg-white text-blue-950 px-6 py-3 rounded-sm border border-blue-950 mt-3">Schedule a call </button></a>
            </div>

            {/* Hero image */}
            {/* <Image src={heroImage} alt="Wetrocloud" className='hero-image mt-10 rounded-lg'/> */}
            <div className="mt-10 w-full max-w-[800px] aspect-video">
              <iframe 
              src="https://www.youtube.com/embed/cDFBfpaHg_4?si=eFle_WBHUFJfwhl0" 
              className="w-full h-full"
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>

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
              <h3 className="text-4xl font-medium text-center">Custom AI Software suite</h3>

              <p className="mt-7 text-gray-500 text-center">Wetrocloud provides various custom tools that you can use to automate your workflow</p>


                <div className="bg-white py-16">
                  <div className="container mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg suite-card flex flex-col justify-between">
                        <div>
                          <Image src={ragIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">RAG and AI Agent APIs</h3>
                          <p className="text-gray-600 mt-6">
                          Powerful and easy-to-integrate RAG and AI Agent APIs to enhance your AI infrastructure. Seamlessly connect, retrieve, and generate intelligent responses for advanced applications.
                          </p>
                        </div>
                        <a href={DOCS_QUICK_START_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button></a>
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg suite-card flex flex-col justify-between">
                        <div>
                          <Image src={textGenerationIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Text generation</h3>
                          <p className="text-gray-600">
                          Text generation allows AI systems to create human-like written content by predicting and generating sequences of words based on given prompts.
                          </p>
                        </div>
                        <a href={DOCS_TEXT_GENERATION_API_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button></a>
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg suite-card flex flex-col justify-between">
                        <div>
                          <Image src={imageGenerationIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Image recognition (OCR)</h3>
                          <p className="text-gray-600">
                          Extract text from images and documents with high accuracy using our OCR APIs. Perfect for digitizing documents, automating data entry, and processing visual information.
                          </p>
                        </div>
                        <a href={DOCS_IMAGE_TO_TEXT_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button></a>
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-sm suite-card flex flex-col justify-between">
                        <div>
                          <Image src={audioIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Text to Audio</h3>
                          <p className="text-gray-600">
                          Convert text into natural, lifelike speech with Text-to-Audio APIs. Perfect for voice assistants, podcasts, and accessibility solutions.
                          </p>
                        </div>
                        {/* <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button> */}
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-sm suite-card flex flex-col justify-between">
                        <div>
                          <Image src={videoTranscribeIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Video transcriber</h3>
                          <p className="text-gray-600">
                          Effortlessly transcribe video audio into accurate text with Video Transcriber APIs. Ideal for captions, subtitles, and content analysis.
                          </p>
                        </div>
                        {/* <button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button> */}
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-sm suite-card flex flex-col justify-between">
                        <div>
                          <Image src={textExtractIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Data extraction</h3>
                          <p className="text-gray-600">
                          Extract valuable insights from text and data with powerful extraction APIs. Ideal for document processing, automation, and analytics.
                          </p>
                        </div>
                        <a href={DOCS_DATA_EXTRACTION_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Learn more</button></a>
                        </div>

                    </div>
                  </div>
                </div>
            </section>


            {/* Integrations */}
            <section className="mt-20">
              <h3 className="text-4xl font-medium text-center">With over 50+ integrations</h3>
              <p className="mt-7 text-gray-500 text-center">Wetrocloud Apps can be integrated into more than 100 softwares and APIs</p>
            
              {/* Integrations logos */}
              <div className="flex space-x-16 mt-16 mx-auto w-full justify-center">
                <div><Image src={slackLogo} alt="Wetrocloud" className="model-logo"/></div>
                <div><Image src={notionLogo} alt="Wetrocloud" className="model-logo mt-1"/></div>
                <div><Image src={gmailLogo} alt="Wetrocloud" className="model-logo mt-2"/></div>
                <div><Image src={whatsappLogo} alt="Wetrocloud" className="model-logo mt-2"/></div>
                <div><Image src={ms365Logo} alt="Wetrocloud" className="model-logo mt-2"/></div>
              </div>

              <div className="flex space-x-16 mt-10 mx-auto w-full justify-center">
                <div><Image src={stripeLogo} alt="Wetrocloud" className="model-logo"/></div>
                <div><Image src={adobeLogo} alt="Wetrocloud" className="model-logo mt-3"/></div>
                <div><Image src={shopifyLogo} alt="Wetrocloud" className="model-logo mt-2"/></div>
                <div><Image src={discordLogo} alt="Wetrocloud" className="model-logo mt-2"/></div>
                <div><Image src={githubLogo} alt="Wetrocloud" className="model-logo"/></div>
              </div>

            </section>


            {/* Why use wetrocloud */}
            <section className="mt-24 mb-20">
            <h3 className="text-4xl font-medium text-center">Why use wetrocloud?</h3>

              <div className="container mx-auto mt-20 max-w-3xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                      <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg h-80 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Privacy and security</h3>
                          <p className="text-gray-600 mt-6">
                          WetroCloud ensures top-tier privacy and security, keeping your data protected with robust encryption and compliance standards. Your sensitive information remains confidential, giving you full control over access and usage.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg h-80 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Personalized Customer Experience</h3>
                          <p className="text-gray-600">
                          AI-powered tools tailor recommendations, marketing messages, and support responses to individual customer needs, improving satisfaction and engagement.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg h-80 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Cost Optimisation</h3>
                          <p className="text-gray-600">
                          Automating processes and optimizing resource allocation reduce operational expenses, increasing overall profitability.
                          </p>
                        </div>
                      </div>

                      <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg h-80 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Scalability</h3>
                          <p className="text-gray-600">
                          WetroCloud offers seamless scalability to handle growing workloads efficiently. Easily expand resources as your needs evolve without compromising performance.
                          </p>
                        </div>
                      </div>
                  </div>
              </div>

            </section>
          </main>

        {/* Footer component */}
        <FooterComponent />


    </div>
  );
}
