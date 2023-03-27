import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {ImFolderOpen} from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container"> 
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_contact">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className="about_card">
              <MdSchool className="about_icon"/>
              <h5>College</h5>
              <small>Sri Krishna College of Technology</small>
            </article>

            <article className="about_card">
              <ImFolderOpen className="about_icon"/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <div className="about_content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ut ipsa, soluta eveniet accusantium, quasi id cum iusto quis officiis maiores porro inventore nobis animi possimus totam voluptatum omnis repudiandae.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About