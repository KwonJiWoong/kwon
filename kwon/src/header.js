import './App.css';
import React, { useState } from 'react';



function Header() {
    const [logoEvtTxt, logoEvtTest] = useState(0);
    function nameAdd(user){
        return user.firstName + user.lastName;
    }
    
    //영문추가 시 고민중
    const name = {
        firstName : '권',
        lastName: '지웅'
    }
    
    //로고 이벤트
    function logoEvt(user){
        const motion = nameAdd(user) + '의 포트폴리오 입니다.';
        const motionTxt = motion.split("");
        let motionResult;
        let motionTxtIdx = 0;
        var motionEvt = setInterval(motionRepeat, 100);
        function motionRepeat(){
            if(motionTxtIdx < motionTxt.length){
                motionResult += motionTxt[motionTxtIdx];
                console.log(motionResult);
                motionTxtIdx++;
            }
            else{
                clearInterval(motionEvt);
                return motionResult;
            }
        }
        return logoEvtTxt = motionResult;
    }
  return (
    <div className="header">
      <h1 className="logo">
      {logoEvt(name)}
      </h1>
    </div>
  );
}

export default Header;
