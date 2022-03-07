import {FaHeart} from "react-icons/fa";
import {Link} from "react-router-dom";

const BlogList = (props) => {
    return (
        <div>
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
                        <p><Link to={'/blog/' + blog.id} className="text-reset">Read more</Link></p>
                        <hr className="border border-danger" />
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;