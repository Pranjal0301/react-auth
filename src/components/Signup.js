/* Used Bootstrap for UI of the component please refer https://getbootstrap.com/docs/5.0/forms/overview/ from any changes in UI */

/* used API named bootstrap-show-password for eye button on passwrd text box 
for more info https://www.npmjs.com/package/bootstrap-show-password

*/

/* used ParticlesBg for animated background effect for more info https://reactjsexample.com/react-particles-animation-background-component/ */




import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import Group from './assets/Group.png'
import ParticlesBg from 'particles-bg'
import {Link} from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup  } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
     <ParticlesBg type="cobweb" bg={true} />  {/* Edit this to remove or change particle animation */}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          
           <div className = "mt-5 mb-5 text-center">
            <img src={Group} class="rounded" alt ="hellp"></img>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}
            {/* form for Email input */}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
                      {/* form for Password input */}
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {/* form for password confirmation */}
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            {/* button for  for normal sign up*/}
            <Button disabled ={loading} className="mt-2 w-100 center" type="submit">
               Sign Up
             </Button>
             <p class="text-justify text-center mt-2 mb-1">-or-</p>
             {/* button for Google sign up */}
              <Button disabled ={loading} className="mt-2 w-100 center btn btn-light" type="submit">
                 Google
              </Button>

          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to = "/login">Log In.</Link>
      </div>
    </>
  )
}