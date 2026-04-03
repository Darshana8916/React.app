import "./navbar.css";

function Navbar() {
  const path = window.location.pathname; 

  return (
    <div className="nav">

      <a
        href="/"
        className={`nav-link ${path === "/" ? "active" : ""}`}
      >
        Home
      </a>

      <a
        href="/About"
        className={`nav-link ${path === "/About" ? "active" : ""}`}
      >
        About Us
      </a>

      <a
        href="/Contact"
        className={`nav-link ${path === "/Contact" ? "active" : ""}`}
      >
        Contact Us
      </a>

    </div>
  );
}

export default Navbar;