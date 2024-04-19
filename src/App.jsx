import {useCallback, useEffect, useState} from 'react'
import './app.css'
import Home from './components/body/home'
import Header from './components/header/header'
import {ReactComponent as Wave} from './components/body/wave.svg'
import Projects from './components/projects/projects'
import About from './components/about/about'

const App = () => {
  const [focused, setFocused] = useState('Home')
  const [waveClass, setWaveClass] = useState('wave')
  const [main, setMain] = useState(<Home />)
  const [childClass, setChildClass] = useState('center slide-up')
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 480
  const isMobileTimeout = useCallback((time) => isMobile ? 0 : time, [isMobile])

  useEffect(() => {
    const components = {
      'Home': <Home />,
      'Projects': <Projects childClass={childClass} />,
      'About': <About childClass={childClass} />,
    }

    setTimeout(() => {
      setMain(components[focused])
    }, isMobileTimeout(1000))
  }, [childClass, focused, isMobileTimeout])

  const updateWave = (bool) => {
    if ((waveClass === 'wave' || waveClass === 'wave down') && bool) {
      setWaveClass('wave up')
    } else if (waveClass === 'wave up' && !bool) {
      setWaveClass('wave down')
    }
  }

  const background = () => waveClass === 'wave up' ? 'background-change open' : 'background-change'

  return (
    <div className='App vertical color-change'>
      <div className={background()}></div>
      <Header focused={focused} setFocused={setFocused} updateWave={updateWave} setChildClass={setChildClass} waveClass={waveClass} isMobileTimeout={isMobileTimeout}/>
      <Wave className={waveClass} />
      <div className='center main'>
        {main}
      </div>
    </div>
  )
}

export default App
