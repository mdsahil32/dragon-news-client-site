import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import {  Container } from 'react-bootstrap';


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <h6>{moment().format("dddd, MMM DD, YYYY")}</h6>
            </div>
            
        </Container>
    );
};

export default Header;