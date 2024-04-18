import { useState } from 'react'
import './header.css'

const Header = (props) => {
  const {focused, setFocused, updateWave, setChildClass} = props

  const [disabled, setDisabled] = useState(false)

  const isFocused = (value) => focused === value ? 'focused' : ''

  const handleClick = (value) => {
    if (value === focused || disabled) return

    setDisabled(true)

    if (value !== 'Home') {
      updateWave(true)
    }

    if (value === 'Home') {
      setChildClass('center slide-down')

      setTimeout(() => {
        setFocused(value)
        updateWave(false)
      }, 300)

    } else {
      setChildClass('center slide-up')
      setFocused(value)
    }

    setTimeout(() => {
      setDisabled(false)
    }, 2000)
  }

  return (
    <div className="center header">
      <span onClick={() => handleClick('Home')} className={isFocused('Home')}>Home</span>
      <span onClick={() => handleClick('Projects')} className={isFocused('Projects')}>Projects</span>
      <span onClick={() => handleClick('Experience')} className={isFocused('Experience')}>Experience</span>
      <span onClick={() => handleClick('Sites')} className={isFocused('Sites')}>Sites</span>
    </div>
  )
}

export default Header