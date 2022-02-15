import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/undraw_designer_girl_re_h54c.svg"
import { NavHashLink } from "react-router-hash-link"
export function Hero(){
  return(
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello 👋, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2*1000}>
          <h2>Htet Oo Hlaing 🖤</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Cybersecurity Specialist</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Type here ..Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups..</p>
        </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={0.8*1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contato" className="button">Drop me an email</NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1*1000}>
          <img src={Illustration} alt="this is me"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}