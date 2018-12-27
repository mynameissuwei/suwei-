import React from 'react'
import { Card } from './styles'
import Logo from '../../static/logo.svg'
import Vue from '../../static/Vue.png'
import Particles from 'react-particles-js';

import './style.css'

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
            "value": 10,
            "random": true
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }
	}} />
);

class Tech extends React.Component {
  render() {
    const data = [
      {url:'https://cdn.ijason.cc/static/images/logos/html.png',
       color:'white',
       id:'1'
      },
      {url:'https://cdn.ijason.cc/static/images/logos/css.png',
       color:'red',
       id:'2'  
      },
      {url:'https://cdn.ijason.cc/static/images/logos/javascript.png',
      color:'yellow',
      id:'3'
      },
      {url:'https://cdn.ijason.cc/static/images/logos/nodejs.png',
      color:'green',
      id:'4'},
      {url:Logo,
       color:'pink',
       id:'5'},
      {url:Vue,
       color:'white',
       id:'6'},
] 

    return (
      <div className="section">
        <h1>技能栈</h1>
        <div className='pageBody'>
          {data.map((item,index) => 
            <Card key={item.id} style={{backgroundColor:item.color}}>
              <img src={item.url}/>
            </Card>
          )}
        </div>
        <ParticlesContainer></ParticlesContainer>
      </div>
    );
  }
}

export default Tech