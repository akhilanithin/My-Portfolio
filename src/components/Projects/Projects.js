import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Ecart from "../../Assets/Projects/ecart.png"
import StopWatch from "../../Assets/Projects/stopwatch.png"
import Country from "../../Assets/Projects/Country.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="app generator"
              description="App Generator Room or WorkspaceGenerate Full-Stack Apps on top of modern UI Kits powered by Django, NodeJS, React. Have features which allows user for  tested seed projects coded in different patterns and technologies by our team of experts on top of modern UI Kits.."
              languageUsed="Technology Used: Django,Node JS,React JS,Python,JSX,Posgresql,Pycharm,Postman,React Bootsrtap"
              ghLink="https://github.com/akhilanithin/dashboard.git"
              demoLink="https://appseed.us/generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project Fair App"
              description="My Project Fair App build with MangoDb,Express JS,React JS and Node JS.Have features which allows user for add projects in different patterns and technologies."
              languageUsed="Technology Used: MangoDb,ExpressJS,ReactJS,NodeJS,JSX,vs code,Postman,vercel,React Bootsrtap"
              ghLink="https://github.com/akhilanithin/Project-Fair.git"
              demoLink="https://project-fair-akhila-thankachens-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Media Player"
              description="Media Player app build with react.js. Online Editor which supports Axios,Redux,json file  with instant view of website.Video can be create,read,update,delete and categories Both the editor supports auto save of work using Local Storage"
              languageUsed="Technology Used: Axios,Redux,JSON file,ReactJS,JSX,vs code,Postman,netlify,React Bootsrtap"
              ghLink="https://github.com/akhilanithin/media-player-app.git"
              demoLink="https://akhila-media-player.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Doc App"
              description="Doc app is used to login add,delete ,edit documents.Doc app build with react.js,Material UI,Firebase,React Quill and react Router DOM . Online Editor which supports Axios,Redux,json file  with instant view of website."
              languageUsed="Technology Used: ReactJS,Material UI,Firebase,React Quill,React Router DOM,Axios,Redux,Json File,JSX,vs code,Postman,vercel,React Bootsrtap"
              ghLink="https://github.com/akhilanithin/Doc-app.git"
              demoLink="https://doc-app-six-delta.vercel.app/login"
            />
          </Col>



          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Netflix Clone"
              description="Netflix clone is a copy of Netflix website.data is get by dummy api.Netflix clone  build with react.js,Material UI,Axios.."
              languageUsed="Technology Used: Dummy Api,ReactJS,Material UI,Axios,JSX,vs code,Postman,netlify,React Bootsrtap"
              ghLink="https://github.com/akhilanithin/Netflix-clone.git"
              demoLink="https://netflix-clone-akhila.netlify.app/"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Quizz App"
              description="Quizz App Using React.count correct answer and wrong answer and display the same."
              languageUsed="Technology Used: ReactJS,JSX,vs code,Postman,vercel,React Bootsrtap"
              ghLink="https://github.com/akhilanithin/quizz.git"
              demoLink="https://quizz-nu-eight.vercel.app/" 
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StopWatch}
              isBlog={false}
              title="Stop watch"
              description="This web app is used when time periods must be measured precisely and with a minimum of complications. Laboratory experiments and sporting events like sprints are good examples."
              languageUsed="Technology Used:  HTML,CSS,BOOSTRAP,JAVASCRIPT,JQuery"
              ghLink="https://github.com/akhilanithin/stop-watch.git"
              demoLink="https://akhila-stopwatch.netlify.app/" 
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              isBlog={false}
              title="E Cart"
              description="An e-commerce website is a website that allows people to buy and sell products and services online. E-commerce websites can sell physical goods, digital products, or services.Process orders Accept payments,Manage shipping and logistics,Provide customer service"
              languageUsed="Technology Used:Firebase,Angular,Drag and drop,"
              ghLink="https://github.com/akhilanithin/E-cart-angular.git"
             
          
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Country}
              isBlog={false}
              title="Country Details"
              description="An country details website is a website that allows people to know country details capital,population timezone,continent,currencies,Languages,view in map"
              languageUsed="Technology Used:HTML,CSS,BOOSTRAP,JAVASCRIPT,API(Dummy)"
              ghLink="https://github.com/akhilanithin/country.git"
              demoLink="https://country-details-akhila.netlify.app/" 
             
          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
