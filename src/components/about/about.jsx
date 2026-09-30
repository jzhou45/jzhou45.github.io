import './about.css'
import duck from './duck.jpg'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../icons/icons'

const TOOLBOX = ['TypeScript', 'JavaScript', 'Ember.js', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Playwright', 'Mocha', 'Gemini API']

const About = () => {
  return (
    <div className='about'>
      <aside className='about__profile'>
        <img className='about__photo' src={duck} alt='Illustrated duck typing on a laptop' />
        <div className='about__intro'>
          <h1 className='about__name'>Jonathan Zhou</h1>
          <p className='about__summary'>Software engineer in New York City. I build product features end to end, from Ember and React frontends to TypeScript servers.</p>
        </div>
        <div className='about__links'>
          <a className='about__link' href='https://github.com/jzhou45' target='_blank' rel='noreferrer'>
            <GitHubIcon size={20} />
            <span className='about__link-text'>github.com/jzhou45</span>
            <ArrowUpRightIcon />
          </a>
          <a className='about__link' href='https://www.linkedin.com/in/jonathanzhou77' target='_blank' rel='noreferrer'>
            <LinkedInIcon size={20} />
            <span className='about__link-text'>linkedin.com/in/jonathanzhou77</span>
            <ArrowUpRightIcon />
          </a>
          <a className='about__link' href='mailto:jonathanzhou77@gmail.com'>
            <MailIcon size={20} />
            <span className='about__link-text'>jonathanzhou77@gmail.com</span>
            <ArrowUpRightIcon />
          </a>
        </div>
        <div className='about__hobbies about__hobbies--desktop'>
          <div className='eyebrow'>Off the clock</div>
          <p>Table tennis (I was president and coach of UB's club team), pickleball, basketball, and commissioner of the group chat's fantasy NBA league.</p>
        </div>
      </aside>

      <section className='about__details'>
        <div className='about__section'>
          <div className='about__heading'>
            <div className='eyebrow'>Experience</div>
            <h2 className='about__heading-title'>Where I've worked</h2>
          </div>

          <div className='timeline'>
            <div className='timeline__entry'>
              <span className='pearl pearl--shiny timeline__stop' />
              <div className='timeline__company'>
                <h3>Optro</h3>
                <span>formerly AuditBoard · Remote</span>
              </div>
              <div className='timeline__role'>
                <span>Software Engineer II</span>
                <span className='label'>Apr 2026 – Present</span>
              </div>
              <p>I now work on Risk Assessments, where risk managers survey their organization, score each risk by impact and likelihood, and see their top risks on heat maps and dashboards.</p>
            </div>

            <div className='timeline__entry'>
              <span className='pearl timeline__stop timeline__stop--small' />
              <div className='timeline__role'>
                <span>Software Engineer</span>
                <span className='label'>Aug 2024 – Apr 2026</span>
              </div>
              <p>I started on the Risk Oversight team, working on the risk library and environment, where customers track their risks and the metrics behind them (KPIs and KRIs) and create assessments.</p>
            </div>

            <div className='timeline__entry'>
              <span className='pearl pearl--shiny timeline__stop' />
              <div className='timeline__company'>
                <h3>Janus Health</h3>
                <span>Remote</span>
              </div>
              <div className='timeline__role'>
                <span>Software Engineer, Backend</span>
                <span className='label'>Feb 2023 – Aug 2024</span>
              </div>
              <p>I automated prior authorization requests and status tracking for revenue cycle teams at large hospital systems, work that used to be done by hand.</p>
            </div>
          </div>
        </div>

        <div className='about__section'>
          <div className='eyebrow'>Education</div>
          <div className='about__schools'>
            <div className='about__school'>
              <span className='about__school-name'>App Academy</span>
              <span>Full-Time Software Engineering Track</span>
              <span className='label'>May – Sep 2022</span>
            </div>
            <div className='about__school'>
              <span className='about__school-name'>University at Buffalo</span>
              <span>B.S. Psychology, minor in History</span>
              <span className='label'>2018 – 2022</span>
            </div>
          </div>
        </div>

        <div className='about__section'>
          <div className='eyebrow'>Toolbox</div>
          <div className='about__toolbox'>
            {TOOLBOX.map((name) => <span key={name} className='pill-chip'>{name}</span>)}
          </div>
        </div>

        <div className='about__hobbies about__hobbies--mobile'>
          <div className='eyebrow'>Off the clock</div>
          <p>Table tennis (I was president and coach of UB's club team), pickleball, basketball, and commissioner of the group chat's fantasy NBA league.</p>
        </div>
      </section>
    </div>
  )
}

export default About
