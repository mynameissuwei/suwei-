import React from 'react'
import Carousel from 'react-bootstrap/lib/Carousel';
import banner from './banner.jpg'
import back from './08.jpg'
import pack from './02.jpg'
import './bootstrap.css'
import './style.css'
import Particles from 'react-particles-js';

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
	            "value": 400,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.02
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.07
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
)


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className='section work'>
        <h1>Work Experience</h1>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={back}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h4>杭州大喵科技有限公司</h4>
              <p>
                2017.10 -2017.11
                （前端工程师）
              </p>
              <p>	
                <li>负责快速构建高质量移动APP/PC/微信页面</li>
                <li>根据业务需求设计合适的工程项目</li>   
                <li>高度组件化、模块化思维，拥有各平台调试能力</li>
                <li>同期学习ES6及vue,react,体会函数式编程思想</li>  
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="First slide"
            />
            <Carousel.Caption>
              <h4>A.P.穆勒-马士基集团(Maersk)</h4>
              <p>
              2017.1 -2017.9
              （DeckCadet）
              </p>
              <p>
                <li>Prepare for Departure</li>
                <li>Assist in Navigation Tasks</li>
                <li>Keep Records</li>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <ParticlesContainer></ParticlesContainer>
      </div>
    );
  }
}

export default ControlledCarousel