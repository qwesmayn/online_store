import { ReactElement, useState } from "react";
import { Button, Container } from "react-bootstrap";
import BrandModal from "../modals/BrandModal";
import DeviceModal from "../modals/DeviceModal";
import TypeModal from "../modals/TypeModal";

const Admin = (): ReactElement => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [typeModalVisible, setTypeModalVisible] = useState(false);
  return (
    <Container className="d-flex flex-column mt-5">
      <Button className="mb-4" variant="outline-dark" onClick={() => setTypeModalVisible(true)}>Добавить тип</Button>
      <Button className="mb-4" variant="outline-dark" onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
      <Button variant="outline-dark"onClick={() => setDeviceVisible(true)}>Добавить устройство</Button>
      <BrandModal show = {brandVisible} onHide={() => setBrandVisible(false)}/>
      <DeviceModal show = {deviceVisible} onHide={() => setDeviceVisible(false)}/>
      <TypeModal show = {typeModalVisible} onHide={() => setTypeModalVisible(false)}/>
    </Container>
  );
};

export default Admin;
