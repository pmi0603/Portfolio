import React from 'react';
import './Portfolio_styling.css'

function Skills() {
    return (
        <section id="skills">
            <div className="skill-container">
                {
<><img src="/images/letter-c.png" alt="C" className="skill-img" />
<img src="/images/C++.png" alt="C++" className="skill-img" />
<img src="/images/node-js.png" alt="Nodejs" className="skill-img" />
<img src="/images/php.png" alt="PHP" className="skill-img" /><br></br>
<img src="/images/html.png" alt="HTML" className="skill-img" />
<img src="/images/css.png" alt="CSS" className="skill-img" />
<img src="/images/js.jpeg" alt="JavaScript" className="skill-img" /><br></br>
<img src="/images/react-js.png" alt="Reactjs" className="skill-img" />
<img src="/images/express-js.png" alt="Expressjs" className="skill-img" />
<img src="/images/MYSQL-Logo.jpg" alt="MySql" className="skill-img" />
<img src="/images/mongo.png" alt="MongoDB" className="skill-img" /><br></br>
<img src="/images/git.png" alt="GIT" className="skill-img" />
<img src="/images/jenkins.png" alt="Jenkins" className="skill-img" /><br></br>
 </>
      }
            </div>
        </section>
    );
}

export default Skills;
