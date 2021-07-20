
import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import Group from './assets/Group.png'
import ParticlesBg from 'particles-bg'
import {Link , useHistory} from 'react-router-dom'

/* continue from 32:20 */

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const history = useHistory()
  const { login  } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()

   

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/loginsucess")
    } catch {
      setError("Failed to login :/")
    }

    setLoading(false)
  }

  return (
    <>
     <ParticlesBg type="cobweb" bg={true} />  {/* Edit this to remove or change particle animation */}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LogIn</h2>
          
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
          
            {/* button for  for normal sign up*/}
            <Button disabled ={loading} className="mt-2 w-100 center" type="submit">
                Log in
             </Button>
             <p class="text-justify text-center mt-2 mb-1">-or-</p>
             {/* button for Google sign up */}
              <Button disabled ={loading} className="mt-2 w-100 center btn btn-light" type="submit">
                 Google
              </Button>

          </Form>
          <div className = "w-100 text-center mt-3">
            <Link to = "/forgot-password">Forgot Password</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to = "/signup">Sign Up.</Link>
      </div>
    </>
  )
}