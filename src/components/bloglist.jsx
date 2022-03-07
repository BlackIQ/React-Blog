import {FaHeart, FaTrash} from "react-icons/fa";

const BlogList = (props) => {
    return (
        <div>
            <h2>{ props.title }</h2>
            <hr />
            {
                props.blogs.map(blog => (
                    <div>
                        <h4 className="text-danger">
                            {blog.title}
                        </h4>
                        <p>
                            <b>{blog.caption}</b> - {blog.author}
                            <span className="text-danger float-end">
                                {blog.likes} <FaHeart />
                            </span>
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;