import { nunito } from '@/app/ui/fonts';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={nunito.className}>
          <Component {...pageProps} />
        </div>
      );
}

export default MyApp;