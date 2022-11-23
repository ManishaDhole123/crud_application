import { Navbar, Nav } from 'react-bootstrap';
import * as Styled from './component/StyledComponent';
// import "./navBar.css" ;

const Navigation = () => {
    
  const pathname = window.location.pathname
  return (
    <Navbar className='navbar'>
      <Navbar.Collapse id="basic-navbar-nav">
        <Styled.navStyle className="mr-auto " >
          <Nav.Link  style={{marginRight : "35px" }} className = {pathname == '/' || pathname=='/userList' ? 'active':''} href="/">User List</Nav.Link>
          <Nav.Link className = { pathname =='/userForm' ? 'active':''}  href="/userForm" >studentForm</Nav.Link>
        </Styled.navStyle>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

