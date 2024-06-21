import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import "react-multi-carousel/lib/styles.css";



export const Skills = () => {

    const responsive = {
            superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
        };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row data-aos="fade-up" data-aos-duration="1000">
                    <Col>
                    <div  className="skill-bx">
                    <h2>HABILIDADES</h2>
                    <p >Soy un desarrollador front-end apasionado con un enfoque meticuloso 
                        en la creación de experiencias de usuario excepcionales.¡Estoy emocionado de seguir desafiándome y creciendo en este emocionante campo del desarrollo web!</p>
                        <Carousel  responsive={responsive} infinite={true} className="skill-Slider">
                        
                        <div  className="item">
                        <img src={meter3} alt="image0" />
                        <h5>Desarrollo Web</h5>
                        </div>
                        <div className="item">
                        <img src={meter3} alt="image1" />
                        <h5>HTML</h5>
                        </div>
                        <div className="item">
                        <img src={meter2} alt="image2" />
                        <h5>CSS</h5>
                        </div>
                        <div className="item">
                        <img src={meter2} alt="image3" />
                        <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                        <img src={meter3} alt="image4" />
                        <h5>ReactJS</h5>
                        </div>
                        <div className="item">
                        <img src={meter3} alt="image5" />
                        <h5>Diseño UI/UX</h5>
                        </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 