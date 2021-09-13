import { useRouter } from "next/router";
import { FC } from "react";
import { Layout } from "../../components/Layout";

const Post: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!router.isReady) {
    return null;
  }

  const Post = require(`../../posts/${slug}.mdx`);

  return (
    <Layout meta={Post.meta}>
      <Post.default />
    </Layout>
  );
};

export default Post;
