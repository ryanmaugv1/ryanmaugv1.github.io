import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {


  render() { return this._componentJsxElement() };


  isActive(index) { return index === this.props.active ? "active" : ""; }


  isAnyActive(indexes) { return indexes.includes(this.props.active) ? "active" : ""; }


  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <div className="NavbarComponent">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container-fluid">

            {/* PERSONAL LOGO */}
            <div class="navbar-brand">
              <Link to="/">
                <img src={process.env.PUBLIC_URL + '/assets/RyanLogo.png'} alt="" width="130" height="48" />
              </Link>
            </div>

            {/* SANDWICH BUTTON */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            {/* SITE SECTIONS LIST */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <div class={this.isActive(0) + " nav-link"}>
                  <Link to="/about">ABOUT ME</Link>
                </div>
                <div class={this.isActive(1) + " nav-link"}>
                  <Link to="/experience">EXPERIENCE</Link>
                </div>
                <div class={this.isActive(2) + " nav-link"}>
                  <Link to="/skills">SKILLS</Link>
                </div>

                <div class="nav-item dropdown">
                  <div class={this.isAnyActive([3, 4, 5]) + " nav-link dropdown-toggle"} 
                       id="navbarDropdown" 
                       role="button" 
                       data-bs-toggle="dropdown" 
                       aria-haspopup="true" 
                       aria-expanded="false">
                    PROJECTS
                  </div>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <div class={this.isActive(3) + " dropdown-item"}>
                      <Link to="/projects1">PRO PROJECTS (1)</Link>
                    </div>
                    <div class={this.isActive(4) + " dropdown-item"}>
                      <Link to="/projects2">PRO PROJECTS (2)</Link>
                    </div>
                    <div class="dropdown-divider"></div>
                    <div class={this.isActive(5) + " dropdown-item"}>
                      <Link to="/projects3">PERSONAL PROJECTS</Link>
                    </div>
                  </div>
                </div>

                <div class={this.isActive(6) + " nav-link"}>
                  <Link to="/contact">CONTACT</Link>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;