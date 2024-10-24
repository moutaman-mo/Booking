import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonBootStrap from "react-bootstrap/Button";
import "./NavScrollExample.css";
import PrimeReact from "../primeReact";
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

import { useState } from "react";


export default function NavScrollExample({visible,setVisible}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Button
      className="button-sideBar"
        icon="pi  pi-bars"
        onClick={(e) => setVisible(true)}
        aria-controls={visible ? "sbar" : null}
        aria-expanded={visible ? true : false}
      />

      <Sidebar
        id="sidebar"
        visible={visible}
        onHide={() => setVisible(false)}
        role="region"
      >
        Content
      </Sidebar>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <ButtonBootStrap className="button-search" variant="outline-success">
              Search
            </ButtonBootStrap>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
