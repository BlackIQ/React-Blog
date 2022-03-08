import {useState} from "react";

const Create = () => {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [author, setAuthor] = useState('Default');

    const [submitted, setSubmitted] = useState(false);
    const [isAdding, setAdding] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        setAdding(true);

        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'Application/json'},
            body: JSON.stringify(blog),
        }).then(() => {
            setAdding(false);
            setSubmitted(true);
        });
    }

    return (
        <div className="create">
            <h1>Create a new blog</h1>
            {submitted && <p className="text-success">Blog submitted successfully.</p>}
            <br />
            <form onSubmit={submit}>
                <label htmlFor='title' className='form-label'>Blog title</label>
                <input id='title' className='form-control' placeholder='Blog title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label htmlFor='body' className='form-label'>Blog caption</label>
                <textarea id='body' className='form-control' placeholder='Blog caption' rows='5' value={body} onChange={(e) => setBody(e.target.value)} />
                <br />
                <label htmlFor='author' className='form-label'>Blog author</label>
                <select id="author" className="form-select" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Default">Default</option>
                    <option value="Amir">Amir</option>
                    <option value="Nilo">Nilo</option>
                    <option value="Anna">Anna</option>
                </select>
                <br />
                { !isAdding ? <button className="btn btn-danger">Add blog</button> : <button className="btn btn-danger" disabled>Adding blog . . .</button>}
            </form>
        </div>
    );
}

export default Create;