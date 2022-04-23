import React from 'react';

export default function About() {
    return (
        <div class="container">

            <div class="back-profile"></div>

            <main>
                <section className="row justify-center">

                    <div className="left-column">
                        <div id="about" className="small.square">
                            <h2>About</h2>
                            <h2>Me</h2>
                        </div>

                    </div>
                    <div className="right-column">
                        <div className="text-square">
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

                </section>

                <div className="left-column">
                    <div id="contact" className="small.square">
                    </div>
                </div>

                <div className="right-column">
                    <div className="contact-square">

                        <a href="tel:+5215510801792" data-toggle="tooltip" data-html="true" title="+5215510801792">
                            <i className="bi bi-telephone"></i>
                        </a>

                        <a href="mailto:rargotte@hotmail.com" data-toggle="tooltip" data-html="true"
                            title="rargotte@hotmail.com">
                            <i className="bi bi-envelope"></i>
                        </a>

                        <a href="https://github.com/rargotte/portfolio-updated" data-toggle="tooltip" data-html="true"
                            title="Check Github">
                            <i className="bi bi-github"></i>
                        </a>

                        <a href="https://rargotte.github.io/portfolio-updated/" data-toggle="tooltip" data-html="true"
                            title="Check Portfolio">
                            <i className="bi bi-briefcase-fill"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/regulo-argotte" data-toggle="tooltip" data-html="true"
                            title="https://www.linkedin.com/in/regulo-argotte">
                            <i className="bi bi-linkedin"></i>
                        </a>

                    </div>

                </div>



            </main >
        </div>
    );
}
