import './header.css'

const Header = (props) => {
  const {focused, setFocused} = props

  const isFocused = (value) => focused === value ? 'focused' : ''
  const handleClick = (value) => {
    if (value === focused) return
    setFocused(value)
  }

  return (
    <div className="center header">
      <span  onClick={() => handleClick('Home')} className={isFocused('Home')}>Home</span>
      <span  onClick={() => handleClick('Projects')} className={isFocused('Projects')}>Projects</span>
      <span  onClick={() => handleClick('Experience')} className={isFocused('Experience')}>Experience</span>
      <span  onClick={() => handleClick('Sites')} className={isFocused('Sites')}>Sites</span>
    </div>
  )
}

export default Header