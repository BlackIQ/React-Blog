import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-light navbar-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-danger">React blog</Link>
                <div className="d-flex align-items-center">
                    <Link to="/" className="text-reset me-3">Home</Link>
                    <Link to="/create" className="text-reset me-3">Create</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;