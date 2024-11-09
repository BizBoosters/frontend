import React, { useState } from 'react';

// const [post,setPost] = useState(true);

const FeaturedCard = ({ post }) => (
  <div className="bg-white shadow-lg w-1/3 max-w-[60rem] h-full rounded-lg p-0 lg:p-8 pb-12 mb-8">
        <div className="relative h-72">
            <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.image}')` }} />
            <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
            <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white mb-4 text-shadow font-semibold text-xs">{post.date}</p>
            <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.title}</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
                <img
                unoptimized
                alt={post.authorname}
                height="30px"
                width="30px"
                className="align-middle drop-shadow-lg rounded-full"
                src={post.image}
                />
                <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.authorname}</p>
            </div>
            </div>
            {/* <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link> */}
        </div>
    </div>
);

export default FeaturedCard;
