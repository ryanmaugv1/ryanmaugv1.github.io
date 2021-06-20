import React from 'react';
import './Home.css';

class Home extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <div className="HomeComponent">
          
      {/* NAVBAR SECTION */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">

          {/* PERSONAL LOGO */}
          <a class="navbar-brand" href="/">
            <img src={process.env.PUBLIC_URL + '/assets/RyanLogo.png'} alt="" width="130" height="48"/>
          </a>

          {/* SANDWICH BUTTON */}
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* SITE SECTIONS LIST */}
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="/">LINKEDIN</a>
              <a class="nav-link" href="/">GITHUB</a>
              <a class="nav-link" href="/">TWITTER</a>
              <a class="nav-link" href="/">BLOG (WIP)</a>
            </div>
          </div>

        </div>
      </nav>
      {/* /NAVBAR SECTION */}
          
      <div class="container-fluid">
        <div class="row">

          {/* MAIN HEADER SECTION */}
          <div class="col-md-12 jumbo">
            <h1 class="header">RYAN MAUGIN<span class="blinking-caret">|</span></h1>
            <h4 class="subheader">X-GOOGLER / SOFTWARE CONSULTANT / ENGINEER</h4>
            <h4 class="subheader2" style={{opacity: 0.5}}>(SCROLL DOWN)</h4>
          </div>
          {/* /MAIN HEADER SECTION */}

          {/* ABOUT ME SECTION */}
          <div class="col-md-12 half-width pad-by-page">
            <h1 class="header2">ABOUT ME </h1>
            <h4 class="subheader2">WHO IS RYAN MAUGIN?</h4>

            <div class="center">
              <p>I'M A 21 YEAR OLD SOFTWARE ENGINEER ORIGINALLY FROM FRANCE LIVING IN LONDON FOR THE LAST 12 YEARS.</p>
              <p>I HAVE 7 YEARS OF PROGRAMMING EXPERIENCE WORKING IN A WIDE VARIETY OF AREAS, SUCH AS:</p>
              <p>* SOFTWARE ENGINEERING</p>
              <p>* ARTIFICIAL INTELLIGENCE</p>
              <p>* GAME DEVELOPMENT</p>
              <p>* WEB DEVELOPMENT</p>
              <p>* AND MORE...</p>                  
              <p>I AM DEEPLY PASSIONATE AND IN LOVE WITH I DO.</p>
              <p>HOWEVER, DON'T TAKE MY WORD FOR IT AND <b>CONTINUE FOR PROOF.</b></p>
            </div>
          </div>
        </div>
        {/* /ABOUT ME SECTION */}

        {/* SKILLS SECTION */}
        <div class="col-md-12 half-width pad-by-page">
            <h1 class="header2">SKILLS</h1>
            <h4 class="subheader2">WHAT CAN I DO?</h4>

            <div class="center">
              <p class="lime-header">[ LANGUAGES ]</p>
              <p>PYTHON, JAVA, C++, C#, NODEJS, JAVASCRIPT, WEB TECHNOLOGIES & MORE.</p>

              <p class="lime-header">[ FRAMEWORKS ]</p>
              <p>REACT (+ EXTRAS) & ANGULAR.</p>

              <p class="lime-header">[ SERVICES ]</p>
              <p>AWS, GOOGLE CLOUD & AZURE.</p>

              <p class="lime-header">[ DATABASE ]</p>
              <p>SQL, POSTGRESQL, MONGODB, EXCEL & MORE.</p>

              <p class="lime-header">[ TOOLS ]</p>
              <p>GIT, DOCKER, JUPYTER NOTEBOOK, GOOGLE COLAB & MORE.</p>

              <p class="lime-header">[ GAME ENGINES & 3D ]</p>
              <p>UNITY, UNREAL ENGINE & BLENDER.</p>

              <hr class="divider" />

              <p style={{fontStyle: 'italic', opacity: 0.5}}>
                <b>NOTE:</b> THIS IS NOT AN EXHAUSTIVE LIST BY ANY MEANS BUT MORE
                IMPORTANTLY I AM ADAPTABLE TO MOST TECH STACKS
              </p>
            </div>
        </div>
        {/* /SKILLS SECTION */}

        {/* EXPERIENCE SECTION */}
        <div class="col-md-12 half-width pad-by-page">
          <h1 class="header2">EXPERIENCE</h1>
          <h4 class="subheader2">WHAT HAVE I BEEN UP TO?</h4>
          <p class="experience-graph">
            🎉 <br />
            <b>OCT 2018</b> <br />
            <b>SWE @ GOOGLE</b> <br />
            | <br />
            ADSENSE - ICS TEAM <br />
            (6 MONTHS) <br />
            | <br />
            ADSENSE - PAYMENTS TEAM <br />
            (12 MONTHS) <br />
            | <br />
            ADSENSE - PUBLISHER APPROVALS TEAM <br />
            (8 MONTHS) <br />
            | <br />
            ANDROID COMPUTE - NNAPI <br />
            (6 MONTHS) <br />
            | <br />
            👋 <br />
            <b>JULY 2021</b> <br />
            <b>GOOGLE</b> <br />
            | <br />
            🎉<br />
            <b>AUG 2021</b> <br />
            <b>STARTED SOFTWARE CONSULTANCY FIRM</b> <br />
            | <br />
            SOFTWARE CONSULTANT <br />
            Phi(Φ) Labs <br />
            (CURRENT)
          </p>
        </div>
      </div>
      {/* /EXPERIENCE SECTION */}

      {/* PRO PROJECTS SECTION */}
      <div class="col-md-12 half-width pad-by-page">
      <h1 class="header2">INDUSTRY PROJECTS</h1>
        <h4 class="subheader2">MY PROFESSIONAL/INDUSTRY WORK</h4>
      
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

        <hr class="divider" />

        <p style={{fontStyle: 'italic', opacity: 0.5}}>
          <b>+</b> MANY MORE SMALLER PROJECTS & CONTRIBUTIONS.
        </p>
      </div>
      {/* /PRO PROJECTS SECTION */}

      {/* PERSONAL PROJECTS SECTION */}
      <div class="col-md-12 half-width pad-by-page">
        <h1 class="header2">HOBBY PROJECTS</h1>
        <h4 class="subheader2">MY PERSONAL/HOBBY WORK</h4>

        <p>
          <span class="lime-header">[ 2016 ] CREATED CUSTOM PROGRAMMING LANGUAGE</span>
          <br />
          <b>[ DESC ]</b> IMPLEMENTED TRANSPILER FOR CUSTOM LANGUAGE IN PYTHON WITHOUT HELP FROM LIBRARIES.
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
          <br />
          <b>[ NOTE ]</b> PART OF THE AUTOMATED FOREX TRADING SYSTEM BELOW THAT I DECIDED TO OPEN SOURCE.
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
          <b>[ DESC ]</b> DESIGNED USING SKETCH/LUNACY & DEVELOPED USING BASIC WEB TECHNOLOGIES + REACT FRAMEWORK.
          <br />
          <b>[ GITHUB ]</b> GITHUB.COM/RYANMAUGV1/PORTFOLIO
        </p>

        <hr class="divider" />

        <p style={{fontStyle: 'italic', opacity: 0.5}}>
          + MANY MORE SMALLER OR INCOMPLETE PROJECTS (MIGHT BE ON GITHUB).
        </p>
      </div>
      {/* /PERSONAL PROJECTS SECTION */}

      {/* CONTACT SECTION */}
      <div class="col-md-12 half-width center pad-by-page">
        <h1 class="header2">CONTACT ME<span class="blinking-caret">|</span></h1>
        <h4 class="subheader2">WANT TO REACH OUT?</h4>
        <h5>RYAN MAUGIN</h5>
        <h5>RYANMAUGIN@ICLOUD.COM</h5>
        <h5>GITHUB.COM/RYANMAUGV1</h5>
        <h5>LINKEDIN.COM/RYANMAUGIN</h5>
        <br />
        <p style={{fontStyle: 'italic', opacity: 0.5}}>[EQUIRE FOR CV]</p>
      </div>
      {/* /CONTACT SECTION */}

    </div>
    );
  }
}

export default Home;