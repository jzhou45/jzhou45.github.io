import './projects.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import metabook from './metabook.png'
import concat from './concat.png'
import olympus from './olympus.png'

const Projects = (props) => {
  const {childClass} = props

  const className = childClass + ' center vertical'

  return (
    <div id="projects" className={className}>
      <Card sx={{maxWidth:'30rem'}} className='project'>
          <CardMedia
            component='img'
            image={concat}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              .concat
            </Typography>
            <Typography sx={{ fontStyle: 'italic' }} variant="body2">
              Express, React, Redux, Socket.io, MongoDB, SASS, Monaco Editor, Axios, JWT, Bcrypt, Concurrently, Mongoose
            </Typography>
            <br />
            <Typography variant="body2">
              .concat is a MERN stack web application that is geared towards engineers to practice Leetcode questions collaboratively with their colleagues. Users would create rooms which they can invite their friends into with a unique room link. There, they can either choose to use one of the default 75 questions or create their own questions. After selecting a question to work on, they can go into the problem's room where there will be live chat functionality that allows for easy communication as well as live share of IDE to make it easy to work together.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jzhou45/.concat' target='_blank'>Github</Button>
            <Button size="small" href='http://concat.herokuapp.com' target='_blank'>Live Link</Button>
          </CardActions>
      </Card>

      <Card sx={{maxWidth:'30rem'}} className='project'>
          <CardMedia
            component='img'
            image={metabook}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Metabook
            </Typography>
            <Typography sx={{ fontStyle: 'italic' }} variant="body2">
              Ruby on Rails, React, Redux, PostgreSQL, SASS, Babel, Webpack, Bcrypt, AWS S3, AWS IAM
            </Typography>
            <br />
            <Typography variant="body2">
              Metabook is a fullstack clone of Facebook and aims to reproduce CRUD features such as, profile, wall/newsfeed, comments and likes.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jzhou45/Metabook' target='_blank'>Github</Button>
            <Button size="small" href='https://metabookclone.herokuapp.com/#/' target='_blank'>Live Link</Button>
          </CardActions>
      </Card>

      <Card sx={{maxWidth:'30rem'}} className='project'>
          <CardMedia
            component='img'
            image={olympus}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Olympus Card Jitsu
            </Typography>
            <Typography sx={{ fontStyle: 'italic' }} variant="body2">
              JavaScript, HTML, SASS, Babel, Webpack
            </Typography>
            <br />
            <Typography variant="body2">
              Simple card game that combines aspects of my childhood: Club Pengin and Percy Jackson.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href='https://github.com/jzhou45/Olympus-Card-Jitsu' target='_blank'>Github</Button>
            <Button size="small" href='https://jzhou45.github.io/Olympus-Card-Jitsu/' target='_blank'>Live Link</Button>
          </CardActions>
      </Card>
    </div>
  )
}

export default Projects
