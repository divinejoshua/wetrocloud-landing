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
        <h3 className="text-4xl font-medium text-center">Get started with Wetrocloud</h3>
        <div className="block sm:flex space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center mt-10 max-width-90 mx-auto">
              <a href={CONSOLE_URL} target="_blank"><button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-sm hover:bg-blue-950 mt-3">Get started for free</button></a>
              <a href={BOOK_CALL_URL} target="_blank"><button className="w-full sm:w-auto bg-white text-blue-950 px-6 py-3 rounded-sm border border-blue-950 mt-3">Schedule a call</button></a>
        </div>

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
