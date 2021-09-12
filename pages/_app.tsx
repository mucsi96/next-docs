import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { HTMLAttributes } from "react";
import { CodeBlock } from "../components/CodeBlock";
import "../styles/globals.css";

const components = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <h2 style={{color: 'tomato'}} {...props} />,
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
