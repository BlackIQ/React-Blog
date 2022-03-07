import useFetch from "../functions/usefetch";
import SingleBlog from "../components/blog";
import {useParams} from "react-router-dom";

const Blog = () => {
    const {id} = useParams();
    const {data, isLoading, errors} = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="x">
            {isLoading && <p>Loading . . .</p>}
            {errors && <p className="text-danger">{errors}</p>}
            {data && <SingleBlog blog={data} />}
        </div>
    );
}

export default Blog;