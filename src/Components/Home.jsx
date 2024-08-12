import React from 'react';
import './Portfolio_styling.css'
import './PrashantMishra.pdf'
function Home() {
    return (
        <div id="heading">
            <h1>Hi,<br /> I am Prashant Mishra</h1>
            <h4>Computer Science Graduate</h4>
            <p>
                <i class="fa fa-phone"></i><a href="tel://+91 7973745181" id="phone">7973745181</a><br></br>
                <i class="fa fa-envelope"></i><a href="mailto:pm622244@gmail.com" id="mail">PrashantMishra</a><br></br>
                <i class="fa fa-file-pdf-o"></i><a href="PrashantMishra.pdf" id="resume" target="_blank">Resume</a>
            </p>
        </div>
    );
}

export default Home;
