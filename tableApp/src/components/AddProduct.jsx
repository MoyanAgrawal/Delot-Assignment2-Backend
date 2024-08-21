import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { BaseUrl } from "../constants/baseUrl";


function AddProduct({ show, handleClose }) {
  const [data, setData] = useState({
    desertName: "",
    calories: 0,
    fats: 0,
    carbs: 0,
    proteins: 0,
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function resetForm(){
    setData({
      desertName: "",
      calories: 0,
      fats: 0,
      carbs: 0,
      proteins: 0,
    });
  }

  function handleAddProduct(e) {
    e.preventDefault();
    console.log("data___",data);

    axios.post(`${BaseUrl}/desert/new`,data,{
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>{
        if(res.status===200){
            setData({})
            handleClose();
            resetForm();
        }
    }).catch((err)=>{
        console.log("err____",err)
    })

  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Desert</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingInput"
          label="Desert Name"
          className="mb-3"
        >
          <Form.Control
            onChange={handleInput}
            name="desertName"
            value={data?.desertName}
            type="text"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Calories"
          className="mb-3"
        >
          <Form.Control
            name="calories"
            value={data?.calories}
            onChange={handleInput}
            type="number"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Fat(g)"
          className="mb-3"
        >
          <Form.Control
            name="fats"
            value={data?.fats}
            onChange={handleInput}
            type="number"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Carbs(g)"
          className="mb-3"
        >
          <Form.Control
            name="carbs"
            value={data?.carbs}
            onChange={handleInput}
            type="number"
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Protein(g)"
          className="mb-3"
        >
          <Form.Control
            name="proteins"
            value={data?.proteins}
            onChange={handleInput}
            type="number"
            placeholder="name@example.com"
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleAddProduct}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProduct;
