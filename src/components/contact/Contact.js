import React from 'react';
import Navbar from '../navbar/Navbar';
import Paginator from '../paginator/Paginator';

class Contact extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <div className="ContactComponent">
          <Navbar active={6} />
          
          <div class="container-fluid jumbo-container">
            <div class="jumbo">
              <h1 class="header">CONTACT ME<span class="blinking-caret">|</span></h1>
              <h4 class="subheader">WANT TO REACH OUT?</h4>
              <br />
              <h5>RYAN MAUGIN</h5>
              <h5>RYANMAUGIN@ICLOUD.COM</h5>
              <h5>GITHUB.COM/RYANMAUGV1</h5>
              <h5>LINKEDIN.COM/RYANMAUGIN</h5>
              <br />
              <p style={{fontStyle: 'italic', opacity: 0.5}}>
                [EQUIRE FOR CV]
              </p>
            </div>
          </div>

          <Paginator prev_name="PROJECTS(3)" prev_route="/projects3" next_name="HOME" next_route="/" />
      </div>
    );
  }
}

export default Contact;