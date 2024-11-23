import React, {useState, useEffect} from 'react'
import PostCard from '../Components/PostBlog';
import RelatedPost from '../Components/RelatedPost';
import {useParams} from 'react-router-dom';
import Programs from '../Components/programs';
import FeaturedCard from '../Components/FeaturedCard';

const Blogs = () => {
    const [data, setData] = useState([]);
    const [datay, setDatay] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/blogs/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/getblogs/`)
            .then((response) => response.json())
            .then((datay) => setDatay(datay)) // Use setDatay here
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return (
        <section className="overflow-y-auto w-full p-6 ml-3">
            <div className="flex flex-row">
                <div className="">
                    <PostCard post={data}/>
                </div>
                <div className='flex flex-col'>
                    <RelatedPost/>
                    <Programs/>
                </div>
            </div>

            <div className='flex flex-row pl-8  gap-8 md:col-span-3'>
                {/* <div className="">
        <BackgroundBlogCard/>
        </div>
        <div className="">
        <BackgroundBlogCard/>
        </div>
        <div className="">
        <BackgroundBlogCard/>
        </div> */}
                {/* {datay.slice(0, 3).map((post, index) => (
    <FeaturedCard key={index} post={post} />
))} */}


            </div>
        </section>
    );
};

export default Blogs;