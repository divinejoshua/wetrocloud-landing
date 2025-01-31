import linkedInLogo from '@/app/assets/img/linkedin-social-icon.png'
import emailLogo from '@/app/assets/img/email-social-icon.png'
import Image from 'next/image'

export default function FooterComponent() {
  return (
    <div>
        <h3 className="text-4xl font-medium text-center">Get started with Wetrocloud</h3>
        <div className="block sm:flex space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 items-center justify-center mt-10 max-width-90 mx-auto">
              <button className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-sm hover:bg-blue-950">Get started for free</button>
              <button className="w-full sm:w-auto bg-white text-blue-950 px-6 py-3 rounded-sm border border-blue-950">Book a demo</button>
        </div>

        <div className="mt-20 bg-gray-100 py-10">

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Terms */}
                <div>
                <h3 className="font-bold">Terms</h3>
                <ul className="mt-5 space-y-3">
                    <li><a href="#" className="hover:underline">Terms of service</a></li>
                    <li><a href="#" className="hover:underline">Privacy policy</a></li>
                </ul>
                </div>

                {/* Product */}
                <div>
                <h3 className="font-bold">Product</h3>
                <ul className="mt-5 space-y-3">
                    <li><a href="#" className="hover:underline">Book a demo</a></li>
                    <li><a href="#" className="hover:underline">Playground</a></li>
                </ul>
                </div>

                {/* Developer */}
                <div>
                <h3 className="font-bold">Developer</h3>
                <ul className="mt-5 space-y-3">
                    <li><a href="#" className="hover:underline">Chat APIs</a></li>
                    <li><a href="#" className="hover:underline">RAG APIs</a></li>
                    <li><a href="#" className="hover:underline">API references</a></li>
                </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-bold">Contact</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-xl hover:text-gray-600"><Image src={linkedInLogo} alt="Wetrocloud" className="social-icon"/></a>
                        <a href="#" className="text-xl hover:text-gray-600"><Image src={emailLogo} alt="Wetrocloud" className="social-icon"/></a>
                    </div>

                    <div className="text-sm text-gray-500 mt-6">
                        &copy; Wetrocloud 2025
                    </div>



                </div>
            </div>
      
           
        </div>

    </div>
  )
}
