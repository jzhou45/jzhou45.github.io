import '../body.css'
import './home.css'
import { ReactComponent as Blob } from './blob.svg'

const Home = () => {
  return (
    <div id='Home' className='center'>
      <div className='center vertical left'>
        <h1>Hey, I'm <span className='alt-color'>Jonathan</span></h1>
        <div className='span-div'>
          <span>Welcome to my page!</span>
        </div>
      </div>
      <div className='blob'>
        <Blob />
      </div>
    </div>
  )
}

export default Home
