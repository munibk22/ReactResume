import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from 'react-bootstrap'


let NavBar = () =>
{
return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <span style={{marginLeft:"0px"}}  >
<button className="btn btn-link btn-sm" style={{fontSize:".8rem", padding:"-1%",marginRight:"5px"}}  >


<img type="button" src="



https://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png

" alt=""
style={{width:"26px", height:'25px',marginBottom:"3px",  padding:"-1.5%"}}>
      
</img>


       {} User Login </button>
       </span>


       <span style={{fontSize:".7rem"}} >


    <img type="button" src="
https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/38-512.png
" alt=""
style={{width:"26px", height:'25px', marginBottom:"5px"}} >
      
</img>User Logout

</span>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
)
}
export default NavBar;