import React from 'react';

import Navbar from '../navbar/Navbar';
import Paginator from '../paginator/Paginator';

class Skills extends React.Component {

  render() { return this._componentJsxElement(); }

  /** Returns `JSX.Element` containing component content structure. */
  _componentJsxElement() {
    return (
      <div className="SkillsComponent">
        <Navbar active={2} />
        
        <div class="container-fluid">
          <div class="center-content">

            <h1 class="header">SKILLS<span class="blinking-caret" style={{color: 'purple'}}>|</span></h1>
            <h4 class="subheader">WHAT CAN I DO?</h4>

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
              <b>NOTE:</b> THIS IS NOT AN EXHAUSTIVE LIST BY ANY MEANS BUT MORE <br /> 
              IMPORTANTLY I AM ADAPTABLE TO MOST TECH STACKS
            </p>

            {/* Adds space to bottom to prevent text from being hidden under paginator component. */}
            <div class="mobile-paginator-spacing">
              <br />
              <br />
              <br />
            </div>

          </div>
        </div>

        <Paginator prev_name="EXPERIENCE" prev_route="/experience" next_name="PROJECTS(1)" next_route="/projects1" />
      </div>
    );
  }
}

export default Skills;