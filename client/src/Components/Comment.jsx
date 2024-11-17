import React, { useState, useEffect } from 'react';
import RelatedPost from './RelatedPost';
import Programs from './programs';
import FeaturedCard from './FeaturedCard';
// import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: "", file1: null, file2: null, comment: "", storeData: false });

  // Handle input changes
  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else if (target.type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.files[0], // Save the selected file object
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  // Fetch the data for the posts
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/getblogs")
      .then((response) => response.json())
      .then((data1) => setData1(data1))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle the post submission
  const handlePostSubmission = async () => {
    setError(false);
    const { name, file1, file2, comment } = formData;

    // Check if all fields are filled out
    if (!name || !file1 || !file2 || !comment) {
      setError(true);
      return;
    }

    // Prepare the form data to send
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('Title', name);
    formDataToSubmit.append('Content', comment);
    formDataToSubmit.append('file1', file1);
    formDataToSubmit.append('file2', file2);

    // Send the data to the backend
    try {
      const response = await fetch('http://localhost:3000/blog', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (response.ok) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 h-fit">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">Create Your Own Blog</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={formData.name}
              onChange={onInputChange}
              className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              placeholder="Title"
              name="name"
            />
            <input
              type="file"
              onChange={onInputChange}
              className="py-2 px-4 outline-none w-full rounded-lg file1:bg-blue-gray-500"
              placeholder="file1"
              name="file1"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea
              value={formData.comment}
              onChange={onInputChange}
              className="p-4 outline-none w-full rounded-lg h-96 max-h-screen focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
              name="comment"
              placeholder="Start writing your blog..."
            />
          </div>

          <div className="flex felx-row justify-between">
            <div className="">
              <input
                type="file"
                onChange={onInputChange}
                className="py-2 px-4 outline-none w-full rounded-lg file2:bg-blue-gray-500"
                placeholder="file2"
                name="file2"
              />
            </div>
            {error && <p className="text-xs text-red-500">All fields are mandatory</p>}
            <div className="mt-1">
              <button
                type="button"
                onClick={handlePostSubmission}
                className="transition duration-600 ease hover:bg-green-500 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
              >
                Post Blog
              </button>
              {showSuccessMessage && (
                <span className="text-xl float-right font-semibold mt-3 text-green-500">Blogs submitted for review</span>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-9">
          {data1.slice(0, 2).map((post, index) => (
            <FeaturedCard key={index} post={post} />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <RelatedPost />
        <Programs />
      </div>
    </div>
  );
};

export default CommentsForm;
