import { nunito } from '@/app/ui/fonts';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
      <Head>
        <title>Sonia Sunil - Frontend Developer | UX Designer</title>
        <meta
          name="description"
          content="Portfolio website of all my projects"
        />
      </Head>
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
    </>
        
      );
}

export default MyApp;