import React from 'react';

const FeaturedCard = ({ post }) => {
  const backgroundImage = post.file1 ? `${post.file1}` : ''; // Direct URL to the image
  const authorImage = post.file2 ? `http://localhost:3000${post.file2}` : ''; // Direct URL to the author's image

  return (
    <div className="bg-white shadow-lg w-full col-span-1 max-w-[60rem] h-full rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative h-72">
        {/* Ensure background image is being applied correctly */}
        <div
          className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
          <p className="text-white mb-4 text-shadow font-semibold text-xs">{post.date}</p>
          <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">{post.Title}</p>
          <div className="flex items-center absolute bottom-5 w-full justify-center">
            <img
              unoptimized
              alt={post.authorname}
              height="30px"
              width="30px"
              className="align-middle drop-shadow-lg rounded-full"
              src={authorImage} // Ensure the author image is correct
            />
            <p className="inline align-middle text-white text-shadow ml-2 font-medium">{post.authorname}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
