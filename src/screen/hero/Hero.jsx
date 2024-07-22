import { FaEnvelope, FaFacebook,  } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../assets/data/data";

export const Hero = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaEnvelope size={17} />,
    },
    {
      id: 2,
      icon: <FaFacebook size={20} />,
    },
    {
      id: 3,
      icon: <FaLinkedinIn size={20} />,
    },
    {
      id: 4,
      icon: <IoLogoGithub size={20} />,
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Izzah</span>
                <h1 className="hero-title">
                  Web Developer +<br />
                  UX Designer
                </h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.jpg" alt="" />
                </div>

                <p className="lead">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                <div className="button-box flexG">
                  <a href="https://drive.google.com/file/d/1sgH9Cvbv_Nu6pv6-rDHI0EhqDrzXtXfC/view?usp=sharing" className="btn tj-btn-secondary">
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon, index) => (
                      <li key={index}>
                        <a href="#">{icon.icon}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right w-half">
              <div className="hero-image-box text-center">
                <img src="../images/common/me.jpg" alt="logo" />
              </div>
            </div>
          </div>

          <div className="funfact-area grid4">
            {hero.map((item, index) => (
              <div className="funfact-item" key={index}>
                <div className="number">
                  <span>{item.text}</span>
                </div>
                <div className="text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
