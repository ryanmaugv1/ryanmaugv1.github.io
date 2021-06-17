import React from 'react';
import Navbar from '../navbar/Navbar';
import Paginator from '../paginator/Paginator';
import './Home.css';

class Home extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <div className="HomeComponent">
          <Navbar />
          
          <div class="container-fluid jumbo-container">
            <div class="jumbo">
              <h1 class="header">RYAN MAUGIN<span class="blinking-caret">|</span></h1>
              <h4 class="subheader">X-GOOGLER / SOFTWARE CONSULTANT / ENGINEER</h4>
            </div>
          </div>

          <Paginator prev_name="NONE" prev_route="/" next_name="ABOUT ME" next_route="/about" />
      </div>
    );
  }
}

export default Home;