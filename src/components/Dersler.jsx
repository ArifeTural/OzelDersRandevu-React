import Container from "react-bootstrap/Container";
import { dersData } from "../helper/data";
import { Row, Col } from "react-bootstrap";
import AddModal from "./AddModal";
import { useState } from 'react';

const Dersler = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const [selectedDersName, setSelectedDersName] = useState(""); // Değişken adı değiştirilmiş

  const handleClose = () => setShow(false);
  const handleShow = (dersName) => {
    setShow(true);
    setSelectedDersName(dersName); // Değişken adı değiştirilmiş
  };

  return (
    <Container className="p-2">
      <h5 className="display-6 mb-3 " >
        Birebir Ders Almak İçin Alan Seçiniz
      </h5>
      <Row className="dersler">
        {dersData.map(ders => {
          const { id, img, dersName, name } = ders;
          return (
            <Col sm={6} md={4} lg={3} xl={2} key={id} >
              <img 
                src={img} 
                alt={name} 
                className="ders-img  " 
                onClick={() => handleShow(dersName)} 
              />
              <h5>{name}</h5>
              <h6>{dersName}</h6>
            </Col>
          );
        })}
      </Row>
      <AddModal 
        handleClose={handleClose} 
        show={show} 
        dersName={selectedDersName} // Burada selectedDersName kullanılıyor
        handleAdd={handleAdd}
      />
    </Container>
  );
}

export default Dersler;
