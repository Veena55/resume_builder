import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border bg-white w-100 px-5 py-2 sticky-lg-top z-3" >
            <div className="d-flex justify-content-between align-items-center pt-2">
                <h4 className="text-dark-theme">Logo</h4>
                <ul>
                    <Link to='/' className="text-decoration-none mx-3 nav_link text-dark-theme">Home</Link>
                    <Link to='/resume' className="text-decoration-none mx-3 nav_link text-dark-theme">My Resume</Link>
                    <Link to='/' className="text-decoration-none mx-3 nav_link text-dark-theme">Logout</Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;