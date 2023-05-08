import '@/styles/globals.css'
import '../styles/app.css'
import type { AppProps } from 'next/app'
import { RootStore } from '@/stores/RootStore';
import Head from 'next/head';
import { Fragment } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const store = new RootStore();
  return (
    <Fragment>
      <Head>
        <title>Food Fast</title>
      </Head> <ToastContainer /> <Component {...pageProps} />
    </Fragment>
  );
}
