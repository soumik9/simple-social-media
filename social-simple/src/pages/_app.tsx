import LandingLayout from "@components/Layout/LandingLayout";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <QueryClientProvider client={queryClient}>
        <LandingLayout>
          <Component {...pageProps} />
        </LandingLayout>
      </QueryClientProvider>
    </>

  );
}
