import BlogList from "../components/bloglist";
import useFetch from "../functions/usefetch";

const Home = () => {

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    const {data, isLoading, errors} = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            <h1>Home page</h1>
            <br/>
            {isLoading && <p>Loading . . .</p>}
            {errors && <p className="text-danger">{errors}</p>}
            {data && <BlogList blogs={data} title="All blogs"/>}
        </div>
    );
}

export default Home;