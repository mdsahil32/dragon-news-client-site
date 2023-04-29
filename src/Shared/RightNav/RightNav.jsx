import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../QZone/Qzone';
import bg from '../../assets/bg1.png'

const RightNav = () => {
    return (
        <div className='mt-4'>
            <h4>Login Now</h4>
            <Button className='my-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            <div className='my-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>

                <Qzone></Qzone>

                <article

                    style={{ backgroundImage: `url(${bg})` }}
                >
                    <div className='p-4 text-center'>
                        <h1 className='text-white p-3'>Create an Amazing Newspaper</h1>
                        <p className='text-white p-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button variant="danger">Learn more</Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default RightNav;