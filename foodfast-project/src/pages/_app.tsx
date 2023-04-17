import '@/styles/globals.css'
import '../styles/app.css'
import type { AppProps } from 'next/app'
import { RootStore } from '@/stores/RootStore';

export default function App({ Component, pageProps }: AppProps) {
  const store = new RootStore();
  return <Component {...pageProps} />
}
