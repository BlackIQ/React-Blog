import {useState} from "react";
import BlogList from "../components/bloglist";

const Home = () => {

    const [blogs] = useState([
        {id: 1, title: 'Laravel', caption: 'What is Laravel?', author: 'Amir', likes: 20},
        {id: 1, title: 'React', caption: 'What is React??', author: 'Amir', likes: 25},
        {id: 2, title: 'Php', caption: 'What is Php?', author: 'Nilo', likes: 10},
        {id: 3, title: 'Js', caption: 'What is Javascript?', author: 'Anon', likes: 15},
    ]);

    return (
        <div className="home">
            <h1>Home page</h1>
            <br />
            <BlogList blogs={blogs} title="All blogs" />
            <br />
            <BlogList blogs={blogs.filter(blog => (blog.author === 'Amir'))} title="Amir s blogs" />
        </div>
    );
}

export default Home;