import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import './RightNav.css'

const RightNav = () => {
    return (
        <div>
            <div className="login d-flex flex-column gap-4">
                <h3>Login With</h3>
                <Button className='py-2' variant="outline-danger"> <FaGoogle/> Login with google </Button>
                <Button className='py-2' variant="outline-dark"> <FaGithub/> Login with Github </Button>

            </div>

            <div className='py-4'>
                <h3>Find Us On </h3>
                <ListGroup>
                    <ListGroup.Item> FaceBook </ListGroup.Item>
                    <ListGroup.Item> Twitter </ListGroup.Item>
                    <ListGroup.Item>Instagram</ListGroup.Item>
                </ListGroup> 
            </div>

            <div className='py-5'>
               <Qzone></Qzone>
            </div>

            <div className='promo text-center py-5 px-2'>
                <h3 className='text-white py-2 pt-5'>Create an Amazing Newspaper</h3>
                <p className='text-white py-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='mb-5' variant='danger'> Learn More </Button>
            </div>
        </div>
    );
};

export default RightNav;