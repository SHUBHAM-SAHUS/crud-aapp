import React from 'react'
import { Form } from 'react-bootstrap';

const AboutProduct = () => {
  return (
   <>
    <h2 className="heading">About The Product</h2>
    <Form>
    <div className="form_wrp about_product">
      <Form.Group className="flex-grow-1">
        <Form.Label>general details</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Origin and Specifications "
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Form.Group className="flex-grow-1">
        <Form.Label>Shelf Life</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="15 Days"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Form.Group className="flex-grow-1">
        <Form.Label>SKU Size</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="5 kg"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Form.Group className="flex-grow-1">
        <Form.Label>Packaging Type</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Pouch"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Form.Group className="flex-grow-1">
        <Form.Label>manufacturer details</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Add Details"
          style={{ height: "100px" }}
        />
      </Form.Group>
      <Form.Group className="flex-grow-1">
        <Form.Label>Packer details</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Add Details"
          style={{ height: "100px" }}
        />
      </Form.Group>
    </div>
  </Form>
   </>
  )
}

export default AboutProduct;