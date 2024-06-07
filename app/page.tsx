"use client";
import { useContext, useEffect, useState } from 'react';
import Formulario from './Formulario'
import Comentarios from './Cometarios'
import { UsuarioContext } from './Context/UsuarioContext';

export default function Home() {
  
const showProjectDetails = (projectId:any) =>{
  console.log('Mostrando detalles del proyecto con ID: ' + projectId);
  var modal = document.getElementById('projectModal');
  var title = document.getElementById('projectTitle');
  var description = document.getElementById('projectDescription');
 
  if (projectId === 'proyecto1') {
    if(title != null && description != null){
      title.textContent = 'Proyecto 1';
      description.innerHTML = '<p>Descripción detallada del Proyecto 1.</p>';
    }
     
  } else if (projectId === 'proyecto2') {
    if(title != null && description != null){
      title.textContent = 'Proyecto 2';
      description.innerHTML = '<p>Descripción detallada del Proyecto 2.</p>';
    }
  }
  if(modal != null){
    modal.style.display = 'block';
  }
}


useEffect(() => {
  window.onclick = function(event) {
    var modal = document.getElementById('projectModal');
    if (event.target == modal && modal !== null) {
        modal.style.display = "none";
    }
  }
}, [])



  return (
   <>
   <header>
        <div className="container">
            <h1>Personal Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#inicio">Home</a></li>
                    <li><a href="#about-me">Skills</a></li>
                    <li><a href="#portafolio">Portfolio</a></li>
                    <li><a href="#contacto">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section id="inicio">
        <div className="container">
            <h2 id="welcome-text">Welcome</h2>
            <p id="typed-text">{`Welcome to my creative portfolio! I'm passionate about blending technology with artistry to craft 
                captivating digital experiences. With a keen eye for detail and a love for innovation, I strive to push the
                 boundaries of web development. Explore my work and discover how I bring ideas to life in the digital realm`}</p>
        </div>
    </section>

    <section id="about-me">
        <div className="container">
            <h2>Skills</h2>
            <p>I am a creative programmer who enjoys combining functionality with design to create unique and appealing experiences.</p>
        </div>
        
        <button className="button button-blue">JavaScript</button>
        <button className="button button-green">HTML</button>
        <button className="button button-red">CSS</button>
    </section>

    <section id="portafolio">
        <button className='btn btn-Primary'> ENVIAR EMAIL</button>
        <div className="container">
            <h2>Portfolio</h2>
            <div className="project" onClick={() =>showProjectDetails('proyecto1')}>
                {/* <img src="images/kcna;sc.png" alt="Project 1"> */}
                <div className="project-overlay">
                    <h3>Project 1</h3>
                    <p>Weather website, where you can visit and check the wind and humidity conditions of any city in the world. </p>
                </div>
            </div>
            <div className="project"  onClick={() =>showProjectDetails('proyecto2')}>
                {/* <img src="images/acas.png" alt="Project 2"/> */}
                <div className="project-overlay">
                    <h3>Project 2</h3>
                    <p>Clothing store website with 4 different brands and plenty of clothing types.</p>
                </div>
            </div>
            <div className="project" onClick={() =>showProjectDetails('proyecto3')}>
                {/* <img src="images/Untitled.png" alt="Project 3"/> */}
                <div className="project-overlay">
                    <h3>Project 3</h3>
                    <p>Movie website with a contact page and plenty of details.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contacto">
        <div className="container">
            <h2>Contact</h2>
            <p>{`Don't hesitate to contact me to discuss interesting projects. I'm here to collaborate!`}</p>
            <p>Phone: 778 237 0974</p>
            <div id="email-container">
                <p id="email">julius27egd@gmail.com</p>
                <Formulario/>
                <Comentarios/>              
            </div>
        </div>
    </section>

    <section id="redes-sociales">
        <div className="container">
            
            <p className="animated-text">Social Media</p>
            <div className="social-buttons">
               
                <a href="https://www.linkedin.com/" target="_blank" className="social-button">LinkedIn</a>
                <a href="https://www.github.com/" target="_blank" className="social-button">Github</a>
                <a href="https://www.instagram.com/" target="_blank" className="social-button">Instagram</a>
            </div>
        </div>
    </section>
    
   </>
  )
}
