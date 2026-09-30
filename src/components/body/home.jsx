import './home.css'
import duckBoba from './duck-boba.png'
import { ArrowRightIcon } from '../icons/icons'

const Home = (props) => {
  const { onNavigate } = props

  return (
    <div className='home'>
      <section className='home__hero'>
        <div className='home__intro'>
          <div className='eyebrow'>Software engineer · New York City</div>
          <h1 className='home__title'>Hi, I'm <em>Jonathan.</em></h1>
          <p className='home__summary'>
            I'm a software engineer at Optro, where I build the Risk Assessments features risk managers use to evaluate and track risk. On the side, I'm building samplingNYC, a daily list of free events in New York.
          </p>
          <div className='home__actions'>
            <button className='button button--primary' onClick={() => onNavigate('Projects')}>
              See my projects
              <ArrowRightIcon />
            </button>
            <button className='button button--secondary' onClick={() => onNavigate('About')}>About me</button>
          </div>
        </div>
        <img className='home__photo' src={duckBoba} alt='Illustrated duck coding at a desk with a boba IV drip' />
      </section>

      <div className='home__facts'>
        <div className='home__fact'>
          <div className='label'>Now</div>
          <div className='home__fact-value'>Software Engineer II at Optro</div>
        </div>
        <div className='home__fact'>
          <div className='label'>Side project</div>
          <a className='home__fact-value' href='https://samplingnyc.com' target='_blank' rel='noreferrer'>samplingnyc.com</a>
        </div>
        <div className='home__fact'>
          <div className='label'>Off the clock</div>
          <div className='home__fact-value'>Table tennis, pickleball, and fantasy NBA</div>
        </div>
      </div>
    </div>
  )
}

export default Home
