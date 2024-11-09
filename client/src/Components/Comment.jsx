import React, { useState, useEffect } from 'react';
import RelatedPost from './RelatedPost';
import Programs from './programs';
import FeaturedCard from './FeaturedCard';
// import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, file: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      file: window.localStorage.getItem('file'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('file'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const [data1, setData1] = useState([]);

useEffect(() => {
  fetch("../../public/related.json")
    .then((response) => response.json())
    .then((data1) => setData1(data1))
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  const handlePostSubmission = () => {
    setError(false);
    const { name, file, comment, storeData } = formData;
    if (!name || !file || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      file,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('file', file);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('file');
    }

    // submitComment(commentObj)
    //   .then((res) => {
    //     if (res.createComment) {
    //       if (!storeData) {
    //         formData.name = '';
    //         formData.file = '';
    //       }
    //       formData.comment = '';
    //       setFormData((prevState) => ({
    //         ...prevState,
    //         ...formData,
    //       }));
    //       setShowSuccessMessage(true);
    //       setTimeout(() => {
    //         setShowSuccessMessage(false);
    //       }, 3000);
    //     }
    //   });
  };

  return (
    <div className='flex flex-row'>
    <div className='flex flex-col'>
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 h-fit">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Create Your Own Blog</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Title" name="name" />
        <input type="file" value={formData.file} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg file:bg-blue-gray-500 " placeholder="file" name="file" />
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full rounded-lg h-96 max-h-screen focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Start writing your blog..." />
      </div>
      
      {/* <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData"> Save my name in this browser for the next time I write my Blog.</label>
        </div>
      </div> */}
      <div className='flex felx-row justify-between'>
        <div className=''>
            <input type="file" value={formData.file} onChange={onInputChange} className="py-2 px-4 outline-none w-full rounded-lg file:bg-blue-gray-500 " placeholder="file" name="file" />
        </div>
        {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
        <div className="mt-1">
            <button type="button" onClick={handlePostSubmission} className="transition duration-600 ease hover:bg-green-500 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Post Blog</button>
            {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Blogs submitted for review</span>}
        </div>
      </div>
    </div>
    <div className='grid grid-cols-2 gap-9'>
          {data1.slice(0,2).map((post, index) => (
            <FeaturedCard key={index} post={post} />
          ))}
    </div>
    </div>
    
        <div className='flex flex-col ' >
            <RelatedPost/>
            <Programs/>
        </div>
    </div>
  );
};

export default CommentsForm;
