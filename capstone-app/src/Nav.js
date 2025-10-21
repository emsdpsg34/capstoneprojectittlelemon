import { HashLink } from "react-router-hash-link";
import { Container } from "./styles";
import basketImg from "../../assets/basket.svg";

const Nav = (props) => {
  return (
    <Container {...props}>
        <ul>
          <li> <img src={"littlelemonpnglogo.jpg"} alt="Little Lemon Logo" /> </li>
          <li> <HashLink to="/">Home</HashLink> </li>
          <li> <HashLink to="/#about">About</HashLink> </li>
          <li> <HashLink to="/#menu">Menu</HashLink> </li>
          <li> <HashLink to="/bookings">Reservations</HashLink> </li>
          <li className="orderBtn"> <HashLink role="button" to="#">Order Online</HashLink> </li>
          <li> <img className="basketIcon" src={"basket.svg"} alt="Basket" /> </li>
        </ul>
    </Container>
  );
};

export default Nav;