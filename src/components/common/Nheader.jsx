import React, { useState, useEffect, useRef } from "react";
import './Header.css'; // Ensure this file exists or update the path if necessary
import { IoHome, IoConstruct, IoBriefcase, IoDocumentText, IoHammer, IoChatboxEllipses, IoMail } from "react-icons/io5";

const NHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [curveX, setCurveX] = useState(10);
  const [curveY, setCurveY] = useState(0);
  const [menuExpanded, setMenuExpanded] = useState(false);
  
  const blobRef = useRef(null);
  const blobPathRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const height = window.innerHeight;
    let x = 0, y = height / 2;
    let targetX = 0;
    let xitteration = 0, yitteration = 0;

    const handleMouseMove = (e) => {
      x = e.pageX;
      y = e.pageY;
    };

    const handleMouseEnter = () => {
      setMenuExpanded(true);
    };

    const handleMouseLeave = () => {
      setMenuExpanded(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const blob = blobRef.current;
    const blobPath = blobPathRef.current;
    const hamburger = hamburgerRef.current;

    const easeOutExpo = (currentIteration, startValue, changeInValue, totalIterations) => {
      return changeInValue * (-Math.pow(2, -10 * currentIteration / totalIterations) + 1) + startValue;
    };

    const svgCurve = () => {
      if ((curveX > x - 1) && (curveX < x + 1)) {
        xitteration = 0;
      } else {
        if (menuExpanded) {
          targetX = 0;
        } else {
          xitteration = 0;
          if (x > 150) {
            targetX = 0;
          } else {
            targetX = -(((60 + 20) / 100) * (x - 150));
          }
        }
        xitteration++;
      }

      if ((curveY > y - 1) && (curveY < y + 1)) {
        yitteration = 0;
      } else {
        yitteration = 0;
        yitteration++;
      }

      const newCurveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
      const newCurveY = easeOutExpo(yitteration, curveY, y - curveY, 100);
      setCurveX(newCurveX);
      setCurveY(newCurveY);

      const anchorDistance = 200;
      const curviness = anchorDistance - 40;

      const newCurve2 = `M60,${height}H0V0h60v${newCurveY - anchorDistance}c0,${curviness},${newCurveX},${curviness},${newCurveX},${anchorDistance}S60,${newCurveY},60,${newCurveY + (anchorDistance * 2)}V${height}z`;

      blobPath.setAttribute('d', newCurve2);
      blob.style.width = `${newCurveX + 60}px`;
      hamburger.style.transform = `translate(${newCurveX}px, ${newCurveY}px)`;
      document.querySelector('h2').style.transform = `translateY(${newCurveY}px)`;

      requestAnimationFrame(svgCurve);
    };

    svgCurve();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [curveX, curveY, menuExpanded]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}>
      <div className="container flexSB">
        <div className="logo-box">
          <a href="#/">
            <img src="/images/common/logo.png" alt="logo" />
          </a>
        </div>
        <div id="menu">
          <div
            className="hamburger"
            ref={hamburgerRef}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className={`menu-inner ${isMenuOpen ? "open" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ul>
              <li><a href="#/"><IoHome size={24} /> Home</a></li>
              <li><a href="#services"><IoConstruct size={24} /> Services</a></li>
              <li><a href="#works-section"><IoBriefcase size={24} /> Works</a></li>
              <li><a href="#resume-section"><IoDocumentText size={24} /> Resume</a></li>
              <li><a href="#skills"><IoHammer size={24} /> Skills</a></li>
              <li><a href="#testimonials-section"><IoChatboxEllipses size={24} /> Testimonials</a></li>
              <li><a href="#contact-section"><IoMail size={24} /> Contact</a></li>
            </ul>
          </div>
          <svg
            version="1.1"
            id="blob"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            ref={blobRef}
          >
            <path
              id="blob-path"
              ref={blobPathRef}
              d="M60,500H0V0h60c0,0,20,172,20,250S60,900,60,500z"
            />
          </svg>
        </div>
      </div>
      <h2> hover close to the menu </h2>
    </header>
  );
};

export default NHeader;
