import React from 'react';
import { Form, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';



const DropdownSelector = ({ label, items, onSelect, selectedValue }) => {
  return (
    <Form.Group controlId={`dropdown-${label.toLowerCase()}`}>
      
      <Form.Label>{label}</Form.Label>
      <Dropdown onSelect={onSelect}>
        <Dropdown.Toggle variant='success' id={`dropdown-${label.toLowerCase()}-toggle`}>
          {selectedValue || `Select ${label}`}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {items.map((item) => (
            <Dropdown.Item key={item} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form.Group>
  );
};

export default DropdownSelector;
