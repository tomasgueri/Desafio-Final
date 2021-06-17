import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, InputGroup } from "react-bootstrap";

export default function Mensaje({ mensajesolo, getMensajes }) {
  const { _id, nombre, email, mensaje, estado, fecha } = mensajesolo;
  const [abrir, setAbrir] = useState(false);
  const handleClose = () => setAbrir(false);
  const handleAbrir = () => setAbrir(true);

  const eliminar = async () => {
    // event.preventDefault();
    try {
      const params = { _id };
      await axios.delete("/mensaje", { params });

      alert("Mensaje eliminado con éxito!😁");
      getMensajes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <tr>
        <td>{fecha}</td>
        <td>{nombre}</td>
        <td>{email}</td>
        <td>{mensaje}</td>
        <td>
          {estado} <InputGroup.Checkbox hasValidation="true" />{" "}
        </td>
        <td className="col-4">
<<<<<<< HEAD
          <Button variant="primary" onClick={handleAbrir} size="sm">
            <i class="fab fa-readme"></i>
          </Button>{" "}
          <Button variant="danger" onClick={eliminar} size="sm">
            <i class="far fa-trash-alt"></i>
=======
          <Button variant="primary">
            <i className="fab fa-readme"></i>
          </Button>{" "}
          <Button variant="danger" onClick={eliminar}>
            <i className="far fa-trash-alt"></i>
>>>>>>> main
          </Button>{" "}
        </td>
      </tr>

      {/* modal vista */}
      <Modal show={abrir} onHide={handleAbrir}>
        <Modal.Header>
          <Modal.Title>
            {nombre}
            <br />
            {email}
            <br />
            {fecha}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>MENSAJE</strong>
            <br />
            <br />
            {mensaje}
          </p>
          {/* <p>
            <strong>Estado:</strong> {estado}
          </p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
