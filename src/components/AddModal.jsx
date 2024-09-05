import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddModal({ handleClose, show, dersName, handleAdd }) {
  const [ogrenci, setOgrenci] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: new Date().getTime(),
      ogrenci: ogrenci,
      day: date,
      consulted: false,
      dersName: dersName, // Ders adı doğru şekilde alınıyor
    };
    handleAdd(newAppointment);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dersName} dersi için randevu oluşturunuz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Öğrenci Adı:</Form.Label>
              <Form.Control
                value={ogrenci} // Değerin kontrol edilmesi
                onChange={(e) => setOgrenci(e.target.value)}
                type="text"
                placeholder="Öğrenci adını girin"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Tarih</Form.Label>
              <Form.Control
                value={date} // Değerin kontrol edilmesi
                onChange={(e) => setDate(e.target.value)}
                type="datetime-local"
                placeholder="Tarih seçin"
              />
            </Form.Group>

            <div className='text-center'>
              <Button type='submit' variant="success" className='me-2'>
                Onayla
              </Button>
              <Button type='button' variant="danger" onClick={handleClose}>
                Çıkış
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
