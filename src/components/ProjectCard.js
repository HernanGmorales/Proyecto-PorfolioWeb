import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitHub, enlace}) => {
    return (
        <Col sm={6} md={4}>
            
            <div className="proj-imgbx">
                <img src={imgUrl} className="proj-img" alt="img0" />
                <div className="proj-txtx"> 
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={enlace} target="_blank" rel="noreferrer"> <img src={gitHub} className="gitCard" /> </a>
                    
                </div>
            </div>
        </Col>
    );
};
