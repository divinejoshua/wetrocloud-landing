import { Metadata } from 'next'


const pageTitle : string = "Wetrocloud Pricing - Build AI solutions with our RAG as a Service platform"
const pageDescription : string = "Scale your business with our Retrieval-Augmented Generation (RAG) as a Service platform. Offering multilingual support, on-demand APIs, OCR integration, and customizable outputs, our solution enables enterprises to query their own resources and gain insights with real-time analytics. Fine-tuning and advanced AI features help you build tailored AI solutions that drive growth and efficiency."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
   openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
    url: 'http://wetrocloud.com/register',
    siteName : 'VongAI',
    images: [
      {
        url: 'https://wetrocloud/meta-banner.jpg',
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