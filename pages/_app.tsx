import type { AppProps } from "next/app";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import { CodeBlock } from "../components/CodeBlock";
import { HTMLAttributes } from "react";

const components = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <h1 style={{color: 'tomato'}} {...props} />,
  pre: (props: HTMLAttributes<HTMLDivElement>) => <div {...props} />,
  code: CodeBlock,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next MDX Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
export default MyApp;
