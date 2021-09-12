import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <Link href="/hello">Hello from MDX</Link>
    </main>
  );
};

export default Home;
