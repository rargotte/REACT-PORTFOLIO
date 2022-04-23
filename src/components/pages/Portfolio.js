import React from 'react';


export default function Portfolio({ jobs }) {

    function githubLink(job) {
        console.log(job.githubClick);
        window.location.href = job.githubClick;
    }

    function openLink(job) {
        console.log(job.openClick);
        window.location.href = job.openClick;
    }

    return (
        <div class="container">

            <div class="back-profile"></div>

            <main>
                <section className="row justify-center">

                    <div className="left-column">
                        <div id="my-work" className="small.square">
                            <h2>Work</h2>
                        </div>
                    </div>

                    <div className="right-column">
                        {jobs.map((job, index) => (

                            <div className="small-square">
                                <div className="btn-group">
                                    <label className="btn btn-primary btn-pic img-wrapper">
                                        <button type="button" data-toggle="modal" data-target={job.dataTarget} name="options"
                                            id={index} autoComplete="off" checked><img
                                                src={job.imgSrc} />
                                        </button>
                                    </label>
                                </div>

                                <div className="github-link">
                                    <button onClick={() => githubLink(job)} type="button"
                                        className="btn btn-primary">GitHub</button>
                                    <button onClick={() => openLink(job)} type="button"
                                        className="btn btn-primary">OPEN</button>
                                </div>
                            </div>
                        ))},

                        {jobs.map((job, index) => (
                            <div className="modal fade" id={job.modalId} tabIndex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`${job.modalLabel}`}>{`${job.modalLabel}`}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={job.modalSrc} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))},

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



            </main>
        </div>

    );
}
