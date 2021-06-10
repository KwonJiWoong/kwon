import { Component } from "react";

class AboutMe extends Component {
    render(){
        const _aboutme = this.props.about;
        let _list_result;
        const _list = _aboutme.map((_,i) => {
            console.log(_);
            <li>{_[i].title}</li>
            // const _detail = _aboutme.detail[i].map((_detail) =>{
            //     return <li>_detail</li>;
            // })
        //    return <li><a href="#"><h3>{_.title}</h3><ul className="about-def">{}</ul></a></li>;
        });
        console.log(_list)
        
        return(
            <ul className="about-me">
                {_list}
                {/* default 처리  */}
                {/* <li>
                    <a href="#">
                    <h3>{ _aboutme.about[0].title }</h3>
                    <ul className="about-def">
                        <li>{ _aboutme.about[0].detail[0] }</li>
                        <li>{ _aboutme.about[0].detail[1] }</li>
                        <li>{ _aboutme.about[0].detail[2] }</li>
                    </ul>
                    </a>
                </li> */}
                {/* 반복 처리 해주기 */}
                {/* <li>
                    <a href="#">
                    <h3>{ _aboutme.about[1].title }</h3>
                    <ul className="about-def">
                        <li>{ _aboutme.about[1].detail[0] }</li>
                        <li>{ _aboutme.about[1].detail[1] }</li>
                        <li>{ _aboutme.about[1].detail[2] }</li>
                    </ul>
                    </a>
                </li> */}
            </ul>
        )
    }
}
export default AboutMe;