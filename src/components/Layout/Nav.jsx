import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export default function Nav() {
    return (
   <nav>
        <h1>laleo</h1>
        <ul className="nav-tabs"> 
          <Link className="link" to='/'><li>home</li></Link>
          <Link className="link" to='/about'><li>about</li></Link>

          <li className="resources-tab">
            <Dropdown className="dropdown">
              <Dropdown.Toggle variant="primary" id="dropdown">resources</Dropdown.Toggle>
             

              <Dropdown.Menu id="dropdown-menu">
                <Dropdown.Item as={Link} to='/korean-resources'>Korean</Dropdown.Item>
                <Dropdown.Item as={Link} to='/japanese-resources'>Japanese</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <Link className="link" to='/tips'><li>tips</li></Link>
          <Link className="link" to='/contacts'><li>contacts</li></Link>
        </ul>
      </nav>
    )
}