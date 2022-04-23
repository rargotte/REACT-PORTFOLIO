import React from 'react';

export default function Resume() {
    return (
        <div class="container">
            <div class="back-profile"></div>
            <div className="mx-auto" style={{ width: "300px" }}>
                <h1 className='card-title'>Resume</h1>
                <h2 className='card-title'>Download my <a className="badge badge-pill badge-primary" href='https://www.dropbox.com/s/gywbvo79yf42s8k/ReguloArgotte%20CV.pdf?dl=0'>resume</a>
                </h2>
                <h3 className='card-title'>Front End Proficiencies</h3>
                <ul className="list-group">
                    <li className="list-group-item"> HTML </li>
                    <li className="list-group-item"> CSS </li>
                    <li className="list-group-item">  JavaScript </li>
                    <li className="list-group-item"> JQuery </li>
                    <li className="list-group-item"> Responsive Design </li>
                    <li className="list-group-item"> React </li>
                    <li className="list-group-item"> Bootstrap </li>
                </ul>

                <h3 className='card-title'>Back End Proficiencies</h3>
                <ul className="list-group">
                    <li className="list-group-item"> API's </li>
                    <li className="list-group-item"> Node </li>
                    <li className="list-group-item">  Express </li>
                    <li className="list-group-item"> MySql Sequelize </li>
                    <li className="list-group-item"> MongoDB Mongoose </li>
                    <li className="list-group-item"> REST </li>
                    <li className="list-group-item"> GraphQL </li>
                </ul>

            </div>
        </div>

    );
}
