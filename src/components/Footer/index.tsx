import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <h3 id="footer-heading">Contact</h3>
      <div className="footer-main-content">
        <div className="footer-content-block">
          <h4>Company Deatils</h4>
          <a
            href="http://arcotgroup.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>ArcotGroup</h4>
          </a>
          <br />

          <p>
            C - 208/209, Trade World, <br />C wing, Kamala Mills, Lower Parel,
            <br /> Mumbai 400013.
          </p>
        </div>
        <div className="footer-content-block">
          <h4>Developer Details</h4>

          <h4 style={{ color: "white" }}>Badarinath H R</h4>
          <br />
          <a href="https://www.linkedin.com/in/badarinathhr/">LinkedIn</a>
          <a href="https://github.com/Badarijitwta">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
