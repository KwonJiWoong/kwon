import { Component } from 'react';
import './App.css';

class Kwon extends Component {
  /* state */
  constructor(props){
    super(props);
    this.state = {
      about: [
        {title:'도전정신', detail:['이직', '공부','어제보다 더 발전하는 오늘']},
        {title:'창의적', detail:['발전하려는 자세', '더 많은 고민','능동적인 자세 - 한가지만 하려는 게 아닌 여러분야를 배우며 공부']}
      ]
    }
  }
  render(){
    return (
      // 카드형 포폴 만들기 내 장단점
      // 도전정신 - 이직, 공부, 어제보다 오늘 더 나아지는
      // 창의적 - 잡코리아 HTML 코딩 시 단축키 동료들과 공유 및 계속 발전하려는 자세 / 이것보다 더 좋은 방법 늘 고민
      <div className="kwon">
        <ul className="about-me">
          {/* default 처리  */}
          <li>
            <a href="#">
              <h3>{ this.state.about[0].title }</h3>
              <ul className="about-def">
                <li>{ this.state.about[0].detail[0] }</li>
                <li>{ this.state.about[0].detail[1] }</li>
                <li>{ this.state.about[0].detail[2] }</li>
              </ul>
            </a>
          </li>
          {/* 반복 처리 해주기 */}
          <li>
            <a href="#">
              <h3>{ this.state.about[1].title }</h3>
              <ul className="about-def">
                <li>{ this.state.about[1].detail[0] }</li>
                <li>{ this.state.about[1].detail[1] }</li>
                <li>{ this.state.about[1].detail[2] }</li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    )
  };
}

export default Kwon;
