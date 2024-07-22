import { NavLink } from "react-router-dom";
import { projects } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";

export const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section" id="works-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">My Recent Works</h2>
            
          </div>

          
          <div className="portfolio-box">
            <div className="grid2">
              {projects.map((project) => (
                <div className="portfolio-item branding" key={project.id}>
                  <div className="image-box">
                    <video src={project.cover}
                     autoPlay 
                     loop 
                     muted 
                     cover 
                     ></video>
                  </div>
                  <div className="content-box">
                  <p>{project.desc}</p>
                  <a href={project.Url} target="_blank" rel="noopener noreferrer">
                  <i>
                      <GoArrowUpRight  size={50} />
                    </i>
                    </a>
                   
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
