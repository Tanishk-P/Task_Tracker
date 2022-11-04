import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <hr></hr>
        <h4>Version 1.0.0</h4>
        <p>Made by Tanishk as the 1st React Js example.</p>
        <br></br>
        <Link to="/">Go Back</Link>
        <br></br>
        <hr></hr>
    </div>
  )
}

export default About