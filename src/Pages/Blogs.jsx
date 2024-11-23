import React, {useState, useEffect} from 'react'
import FeaturedCard from '../Components/FeaturedCard';

const Blogs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/getblogs")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <section className="overflow-y-auto w-full p-6 mt-2">
            <div className='grid grid-cols-3 gap-9'>
                {data.map((post, index) => (
                    <FeaturedCard key={index} post={post}/>
                ))}
            </div>
        </section>
    );
};

export default Blogs;
