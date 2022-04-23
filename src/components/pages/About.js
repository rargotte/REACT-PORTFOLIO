import React from 'react';
import Footer from '../footer';

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

                <Footer />;

            </main >
        </div>
    );
}
