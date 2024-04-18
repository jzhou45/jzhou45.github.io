import {useEffect, useState} from 'react'
import './app.css'
import Home from './components/body/home'
import Header from './components/header/header'
import {ReactComponent as Wave} from './components/body/wave.svg'
import Projects from './components/projects/projects'

const App = () => {
  const [focused, setFocused] = useState('Home')
  const [waveClass, setWaveClass] = useState('wave')
  const [main, setMain] = useState(<Home />)
  const [childClass, setChildClass] = useState('center slide-up')

  useEffect(() => {
    const components = {
      'Home': <Home />,
      'Projects': <Projects childClass={childClass} />,
    }

    setTimeout(() => {
      setMain(components[focused])
    }, 1000)
  }, [childClass, focused])

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
      <Header focused={focused} setFocused={setFocused} updateWave={updateWave} setChildClass={setChildClass} />
      <Wave className={waveClass} />
      {main}
    </div>
  )
}

export default App
