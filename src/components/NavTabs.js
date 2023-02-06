import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="center nav-bg-color header">
      <div class="light-text">
        <a
          href="#"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          <h4>Efrain's Portfolio</h4>
        </a>
      </div>

      <ul className="nav nav-tabs center">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>

        {/* <li className="nav-item">
          <a
            href="#contactform"
            onClick={() => handlePageChange('ContactForm')}
            // Check to see if the currentPage is `ContactForm`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
          >
            Contact Form
          </a>
        </li> */}
      </ul>

      {/* <div class="vertical-fade fade"></div> */}
    </div>
  );
}

export default NavTabs;
