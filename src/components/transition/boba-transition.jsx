import './boba-transition.css'

const PEARL_SPACING = 52
const PEARL_DELAY_STEP_MS = 30

// Three staggered rows of pearls that settle along the bottom of the screen.
const buildPearls = () => {
  const pearls = []
  const count = Math.ceil(window.innerWidth / PEARL_SPACING) + 1

  for (let i = 0; i < count; i++) {
    pearls.push({ left: i * PEARL_SPACING - 10, bottom: 8, delay: (i % 5) * PEARL_DELAY_STEP_MS })
    pearls.push({ left: i * PEARL_SPACING + 16, bottom: 48, delay: ((i + 2) % 5) * PEARL_DELAY_STEP_MS })
    if (i % 2 === 0) {
      pearls.push({ left: i * PEARL_SPACING + 42, bottom: 88, delay: ((i + 4) % 5) * PEARL_DELAY_STEP_MS })
    }
  }

  return pearls
}

const BobaTransition = () => {
  const pearls = buildPearls()

  return (
    <div className='boba-transition' aria-hidden='true'>
      <div className='boba-transition__tea boba-transition__tea--back'>
        <div className='boba-transition__wave boba-transition__wave--back' />
      </div>
      <div className='boba-transition__tea'>
        <div className='boba-transition__wave' />
      </div>
      {pearls.map((pearl, index) => (
        <span
          key={index}
          className='boba-transition__pearl'
          style={{ left: pearl.left, bottom: pearl.bottom, animationDelay: `${pearl.delay}ms` }}
        />
      ))}
    </div>
  )
}

export default BobaTransition
