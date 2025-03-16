import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LazyMotion, domAnimation } from 'framer-motion';
import ClientOnly from '@/components/ClientOnly';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </ClientOnly>
  );
}
