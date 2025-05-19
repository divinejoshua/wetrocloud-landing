import HeaderComponent from "@/app/components/Header";
import Image from 'next/image'
import claudeLogo from '@/app/assets/img/claude-logo.png'
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
import heroImage from "@/app/assets/img/hero-image.png"
import rightIcon from "@/app/assets/img/right-icon.png"
import { BOOK_CALL_URL, CONSOLE_URL, DOCS_DATA_EXTRACTION_URL, DOCS_IMAGE_TO_TEXT_URL, DOCS_QUICK_START_URL, DOCS_TEXT_GENERATION_API_URL } from "../constants/constants";
import FeaturesComponent from "../components/FeaturesComponent";



export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />
          <main className="flex-grow flex flex-col items-center justify-center mt-48 mx-auto max-width-90 mb-20">
            <h2 className="text-6xl font-medium text-blackconstant mb-4 max-w-5xl text-center">
            Query your data with <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text text-6xl"> LLMs </span>
            </h2>
            <p className="text-gray-500 text-lg mt-5 mb-1 max-w-4xl text-center">
            Convert any unstructured data to structured LLM ready data. Power your AI applications with clean structured markdown from all types of resources. Web, File, Image, Audio, Video & Youtube.
            </p>

            {/* CTA buttons */}
            <div className="block items-center justify-center mx-auto mt-6">
              <a href={CONSOLE_URL} target="_blank">
                <button className="w-full bg-black text-white shadow-sm px-8 py-4 rounded-full hover:bg-default transition mt-3 flex">
                  Get started for free
                  <Image src={rightIcon} alt="Wetrocloud" className='ml-3 button-icon'/>
              </button></a>
              <a href={BOOK_CALL_URL} target="_blank"><button className="w-full font-medium bg-white transition text-blackconstant px-8 py-4 rounded-full hover:bg-gray-100 mt-3">Book a demo </button></a>
            </div>

            {/* Hero image */}
            <div className="mt-10 w-full max-w-7xl bg-gray-100 py-20 px-10 rounded-lg shadow-sm">
              <Image src={heroImage} alt="Wetrocloud" className='w-full max-w-4xl mx-auto mt-10 rounded-lg'/> 
            </div>

            <p className="text-3xl mt-16 font-medium">Supported by leading models</p>

            {/* Model logos */}
            <div className="flex space-x-12 mt-10 mx-auto w-full justify-center">
              <div><Image src={claudeLogo} alt="Wetrocloud" className="model-logo mt-3"/></div>
              <div><Image src={openaiLogo} alt="Wetrocloud" className="model-logo mt-3"/></div>
              <div><Image src={metaLogo} alt="Wetrocloud" className="model-logo mt-4"/></div>
              <div><Image src={geminiLogo} alt="Wetrocloud" className="model-logo"/></div>
            </div>
            <p className="mt-10">All our model providers - Generate & Retrieve structured data with the LLM of your choice </p>


            {/* Features suite */}
            <section className="mt-20 w-full max-w-7xl">
              <FeaturesComponent/>
            </section>


            {/* Integrations */}
            <section className="mt-20">
              <h3 className="text-4xl font-medium text-center">With over 50+ integrations</h3>
              <p className="mt-7 text-gray-500 text-center">Wetrocloud Apps can be integrated into more than 100 softwares and APIs</p>
            
              {/* Integrations logos */}
              <div className="flex space-x-12 mt-16 mx-auto w-full justify-center">
                <div><Image src={slackLogo} alt="Wetrocloud" className="model-logo"/></div>
                <div><Image src={notionLogo} alt="Wetrocloud" className="model-logo mt-1"/></div>
                <div><Image src={gmailLogo} alt="Wetrocloud" className="model-logo mt-2"/></div>
                <div><Image src={whatsappLogo} alt="Wetrocloud" className="model-logo mt-2"/></div>
                <div><Image src={ms365Logo} alt="Wetrocloud" className="model-logo mt-2"/></div>
              </div>

              <div className="flex space-x-12 mt-10 mx-auto w-full justify-center">
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
