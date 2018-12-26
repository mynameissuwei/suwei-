import React from 'react'

import Boss from '../../static/Boss.jpg'
import Leetcode from '../../static/leetcode.jpg'
import Weixin from '../../static/weixin.jpg'
import Lodash from '../../static/Lodash.jpg'
import Github from '../../static/github.png'
import Link from '../../static/w_link.svg'

import './style.css'

class Project extends React.Component {
  render() {
    return(
      <div className="section">
        <h1 className='title'>项目经历</h1>
        <div className='ProjectWrapper'>
          <div className='Wrapper'>
            <img src={Boss} alt="" className='pic'/>
            <p>一个类似BOSS直聘的求职网站,2种身份转换BOSS和牛人,可在线聊天。前端使用 React 开发，
              后端使用 Express 和 Mongodb 搭建，用户首次访问即把cookie保存在网站中。</p>
            <div className='tool'>
              <a href="/" className='link'>
                <img src={Link} alt=""></img>
              </a>
              <a href='/' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
          <div className='Wrapper'>
            <img src={Weixin} alt="" className='pic'/>
            <p>微信小程序(已上线),一款介绍图书
            和电影的微信小程序,用户可搜索喜欢的书籍和电影,前端使用微信小程序技术开发,
            后端则通过网络上的API请求返回去数据。(搜索suwei即可查询)</p>
            <div className='tool'>
              <a href='/' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
          <div className='Wrapper'>
            <img src={Leetcode} alt="" className='pic'/>
            <p>为了提升自己的JS基础功,培养自己的编程思维和算法能力,
              我通过刷Leetcode来进行训练,目前已经通过197题,通过刷Leetcode让我对后端数据
              的处理得到了提升，我的编程思维也日渐逻辑化.</p>
            <div className='tool'>
              <a href='/' className='link'>
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
              <a href='/' className='link'>
                <img src={Github} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project