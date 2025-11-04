import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.ico" />
<link rel="icon" type="image/png" href="/icons/favicon.png" />
<link rel="apple-touch-icon" href="/icons/favicon.png" />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
          document.documentElement.classList.toggle(
            "dark",
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
            );
          `}        
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
