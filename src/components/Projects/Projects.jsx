import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';


const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const { progressbar } = useContext(PortfolioContext);
  const { additionalskills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="skills-wrapper" >
          <Title title="Skills" />
          {progressbar.map(progress => {
            const { label, percentage, label2, percentage2 } = progress;
            return(
              <Row className="justify-content-md-center">
                <Col lg={5} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <div>{label}</div>
                    <ProgressBar className="progressbar-wrapper" animated now={percentage} label={`${percentage}%`}/>
                  </Fade>
                </Col>
                <Col lg={5} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                  <div>{label2}</div>
                    <ProgressBar className="progressbar-wrapper" animated now={percentage2} label={`${percentage2}%`}/>
                  </Fade>
                </Col>
              </Row>
            );
          })}
            <br/>
              <Row className="justify-content-md-center">
                <Col lg="auto">
                    {additionalskills.map(addskills => {
                      const { name } = addskills;
                      return (
                        <Fade
                          left={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={500}
                          distance="30px"
                        >
                          <div className="addiskills">{name}</div>
                        </Fade>
                      );
                })}
                </Col>
              </Row>
        </div> 
      </Container>
      <Container>
      
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map(project => {
            const { id, title, info, info2, url, repo, img } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        Source Code
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <p
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <img src={img} alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </p>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;