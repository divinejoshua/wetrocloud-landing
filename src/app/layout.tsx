import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./assets/css/style.css";
import Script from "next/script";
import Head from "next/head";
import { META_DESCRIPTION } from "@/app/constants/constants";

const dmSans = DM_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Wetrocloud - Extract Structured Data from any source",
  description: META_DESCRIPTION,
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
    title: 'Wetrocloud - Extract Structured Data from any source',
    description: META_DESCRIPTION,
    type: 'website',
    url: 'https://wetrocloud.com',
    siteName : 'Wetrocloud',
    images: [
      {
        url: 'https://wetrocloud.com/meta-banner.jpg',
        alt: 'Wetrocloud',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          {/* Icons */}
          <link rel="icon" href ="https://wetrocloud.com/favicon.ico"/>
          <link rel="icon" href="https://wetrocloud.com/favicon.ico" sizes="any" />
          <link rel="shortcut icon" href ="https://wetrocloud.com/favicon.ico"/>
          <link rel="icon" href="https://wetrocloud.com/favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="https://wetrocloud.com/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="canonical" href="https://wetrocloud.com/"/>

          {/* Twitter OG metadata */}
          <meta property="twitter:title" content="Wetrocloud - Extract Structured Data from any source" />
          <meta property="twitter:description" content={META_DESCRIPTION} />
          <meta property="twitter:image" content="https://wetrocloud.com/meta-banner.jpg" />
          <meta name="twitter:image:summary_photo_image:src" content="https://wetrocloud.com/meta-banner.jpg"/>
          <meta name="twitter:image:photo_image_full_size:src" content="https://wetrocloud.com/meta-banner.jpg"/>
          <meta name="twitter:image:thumbnail_image:src" content="https://wetrocloud.com/meta-banner.jpg"/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="https://wetrocloud.com"/>
        </Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CP7XLD7HG1" strategy='lazyOnload' />
        <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CP7XLD7HG1');
              `}
      </Script>
        <body className={dmSans.className}>
          {children}
      </body>
    </html>
  );
}
