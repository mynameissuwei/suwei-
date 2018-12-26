import React from 'react'
import './style.css'

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
        <p>注重效率，偏爱敏捷开发</p>
        <p>喜欢尝试，期待新鲜事物</p>
        <p>前端即兴趣，兴趣即未来</p>
        <p>行路有良友，便是捷径</p>
        <p>带上我吧，一起看到更大的世界</p>
      </div>
    )
  }
}

export default Contact