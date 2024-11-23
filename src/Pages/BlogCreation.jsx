import React, {useState, useEffect} from 'react'
import CommentsForm from '../Components/Comment';

const BlogCreation = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/getblogs/")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return (
        <section className="overflow-y-auto w-full p-6 mt-2">
            <CommentsForm/>
        </section>
    );
};

export default BlogCreation;
