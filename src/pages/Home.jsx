import {  Contact, Hero, Portfolio, Resume, Service, Skill, Testimonial } from "../utils/Router";

export const Home = () => {
  return (
    <div div id="/">
      <Hero />
      <Service />
      <Portfolio />
      <Resume />
      <Skill />
      <Testimonial />
     
      <Contact />
    </div>
  );
};
