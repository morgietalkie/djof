import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { Post, User } from "../../types";

const PostPage = ({ post }: { post: Post }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Layout>
      <div className="flex justify-center pt-10">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <div className="flex flex-col items-center py-10 px-5">
            <h5 className="mb-6 text-xl font-medium text-gray-900  ">{post.title}</h5>
            <Link className="flex gap-4 pb-4" href={`/user/${post.userId}`}>
              <span className="text-sm text-gray-800 ">By: {post.user ? post.user.name : "Undefined"}</span>
              <span className="text-sm text-gray-500 ">Email: {post.user ? post.user.email : "Undefined"}</span>
            </Link>
            <span className="text-sm text-gray-500 "> {post.body}</span>

            <button
              onClick={goBack}
              className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query.id;

  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${query}/`);

  const postData: Post = await postRes.json();

  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}/`);

  const userData: User = await userRes.json();

  // Append user to post

  const post: Post = { ...postData, user: userData };

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
