import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/tutor.png'
const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <>

            <Navbar collapseOnSelect bg="primary" sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ height: '50px',width:'150px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" href="home#services">Services</Nav.Link>
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" href="home#experts">Experts</Nav.Link>
                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded mx-2" href="home#experts">Blogs</Nav.Link>

                            <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300  rounded" as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className="text-white hover:bg-purple-700 ease-in duration-300 rounded" eventKey={2} as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Navbar bg="primary" sticky="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img style={{ height: '50px' }} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-4 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="text-white" href="#action1">Home</Nav.Link>
                            <Nav.Link className="text-white" href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item className="text-white" href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item className="text-white" href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5" className="text-white">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="text-white" href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </>
    );
};

export default Header;