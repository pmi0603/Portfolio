import React from 'react';
import './Portfolio_styling.css'
function Skills() {
    return (
        <section id="skills">
            <div className="skill-container">
                {
                    <><img src="c.png" alt="C" className="skill-img" /><img src="c++.png" alt="C++" className="skill-img" /><img src="Nodejs.png" alt="Nodejs" className="skill-img" /><img src="php.png" alt="PHP" className="skill-img" /><br /><img src="html.png" alt="HTML" className="skill-img" /><img src="css.png" alt="CSS" className="skill-img" /><img src="javascript.png" alt="JavaScript" className="skill-img" /><br /><img src="react.png" alt="Reactjs" className="skill-img" /><img src="express.png" alt="Expressjs" className="skill-img" /><img src="mysql.png" alt="MySql" className="skill-img" /><img src="mongodb.png" alt="MongoDB" className="skill-img" /><br /><img src="git.png" alt="GIT" className="skill-img" /><img src="Jenkins.jpg" alt="Jenkins" className="skill-img" /><img src="gcp.png" alt="Google Cloud Platform" className="skill-img" /><br /></>
      }
            </div>
        </section>
    );
}

export default Skills;
