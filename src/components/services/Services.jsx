import React from 'react'
import './services.css'
import {FiCheckCircle} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offers</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <FiCheckCircle className="service-list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services