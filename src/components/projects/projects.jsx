import './projects.css'
import samplingnyc from './samplingnyc.png'
import metabook from './metabook.jpg'
import concat from './concat.jpg'
import olympus from './olympus.jpg'
import { ArrowUpRightIcon } from '../icons/icons'

const ProjectCard = (props) => {
  const { image, imageAlt, meta, title, description, stack, links } = props

  return (
    <article className='project-card'>
      <img className='project-card__image' src={image} alt={imageAlt} />
      <div className='project-card__body'>
        <div className='label'>{meta}</div>
        <h3 className='project-card__title'>{title}</h3>
        <p className='project-card__description'>{description}</p>
        <div className='project-card__stack'>
          {stack.map((name) => <span key={name} className='stack-chip'>{name}</span>)}
        </div>
        <div className='project-card__links'>
          {links.map((link) => (
            <a key={link.href} className='project-card__link' href={link.href} target='_blank' rel='noreferrer'>
              {link.label}
              <ArrowUpRightIcon size={15} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

const Projects = (props) => {
  const { onNavigate } = props

  return (
    <div className='projects'>
      <div className='projects__intro'>
        <div className='eyebrow'>Projects</div>
        <h1 className='projects__title'>Things I've built</h1>
      </div>

      <article className='featured'>
        <img className='featured__image' src={samplingnyc} alt="samplingNYC home page listing today's free events" />
        <div className='featured__body'>
          <div className='featured__tags'>
            <span className='tag'>Live · 2026</span>
          </div>
          <h2 className='featured__title'>samplingNYC</h2>
          <p className='featured__description'>
            Pulls free NYC events from several listing sites into one place. Swipe right to save an event and left to skip it, then turn your saved events into a plan for the day.
          </p>
          <ul className='featured__steps'>
            <li><span className='pearl featured__pearl' />Scheduled Playwright scrapers collect each day's events</li>
            <li><span className='pearl featured__pearl' />Gemini summarizes and tags them</li>
            <li><span className='pearl featured__pearl' />A static React site on GitHub Pages serves the daily list</li>
          </ul>
          <div className='project-card__stack'>
            <span className='stack-chip'>React</span>
            <span className='stack-chip'>Node.js</span>
            <span className='stack-chip'>Playwright</span>
            <span className='stack-chip'>Gemini API</span>
            <span className='stack-chip'>GitHub Actions</span>
          </div>
          <div className='featured__actions'>
            <a className='button button--primary featured__button' href='https://samplingnyc.com' target='_blank' rel='noreferrer'>
              Visit samplingnyc.com
              <ArrowUpRightIcon />
            </a>
            <button className='button button--secondary featured__button' onClick={() => onNavigate('SamplingNYC')}>How I built it</button>
          </div>
        </div>
      </article>

      <div className='projects__grid'>
        <ProjectCard
          image={metabook}
          imageAlt='Metabook newsfeed with posts and comments'
          meta='App Academy · 2022'
          title='Metabook'
          description='A full-stack Facebook clone with photo posts, nested comments and replies, likes, profiles, and user search.'
          stack={['Rails', 'React', 'Redux', 'PostgreSQL', 'AWS S3']}
          links={[{ label: 'GitHub', href: 'https://github.com/jzhou45/Metabook' }]}
        />
        <ProjectCard
          image={concat}
          imageAlt='.concat room with a shared code editor and group chat'
          meta='App Academy · 2022 · Group project'
          title='.concat'
          description='Practice LeetCode problems together, with shared rooms, a live code editor, and real-time chat.'
          stack={['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io']}
          links={[{ label: 'GitHub', href: 'https://github.com/jzhou45/.concat' }]}
        />
        <ProjectCard
          image={olympus}
          imageAlt='Olympus Card-Jitsu game board mid-round'
          meta='App Academy · 2022'
          title='Olympus Card-Jitsu'
          description="Club Penguin's Card-Jitsu retold with Greek mythology. Gods beat Heroes, Heroes beat Monsters, and Monsters beat Gods."
          stack={['JavaScript', 'Sass', 'Webpack']}
          links={[
            { label: 'Play it', href: 'https://jzhou45.github.io/Olympus-Card-Jitsu/' },
            { label: 'GitHub', href: 'https://github.com/jzhou45/Olympus-Card-Jitsu' },
          ]}
        />
      </div>
    </div>
  )
}

export default Projects
