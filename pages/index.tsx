import { promises } from "fs";
import Link from "next/link";
import { basename, extname, join } from "path";
import { FC } from "react";
import { PostMeta } from "../types";

type HomeProps = {
  posts: PostMeta[];
};

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={post.path!}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;

export async function getStaticProps(): Promise<{ props: HomeProps }> {
  const postDir = join(process.cwd(), "posts");
  const posts = await promises.readdir(postDir);

  const postsMeta = posts.map((post) => {
    const meta = require(`../posts/${post}`).meta;
    const name = basename(post, extname(post));
    return { ...meta, path: `/posts/${name}` };
  });

  return {
    props: {
      posts: postsMeta,
    },
  };
}
