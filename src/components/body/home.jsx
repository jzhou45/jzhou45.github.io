import './home.css'
import duckBoba from './duck-boba.png'
import { ArrowRightIcon } from '../icons/icons'

const Home = (props) => {
  const { onNavigate } = props

  // A real href keeps "open in new tab" working; a normal click still plays the transition.
  const handleSamplingNYCClick = (event) => {
    event.preventDefault()
    onNavigate('SamplingNYC')
  }

  return (
    <div className='home'>
      <section className='home__hero'>
        <div className='home__intro'>
          <div className='eyebrow'>Software engineer · New York City</div>
          <h1 className='home__title'>Hi, I'm <em>Jonathan.</em></h1>
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
          <div className='label'>Passion project</div>
          <a className='home__fact-value' href='#samplingnyc' onClick={handleSamplingNYCClick}>samplingNYC</a>
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
