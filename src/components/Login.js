import React from 'react';
import firebase from 'firebase/app'
import './login.css'


class Login extends React.Component {
    componentDidMount(){
        document.querySelector('#subm').addEventListener("click",()=>{
            var name = document.querySelector("#name").value;
            var phno = document.querySelector("#phn").value;
            firebase.database().ref('users/' + phno).set({
                    name: name
                });
        })
        document.querySelector('#log').addEventListener("click",()=>{
            // console.log("hr")
            var name = document.querySelector("#name").value;
            var phno = document.querySelector("#phn").value;
            firebase.database().ref().on('value',(snapshot)=>{
                try{
                if(snapshot.val().users[phno]["Product"]){
                    // console.log("der")
                }
            }
            catch(e){
                alert("Wrong phone number.Try again!!")
            }
            })  

    })
}
render = () => {


return(
    <div className='logdiv'>
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
    <div className='span'> Name </div>
    <input id='name' className='formel'></input>
    </div>
    <div>
    <div className='span'> Phone number </div>
    <input id='phn' className='formel'></input>
    </div>
    <button id='subm' className='sub'> SignUp </button>
    <button id='log' className='sub'> Login </button>
  
    </div>
)
}
    render = () => {
        return (
            <div className='maindiv'>
                <div className='image'></div>
                <div className='subdiv'>
                    <div className='name'>
                    Name
                </div>
                <input id='name' className='formel'></input>
                <div>
                    <div className='name'>
                        Phone number
                    </div>
                    <input id='phn' className='formel'></input>
                </div>
                <button id='subm' className="subbtn">
                    Signup
                </button>
                <button id='log' className="subbtn">
                    Login
                </button>
                </div>
            </div>
        );
    }
}

export default Login;