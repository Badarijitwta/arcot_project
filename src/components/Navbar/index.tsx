import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-logo">
        <h3 id="logo-text">Arcot AI</h3>
      </div>
      <div className="navbar-menu">
        <h3>Home</h3>
        <h3>Dashboard</h3>
      </div>
      <div
        className="navbar-misc"
        style={{
          margin: "1rem",
          width: "5rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="contact-icon">
          <img
            id="contact-icon"
            src="contact.png"
            alt="Contact"
            style={{ width: "1rem", height: "1rem" }}
          />
        </div>
        <h5>Contact</h5>
      </div>
    </div>
  );
}
