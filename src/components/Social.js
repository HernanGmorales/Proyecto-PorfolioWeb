import cv from "../assets/img/cv.svg";
import Git from "../assets/img/github-line.svg";
import LK from "../assets/img/linkedin-fill.svg"


export const Social = () => {
    return (
        <section id="Social" >
        <div className="newsletter-bx wow slideInUp" >
        <h4 > ¿Te gusta lo que estas viendo?</h4>
        <p>Pongamonos en contacto</p>
        <section className="redes">
        <a href="https://drive.google.com/file/d/1CTtUIziP-rBQrMt8BeFWhLjAgnDzCPcW/view?usp=sharing" target="_blank" rel="noreferrer"  className="cv" ><img src={cv} alt="cv" className="animate__animated animate__flash"/> CV</a>
        <a href="https://github.com/HernanGmorales" className="gitHub" target="_blank" rel="noreferrer"> <img src={Git} className="animate__animated animate__flash" alt="GitHub"/> GitHub</a>
        <a href="https://www.linkedin.com/in/hernán-g-morales/" className="gitHub" target="_blank" rel="noreferrer"> <img src={LK} className="animate__animated animate__flash" alt="linkedin" /> Linkedin</a>
        </section>
        </div>
        </section>
    )
}
