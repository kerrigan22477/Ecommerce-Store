import {Button, Container, Modal, Navbar} from 'react-bootstrap'

function NavBarComponent() {

    return (
        <Navbar expand='sm'>
            <Navbar.Brand href="/">Ecom Store</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarComponent;