import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import logo from '../assets/image.png';

const Layouts = () => {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />
                        {''}
                        React SPA
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="profile">Profile</Nav.Link>
                        <Nav.Link href="contact">Contactus</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Layouts;
