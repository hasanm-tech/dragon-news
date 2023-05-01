import React from 'react';
import NAvigationBar from '../../Pages/Shared/NavigationBar/NAvigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div style={{background:'#F3F3F3'}}>
            <NAvigationBar></NAvigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;