import LandingLayout from "@components/Layout/LandingLayout";
import "@styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LandingLayout>
      <Component {...pageProps} />
    </LandingLayout>
  );
}
