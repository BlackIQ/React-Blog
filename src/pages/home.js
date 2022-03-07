import { useState, useEffect } from "react";
import BlogList from "../components/bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isloading, setLoading] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(res => {
            return res.json();
        }).then((data) => {
            setBlogs(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="home">
            <h1>Home page</h1>
            <br/>
            {isloading && <p>Loading . . .</p>}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title="All blogs"/>}
        </div>
    );
}

export default Home;