import {useState} from 'react'
import './app.css'
import Home from "./components/body/home"
import Header from './components/header/header'
import {ReactComponent as Wave} from './components/body/wave.svg'

const App = () => {
  const [focused, setFocused] = useState('Home')

  const display = () => {
    const components = {
      'Home': <Home />,
    }

    return components[focused]
  }

  return (
    <div className='App center vertical'>
      <Header focused={focused} setFocused={setFocused}/>
      <Wave className='wave' />
      {display()}
    </div>
  )
}

export default App
