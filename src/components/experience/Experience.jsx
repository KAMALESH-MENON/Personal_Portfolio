import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container  experience_container">
        <div className="experience_frontend">
          <h1>Frontend Developer</h1>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>React</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND*/}
        
        <div className="experience_backend">
        <h1>Backend Developer</h1>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill/>
              <h4>React</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience