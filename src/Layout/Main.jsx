import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Shared/RigthNav/RightNav';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import NAvigationBar from '../Pages/Shared/NavigationBar/NAvigationBar';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <NAvigationBar></NAvigationBar>
                <Container>
                    <Row>
                        <Col  className=''  lg={3}> <LeftNav></LeftNav> </Col>
                        <Col className=' text-center'  lg={6}> <Outlet></Outlet>  </Col>
                        <Col  className='bg-cyan' lg={3}> <RightNav></RightNav> </Col>
                    </Row>
                </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;