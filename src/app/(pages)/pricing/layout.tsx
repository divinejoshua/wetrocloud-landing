import { Metadata } from 'next'


const pageTitle : string = "Wetrocloud Pricing - Build, Deploy, and Scale with Our RAG and Agents APIs"
const pageDescription : string = "Scale your business with our Retrieval-Augmented Generation (RAG) as a Service platform. Offering multilingual support, on-demand APIs, OCR integration, and customizable outputs, our solution enables enterprises to query their own resources and gain insights with real-time analytics. Fine-tuning and advanced AI features help you build tailored AI solutions that drive growth and efficiency."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords : "Wetrocloud, AI,  GPT, Artificial intelligence",
  icons: [
    { rel: 'icon', url: 'https://wetrocloud.com/favicon.ico' },
    { rel: 'shortcut icon', url: 'https://wetrocloud.com/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/logo.png' },
    { 
      rel: 'icon',
      type: 'image/x-icon',
      url: 'https://wetrocloud.com/favicon.ico'
    },
    { 
      rel: 'icon',
      type: 'image/png',
      url: 'https://wetrocloud.com/favicon.png'
    }
  ],
   // Open Graph (OG) metadata
   openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: 'https://wetrocloud.com/pricing',
    siteName : 'Wetrocloud',
    images: [
      {
        url: 'https://wetrocloud.com/meta-banner.jpg',
        alt: 'Wetrocloud',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}