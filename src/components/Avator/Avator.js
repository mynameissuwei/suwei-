import React from 'react'
import { Wrapper,BottomLine,AvatorMe } from './style'
import suwei from '../../static/suwei.jpg'
import Particles from 'react-particles-js';

import './styles.css'

const ParticlesContainer = (props) => (
  <Particles
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }}
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 3,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
);

class Avator extends React.Component {
  render() {
    return (
      <div className="section Avator">
        <Wrapper>
          <img src={suwei} alt=""/>
          <div className='AvatorCenter'>
            <p>生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。</p>
            <BottomLine></BottomLine>
          </div>
          <AvatorMe>
            <p>我叫苏伟</p>
            <p>一名前端研发工程师</p>
            <p>suwei1996728@gmail.com</p>
          </AvatorMe>
        </Wrapper>
        <ParticlesContainer />
      </div>
    );
  }
}
export default Avator
