import { ReactElement, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  fetchBrands,
  fetchDevices,
  fetchTypes,
} from "../store/reducers/ActionCreators";
import { Accordion, CloseButton, Col, Container, ListGroup, Row } from "react-bootstrap";
import CardItem from "../components/CardItem";

const Shop = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.typeReduce);
  const { brands } = useAppSelector((state) => state.brandReduce);
  const { devices } = useAppSelector((state) => state.deviceReducer);
  useEffect(() => {
    Promise.all([
      dispatch(fetchTypes()),
      dispatch(fetchBrands()),
      dispatch(fetchDevices()),
    ]);
  }, []);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={3}>
          <Accordion defaultActiveKey={["1"]} alwaysOpen>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Отсоортировать по типу техники
              </Accordion.Header>
              <Accordion.Body>
                {types.map((type) => (
                  <div key={type.id}><span role="button" onClick={() => {}}>{type.name}</span></div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Отсоортировать по бренду</Accordion.Header>
              <Accordion.Body>
                {brands.map((brands) => (
                  <div key={brands.id}><span role="button" onClick={() => {}}>{brands.name}</span></div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={9}>
          <Row className="mb-4">
            <Container>
              <ListGroup horizontal>
                <ListGroup.Item className="d-flex align-content-center">Pick Sort <CloseButton className="ms-lg-2"/></ListGroup.Item>
              </ListGroup>
            </Container>
          </Row>
          <Row>
            {devices.map((device) => (
              <Col md={3} className="mb-3 w-auto">
                <CardItem
                  key= {device.id}
                  id = {device.id}
                  name = {device.name}
                  price = {device.price}
                  img = {device.img}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
