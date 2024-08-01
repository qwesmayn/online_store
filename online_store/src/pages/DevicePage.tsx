import React, { ReactElement, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchDevicesById } from "../store/reducers/ActionCreators";

const DevicePage = () : ReactElement => {
  const dispatch = useAppDispatch();
  const { device } = useAppSelector((state) => state.deviceReducer);
  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchDevicesById(id));
    }
  }, [dispatch, id]);

  const imageUrl = `http://localhost:5000/${device?.img}`;

  return (
    <Container className="my-4">
      <Row>
        <Col md={4}>
          <img src={imageUrl} alt="Устройство" className="w-100" />
        </Col>
        <Col md={8}>
          <Card className="p-3">
            <h2>{device?.name}</h2> 
            <p><strong>Рейтинг:</strong></p>
            <p><strong>Цена:</strong> {device?.price} BYN</p>
            <Button variant="primary" className="mt-4">Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          {/* Используем классы d-flex и flex-column для создания гибкого контейнера */}
          <Card className="w-100 p-3 d-flex flex-column">
            <h3>Описание:</h3>
            <p>{device?.info.description}</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
