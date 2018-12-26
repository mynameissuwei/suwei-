import React from 'react'
import { Wrapper,BottomLine,AvatorMe } from './style'
import suwei from '../../static/suwei.jpg'

import './styles.css'

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
            <p>910933955@qq.com</p>
          </AvatorMe>
        </Wrapper>
      </div>
    );
  }
}
export default Avator
