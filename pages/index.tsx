import { GetServerSideProps } from "next";
import { Layout } from "../components/Layout";
import { PostGrid } from "../components/PostGrid";
import { Post, User } from "../types";

const Index = ({ posts }: { posts: Post[] }) => {
  return (
    <Layout>
      <PostGrid posts={posts} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const userRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const postRes = await fetch("https://jsonplaceholder.typicode.com/posts");

  const usersData = await userRes.json();
  const postsData = await postRes.json();

  // Map users to products.

  let posts = postsData.map((post: Post) => {
    return { ...post, user: usersData.find((user: User) => user.id === post.userId) };
  });

  // Filter posts based on search query

  const searchQuery = ctx.query.search as string;
  if (searchQuery) {
    const searchQueryLowerCase = searchQuery.toLowerCase();

    posts = posts.filter((post: Post) => post.title.includes(searchQueryLowerCase) || post?.user?.name.toLowerCase().includes(searchQueryLowerCase));
  }

  // Sort posts by users name based on query
  const sortQuery = ctx.query.sort as string;
  if (sortQuery === "asc") {
    posts.reverse();
  }
  if (sortQuery === "desc") {
    posts.sort();
  }
  return {
    props: {
      posts,
    },
  };
};

export default Index;
