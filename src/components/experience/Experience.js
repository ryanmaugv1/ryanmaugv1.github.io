import React from 'react';
import Navbar from '../navbar/Navbar';
import Paginator from '../paginator/Paginator';
import './Experience.css';

class Experience extends React.Component {

    render() { return this._componentJsxElement(); }

    /** Returns `JSX.Element` containing component content structure. */
    _componentJsxElement() {
        return (
            <div className="ExperienceComponent">
                <Navbar active={1} />

                <div class="container-fluid">
                    <div class="center-content">

                        <h1 class="header">
                            EXPERIENCE<span class="blinking-caret" style={{color: 'blue'}}>|</span>
                        </h1>
                        <h4 class="subheader">WHAT HAVE I BEEN UP TO?</h4>
                        <p class="experience-graph">
                            🎉 <br />
                            <b>OCT 2018</b> <br />
                            <b>SWE @ GOOGLE</b> <br />
                            | <br />
                            ADSENSE - ICS <br />
                            (6 MONTHS) <br />
                            | <br />
                            ADSENSE - PAYMENTS <br />
                            (12 MONTHS) <br />
                            | <br />
                            ADSENSE - PUBLISHER APPROVALS <br />
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

                        {/* Adds space to bottom to prevent text from being hidden under paginator component. */}
                        <div class="mobile-paginator-spacing">
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>

                <Paginator prev_name="ABOUT ME" prev_route="/about" next_name="SKILLS" next_route="/skills" />
            </div>
        );
    }
}

export default Experience;