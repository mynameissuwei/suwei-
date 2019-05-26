import React from 'react'
import './style.css'
import Particles from 'react-particles-js';
import Slider from "react-slick";


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
	            "value": 2
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 7,
	                "opacity_min": 0.0
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
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='section fourthPage work'>
        <h1>工作经历</h1>
        <Slider {...settings}>
        <div>
          <h2>杭州大喵科技有限公司</h2>
          <p>
            2017年9月 ~ 2018年11月(前端工程师）

          </p>
          <p>
            <li>负责该公司react-PC端项目的开发</li>
            <li>用webpack定制符合公司项目的脚手架</li>
            <li>熟练运用函数式的编程思想开发业务组件</li>
          </p>
        </div>
        <div>
          <h2>浙江坚果智慧</h2>
          <p>
            2019年1月 ~ 2019年4月(前端工程师）
          </p>
          <p>	
            <li>负责快速构建高质量移动APP/PC/微信页面</li>
            <li>根据业务需求设计合适的工程项目</li>   
            <li>高度组件化、模块化思维，拥有各平台调试能力</li>
          </p>
        </div>
        <div>
          <h2>Zenlayer</h2>
          <p>
            2019年4月 ~ 至今(前端工程师）
          </p>
          <p>	
            <li>负责该公司SDN项目的开发</li>
            <li>并和UI设计进行对接</li>   
            <li>前端项目工程化,性能优化最大化,提高用户体验</li>
          </p>
        </div>
      </Slider>
        <ParticlesContainer></ParticlesContainer>
      </div>
    );
  }
}

export default ControlledCarousel