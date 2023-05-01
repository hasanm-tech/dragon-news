import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container  className='py-5 h-100 text-center m-auto'>
            <h2 className='pt-5'>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro hic officiis quasi excepturi expedita dolore debitis voluptatum nisi architecto alias doloremque possimus, quos asperiores provident minima beatae consequatur? Dolore sequi iure, incidunt veniam libero assumenda cum quisquam! Perferendis asperiores cupiditate fugiat quia aut quidem rerum sequi culpa ad illo?

                <br /> <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam sit repudiandae id nostrum, magnam dolores expedita eligendi facere in!

            <br /> <br />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorem possimus, a iste animi cum.    
            </p>

            <Button className='my-5' variant='danger'> <Link
            style={{textDecoration:'none', fontWeight:'400', fontSize:'16px', color:'#fff'}}
            to='/register'>Back to Register </Link></Button>
        </Container>
    );
};

export default Terms;