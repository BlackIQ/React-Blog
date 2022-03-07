import { useState, useEffect } from "react";
import BlogList from "../components/bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs').then(res => {
            return res.json();
        }).then((data) => {
            setBlogs(data);
        });
    }, []);

    return (
        <div className="home">
            <h1>Home page</h1>
            <br/>
            {
                blogs ? <BlogList blogs={blogs} handleDelete={handleDelete} title="All blogs"/> : <p>Loading . . .</p>
            }
        </div>
    );
}

export default Home;