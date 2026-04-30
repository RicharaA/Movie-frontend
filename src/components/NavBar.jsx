import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return <nav className="navbar">
        <div className= "navbar-brand">
            <Link to = "/"  >Movies App</Link>
        </div>
        <div className="navbar-links">
            <Link to ="/" className="nav-link">Home</Link>
            <Link to ="/favorites" className="nav-link">Favourites</Link>
            <Link to="/movies" className="nav-link">Movies</Link>
        </div>
    </nav>
}
export default NavBar      