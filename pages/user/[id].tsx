import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { PostGrid } from "../../components/PostGrid";
import { Post, User } from "../../types";

const UserPage = ({ user }: { user: User }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Layout>
      <div className="flex justify-center pt-10">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <div className="flex flex-col items-center py-10">
            <h5 className="mb-1 text-xl font-medium text-gray-900 ">{user.name}</h5>
            <span className="text-sm text-gray-500 ">Username: {user.username}</span>
            <span className="text-sm text-gray-500 ">Email: {user.email}</span>
            <span className="text-sm text-gray-500 ">Phone: {user.phone}</span>
            <button
              onClick={goBack}
              className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Go back
            </button>
          </div>
        </div>
      </div>
      {user.posts ? <PostGrid posts={user.posts} /> : <div>No posts</div>}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query.id;

  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${query}/`);
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${query}`);
  const userData: User = await userRes.json();
  const postData: Post[] = await postRes.json();

  const injectUser: Post[] = postData.map((post) => {
    return { ...post, user: userData };
  });

  const user = { ...userData, posts: injectUser };

  console.log(user);

  return {
    props: {
      user,
    },
  };
};

export default UserPage;
