import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function NavBeforeLogin() {
  const navigate = useNavigate();
  return (
    <Nav className="auth-container">
      <FiShoppingCart size={20} color="#8E8E93" />
      <Button
        variant="outline-danger btn-auth"
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Button
        variant="outline-danger btn-auth"
        onClick={() => navigate("/register")}
      >
        Sign up
      </Button>
    </Nav>
  );
}

export default NavBeforeLogin;
