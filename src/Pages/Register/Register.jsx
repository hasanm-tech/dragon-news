import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const photo = form.photo.value;

        createUser(email,pass)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })

        .catch(error => {
            console.error(error)
        })
    }

    const [accepted, setAccept] = useState(false)
    const handleCheck = event => {
        setAccept(event.target.checked)
    }
    return (
        <Container className='py-5'>
            <Form onSubmit={handleRegister} className='w-50 mx-auto bg-white p-5'>
                    <div className='text-center py-3'>
                    <h2> Register your account</h2>
                    </div>
                    <hr style={{background:'#E7E7E7'}} />

                <Form.Group className="mb-3 pt-3" controlId="formBasicName">
                <Form.Label>Your Name </Form.Label>
                <Form.Control  type="text" name='name'  placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3 pt-3" controlId="formBasicPhoto">
                    <Form.Label>Photo Url </Form.Label>
                    <Form.Control  type="text"  name='photo' placeholder="Enter your photo url" />
                </Form.Group>

                <Form.Group className="mb-3 pt-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email"  name='email' placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required name='password' type="password" placeholder="Enter your Password" />
                </Form.Group>

                <Form.Group onClick={handleCheck} className="mb-3 check" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"  name='check' 
                    label={<>Accept <Link style={{textDecoration:'none', fontWeight:'bold'}} to='/terms'>Terms and Condition</Link></>}
                     />
                </Form.Group>

                <Button disabled={!accepted} className='w-100 btn-form mt-3' variant="dark" type="submit">
                    Register 
                </Button>

                <div className='py-3'>
                    <p className='redirect' >Dont’t Have An Account ? <Link className='text-danger text-decoration-none' to='/login'>Login</Link></p>
                </div>
            </Form>
        </Container>
    );
};

export default Register;