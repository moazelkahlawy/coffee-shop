import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { links } from "../../Data";
import { Link, animateScroll } from "react-scroll";
import { FaStream } from "react-icons/fa";
import "./header.css";

function Header() {
  const [scrollHeader, setscrollHeader] = useState(false);
  const [showMenu, setshowMenu] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setscrollHeader(true);
    } else {
      setscrollHeader(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);

  return (
    <header className={`${scrollHeader ? "scroll-header" : ""} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav__logo">
          <img src={logo} alt="" className="nav__logo-img" />
        </Link>
        <div className={`${showMenu ? "show-menu" : ""} nav__menu`}>
          <ul className="nav__list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav__item" key={index}>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-60}
                    hashSpy={true}
                    duration={500}
                    to={path}
                    className="nav__link"
                    onClick={() => setshowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setshowMenu(!showMenu)}>
          <FaStream />
        </div>
      </nav>
    </header>
  );
}

export default Header;
