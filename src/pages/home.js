import { useState, useEffect } from "react";
import BlogList from "../components/bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {id: 1, title: 'Laravel', caption: 'What is Laravel?', author: 'Amir', likes: 20},
        {id: 1, title: 'React', caption: 'What is React??', author: 'Amir', likes: 25},
        {id: 2, title: 'Php', caption: 'What is Php?', author: 'Nilo', likes: 10},
        {id: 3, title: 'Js', caption: 'What is Javascript?', author: 'Anon', likes: 15},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('Use Effect ran');
    });

    return (
        <div className="home">
            <h1>Home page</h1>
            <br/>
            <BlogList blogs={blogs} handleDelete={handleDelete} title="All blogs"/>
        </div>
    );
}

export default Home;