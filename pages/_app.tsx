import { nunito } from '@/app/ui/fonts';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
      <Head>
        <title>Sonia Sunil - Frontend Developer | UX Designer</title>
        <meta property="og:image" content="https://sonias.vercel.app/web_preview_image.jpg" />
        <meta property="og:url" content="https://sonias.vercel.app" />
        <meta
          name="description"
          content="Portfolio website of all my projects"
        />
      </Head>
        <div className={nunito.className}>
          <Component {...pageProps} />
          <Analytics />
        </div>
    </>
        
      );
}

export default MyApp;