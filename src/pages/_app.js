import '@/styles/globals.css'
import {Montserrat} from 'next/font/google';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
<link rel="icon" type="image/png" href="/icons/favicon.png" />
<link rel="apple-touch-icon" href="/icons/favicon.png" />
      </Head>
      <div className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark flex flex-col`}>
        <NavBar/>
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  )
}
