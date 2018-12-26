import React from 'react'
import Carousel from 'react-bootstrap/lib/Carousel';
import suwei from './下载.jpg'
import su from './suwe.jpg'
import './bootstrap.css'
import './style.css'

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
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        className='section'
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='..'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
兰途网络科技有限公司
2015年6月~至今

web前端研发工程师

"less gulp angular1.x cordova 原生js及若干类库"

负责快速构建高质量移动APP/PC/微信页面
根据业务需求设计合适的工程项目
高度组件化、模块化思维，拥有各平台调试能力
同期学习ES6及vue,react,ng2,体会函数式编程思想</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='..'
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='.'
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel