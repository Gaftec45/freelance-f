import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">Tega</Link>
            <div className="header-right">
                <Link to="/" className="active">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/gigs">Gigs</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/signup">sign up</Link>
                <Link to="/login">login</Link>
            </div>
        </div>
    );
}

export default Navbar;