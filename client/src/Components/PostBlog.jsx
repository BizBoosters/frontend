import React from 'react';
// import Image from 'next/image';
// import moment from 'moment';
// import Link from 'next/link';

// import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg w-screen max-w-[60rem] h-full rounded-lg p-0 lg:p-8 pb-12 mb-8">
    {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="shadow-lg rounded-t-lg lg:rounded-lg"
        layout="fill"
        src={post.featuredImage.url}
      />
    </div> */}
    <div className="relative overflow-hidden shadow-md h-96 max-h-96 mb-6">
      <img src={post.file1} alt="" className="object-top absolute h-full w-full object-fill  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>

    
    <div className="block lg:flex ml-3 mb-8 w-full">
      <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 ">
        <img
          height="30px"
          width="30px"
          className="align-middle rounded-full"
          src={post.profileImage}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.authorName}</p>
      </div>
      <div className="font-medium text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="align-middle">{post.createdAt}</span>
      </div>
    </div>

    <h1 className="transition duration-700 text-center mb-8 cursor-pointer  hover:text-blue-500 text-3xl font-extrabold">
      <p>{post.Title}</p>
    </h1>
    <p className=" text-lg text-gray-700 font-normal mb-8">
      {post.Content}
    </p>
    <div className="relative overflow-hidden  h-96 max-h-96 mb-6">
      <img src={post.file2} alt="" className="object-top absolute h-full w-full object-contain  shadow-lg rounded-t-lg lg:rounded-lg" />
    </div>
    <div className="text-center">
      {/* <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link> */}
    </div>
  </div>
);

export default PostCard;
