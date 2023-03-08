import Link from "next/link";
import React from "react";
import { Post } from "../types";

export const PostItem = ({ post }: { post: Post }) => {
  return (
    <li className="bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 ">
      <Link href={`/post/${post.id}`}>
        <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 hover:text-gray-700  ">
          {post.title.slice(0, 20)} {post.title.length > 20 ? "..." : ""}
        </h5>
      </Link>
      <Link href={`/user/${post.userId}`}>
        <p className="mb-2 text-1xl font-medium tracking-tight text-gray-900 hover:text-gray-700 ">By: {post.user ? post.user.name : "Undefined"}</p>
      </Link>
      <p className="mb-3 font-normal text-gray-700 ">
        {post.body.slice(0, 50)} {post.title.length > 50 ? "..." : ""}
      </p>
      <Link
        href={`/post/${post.id}`}
        className="mt-5 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
      >
        Read more
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </li>
  );
};
