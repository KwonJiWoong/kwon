import { Component } from 'react';
import './App.css';
import AbuotMe from './component/AboutMe';

class Kwon extends Component {
  /* state */
  constructor(props){
    super(props);
    this.state = {
      about: [
        {title:['도전정신','창의적']}, 
        {detail:[['이직', '공부','어제보다 더 발전하는 오늘'],['발전하려는 자세', '더 많은 고민','능동적인 자세 - 한가지만 하려는 게 아닌 여러분야를 배우며 공부']]}
      ]
    }
  }
  render(){
    const _about = this.state.about;
    return (
      // 카드형 포폴 만들기 내 장단점
      // 도전정신 - 이직, 공부, 어제보다 오늘 더 나아지는
      // 창의적 - 잡코리아 HTML 코딩 시 단축키 동료들과 공유 및 계속 발전하려는 자세 / 이것보다 더 좋은 방법 늘 고민
      <div className="kwon">
        <AbuotMe about={_about}/>
      </div>
    )
  };
}

export default Kwon;
