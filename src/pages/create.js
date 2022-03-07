import {useState} from "react";

const Create = () => {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [author, setAuthor] = useState('Amir');

    return (
        <div className="create">
            <h1>Create a new blog</h1>
            <br />
            <form>
                <label htmlFor='title' className='form-label'>Blog title</label>
                <input id='title' className='form-control' placeholder='Blog title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label htmlFor='body' className='form-label'>Blog caption</label>
                <textarea id='body' className='form-control' placeholder='Blog caption' rows='5' value={body} onChange={(e) => setBody(e.target.value)} />
                <br />
                <label htmlFor='author' className='form-label'>Blog author</label>
                <select id="author" className="form-select" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Amir">Amir</option>
                    <option value="Nilo">Nilo</option>
                    <option value="Anna">Anna</option>
                </select>
                <br />
                <button className='btn btn-danger'>Add blog</button>
            </form>
        </div>
    );
}

export default Create;