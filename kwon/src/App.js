import { Component } from 'react';
import './App.css';
import AbuotMe from './component/AboutMe';

class Kwon extends Component {
  /* state */
  constructor(props){
    super(props);
    this.state = {
      about: [
        {title:'도전정신', detail:['공부','어제보다 더 발전하는 오늘']}, 
        {title:'창의적', detail:['늘 발전하려는 자세', '코드에 대한 많은 고민','능동적인 자세 - 한가지만 하려는 게 아닌 여러분야를 배우며 공부']}
      ]
    }
  }
  render(){
    const _about = this.state.about;
    return (
      // 카드형 포폴 만들기 내 장단점
      <div className="kwon">
        <AbuotMe about={_about}/>
      </div>
    )
  };
}

export default Kwon;
