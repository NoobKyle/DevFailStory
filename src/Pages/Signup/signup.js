import React, { useState } from "react";
import { Button, Form, FormInput, FormGroup, Modal, ModalBody} from "shards-react";
import BeatLoader from "react-spinners/BeatLoader";
import './signup.css';

import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../../Store/modules/user/actions";

import Navbar from '../../Components/NavBar';

const SignupPage: React.FC = () => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const error = useSelector(state => state.user.error);
    const loading = useSelector(state => state.user.loading);

    function SignupFunction(e){
      e.preventDefault();
      dispatch(Signup(username, email, password))
      .then(() => {
        window.location.replace("/feed");
      })
    }

    return (
    <div>
      <Navbar />
        <Modal open={error} centered="true" className="error" toggle={()=>{}}>
          <ModalBody>SIGNUP ERROR !</ModalBody>
        </Modal>
        <Modal open={loading} centered="true" className="error" toggle={()=>{}}>
          <ModalBody>
            <BeatLoader color={"#212529"} loading={true}/>
          </ModalBody>
        </Modal>

      <h3 className='headertext'>Signup</h3>
      <Form className='loginForm'>
          <FormGroup>
            <label htmlFor="#username">Username</label>
            <FormInput id="#username" placeholder="Username" value={username} onChange={f => {setUsername(f.target.value)}} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#username">Email</label>
            <FormInput id="#email" placeholder="email@website.com" value={email} onChange={f => {setEmail(f.target.value)}} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#password">Password</label>
            <FormInput type="password" id="#password" placeholder="Password" value={password} onChange={i => {setPassword(i.target.value)}}/>
          </FormGroup>
          <Button outline type='submit' onClick={e => {SignupFunction(e)}}>Enter</Button>
      </Form>

      <br />
      <br />
      <a href='/login' style={{"font-weight":"bold", "text-decoration":"underline"}}>Login</a>
    </div>
    );
  }

export default SignupPage;
