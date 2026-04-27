
import { Link } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Movie App</h2>
          <p>Watch the latest movies and trailers anytime.</p>
        </div>


         <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
            <li><Link to ="/" className="footer-link">Home</Link></li>
            <li><Link to ="/movies" className="footer-link">Movies</Link></li>
            <li><Link to ="/favorites" className="footer-link">Favorites</Link></li>
            <li><Link to ="/contact" className="footer-link">Contact</Link></li>
            </ul>
        </div>


        <div className="footer-social">
          <h3>Follow Us</h3>
          <p><Link to ="/facebook" className="footer-link">Facebook</Link> | <Link to ="/instagram" className="footer-link">Instagram</Link> |<Link to ="/twitter" className="footer-link">Twitter</Link> </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 MovieApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;