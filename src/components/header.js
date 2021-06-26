import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import cartelTextLogo from '../images/cartel-logo-text.svg';

export const Header = ({ siteTitle }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const windowWidth = useWindowWidth();

  const toggleMenu = () => {
    if (!menuIsExpanded) {
      setMenuIsExpanded(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setTimeout(() => setMenuIsExpanded(false), 500);
    }
  };

  useEffect(() => {
    const handleEscPress = event => {
      if ((event.key === 'Escape' || event.keyCode === 27) && menuIsExpanded) {
        setIsOpen(false);
        setTimeout(() => setMenuIsExpanded(false), 500);
      }
    };

    if (menuIsExpanded && menuRef.current) menuRef.current.focus();

    if (windowWidth > 819) {
      setMenuIsExpanded(false);
      setIsOpen(false);
    }

    // close menu dropdown on ESC
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [menuIsExpanded, windowWidth]);

  return (
    <div className="container">
      {' '}
      <nav
        className={`nav nav--small ${isOpen ? 'is-open' : ''}`}
        role="navigation"
        id="nav-list-small"
        hidden={windowWidth > 767 ? false : !menuIsExpanded}
      >
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/work" className="nav__link" ref={menuRef}>
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/editors" className="nav__link">
              Editors
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/the-lookout" className="nav__link">
              The Lookout
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/music-videos" className="nav__link">
              Music Videos
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <header className={`header ${isOpen ? 'is-open' : ''}`} role="banner">
        <button
          className="header__menu-button"
          type="button"
          aria-label="open site navigation"
          aria-controls="nav-list"
          aria-expanded={menuIsExpanded}
          onClick={toggleMenu}
        >
          Menu
        </button>

        <div className="header__logo-wrapper">
          <Link className="header__logo-link" to="/">
            <h1 className="visuallyhidden">{siteTitle}</h1>
            <img
              className="header__logo"
              src={cartelTextLogo}
              alt="Cartel logo"
            />
          </Link>
        </div>

        <nav
          className={`nav nav--large ${isOpen ? 'is-open' : ''}`}
          role="navigation"
          id="nav-list"
          hidden={windowWidth > 767 ? false : !menuIsExpanded}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/work" className="nav__link" activeClassName="active">
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/editors"
                className="nav__link"
                activeClassName="active"
              >
                Editors
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/the-lookout"
                className="nav__link"
                activeClassName="active"
              >
                The Lookout
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/music-videos"
                className="nav__link"
                activeClassName="active"
              >
                Music Videos
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className="nav__link"
                activeClassName="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
