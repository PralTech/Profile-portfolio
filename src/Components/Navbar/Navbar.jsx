import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(false);
  };

  return (
    <nav className="custom-navbar">
            <span className="custom-brand">Pr@l-Tech</span>
      <div className="custom-container">
          <button
            className={`hamburger-menu ${isCollapsed ? 'active' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>


        <div className={`custom-collapse ${isCollapsed ? 'active' : ''}`}>
          <ul className="custom-nav">
            <li className="custom-item">
              <Link className="custom-link active" to="/" 
              onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="custom-item">
              <Link className="custom-link" to="/Services"
              onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li className="custom-item">
              <Link className="custom-link" to="/Work"
              onClick={handleLinkClick}
              >
                Work
              </Link>
            </li>
            <li className="custom-item">
              <Link className="custom-link " to="/Portfolio"
              onClick={handleLinkClick}
              >
                Portfolio
              </Link>
            </li>
            <li className="custom-item">
              <Link className="custom-link" to="/testimonials"
              onClick={handleLinkClick}
              >
                Testimonials
              </Link>
            </li>
            <li className="custom-item">
              <Link className="custom-link" to="/Contact"
              onClick={handleLinkClick}
              >
                Contact me
              </Link>
            </li>
          </ul>

          <form className="custom-search">
            <input
              className="custom-search-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="custom-search-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
