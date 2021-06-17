import React from 'react';

import Navbar from '../navbar/Navbar';
import Paginator from '../paginator/Paginator';

class About extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <div className="AboutComponent">
          <Navbar active={0} />
          
          <div class="container-fluid">
            <div class="center-content">
              <h1 class="header">ABOUT ME<span class="blinking-caret" style={{color: 'red'}}>|</span></h1>
              <h4 class="subheader">WHO IS RYAN MAUGIN?</h4>
              <p>I'M A 21 YEAR OLD SOFTWARE ENGINEER ORIGINALLY FROM FRANCE LIVING IN LONDON FOR THE LAST 12 YEARS.</p>
              <p>I HAVE 7 YEARS OF PROGRAMMING EXPERIENCE WORKING IN A WIDE VARIETY OF AREAS, SUCH AS:</p>

              <ul>
                <p>* SOFTWARE ENGINEERING</p>
                <p>* ARTIFICIAL INTELLIGENCE</p>
                <p>* GAME DEVELOPMENT</p>
                <p>* WEB DEVELOPMENT</p>
                <p>* AND MORE...</p>
              </ul>

              <p>I AM DEEPLY PASSIONATE AND IN LOVE WITH I DO.</p>
              <p>HOWEVER, DON'T TAKE MY WORD FOR IT AND <b>CONTINUE FOR PROOF.</b></p>

              {/* Adds space to bottom to prevent text from being hidden under paginator component. */}
              <div class="mobile-paginator-spacing">
                <br />
                <br />
                <br />
              </div>

            </div>
          </div>

          <Paginator prev_name="HOME" prev_route="/" next_name="EXPERIENCE" next_route="/experience" />
      </div>
    );
  }
}

export default About;