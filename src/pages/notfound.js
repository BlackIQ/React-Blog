import {Link} from "react-router-dom";

const Notfound = () => {
    return (
        <div className="p-5">
            <h2 className="text-danger">Not found</h2>
            <p>Sorry this page is not found.</p>
            <br />
            <Link to="/" className="text-primary">Go home</Link>
        </div>
    );
}

export default Notfound;