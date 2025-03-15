import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Reservations = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [reservations, setReservations] = useState([
    { id: 1, emri: "Ervin", mbiemri: "Dervishi", data: "2025-03-20", menuja: "Menu 1", mysafiret: 50, paradhenie: 100 },
    { id: 2, emri: "Arben", mbiemri: "Hoxha", data: "2025-03-25", menuja: "Menu 2", mysafiret: 30, paradhenie: 50 },
    { id: 3, emri: "Linda", mbiemri: "Krasniqi", data: "2025-04-02", menuja: "Menu 3", mysafiret: 70, paradhenie: 150 },
  ]);

  const [formData, setFormData] = useState({
    emri: "",
    mbiemri: "",
    data: "",
    menuja: "Menu 1",
    mysafiret: 0,
    paradhenie: 0,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setEditShow(false);
  const handleDeleteClose = () => setDeleteShow(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setReservations(
      [...reservations, { id: reservations.length + 1, ...formData }].sort(
        (a, b) => new Date(a.data) - new Date(b.data)
      )
    );
    handleClose();
  };

  const handleEditShow = (reservation) => {
    setSelectedReservation(reservation);
    setFormData({ ...reservation });
    setEditShow(true);
  };

  const handleEditSubmit = () => {
    setReservations(
      reservations
        .map((res) => (res.id === selectedReservation.id ? { ...formData } : res))
        .sort((a, b) => new Date(a.data) - new Date(b.data))
    );
    handleEditClose();
  };

  const handleDeleteShow = (reservation) => {
    setSelectedReservation(reservation);
    setDeleteShow(true);
  };

  const handleDeleteConfirm = () => {
    setReservations(reservations.filter((res) => res.id !== selectedReservation.id));
    handleDeleteClose();
  };

  return (
    <>
      <div className="container mt-4">
  <h3 className="text-center mb-4 fw-bold">Lista e Rezervimeve</h3>

  <div className="d-flex justify-content-center mb-3">
    <Button variant="primary" onClick={handleShow}>➕ Shto Rezervim</Button>
  </div>

  <div className="table-responsive">
    <table className="table table-bordered table-hover shadow-sm text-center">
      <thead className="table-primary">
        <tr>
          <th>#</th>
          <th>Emri</th>
          <th>Mbiemri</th>
          <th>Data</th>
          <th>Menuja</th>
          <th>Mysafirët</th>
          <th>Paradhënie (€)</th>
          <th>Veprimet</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((res, index) => (
          <tr key={res.id}>
            <td>{index + 1}</td>
            <td>{res.emri}</td>
            <td>{res.mbiemri}</td>
            <td>{res.data}</td>
            <td>{res.menuja}</td>
            <td>{res.mysafiret}</td>
            <td>{res.paradhenie}</td>
            <td className="action-buttons">
              <Button variant="warning" size="sm" className="me-1" onClick={() => handleEditShow(res)}>✏️</Button>
              <Button variant="danger" size="sm" onClick={() => handleDeleteShow(res)}>❌</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      <Modal show={deleteShow} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fshi Rezervimin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A jeni i sigurt që dëshironi ta fshini rezervimin e
          <strong> {selectedReservation?.emri} {selectedReservation?.mbiemri}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>Mbyll</Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>Po, Fshije</Button>
        </Modal.Footer>
      </Modal>

      {/* MODALI PËR SHTIMIN E REZERVIMIT */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shto Rezervim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Emri</Form.Label>
              <Form.Control type="text" name="emri" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mbiemri</Form.Label>
              <Form.Control type="text" name="mbiemri" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control type="date" name="data" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Menuja</Form.Label>
              <Form.Control as="select" name="menuja" onChange={handleChange}>
                <option>Menu 1</option>
                <option>Menu 2</option>
                <option>Menu 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mysafirët</Form.Label>
              <Form.Control type="number" name="mysafiret" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Paradhënie (€)</Form.Label>
              <Form.Control type="number" name="paradhenie" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Mbyll</Button>
          <Button variant="primary" onClick={handleSubmit}>Ruaj</Button>
        </Modal.Footer>
      </Modal>

      {/* MODALI PËR MODIFIKIM */}
      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifiko Rezervim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Emri</Form.Label>
              <Form.Control type="text" name="emri" value={formData.emri} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mbiemri</Form.Label>
              <Form.Control type="text" name="mbiemri" value={formData.mbiemri} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control type="date" name="data" value={formData.data} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Menuja</Form.Label>
              <Form.Control as="select" name="menuja" value={formData.menuja} onChange={handleChange}>
                <option>Menu 1</option>
                <option>Menu 2</option>
                <option>Menu 3</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mysafirët</Form.Label>
              <Form.Control type="number" name="mysafiret" value={formData.mysafiret} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Paradhënie (€)</Form.Label>
              <Form.Control type="number" name="paradhenie" value={formData.paradhenie} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>Mbyll</Button>
          <Button variant="primary" onClick={handleEditSubmit}>Ruaj Ndryshimet</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Reservations;











{/* <table className="table table-bordered table-hover shadow-sm rounded text-center" style={{ minWidth: "1200px" }}></table> */}