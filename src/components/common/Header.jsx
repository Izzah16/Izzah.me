import { useState, useEffect } from "react";
import { IoMenuOutline, IoCloseOutline, IoHome, IoConstruct, IoBriefcase, IoDocumentText, IoHammer, IoChatboxEllipses, IoMail } from "react-icons/io5";
import './Header.css';

const basePath = import.meta.env.BASE_URL;

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}>
      <div className="container flexSB">
        <div className="logo-box">
          <a href="#/">
            <img src={`${basePath}images/common/logo.png`} alt="logo" />
          </a>
        </div>
        <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ul>
              <li><a href="#/"><IoHome size={24} /></a></li>
              <li><a href="#services"><IoConstruct size={24} /></a></li>
              <li><a href="#works-section"><IoBriefcase size={24} /></a></li>
              <li><a href="#resume-section"><IoDocumentText size={24} /></a></li>
              <li><a href="#skills"><IoHammer size={24} /></a></li>
              <li><a href="#testimonials-section"><IoChatboxEllipses size={24} /></a></li>
              <li><a href="#contact-section"><IoMail size={24} /></a></li>
            </ul>
          </nav>
        </div>
        <div className="flexSB">
          <div className="header-button">
            <a href="#/" className="btn tj-btn-primary">Hire me!</a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <IoCloseOutline size={55} /> : <IoMenuOutline size={55} />}
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav>
              <ul className="arc-menu">
                <li><a href="#/"><IoHome size={24} /></a></li>
                <li><a href="#services"><IoConstruct size={24} /></a></li>
                <li><a href="#works-section"><IoBriefcase size={24} /></a></li>
                <li><a href="#resume-section"><IoDocumentText size={24} /></a></li>
                <li><a href="#skills"><IoHammer size={24} /></a></li>
                <li><a href="#testimonials-section"><IoChatboxEllipses size={24} /></a></li>
                <li><a href="#contact-section"><IoMail size={24} /></a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
