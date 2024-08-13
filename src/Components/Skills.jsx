import React from 'react';
import './Portfolio_styling.css'

function Skills() {
    return (
        <section id="skills">
            <div className="skill-container">
                {
<><img src="/images/c.png" alt="C" className="skill-img" />
<img src="/images/c++.png" alt="C++" className="skill-img" />
<img src="/images/Nodejs.png" alt="Nodejs" className="skill-img" />
<img src="/images/php.png" alt="PHP" className="skill-img" /><br></br>
<img src="/images/html.png" alt="HTML" className="skill-img" />
<img src="/images/css.png" alt="CSS" className="skill-img" />
<img src="/images/javascript.png" alt="JavaScript" className="skill-img" /><br></br>
<img src="/images/react.png" alt="Reactjs" className="skill-img" />
<img src="/images/express.png" alt="Expressjs" className="skill-img" />
<img src="/images/mysql.png" alt="MySql" className="skill-img" />
<img src="/images/mongodb.png" alt="MongoDB" className="skill-img" /><br></br>
<img src="/images/git.png" alt="GIT" className="skill-img" />
<img src="/images/Jenkins.jpg" alt="Jenkins" className="skill-img" />
<img src="/images/gcp.png" alt="Google Cloud Platform" className="skill-img" /><br></br> </>
      }
            </div>
        </section>
    );
}

export default Skills;
