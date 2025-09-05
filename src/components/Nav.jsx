import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav aria-label="Primary" className="site-nav">
      <div className="container nav-inner">
        <ul className="nav-list">
          <li>
            <NavLink to="/" aria-label="Go to Home" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" aria-label="Reserve a table" className={linkClass}>
              Booking
            </NavLink>
          </li>
          <li>
            <Link to="/about" className="nav-link" aria-label="About Little Lemon">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
