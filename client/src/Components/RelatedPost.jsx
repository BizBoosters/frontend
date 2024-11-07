import { useEffect,useState } from "react";
import React from "react";

const RelatedPost = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
    fetch("../../public/related.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return ( 
        <div className="bg-white shadow-lg  rounded p-8 pb-12 ml-10 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Related Posts'}</h3>
      {data.map((post,index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
            //   alt={post.title}
              height="60px"
              width="60px"
              className="align-middle rounded-full border aspect-square"
              src={post.image}
            />
          </div>
          <div className="flex-grow ml-4">
            <h1 className="text-gray-500 font-xs">{post.authorname}</h1>
            <p className="text-md" key={index}>{post.title}</p>
          </div>
        </div>
      ))}
      
    </div>
     );
}
 
export default RelatedPost;