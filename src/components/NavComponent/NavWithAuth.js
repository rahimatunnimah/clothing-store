import Nav from "react-bootstrap/Nav";
import { FiShoppingCart, FiBell, FiMail } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

function NavBeforeLogin() {
  return (
    <Nav className="icon-container">
      <FiShoppingCart size={20} color="#8E8E93" />
      <FiBell size={20} color="#8E8E93" />
      <FiMail size={20} color="#8E8E93" />
      <FaUserCircle size={20} color="#8E8E93" />
    </Nav>
  );
}

export default NavBeforeLogin;
