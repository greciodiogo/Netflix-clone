import React, { useState, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form } from '../components'
import {FirebaseContext} from '../context/firebase'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import *as ROUTES from '../constants/routes'

export default function SignUp() {
  const navigation = useNavigate();
  const {firebase} =useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState ('');

  const isInvalid = password === '' || emailAddress === '' || firstName === '';
  const handleSignIn = (event) => {
    event.preventDefault();

    //firebase work here!
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress,password)
      .then((result) => 
        result.user.updateProfile({
          displayName:firstName,
          photoURL:Math.floor(Math.random()*5) + 1,
        })
      .then(() => {
        navigation(ROUTES.BROWSE)
      })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>I'm an error</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input 
            placeholder= "First name"
            value={firstName}
            onChange={({target}) => setFirstName(target.value)}
            />
            <Form.Input 
            placeholder= "Email address"
            value={emailAddress}
            onChange={({target}) => setEmailAddress(target.value)}
            />
            <Form.Input 
            type="password"
            placeholder= "Password"
            autoComplete="off"
            value={password}
            onChange={({target}) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?<Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPATCHA to ensure 
            you're not a bot. Learn more.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer/>
    </>
  )
}
