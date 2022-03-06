import {useState} from "react";

const Home = () => {

    const [name, setName] = useState('Amir');

    const [blogs, setBlog] = useState([
        {id: 1, title: 'Laravel', caption: 'What is Laravel?', author: 'Amir', likes: 20},
        {id: 2, title: 'React', caption: 'What is React?', author: 'Nilo', likes: 10},
        {id: 3, title: 'Js', caption: 'What is Javascript?', author: 'Anon', likes: 15},
    ]);

    const handleClick = (name) => {
        setName(name);
    }

    return (
        <div className="home">
            <h1>Home page</h1>
            <br />
            {blogs.map(blog => (
                <div>
                    <h4 key={blog.id} className="text-danger">
                        {blog.title}
                    </h4>
                    <p>
                        <b>{blog.caption}</b> - {blog.author}
                        <span className="text-danger float-end">{blog.likes} &hearts;</span>
                    </p>

                </div>
            ))}
            {/*<p>{ name }</p>*/}
            {/*<button onClick={() => handleClick('Hi')} className="btn btn-danger">Click on me</button>*/}
        </div>
    );
}

export default Home;