import { Component } from 'react';
import './App.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: {
        firstName : '권',
        lastName : '지웅'
      }
    }
  }
  render(){
    function nameAdd(user){
      return user.firstName + user.lastName;
    }
    return (
      <div className="header">
        <ul className="skipNavigator">
          <li><a href="#App">본문으로 이동</a></li>
          <li><a href="#gnb">메뉴 이동</a></li>
          <li><a href="#Footer">하단으로 이동</a></li>
        </ul>
        <h1 className="logo">
          Kwon
        </h1>
        <h2 className="title">
          {nameAdd(this.state.name)}의 포트폴리오 입니다.
        </h2>
        <ul id="gnb" className="gnb">
          {/* 나중에 각 메뉴 별 작동 만들기 */}
          <li><a href="#">메뉴1</a></li>
          <li><a href="#">메뉴2</a></li>
          <li><a href="#">메뉴3</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
