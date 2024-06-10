import Head from "next/head";
import { Header } from "@/components/Header";
import { Cars } from "@/components/Cars/Cars";

export default function Home() {
  return (
    <>
      <Head>
        <title>Using Feature Flags in a React.js Application</title>
        <meta
          name="description"
          content="A step-by-step guide to implementing ConfigCat feature flags in a React.js application using ConfigCat's official React SDK."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Cars />
      </main>
    </>
  );
}
