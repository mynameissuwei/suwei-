import React from 'react'
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
        "fps_limit": 28,
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 30,
                "opacity": 0.4
            },
            "move": {
                "speed": 1
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "opacity_min": 0.05,
                    "speed": 2,
                    "sync": false
                },
                "value": 0.4
            }
        },
        "polygon": {
            "enable": true,
            "scale": 0.5,
            "type": "inline",
            "move": {
                "radius": 10
            },
            "url": "small-deer.2a0425af.svg",
            "inline": {
                "arrangement": "equidistant"
            },
            "draw": {
                "enable": true,
                "stroke": {
                    "color": "rgba(255, 255, 255, .2)"
                }
            }
        },
        "retina_detect": false,
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                }
            },
            "modes": {
                "bubble": {
                    "size": 6,
                    "distance": 40
                }
            }
        }
    }} />
)

class Contact extends React.Component {
  render() {
    return(
      <div className="section Contact">
        <h1>Contact me</h1>
        <p>
          <span className='red'>灵感</span>
          <span className='blue'>代码</span>
          <span className='yellow'>梦想</span>
          <span className='pink'>未来</span>
        </p>
        <p className='first'>注重效率，偏爱敏捷开发</p>
        <p className='second'>喜欢尝试，期待新鲜事物</p>
        <p className='third'>前端即兴趣，兴趣即未来</p>
        <p className='fourth'>行路有良友，便是捷径</p>
        <p className='fifth'>带上我吧，一起看到更大的世界</p>
        <ParticlesContainer></ParticlesContainer>
      </div>
    )
  }
}

export default Contact