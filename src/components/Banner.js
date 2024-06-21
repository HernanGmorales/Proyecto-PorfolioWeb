import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.png";

import 'animate.css'; 


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const toRotate = ["Dev FrontEnd", "Dev Web"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText){
            setDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
        <Container className="alinear">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} className="text-container">
                    <span className="tagline">Bienvenido a mi Porfolio</span>
                    <h1>{`Hola, soy Hernán `}
                    <span className="wrap">{text}</span></h1>
                    <p>Desarrollador Frontend con expertise en HTML, CSS, JavaScript,
                        ReactJS y diseño UI/UX. 
                        Licenciado en Ciencias Sociales.
                        Comprometido con la excelencia técnica
                        y la experiencia del usuario. Busco oportunidades 
                        desafiantes para crecer profesionalmente.</p>
                </Col>
                <Col xs={12} md={6} xl={5} className="img-container">
                    <a href="https://drive.google.com/file/d/1M9ThUxIpOWRWLnWezczVB61MwkhcN7bQ/view?usp=sharing" target="_blank" rel="noreferrer" className="cv">
                        <img className="imgP" src={headerImg} alt="Imagen personal" />
                    </a>
                </Col>
            </Row>
        </Container>
    </section>
)
}