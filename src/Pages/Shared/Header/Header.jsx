
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container} from 'react-bootstrap';
import './Header.css'
import Marquee from "react-fast-marquee";
import NAvigationBar from '../NavigationBar/NAvigationBar';


const Header = () => {

    return (
        <Container className='py-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favor</p>
                <h5>{moment().format('dddd, MMMM D, YYYY')}</h5>
            </div>

            <div className='latest-news d-flex mt-5'>
                <Button className='w-25 py-2' variant='danger'>Latest News</Button>
                <Marquee  speed={70}  pauseOnHover={true}>
                    <h5 className='px-4'>I can be a React component, multiple React components, or just some text.</h5>
                    <h5 className='px-4'>I can be a React component, multiple React components, or just some text.</h5>
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;