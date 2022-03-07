const SingleBlog = (props) => {
    const blog = props.blog;

    return (
        <div>
            <h2 className="text-danger">{blog.title}</h2>
            <hr />
            <p>{blog.caption}</p>
        </div>
    );
}

export default SingleBlog;