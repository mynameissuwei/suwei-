import React from 'react'
import Avator from '../Avator/Avator'
import About from '../About/About'
import Tech from '../Tech/Tech.js'
import Contact from '../Contact/Contact'
import ControlledCarousel from '../Work/Work'
import Project from '../Project/Project'
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


import "./styles.css";

class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}

const anchors = ["firstPage", "secondPage", "thirdPage","fourthPage","fifthPage","sixthPage"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    sectionsColor={["#282c34", "#109085", "#0E0F10","#3d3b4f","#3c3c3c","#0c0d0e"]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

      return (
        <div>
          <Avator></Avator>
          <About></About>
          <Tech></Tech>
          <ControlledCarousel></ControlledCarousel>
          <Project></Project>
          <Contact></Contact>
        </div>
      );
    }}
  />
);

export default App