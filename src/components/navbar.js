import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function NavBar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Mon Application</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/register">Inscription</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">Connexion</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;