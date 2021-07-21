import { Component } from "react";

class AboutMe extends Component {
    render(){
        const _aboutme = this.props.about;
        let _list_result = new Array();
        const _list = _aboutme.map((_,i) => {
            const _detail = _.detail.map((_detail,j) =>{
                return <li key={j}>{_detail}</li>;
            })
           return _list_result[i] = <li><h4 key={i}>{_.title}</h4><ul className="about-def">{_detail}</ul></li>;
        });
        
        return(
            <div className="about-me">
                <h3>제 자신을 소개합니다!</h3>
                <ul>
                    {_list_result}
                </ul>
            </div>
        )
    }
}
export default AboutMe;