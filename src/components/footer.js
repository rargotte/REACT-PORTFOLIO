import React from 'react';

export default function Footer() {
    return (
        <div>
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

                    <a href="https://github.com/rargotte/react-portfolio" data-toggle="tooltip" data-html="true"
                        title="Check Github">
                        <i className="bi bi-github"></i>
                    </a>

                    <a href="https://rargotte.github.io/react-portfolio/#portfolio" data-toggle="tooltip" data-html="true"
                        title="Check Portfolio">
                        <i className="bi bi-briefcase-fill"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/regulo-argotte" data-toggle="tooltip" data-html="true"
                        title="https://www.linkedin.com/in/regulo-argotte">
                        <i className="bi bi-linkedin"></i>
                    </a>

                </div>

            </div>
        </div>
    )
}
