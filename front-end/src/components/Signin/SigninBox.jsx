//fire
import './Signin.css';
function Signin(props) {
  return (
    <div className='signinContainer'>
      <h1 className='topText'>Sign In</h1>
      <div className="signinInput">
        <input id='textfield' className="usernameField" type='text' placeholder="Username"></input>
        <input id='textfield'className="passwordField" type='text' placeholder="Password"></input>
        <div>
        <button className='signinButton'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Signin