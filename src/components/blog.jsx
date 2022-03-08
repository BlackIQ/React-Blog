import {FaHeart, FaTrash} from "react-icons/fa";
import {useHistory} from "react-router-dom";

const SingleBlog = (props) => {
    const blog = props.blog;

    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            history.push('');
        });
    }

    const handleLike = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'UPDATE',
        }).then(() => {
            history.push('');
        });
    }

    return (
        <div>
            <h2 className="text-danger">{blog.title}</h2>
            <p>Written by <b>{blog.author}</b></p>
            <hr />
            <p>{blog.body}</p>
            <br />
            <br />
            <p className="text-danger">
                <span onClick={handleDelete} className="pointer"><FaTrash /></span>
                <span onClick={handleLike} className="pointer float-end">{blog.likes} <FaHeart /></span>
            </p>
        </div>
    );
}

export default SingleBlog;