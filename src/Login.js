import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './login.css'

class Login extends React.Component {
    render = () => {
        return(
            <div class='logdiv'>
                {/* <Form>
                <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>   */}<div>
            <div className='name'> Name </div>
            <input className='formel'></input>
            </div>
            <div>
            <div className='name'> Phone number </div>
            <input className='formel'></input>
            </div>
            <button> Submit </button>
            </div>
        )
    }
}

export default Login;