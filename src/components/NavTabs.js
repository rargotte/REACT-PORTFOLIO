import React from 'react';



//    <li> <a href="https://www.dropbox.com/s/gywbvo79yf42s8k/ReguloArgotte%20CV.pdf?dl=0">Resume</a> </li>


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1 className="page-title">
        Regulo Argotte IT Solution Architect
      </h1>
      <div>
        <ul>
          <li> <a href="#about" onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
          </li>

          <li> <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
          </li>

          <li> <a href="#contact" onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
          </li>

          <li> <a href="#resume" onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
          </li>


        </ul>
      </div>
    </header>

  );
}

export default NavTabs;
