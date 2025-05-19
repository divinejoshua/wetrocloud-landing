import linkedInLogo from '@/app/assets/img/linkedin-social-icon.png'
import emailLogo from '@/app/assets/img/email-social-icon.png'
import youtubeLogo from '@/app/assets/img/youtube-logo.png'
import discordLogo from '@/app/assets/img/discord-social-icon.png'
import Image from 'next/image'
import { API_REFERENCES_URL, BLOG_URL, BOOK_CALL_URL, CONSOLE_URL, DISCORD_URL, DOCS_RAG_API_URL, DOCS_TEXT_GENERATION_API_URL, LINKEDIN_URL, PLAYGROUND_URL, PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL, YOUTUBE_URL } from '../constants/constants'
import Link from 'next/link'

export default function FooterComponent() {
  return (
    <div>

        {/* Customer testimonials */}
        <section className="w-full py-12 bg-white max-w-7xl px-3 mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-10">What Our Customers Are Saying</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto px-4">
              <div className="flex-1 bg-white rounded-lg shadow-none border border-gray-100 p-6 flex flex-col justify-between text-left">
                <p className="text-gray-700 text-base mb-6">
                  &quot;Integrating the Fully Managed RAG API was a game-changer for our team. It streamlined our data retrieval and boosted our AI capabilities without any extra maintenance on our end. Highly recommend!&quot;
                </p>
                <div className="flex items-center mt-auto">
                  <span className="inline-block w-10 h-10 rounded-full bg-gray-200 mr-4"></span>
                  <div>
                    <div className="font-bold text-black text-sm">John Doe</div>
                    <div className="text-xs text-gray-500">CEO Extreme Labs</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-lg shadow-none border border-gray-100 p-6 flex flex-col justify-between text-left">
                <p className="text-gray-700 text-base mb-6">
                  &quot;Integrating the Fully Managed RAG API was a game-changer for our team. It streamlined our data retrieval and boosted our AI capabilities without any extra maintenance on our end. Highly recommend!&quot;
                </p>
                <div className="flex items-center mt-auto">
                  <span className="inline-block w-10 h-10 rounded-full bg-gray-200 mr-4"></span>
                  <div>
                    <div className="font-bold text-black text-sm">John Doe</div>
                    <div className="text-xs text-gray-500">CEO Extreme Labs</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-lg shadow-none border border-gray-100 p-6 flex flex-col justify-between text-left">
                <p className="text-gray-700 text-base mb-6">
                  &quot;Integrating the Fully Managed RAG API was a game-changer for our team. It streamlined our data retrieval and boosted our AI capabilities without any extra maintenance on our end. Highly recommend!&quot;
                </p>
                <div className="flex items-center mt-auto">
                  <span className="inline-block w-10 h-10 rounded-full bg-gray-200 mr-4"></span>
                  <div>
                    <div className="font-bold text-black text-sm">John Doe</div>
                    <div className="text-xs text-gray-500">CEO Extreme Labs</div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* CTA */}
        <div className="block bg-gray-100 mt-10 max-w-7xl py-20 px-3 mx-auto">
            <h3 className="text-4xl font-medium text-center">Get started with Wetrocloud</h3>
            <p className="mt-7 text-gray-500 text-center max-w-xl mx-auto">Get started with Wetrocloud today and unleash the full potential of your data extraction and data‑driven RAG applications.</p>
            <div className="flex items-center justify-center space-x-4 mt-5">
              <a href={CONSOLE_URL} target="_blank"><button className="w-full sm:w-auto bg-default text-white px-6 py-3 rounded-full hover:bg-gray-800 transition mt-3">Get started for free</button></a>
            </div>
        </div>

        {/* Footer */}
        <div className="mt-20 bg-gray-100 py-10">

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Terms */}
                <div>
                <h3 className="font-bold">Terms</h3>
                <ul className="mt-5 space-y-3">
                    <li><Link href={TERMS_OF_SERVICE_URL} className="hover:underline">Terms of service</Link></li>
                    <li><Link href={PRIVACY_POLICY_URL} className="hover:underline">Privacy policy</Link></li>
                </ul>
                </div>

                {/* Product */}
                <div>
                <h3 className="font-bold">Product</h3>
                <ul className="mt-5 space-y-3">
                    <li><a href={BOOK_CALL_URL} target="_blank" className="hover:underline">Book a demo</a></li>
                    <li><a href={PLAYGROUND_URL} target='_blank' className="hover:underline">Playground</a></li>
                    <li><a href={BLOG_URL} target='_blank' className="hover:underline">Blog</a></li>
                </ul>
                </div>

                {/* Developer */}
                <div>
                <h3 className="font-bold">Developer</h3>
                <ul className="mt-5 space-y-3">
                    <li><a href={DOCS_TEXT_GENERATION_API_URL} target='_blank' className="hover:underline">Chat APIs</a></li>
                    <li><a href={DOCS_RAG_API_URL} target='_blank' className="hover:underline">RAG APIs</a></li>
                    <li><a href={API_REFERENCES_URL} target='_blank' className="hover:underline">API references</a></li>
                </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold">Contact</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href={LINKEDIN_URL} target='_blank' className="text-xl hover:text-gray-600"><Image src={linkedInLogo} alt="Wetrocloud" className="social-icon"/></a>
                        <a href="mailto:hello@wetrocloud.com" target='_blank' className="text-xl hover:text-gray-600"><Image src={emailLogo} alt="Wetrocloud" className="social-icon"/></a>
                        <a href={YOUTUBE_URL} target='_blank' className="text-xl hover:text-gray-600"><Image src={youtubeLogo} alt="Wetrocloud" className="social-icon"/></a>
                        <a href={DISCORD_URL} className="text-xl hover:text-gray-600" target='_blank'><Image src={discordLogo} alt="Wetrocloud" className="social-icon"/></a>
                    </div>

                    <div className="text-sm text-gray-500 mt-6">
                        &copy; {new Date().getFullYear()}
                    </div>



                </div>
            </div>

        </div>

    </div>
  )
}
