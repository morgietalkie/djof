import Link from "next/link";
import React from "react";
import { Post } from "../types";
import { PostItem } from "./PostItem";

export const PostGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="p-10">
      {posts.length ? (
        <ul className="flex flex-wrap gap-10 justify-center  max-w-screen-xl m-auto">
          {posts.map((post: Post) => {
            return <PostItem key={post.id} post={post} />;
          })}
        </ul>
      ) : (
        <div className="text-center w-full ">
          <p>No results found</p>
          <Link
            href={`/`}
            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Reset
          </Link>
        </div>
      )}
    </div>
  );
};
