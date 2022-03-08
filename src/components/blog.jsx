const SingleBlog = (props) => {
    const blog = props.blog;

    return (
        <div>
            <h2 className="text-danger">{blog.title}</h2>
            <p>Written by <b>{blog.author}</b></p>
            <hr />
            <p>{blog.body}</p>
        </div>
    );
}

export default SingleBlog;