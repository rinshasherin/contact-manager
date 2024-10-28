import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="shadow border-0" style={{backgroundColor:'black'}}>
                <Container>
                    <Navbar.Brand href="#home" style={{color:'white'}}>
                        <i className="fa-solid fa-phone-volume me-1" style={{ color: "white", }} />
                        {' '}
                        Contact Manager
                    </Navbar.Brand>
                </Container>
            </Navbar>

            
        </>
    )
}

export default Header