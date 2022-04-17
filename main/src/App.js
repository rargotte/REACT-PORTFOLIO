import logo from './logo.svg';
import './App.css';


function App() {
  //  const text = 'some text';
  //  return <p>Hello World! Here is {text}</p>;
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
            <div class="right-column">

              <div class="small-square">
                <div class="btn-group">
                  <label class="btn btn-primary btn-pic img-wrapper">
                    <button type="button" data-toggle="modal" data-target="#WatchChillModal" name="options"
                      id="option1" autocomplete="off" checked><img
                        src="./img/watch_chill_logo.png"/>
                    </button>
                  </label>
                </div>
                <div class="github-link">
                  <button onclick="location.href='https://github.com/rargotte/watch-chill'" type="button"
                    class="btn btn-primary">GitHub</button>
                  <button onclick="location.href='https://rargotte.github.io/watch-chill/'" type="button"
                    class="btn btn-primary">OPEN</button>
                </div>

              </div>


              <div class="modal fade" id="WatchChillModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Watch and Chill</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="./img/watch_chill_screenshot.png" />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>



              <div class="small-square">
                <div class="btn-group">
                  <label class="btn btn-primary btn-pic img-wrapper">
                    <button type="button" data-toggle="modal" data-target="#exampleModal" name="options"
                      id="option2" autocomplete="off" checked><img
                        src="./img/weather_dashboard_logo.png"/>
                    </button>
                  </label>
                </div>
                <div class="github-link">
                  <button onclick="location.href='https://github.com/rargotte/weather-dashboard.git'"
                    type="button" class="btn btn-primary">GitHub</button>
                  <button onclick="location.href='https://rargotte.github.io/weather-dashboard/'"
                    type="button" class="btn btn-primary">OPEN</button>
                </div>

              </div>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Weather Dashboard</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="./img/weather_dashboard_screenshot.png" />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>


              <div class="small-square">
                <div class="btn-group">
                  <label class="btn btn-primary btn-pic img-wrapper">
                    <button type="button" data-toggle="modal" data-target="#WorkDayScheduler" name="options"
                      id="option3" autocomplete="off" checked><img
                        src="./img/workday_scheduler_logo.png"/>
                    </button>
                  </label>
                </div>
                <div class="github-link">
                  <button onclick="location.href='https://github.com/rargotte/Work-Day-Scheduler.git'"
                    type="button" class="btn btn-primary">GitHub</button>
                  <button onclick="location.href='https://rargotte.github.io/Work-Day-Scheduler/'"
                    type="button" class="btn btn-primary">OPEN</button>
                </div>

              </div>



              <div class="modal fade" id="WorkDayScheduler" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Work-Day-Scheduler</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="./img/workday_scheduler_screenshot.png" />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="small-square">
                <div class="btn-group">
                  <label class="btn btn-primary btn-pic img-wrapper">
                    <button type="button" data-toggle="modal" data-target="#u_meet" name="options"
                      id="option1" autocomplete="off" checked><img src="./img/u_meet_logo.jpg"/>
                    </button>
                  </label>
                </div>
                <div class="github-link">
                  <button onclick="location.href='https://github.com/csancheze/u-meet'" type="button"
                    class="btn btn-primary">GitHub</button>
                  <button onclick="location.href='https://u-meet-app.herokuapp.com/'" type="button"
                    class="btn btn-primary">OPEN</button>
                </div>

              </div>


              <div class="modal fade" id="u_meet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">u-meet</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <img src="./img/u_meet_screenshot.jpg" />
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>



            </div>

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
