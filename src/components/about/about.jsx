import './about.css'
import duck from './duck.jpg'

const About = (props) => {
  const {childClass} = props

  const childClassName = childClass + ' center vertical'

  return (
    <div className={childClassName} id='About'>
      <div className='center vertical'>
        <h1>Jonathan Zhou</h1>
        <div className='links vertical center'>
          <a href='https://www.linkedin.com/in/jonathanzhou77/' target='blank'>LinkedIn</a>
          <a href='https://github.com/jzhou45' target='blank'>GitHub</a>
          <a href='mailto:jonathanzhou77@gmail.com'>Email</a>
        </div>
      </div>

      <img src={duck} alt="me" />

      <div className='center vertical education'>
        <h2>Education</h2>
        <div className='center vertical education'>
          <a href='https://www.appacademy.io' target='blank' className='left'>App Academy</a>
          <ul className='education'>
            <li><span>{'Attended a rigorous 1000+ hours software development program with < 3% acceptance rate and that focuses on full-stack web development.'}</span></li>
          </ul>
        </div>

        <div className='center vertical education'>
          <a href='https://www.buffalo.edu' target='blank' className='left'>University at Buffalo, the State University of New York</a>
          <ul className='education'>
            <li><span>Bachelor of Science in Psychology</span></li>
            <ul>
              <li><span>Minor in History</span></li>
              <li><span>Attended Introduction to Computer Science and Programming for the Web</span></li>
              <li><span>President and Coach of the Table Tennis Club and Team</span></li>
            </ul>
          </ul>
        </div>
      </div>

      <div className='center vertical experience'>
        <h2>Experience</h2>
        <div className='center vertical experience'>
          <a href='https://www.janus-ai.com' className='left'>Janus Health</a>
          <span className='left'>Software Engineer, Backend</span>
          <i className='left'>TypeScript, Sequelize, PostgreSQL, Playwright, Jest</i>
          <ul className='experience'>
            <li>Maintain and build robotic process automations for both cloud environments and chrome extensions</li>
            <li>Lead initiative to refactor automation code base to the Project Object Model</li>
            <li>Project lead for onboarding a new client</li>
            <li>Develop scripts and an internal web app for translating HL7 MDMs and 278 EDIs</li>
            <li>Implement Slack alerting for on-call process</li> 
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
