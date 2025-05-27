import { META_DESCRIPTION } from '@/app/constants/constants';
import { Metadata } from 'next'


const pageTitle : string = "Wetrocloud - Terms of Service - Convert any unstructured data to structured LLM ready data. Power your AI applications with clean structured markdown from all types of resources. Web, File, Image, Audio, Video & Youtube."
const pageDescription : string = META_DESCRIPTION

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
    url: 'https://wetrocloud.com/legal/terms-of-service',
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