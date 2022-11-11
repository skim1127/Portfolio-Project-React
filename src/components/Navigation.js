import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg'

export default function Navigation() {
    // Styling objects
    const flexStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
    }

    const logoStyle = {
        maxWidth: '75px',
        maxHeight: '75px'
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand style={ flexStyle }>
                    <img style={ logoStyle } src={ logo } className="App-logo" alt="react logo" />
                    <h2>My React Portfolio</h2>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">
                            About Me
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/services">
                            My Services
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/experience">
                            Experience
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/portfolio">
                            Portfolio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contacts">
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>            
        </div>
    )
}