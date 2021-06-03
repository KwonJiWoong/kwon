import { Component } from "react";

class AboutMe extends Component {
    render(){
        const { _aboutme } = this.props;
        const _list = product.map((_, i) => {
            
        })
        return(
            <ul className="about-me">
                {/* default 처리  */}
                <li>
                    <a href="#">
                    <h3>{ this.props.about[0].title }</h3>
                    <ul className="about-def">
                        <li>{ this.props.about[0].detail[0] }</li>
                        <li>{ this.props.about[0].detail[1] }</li>
                        <li>{ this.props.about[0].detail[2] }</li>
                    </ul>
                    </a>
                </li>
                {/* 반복 처리 해주기 */}
                <li>
                    <a href="#">
                    <h3>{ this.props.about[1].title }</h3>
                    <ul className="about-def">
                        <li>{ this.props.about[1].detail[0] }</li>
                        <li>{ this.props.about[1].detail[1] }</li>
                        <li>{ this.props.about[1].detail[2] }</li>
                    </ul>
                    </a>
                </li>
            </ul>
        )
    }
}
export default AboutMe;