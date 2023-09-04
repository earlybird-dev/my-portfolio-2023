import typing from "/typing.svg";
import Menu from "./Menu";

const Intro = () => {
  return (
    <section id="intro" className="container">
      <Menu />
      <div className="row min-h-screen py-3 d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center text-dark-3 heading">Ha Nguyen</h1>
          <div className="text-center subheading my-5 position-relative d-flex flex-column gap-3">
            <div>Data Analyst</div>
            <div className="and-sign text-brand position-absolute top-50 start-0 translate-middle z-n1 opacity-75">
              &
            </div>
            <div>Web Developer</div>
          </div>
          <p className="text-center">
            Based in Australia, I'm a data analyst and front-end developer
            passionate about building insightful dashboards and accessible web
            apps that users love.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <img src={typing} alt="" className="w-100" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
