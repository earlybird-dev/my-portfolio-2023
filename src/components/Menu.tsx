const Menu = () => {
  return (
    <div className="fixed-top container">
      <div className="position-relative rounded-5 my-4 py-3 px-5 d-flex align-items-center justify-content-center">
        <a href="#">
          <span className="menu-item active px-3 py-2 rounded-5 mx-1">
            <i className="bi bi-house"></i>
          </span>
        </a>
        <a href="#experience">
          <span className="menu-item px-3 py-2 rounded-5 mx-1">Experience</span>
        </a>
        <a href="#projects">
          <span className="menu-item px-3 py-2 rounded-5 mx-1">Projects</span>
        </a>
        <a href="#contact">
          <span className="menu-item px-3 py-2 rounded-5 mx-1">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Menu;
