import {useState, useEffect} from "react";
import BlogList from "../components/bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isloading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 403) {
                    throw Error('403 - Forbidden.');
                } else if (response.status === 404) {
                    throw Error('404 - Not found.');
                } else if (response.status === 405) {
                    throw Error('405 - Method not allowed.');
                } else if (response.status === 500) {
                    throw Error('500 - Internal server error.');
                } else if (response.status === 503) {
                    throw Error('503 - Service unavailable.');
                } else if (response.status === 504) {
                    throw Error('504 - Gateway timeout.');
                }
            })
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => {
                setErrors(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="home">
            <h1>Home page</h1>
            <br/>
            {isloading && <p>Loading . . .</p>}
            {errors && <p className="text-danger">{errors}</p>}
            {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} title="All blogs"/>}
        </div>
    );
}

export default Home;