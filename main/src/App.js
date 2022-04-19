import './App.css';
import Cardof from './components/Cardof';
import jobs from './jobs';




function App() {
  return (
    <div className="App">
      <header>
        <h1 class="page-title">
          Regulo Argotte IT Solution Architect
        </h1>
        <div>
          <ul>
            <li> <a href="#about-me">About Me</a> </li>
            <li> <a href="#my-work">My Work</a> </li>
            <li> <a href="#contact">Contact</a> </li>
            <li> <a href="https://www.dropbox.com/s/gywbvo79yf42s8k/ReguloArgotte%20CV.pdf?dl=0">Resume</a> </li>
          </ul>
        </div>
      </header>

      <div class="container">
        <div class="back-profile">
        </div>


        <main>
          <section class="row justify-center">

            <div class="left-column">
              <div id="about-me" class="small.square">
                <h2>About</h2>
                <h2>Me</h2>
              </div>

            </div>
            <div class="right-column">
              <div class="text-square">
                <h2>I am a certified SAP SD/MM/ABAP consultant with more than 24 years of working experience in
                  Information
                  Technology who has performed the last 5 years as software developer manager and Solution
                  Architect for large global projects which demand solution to high complex business
                  processes.
                  My soft skills in project management as well as my technical knowledge on software
                  development
                  provide a unique profile to create great solutions leveraging software, hardware, and
                  infrastructure.</h2>
                <h2>Recently I have joined the exiting world of web applications with the purpose of extending
                  my knowledge and apply it to the scope of SAP solutions that I might design.
                </h2>


              </div>

            </div>



            <div class="left-column">
              <div id="my-work" class="small.square">
                <h2>Work</h2>
              </div>

            </div>

              <Cardof jobs={jobs} />

            <div class="left-column">
              <div id="contact" class="small.square">
              </div>

            </div>
            <div class="right-column">
              <div class="contact-square">

                <a href="tel:+5215510801792" data-toggle="tooltip" data-html="true" title="Reach by Phone">
                  <i class="bi bi-telephone"></i>
                </a>

                <a href="mailto:rargotte@hotmail.com" data-toggle="tooltip" data-html="true"
                  title="Reach by email">
                  <i class="bi bi-envelope"></i>
                </a>

                <a href="https://github.com/rargotte/portfolio-updated" data-toggle="tooltip" data-html="true"
                  title="Check Github">
                  <i class="bi bi-github"></i>
                </a>

                <a href="https://rargotte.github.io/portfolio-updated/" data-toggle="tooltip" data-html="true"
                  title="Check Portfolio">
                  <i class="bi bi-briefcase-fill"></i>
                </a>

                <a href="https://www.linkedin.com/in/regulo-argotte-0865113?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGsnjYlEdQRuonDAHqA0FSQ%3D%3D" data-toggle="tooltip" data-html="true"
                  title="Check Linkedin">
                  <i class="bi bi-linkedin"></i>
                </a>

              </div>

            </div>

          </section>
        </main>



      </div>
    </div>
  );
}

export default App;
