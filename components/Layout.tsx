import Link from "next/link";
import { FC } from "react";
import styles from "./Layout.module.css";

export const Layout: FC = ({ children }) => (
  <div className={styles.container}>
    {children}
    <Link href="/">Back to home</Link>
  </div>
);
