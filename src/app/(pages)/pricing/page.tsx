import HeaderComponent from "@/app/components/Header";
import Image from 'next/image'
import pricingHeroIg from '@/app/assets/img/pricing-hero-img.png'
import developerIcon from '@/app/assets/img/developer-pricing-icon.png'
import startupIcon from '@/app/assets/img/startup-pricing-icon.png'
import enterpriseIcon from '@/app/assets/img/enterprise-pricing-icon.png'

import FooterComponent from "@/app/components/Footer";
import { REGISTER_DEVELOPER_URL, REGISTER_ENTERPRISE_URL, REGISTER_STARTUP_URL } from "@/app/constants/constants";



export default function Home() {
  return (
    <div>
        {/* Header */}
        <HeaderComponent />
          <main className="flex-grow flex flex-col items-center justify-center mt-16 mx-auto max-width-90 mb-20">

            {/* Hero image */}
            <Image src={pricingHeroIg} alt="Wetrocloud" className='mt-10 h-80 rounded-lg'/>


            {/* Pricing */}
            <section className="mt-20">
              <h3 className="text-4xl font-medium text-center">Pricing</h3>

              <p className="mt-3 text-gray-500 text-center">Pricing available for all services and APIs</p>


                <div className="bg-white py-16">
                  <div className="container mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg suite-card flex flex-col justify-between">
                        <div>
                          <Image src={developerIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Developer</h3>
                          <div className="text-gray-600 mt-6">
                            <span className="text-4xl">$0.9</span> <span className="text-gray-400">/ 200K tokens</span>
                          </div>
                        </div>
                        <a href={REGISTER_DEVELOPER_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Get started</button></a>
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg suite-card flex flex-col justify-between">
                        <div>
                          <Image src={startupIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Startup</h3>
                          <div className="text-gray-600 mt-6">
                            <span className="text-4xl">$99</span> <span className="text-gray-400">/ month</span>
                            <p className="mt-5 text-gray-400">20M tokens</p>
                            <p className="mb-5 text-gray-400">Automatic monthly Token renewal</p>
                          </div>
                        </div>
                        <a href={REGISTER_STARTUP_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Get started</button></a>
                        </div>

                        <div className="border border-gray-200 px-6 pt-6 pb-10 rounded-lg suite-card flex flex-col justify-between">
                        <div>
                          <Image src={enterpriseIcon} alt="Wetrocloud" className="suite-icon mt-3 mb-7"/>
                          <h3 className="text-lg font-medium text-gray-800 mb-4">Enterprise</h3>
                          <div className="text-gray-600 mt-6">
                            <p className="mt-5 text-gray-400">Up to <span className="medium">$1,000</span> free AI credit / tokens for first month</p>
                            <p className="mt-5 text-gray-400">Maximise AI usage to the fullest with enterprise level AI infrastructure</p>
                          </div>
                        </div>
                        <a href={REGISTER_ENTERPRISE_URL} target="_blank"><button className="bg-black text-white py-2 px-6 rounded-sm hover:bg-blue-950 w-fit">Get started</button></a>
                        </div>

                    </div>
                  </div>
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
