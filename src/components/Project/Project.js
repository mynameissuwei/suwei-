import React from 'react'
import Lodash from '../../static/Lodash.jpg'
import Github from '../../static/github.png'
import Link from '../../static/w_link.svg'
import SDWAN from '../../static/SDWAN.webp'
import SDN from '../../static/SDN.webp'
import LEETCODE from '../../static/leetcode.webp'

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
                "value": 8,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 6,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "images",
                    "circle"
                ],
                "images": [
                    {
                        "src": "code.b3b4c4f4.png",
                        "height": 20,
                        "width": 23
                    },
                    // {
                    //     "src": "k8s.2d579d24.svg",
                    //     "height": 20,
                    //     "width": 20
                    // },
                    // {
                    //     "src": "react.cd2ab268.svg",
                    //     "height": 20,
                    //     "width": 20
                    // }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    }} />
)

class Project extends React.Component {
  render() {
    return(
      <div className="section project">
        <h1 className='title'>项目经历</h1>
        <div className='ProjectWrapper'>
          <div className='Wrapper'>
            <img src={SDWAN} alt="" className='pic'/>
            <p>SD-WAN是通过互联网接入组建VPN网络，
              通过ipsec接入公司 的接入网关，提供租户隔离、限速等功能，
              网关之间使用高质量的专线线路来实现低时延、高可靠的VPN网络</p>
            {/* <div className='tool'>
              <a href="suwei.life:8090" className='link'>
                <img src={Link} alt=""></img>
              </a>
              <a href='https://github.com/mynameissuwei/work' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div> */}
          </div>
          <div className='Wrapper'>
            <img src={SDN} alt="" className='pic'/>
            <p>该平台是基于ODL开发的SDN业务平台，通过openflow管理交换机实现DCI业务的开通和路径切换。
              整个平台作为一套 产品提供给线路服务商，公司提供软件的需求开发和交换机的技术支持服务</p>
            {/* <div className='tool'>
              <a href='https://github.com/mynameissuwei/life-miniProgram' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div> */}
          </div>
          <div className='Wrapper'>
            <img src={LEETCODE} alt="" className='pic'/>
            <p>为了提升自己的JS基础功,培养自己的编程思维和算法能力,
              我通过刷Leetcode来进行训练,目前已经通过197题,通过刷Leetcode让我对后端数据
              的处理得到了提升，我的编程思维也日渐逻辑化.</p>
            <div className='tool'>
              <a href='https://leetcode.com/suweiok/' className='link'>
                <img src={Link} alt=""/>
              </a>
            </div>
          </div> 
          <div className='Wrapper'>
            <img src={Lodash} alt="" className='pic'/>
            <p>Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库。
              为了更好掌握这个库，提升JS基础知识,自己手动实现了90% Lodash函数,
              源码可在GitHub上查询和获取.</p>
            <div className='tool'>
              <a href='https://github.com/mynameissuwei/suwei-lodash' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
        </div>
        {/* <ParticlesContainer /> */}
      </div>
    )
  }
}

export default Project