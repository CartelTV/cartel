import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import cartelTextLogo from '../images/cartel-logo-text.svg';

export const Header = ({ location, siteTitle }) => {
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
    <StaticQuery
      query={graphql`
        query {
          cartel {
            menus {
              nodes {
                menuItems {
                  edges {
                    node {
                      label
                      path
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="container">
          {' '}
          <nav
            className={`nav nav--small ${isOpen ? 'is-open' : ''}`}
            role="navigation"
            id="nav-list-small"
            hidden={windowWidth > 767 ? false : !menuIsExpanded}
          >
            <ul className="nav__list">
              {data.cartel.menus.nodes[0].menuItems.edges.map(item => (
                <li className="nav__item" key={item.node.path}>
                  <Link
                    to={item.node.path}
                    className="nav__link"
                    ref={
                      item.node.path === location && location.pathname
                        ? menuRef
                        : null
                    }
                    tabIndex={menuIsExpanded ? 0 : -1}
                  >
                    {item.node.label}
                  </Link>
                </li>
              ))}
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
                {data.cartel.menus.nodes[0].menuItems.edges.map(item => (
                  <li className="nav__item" key={item.node.path}>
                    <Link
                      to={item.node.path}
                      className="nav__link"
                      activeClassName="active"
                    >
                      {item.node.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </div>
      )}
    />
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
