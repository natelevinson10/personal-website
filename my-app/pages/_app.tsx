import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from '@vercel/analytics/react';




export default function App({ Component, pageProps }: AppProps) {
  <Analytics />
  return <Component {...pageProps} />
}
