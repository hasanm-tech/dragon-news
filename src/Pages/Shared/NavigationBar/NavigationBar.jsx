import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Button,Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import './Navigation.css'

const NAvigationBar = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }
    return (
        
        <Container className='py-5'>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Toggle className='align-items-center' aria-controls="responsive-navbar-nav" />
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto menu">
                        
                           <Link to="/">Home</Link>
                           <Link to="">About</Link>
                           <Link to="">Career</Link>
                        
                    </Nav>
                    <Nav className='align-items-center'>
                        <div>{user && <Nav.Link href=""> <FaUserCircle style={{fontSize: '30px', color:'black'}} /></Nav.Link>}</div>

                        <div className='headerBtn'>
                            {user ?<Button className='header-btn' onClick={handleLogOut} variant='danger'>Log Out</Button> :
                            <Link to="/login"><Button  variant='dark' className='header-btn'  >Log In</Button></Link>}
                        </div>    
                    </Nav>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </Container>
    );
};

export default NAvigationBar;