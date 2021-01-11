import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import { debounce, handleNavVisibility } from '../util';

import cartelTextLogo from '../images/cartel-logo-text.svg';

export const Header = ({ siteTitle }) => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const windowWidth = useWindowWidth();

  const toggleMenu = () => {
    if (!menuIsExpanded) {
      setMenuIsExpanded(true);
      toggleIsOpen();
    } else {
      toggleIsOpen();
      setTimeout(() => setMenuIsExpanded(false), 500);
    }
  };

  const toggleIsOpen = () => {
    setTimeout(() => setIsOpen(!isOpen), 100);
  };

  useEffect(() => {
    const handleEscPress = event => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        setMenuIsExpanded(!menuIsExpanded);
      }
    };

    const handleOutsideClick = event => {
      if (menuIsExpanded) {
        // ignore clicks on the component itself
        if (menuRef.current.contains(event.target)) {
          return;
        }
        setMenuIsExpanded(false);
      }
    };

    if (windowWidth > 767) setMenuIsExpanded(false);

    // close menu dropdown on ESC
    window.addEventListener('keydown', handleEscPress);

    // handle click outside of component
    document.addEventListener('click', handleOutsideClick, false);

    // handle showing/hiding nav on scroll up/down
    const nav = document.querySelector('.header');
    window.addEventListener('scroll', () =>
      debounce(handleNavVisibility(nav), 1000)
    );

    return () => {
      window.removeEventListener('keydown', handleEscPress);
      window.removeEventListener('scroll', handleNavVisibility);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [menuIsExpanded]);

  return (
    <Fragment>
      <header className="header" role="banner" ref={menuRef}>
        <button
          className="header__menu-button"
          type="button"
          aria-label="open site navigation"
          aria-controls="nav-list"
          aria-expanded={menuIsExpanded}
          onClick={toggleMenu}
        >
          {menuIsExpanded ? 'Close' : 'Menu'}
        </button>
        <nav
          className={`nav nav--large ${isOpen ? 'is-open' : ''}`}
          role="navigation"
          id="nav-list"
          hidden={windowWidth > 767 ? false : !menuIsExpanded}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/work" className="nav__link">
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/editors" className="nav__link">
                Editors
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/music-videos" className="nav__link">
                Music Videos
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/the-lookout" className="nav__link">
                The Lookout
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <Link className="header__logo-link" to="/">
          <h1 className="visuallyhidden">{siteTitle}</h1>
          <img
            className="header__logo"
            src={cartelTextLogo}
            alt="Cartel logo"
          />
        </Link>
      </header>
      <nav
        className={`nav nav--small ${isOpen ? 'is-open' : ''}`}
        role="navigation"
        id="nav-list"
        hidden={windowWidth > 767 ? false : !menuIsExpanded}
      >
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/work" className="nav__link">
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/editors" className="nav__link">
              Editors
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/music-videos" className="nav__link">
              Music Videos
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/the-lookout" className="nav__link">
              The Lookout
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
