import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const location = useLocation();
    const from = location.state?.from?.pathname || '/category/0';
    const navigate = useNavigate()
    const {logIn} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        logIn(email,pass)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace:true})
        })

        .catch(error => {
            console.error(error)
        })
  
    
    }
    return (
        <Container className='py-5'>
            
            <Form onSubmit={handleLogin} className='w-50 mx-auto bg-white p-5'>
                    <div className='text-center py-3'>
                    <h2>Login your account</h2>
                    </div>
                    <hr style={{background:'#E7E7E7'}} />

                <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email'  type="email" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter your Password" />
                </Form.Group>

                <Button className='w-100 btn-form mt-3' variant="dark" type="submit">
                    Submit
                </Button>

                <div className='py-3'>
                    <p className='redirect' >Dont’t Have An Account ? <Link className='text-danger text-decoration-none' to='/register'>Register</Link></p>
                </div>
            </Form>
        </Container>
    );
};

export default Login;