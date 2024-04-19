import { useState } from 'react'
import './header.css'

const Header = (props) => {
  const {focused, setFocused, updateWave, setChildClass, waveClass, isMobileTimeout} = props

  const [disabled, setDisabled] = useState(false)

  const isFocused = (value) => {
    const className = []
    if (focused === value) className.push('focused')
    if (waveClass === 'wave up') className.push('alt-color')
    return className.join(' ')
  }

  const handleClick = (value) => {
    if (value === focused || disabled) return

    setDisabled(true)

    if (value !== 'Home') {
      updateWave(true)
    }

    setChildClass('center slide-down')
    
    if (value === 'Home') {
      setTimeout(() => {
        setFocused(value)
        updateWave(false)
      }, isMobileTimeout(300))

    } else if ((focused === 'Projects' && value === 'About') || (focused === 'About' && value === 'Projects')) {
      setTimeout(() => {
        setChildClass('center slide-up')
        setFocused(value)
      }, isMobileTimeout(300))
    } else {
      setChildClass('center slide-up')
      setFocused(value)
    }

    setTimeout(() => {
      setDisabled(false)
    }, isMobileTimeout(2000))
  }

  return (
    <div className="center header">
      <span onClick={() => handleClick('Home')} className={isFocused('Home')}>Home</span>
      <span onClick={() => handleClick('Projects')} className={isFocused('Projects')}>Projects</span>
      <span onClick={() => handleClick('About')} className={isFocused('About')}>About</span>
    </div>
  )
}

export default Header