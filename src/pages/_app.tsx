import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigCatProvider } from "configcat-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigCatProvider sdkKey="YOUR-CONFIGCAT-SDK-KEY">
      <Component {...pageProps} />
    </ConfigCatProvider>
  );
}
