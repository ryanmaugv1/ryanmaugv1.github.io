import React from 'react';

import Navbar from '../navbar/Navbar';
import Paginator from '../paginator/Paginator';

class Projects extends React.Component {

    render() {
        if (this.props.page === 1)
            return this._componentJsxElementProfessionalPage1();
        else if (this.props.page === 2)
            return this._componentJsxElementProfessionalPage2();
        return this._componentJsxElementPersonalPage1();
    }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElementProfessionalPage1() {
    return (
      <div className="ProjectsComponent">
        <Navbar active={3} />
        
        <div class="container-fluid">
          <div class="center-content">

            <h1 class="header">PROJECTS<span class="blinking-caret" style={{color: 'yellow'}}>|</span></h1>
            <h4 class="subheader">MY PROFESSIONAL WORK (1)</h4>

            <p>
                <span class="lime-header">[ 2018 ] MACHINE LEARNING GUEST LECTURER</span>
                <br />
                <b>[ WHERE ]</b> ADA, THE NATIONAL COLLEGE FOR DIGITAL SKILLS
                <br />
                <b>[ DESC ]</b> TAUGHT ENGINEERING APPRENTICES FROM GOOGLE, DELOITTE & FACEBOOK 
                MACHINE LEARNING THEORY IN A SERIES OF LECTURES.
            </p>

            <p>
                <span class="lime-header">[ 2018 ] ADDED VARIOUS FEATURES TO INTERNAL PUBLISHER MANAGEMENT TOOL</span>
                <br />
                <b>[ WHERE ]</b> GOOGLE / ADSENSE / ICS
                <br />
                <b>[ DESC ]</b> WORKED AS FULLSTACK DEVELOPER ADDING FEATURES TO INTERNAL TOOL USED FOR 
                MANAGING BIG ADSENSE PUBLISHERS INTERNALLY.
            </p>

            <p>
                <span class="lime-header">[ 2018 ] OPTIMISED ADS PAYMENT STATE PROCESSING PIPELINE</span>
                <br />
                <b>[ WHERE ]</b> GOOGLE / ADSENSE / PAYMENTS
                <br />
                <b>[ DESC ]</b> MADE 3X SPEED INCREASE TO ADSENSE PUBLISHER STATE PROCESSING,
                SIMPLIFIED CORE LOGIC, ADDED PARAMETRIC TESTING RESULTING 15X
                FASTER TEST EXECUTION SPEED.
            </p>

            {/* Adds space to bottom to prevent text from being hidden under paginator component. */}
            <div class="mobile-paginator-spacing">
              <br />
              <br />
              <br />
            </div>

          </div>
        </div>

        <Paginator prev_name="SKILLS" prev_route="/skills" next_name="PROJECTS(2)" next_route="/projects2" />
      </div>
    );
  }

  _componentJsxElementProfessionalPage2() {
    return (
      <div className="ProjectsComponent">
        <Navbar active={4} />
        
        <div class="container-fluid">
          <div class="center-content">

            <h1 class="header">PROJECTS<span class="blinking-caret" style={{color: 'yellow'}}>|</span></h1>
            <h4 class="subheader">MY PROFESSIONAL WORK (2)</h4>

            <p>
                <span class="lime-header">[ 2019 ] DESIGNED & DEVELOPED ARCHITECTURE FOR DATA SYNCING JOBS</span>
                <br />
                <b>[ WHERE ]</b> GOOGLE / ADSENSE / ICS TEAM
                <br />
                <b>[ DESC ]</b> DESIGNED & DEVELOPED MULTIPLE BIG DATA SYNCING CRON JOBS WITH FOCUS
                ON PERFORMANCE.
            </p>

            <p>
                <span class="lime-header">
                    [ 2020 ] RESEARCHED, DESIGNED & DEVELOPED A LOW VALUE CONTENT CLASSIFIER WITH DATA
                    AGGREGATION & PREPROCESSING PIPELINE
                </span>
                <br />
                <b>[ WHERE ]</b> GOOGLE / ADSENSE / PUBLISHER APPROVALS
                <br />
                <b>[ DESC ]</b> THIS WAS A SOLO ENDAVOUR WITH TREMENDOUS IMPACT WHICH IS DETAILED
                WITHIN MY CV MORE EXTESIVELY FOR BREVITY SAKE.
            </p>

            <p>
                <span class="lime-header">[ 2021 ] ADDED SUPPORT FOR TRANSFORMER MODELS WITHIN ANDROID NNAPI</span>
                <br />
                <b>[ WHERE ]</b> GOOGLE / ANDROID COMPUTE / NEURAL NETWORKS API
                <br />
                <b>[ DESC ]</b> ADDED SUPPORT FOR MATHEMATICAL OPS WITHIN NNAPI TO SUPPORT DELEGATION &
                HARDWARE ACCELERATION OF TRANSFORMER MODELS (E.G. GPT-2 & BERT) ON
                ANDROID DEVICES.
            </p>

            {/* Adds space to bottom to prevent text from being hidden under paginator component. */}
            <div class="mobile-paginator-spacing">
              <br />
              <br />
              <br />
            </div>

          </div>
        </div>

        <Paginator prev_name="PROJECT(1)" prev_route="/projects1" next_name="PROJECTS(3)" next_route="/projects3" />
      </div>
    );
  }

  _componentJsxElementPersonalPage1() {
    return (
      <div className="ProjectsComponent">
        <Navbar active={5} />
        
        <div class="container-fluid">
          <div class="center-content">

            <h1 class="header">PROJECTS<span class="blinking-caret" style={{color: 'yellow'}}>|</span></h1>
            <h4 class="subheader">MY PERSONAL/HOBBY WORK</h4>

            <p>
                <span class="lime-header">[ 2016 ] CREATED CUSTOM PROGRAMMING LANGUAGE</span>
                <br />
                <b>[ DESC ]</b> IMPLEMENTED TRANSPILER FOR CUSTOM LANGUAGE IN PYTHON.
                <br />
                <b>[ GITHUB ]</b> GITHUB.COM/RYANMAUGIN/TACHYON
                <br />
                <b>[ NOTE ]</b> VERY OLD PROJECT BUT MY PROUDEST NONETHELESS.
            </p>

            <p>
                <span class="lime-header">[ 2020 ] DEVELOPED CUSTOM IG BROKERAGE REST API CLIENT</span>
                <br />
                <b>[ DESC ]</b> IG BROKERAGE REST API CLIENT IMPLEMENTATION IN PYTHON.
                <br />
                <b>[ GITHUB ]</b> COMING SOON...
            </p>

            <p>
                <span class="lime-header">[ 2020 ] AUTOMATED FOREX TRADING SYSTEM</span>
                <br />
                <b>[ NOTE ]</b> PRIVATE PROJECT BUT HAPPY TO DISCUSS IT & SHOW PROOF.
            </p>

            <p>
                <span class="lime-header">[ 2021 ] DEVELOPED SPACEX SELF-LANDING STARSHIP AGENT SIMULATION (AI)</span>
                <br />
                <b>[ DESC ]</b> CREATED SPACEX TRAINING ENVIRONMENT & AGENT IN UNITY & C#.
                <br />
                <b>[ GITHUB ]</b> GITHUB.COM/RYANMAUGV1/SPACE_RL
            </p>

            <p>
                <span class="lime-header">[ 2021 ] THIS PORTFOLIO SITE :P</span>
                <br />
                <b>[ DESC ]</b> DESIGNED USING LUNACY & DEVELOPED USING REACT FRAMEWORK.
                <br />
                <b>[ GITHUB ]</b> GITHUB.COM/RYANMAUGV1/PORTFOLIO
            </p>

            <hr class="divider" />

            <p style={{fontStyle: 'italic', opacity: 0.5}}>
                + MANY MORE SMALLER OR INCOMPLETE PROJECTS (MIGHT BE ON GITHUB).
            </p>

            {/* Adds space to bottom to prevent text from being hidden under paginator component. */}
            <div class="mobile-paginator-spacing">
              <br />
              <br />
              <br />
            </div>

          </div>
        </div>

        <Paginator prev_name="PROJECTS(2)" prev_route="/projects2" next_name="CONTACT" next_route="/contact" />
      </div>
    );
  }  
}

export default Projects;