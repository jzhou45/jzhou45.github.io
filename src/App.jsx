import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Home from './components/body/home'
import Projects from './components/projects/projects'
import About from './components/about/about'
import Footer from './components/footer/footer'
import BobaTransition from './components/transition/boba-transition'

// The page swaps while the tea fully covers the screen, halfway through the animation.
const PAGE_SWAP_DELAY_MS = 1000
const TRANSITION_DURATION_MS = 2000

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const App = () => {
  const [page, setPage] = useState('Home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const showPage = (target) => {
    setPage(target)
    window.scrollTo(0, 0)
  }

  const handleNavigate = (target) => {
    if (target === page || isTransitioning) return

    if (prefersReducedMotion()) {
      showPage(target)
      return
    }

    setIsTransitioning(true)
    setTimeout(() => showPage(target), PAGE_SWAP_DELAY_MS)
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION_MS)
  }

  const renderPage = () => {
    if (page === 'Projects') return <Projects />
    if (page === 'About') return <About />
    return <Home onNavigate={handleNavigate} />
  }

  return (
    <div className='app'>
      <Header page={page} onNavigate={handleNavigate} />
      <main className='page'>
        {renderPage()}
      </main>
      {page !== 'Home' && <Footer />}
      {isTransitioning && <BobaTransition />}
    </div>
  )
}

export default App
