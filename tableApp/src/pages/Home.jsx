import * as React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "../assets/css/Home.css"
import { Button } from "@mui/material";
import TableBase from "../components/TableBase";
import AddProduct from "../components/AddProduct";
import axios from "axios";
import { BaseUrl } from "../constants/baseUrl";
import { useEffect } from "react";


export default function Home() {
const [show,setShow]=useState(false);
const [rows, setRows] = useState([]);

function getDeserts() {
  axios
    .get(`${BaseUrl}/deserts`)
    .then((res) => {
      console.log("agya___", res.data);
      setRows(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

useEffect(() => {
  getDeserts();
}, []);
    
function handleShow(){
  setShow(true);
}
function handleClose(){
  getDeserts()
  setShow(false);
}
  return (
    <div className="container p-5">
      <Navbar className="bg-secondary">
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button className="bg-primary text-warning" onClick={handleShow}>
                Add+
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TableBase rows={rows} />
      <AddProduct show={show} handleClose={handleClose} />
    </div>
  );
}
