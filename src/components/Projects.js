import { Container, Col, Row, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-imgI.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import Git from "../assets/img/github-line.svg";


export const Projects = () => {

    const projects = [
        {
            title: "Ecommerce Boots",
            description: "Diseño web minimalista",
            imgUrl: projImg1,
            gitHub: Git,
            enlace: "https://github.com/HernanGmorales/TiendaSociety.git",
            

        },
        {
            title: "Ecommerce TuMoto",
            description: "Tienda de motos con diseño UI/UX moderno",
            imgUrl: projImg2,
            gitHub: Git,
            enlace: "https://github.com/HernanGmorales/TuMotoTienda.git",
        },
        {
            title: "Ecommerce Comic",
            description: "Ecommerce de comics",
            imgUrl: projImg3,
            gitHub: Git,
            enlace: "https://github.com/HernanGmorales/WowComic.git"
        },
        {
            title: "coffe GO!.",
            description: "",
            imgUrl: projImg4,
            gitHub: Git,
            enlace: ""
        },
        {
            title: "App de peliculas",
            description: "Consumo de APIs",
            imgUrl: projImg5,
            gitHub: Git,
            enlace: ""
        },
        {
            title: "App de gastos",
            description: "Registra tus gastos",
            imgUrl: projImg6,
            gitHub: Git,
            enlace: ""
        },
    ];

    return (
        <section  className="project" id="project">
            <Container >
                <Row data-aos="fade-up" data-aos-duration="3000">
                    <Col>
                        <h2 >Proyectos</h2>
                        <p>Estos son mis proyectos que demuestran a mis habilidades como DESARROLLADOR FRONT END</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                            {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab"> 
                                    <Nav.Link eventKey="first" >G I T H U B</Nav.Link>
                            </Nav> */}
                            <Tab.Content className="flex-grow-1">
                                <Tab.Pane eventKey="first">
                                    <Row className="barra">
                                        {projects.map((project, index) => {
                                            return <ProjectCard key={index} {...project} />;
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
