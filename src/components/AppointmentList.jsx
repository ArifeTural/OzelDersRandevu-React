import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { MdOutlineDeleteForever } from "react-icons/md";

const AppointmentList = ({ appointments, handleDelete, handleDoubleClick }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Randevu Listesi
      </h3>
      {appointments.length === 0 && <img src="../img/calendar-2247443_1280.webp" alt="No appointments" width="40%" />}
      {appointments.map(({ id, ogrenci, consulted, dersName, day }) => (
        <div
          key={id}
          className={consulted ? "appointments consulted" : "appointments"}
          role="button"
          onDoubleClick={() => handleDoubleClick(id)}
        >
          <Row className="justify-content-between align-items-center">
            <Col md={6}>
              <h4>{ogrenci}</h4>
              <h5>{dersName}</h5> {/* Ders adı doğru şekilde gösterilmeli */}
            </Col>
            <Col>
              <h5>Gün: {new Date(day).toLocaleDateString("tr")}</h5>
              <h4>Saat: {new Date(day).toLocaleTimeString("tr")}</h4>
            </Col>
            <Col className="text-end">
              <MdOutlineDeleteForever className="text-danger display-4" role="button" onClick={() => handleDelete(id)} />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;

