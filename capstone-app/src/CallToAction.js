import { FC } from "react";
import Button from "../Button";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Container, Content, Image } from "./styles";


const CallToAction: FC = ():  JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
      </Content>
      <Image>
        <img src={dishnumber2.jpg} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;