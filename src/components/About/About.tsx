import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from "./styles";
import profileImage from "../../assets/profile-image.jpg"
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import imHot from '../../assets/profile-image.jpg'

export function About(){
  return(
    <Container id="sobre">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>i have been working...Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewingLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing:</h3>
        </ScrollAnimation>
        <div className="hard-skills">

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <img src={vueIcon} alt="Vue" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}> 
            <img src={jsIcon} alt="JavaScript" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}> 
            <img src={htmlIcon} alt="Html" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}> 
            <img src={cssIcon} alt="Css" />
          </ScrollAnimation>
          </div>
          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}> 
            <img src={nodeIcon} alt="Node" />
          </ScrollAnimation>
          </div>

          <div className="hability">
          <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
            <img src={typescriptIcon} alt="Typescript" />
          </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={imHot} alt="Portfolio" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
