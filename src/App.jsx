import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Home from './components/body/home'
import Projects from './components/projects/projects'
import About from './components/about/about'
import SamplingNYC from './components/samplingnyc/samplingnyc'
import Footer from './components/footer/footer'
import BobaTransition from './components/transition/boba-transition'

// The page swaps while the tea fully covers the screen, halfway through the animation.
const PAGE_SWAP_DELAY_MS = 1000
const TRANSITION_DURATION_MS = 2000

// Hash URLs work on GitHub Pages, which 404s on any real path other than the root.
const PAGE_HASHES = {
  Home: '',
  Projects: '#projects',
  About: '#about',
  SamplingNYC: '#samplingnyc',
}

const getPageFromHash = () => {
  if (window.location.hash === '#projects') return 'Projects'
  if (window.location.hash === '#about') return 'About'
  if (window.location.hash === '#samplingnyc') return 'SamplingNYC'
  return 'Home'
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

const App = () => {
  const [page, setPage] = useState(getPageFromHash)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const showPage = (target, shouldAddHistoryEntry) => {
    if (shouldAddHistoryEntry) {
      window.history.pushState(null, '', window.location.pathname + PAGE_HASHES[target])
    }
    setPage(target)
    window.scrollTo(0, 0)
  }

  const goToPage = (target, shouldAddHistoryEntry) => {
    if (target === page || isTransitioning) return

    if (prefersReducedMotion()) {
      showPage(target, shouldAddHistoryEntry)
      return
    }

    setIsTransitioning(true)
    setTimeout(() => showPage(target, shouldAddHistoryEntry), PAGE_SWAP_DELAY_MS)
    setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION_MS)
  }

  const handleNavigate = (target) => goToPage(target, true)

  useEffect(() => {
    // Back and forward have already changed the URL, so only the page needs to follow.
    const handlePopState = () => goToPage(getPageFromHash(), false)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  })

  const renderPage = () => {
    if (page === 'Projects') return <Projects onNavigate={handleNavigate} />
    if (page === 'SamplingNYC') return <SamplingNYC />
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
