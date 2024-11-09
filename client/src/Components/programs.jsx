import { useEffect,useState } from "react";
import React from "react";
const Programs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
    fetch("../../public/related.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return ( 
        <div className="bg-white shadow-lg  rounded p-8 pb-12 mt-5 ml-10 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{'Bizz Programmes'}</h3>
      {data.map((post,index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
            //   alt={post.title}
              height="60px"
              width="60px"
              className="align-middle border aspect-square"
              src={post.image}
            />
          </div>
          
          <div className="flex-grow ml-4">

             <div className="flex justify-between">
                <h1 className=" text-lg font-xs">{post.authorname}</h1>
                
            </div>
            <p className="text-gray-500" key={index}>{post.title}</p>
          </div>
          <img src="../../src/assets/chevron-right.svg" alt="" />
        </div>
      ))}
      
    </div>
     );
}
 
export default Programs;