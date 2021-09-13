import Head from "next/head";
import Link from "next/link";
import { FC } from "react";
import { PostMeta } from "../types";
import styles from "./Layout.module.css";

export const Layout: FC<{ meta: PostMeta }> = ({ children, meta }) => (
  <div className={styles.container}>
    <Head>
      <title>{meta.title}</title>
    </Head>
    <h1>{meta.title}</h1>
    {children}
    <Link href="/">Back to home</Link>
  </div>
);
