import { Component } from 'react';
import './footer.css';

class Footer extends Component {
  /* state */
  render(){
    return (
      <div className="footer">
        <ul className="sns">
          <li><a href="#">facebook</a></li>
          <li><a href="#">instargram</a></li>
        </ul>
        <dl>
          <dt>Contact</dt>
          {/* 이메일링 시스템 EmailJS 사용해보기 */}
          <dd><a href="mailto:kjobaba@naver.com">kjobaba@naver.com</a></dd>
        </dl>
      </div>
    )
  };
}

export default Footer;
