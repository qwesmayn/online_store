import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cart_logo from "../image/cart.svg";
import { NavLink } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/const";

type Props = {
  id : number;
  name: string;
  price: number;
  img: string;
};

const CardItem = ({id, name, price, img }: Props): ReactElement => {
  const imageUrl = `http://localhost:5000/${img}`;
  return (
    <Card style={{ width: "18rem" }}>
      <Container style={{ height: "180px" }} className="w-auto">
        <Card.Img
          variant="top"
          className="img-fluid h-100 w-auto m-2"
          src={imageUrl}
        />
      </Container>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} BYN</Card.Text>
        <Container className="p-0 d-flex justify-content-between align-items-center">
          <NavLink to={DEVICE_ROUTE + `/${id}`}>
            <Button variant="primary">Подробнее</Button>
          </NavLink>
          <Button variant="outline-success">
            <img src={cart_logo} />
          </Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
