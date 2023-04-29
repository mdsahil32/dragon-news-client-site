import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext)
   
    const handleLogout = ()=>{
        logOut()
        .then()
        .catch(error => console.log(error))
        
    }
    return (
        <Container>
            <div className='d-flex bg-gray my-3'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={100} pauseOnHover={true}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as .......
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3 ">
                            <Link className='text-decoration-none text-black' to="/category/0">Home</Link>
                            <Link className='text-decoration-none text-black'>About</Link>
                            <Link className='text-decoration-none text-black'>Career</Link>

                        </Nav>
                        <Nav>
                            {user &&
                                <Nav.Link href="#profile"><FaUserCircle style={{ fontSize: '2rem' }} /></Nav.Link>}

                            {user ?
                                <Button onClick={handleLogout}
                                variant="secondary">LogOut</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
        
    );
};

export default Navigation;