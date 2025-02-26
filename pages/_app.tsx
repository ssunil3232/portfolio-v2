import { crafty_girls, gamja, josefin, nunito, poppins, reenie_beanie } from '@/app/ui/fonts';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import 'primeicons/primeicons.css'; 
// import "primereact/resources/themes/lara-light-cyan/theme.css";

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
        <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
      </Head>
      <PrimeReactProvider>
        <div className={`${poppins.className} w-[100vw]`}>
          <Component {...pageProps} />
          <Analytics />
        </div>
      </PrimeReactProvider>
    </>
        
      );
}

export default MyApp;