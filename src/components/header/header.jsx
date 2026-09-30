import './header.css'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons/icons'

const PAGES = ['Home', 'Projects', 'About']

const Header = (props) => {
  const { page, onNavigate } = props

  const renderTab = (name) => {
    // The samplingNYC write-up lives under Projects.
    const isActive = name === page || (name === 'Projects' && page === 'SamplingNYC')
    const className = isActive ? 'header__tab header__tab--active' : 'header__tab'
    return (
      <button key={name} className={className} aria-current={isActive ? 'page' : undefined} onClick={() => onNavigate(name)}>
        {name}
      </button>
    )
  }

  return (
    <header className='header'>
      <nav className='header__nav' aria-label='Main'>
        {PAGES.map(renderTab)}
      </nav>
      <div className='header__links'>
        <a className='icon-link' href='https://github.com/jzhou45' target='_blank' rel='noreferrer' aria-label='GitHub'><GitHubIcon /></a>
        <a className='icon-link' href='https://www.linkedin.com/in/jonathanzhou77' target='_blank' rel='noreferrer' aria-label='LinkedIn'><LinkedInIcon /></a>
        <a className='icon-link' href='mailto:jonathanzhou77@gmail.com' aria-label='Email'><MailIcon /></a>
      </div>
    </header>
  )
}

export default Header
