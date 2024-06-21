import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                <Col sm={6}>
                    <h1 href="../components/NavBar.js"> HERNÁN M. </h1>
                    <p><strong>Contacto</strong></p>
                    <p><strong>Correo: </strong> hernangmoralesb@gmail.com</p>
                    <p><strong>Telefono: </strong> 3203063528</p>
                
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/hernán-g-morales/" target="_blank" rel="noreferrer"> <img src={navIcon1} alt="social1" /></a>
                    <a href="https://www.instagram.com/gustav_morales/" target="_blank" rel="noreferrer" > <img src={navIcon3} alt="social2" /></a>
                </div>
                </Col>
                </Row>
            </Container>
        </footer>
    )
}