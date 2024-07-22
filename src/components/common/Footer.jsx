import { linklist } from "../../assets/data/data";
const basePath = import.meta.env.BASE_URL;
export const Footer = () => {
  return (
    <>
      <footer className="tj-footer-area">
        <div className="container text-center">
          <div className="logo-box">
            <a href="/">
            <img src={`${basePath}images/common/logo.png`} alt="logo" />
            </a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <a href={link.link}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="copy-text">
            <p>
              &copy; 2024 All rights reserved by
              <a href="#" target="_blank">
              Izzah Bhutta
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
