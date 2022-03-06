const Navbar = () => {
    return (
        <nav className="navbar bg-light navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand text-danger">React blog</a>
                <div className="d-flex align-items-center">
                    <a className="text-reset me-3" href="/">Home</a>
                    <a className="text-reset me-3" href="/create">Create</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;