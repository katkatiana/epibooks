import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LoginPage = () => {

    const [isError, setIsError] = useState(false)
    const [loginForm, setLoginForm] = useState( 
            {
                name: '', 
                password: '',
            }
        );

    const handleOnChange = (ev) => {
        ev.preventDefault();
        const {name, value} = ev.target;
        console.log("ev.target:", ev.target)
        setLoginForm({
            ...loginForm,
            [name] : value 
        })
        console.log("loginForm:", loginForm)
    }

    const handleOnSubmit = async (ev) => {
        ev.preventDefault()

        await axios
        .post(
            'https://dummyjson.com/auth/login',
            loginForm
        )
        .then((res) => {
            if(res.status === 200) {
                localStorage.setItem("auth", JSON.stringify(res.data))
            }
        })
        .catch((err) => {
            console.log("error", err)
            alert("Incorrect name or password. Please, try again.")
        })
    }
/*         try{
            const res = await fetch(
                'https://dummyjson.com/auth/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        loginForm
                        /* {
                        username: 'kminchelle',
                        password: '0lelplR',
                    } */
               /*      )
                }
            )
            const data = res.json()
            if(res.status === 200) {
                localStorage.setItem("auth", JSON.stringify(data))
            }
            setIsError(false)
        }
        catch(err){
            setIsError(true)
            console.log("error", err)
            alert("Something went wrong...")
        } */
 

    

  return (
    <Form onSubmit = {handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
            type="name" 
            name = 'name' 
            value = {loginForm.name}
            placeholder="Enter name"
            onChange={handleOnChange}    
        />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
            type="password" 
            name = 'password' 
            value = {loginForm.password}
            placeholder="Password" 
            onChange={handleOnChange}    
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button 
        variant="primary" 
        type="submit" >
        Login
      </Button>
    </Form>
  )
}

export default LoginPage;