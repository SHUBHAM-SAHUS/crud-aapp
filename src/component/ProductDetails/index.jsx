// src/components/ProductDetailsForm.js
import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DropdownSelector from "../../component/DropdownSelector";
import {
  updateProductDetails,
  updateDropdownSelections,
} from "../../redux/productslice";
import { useDispatch, useSelector } from "react-redux";
import AboutProduct from "../AboutProduct";

const categoryOptions = ["Grocery", "Dairy", "Snacks", "Beverages"];
const subCategoryOptions = ["Aata", "Rice", "Pulses", "Spices"];
const brandOptions = ["Rajdhani", "Sakti", "Bhog", "Milkano", "Desi Choice"];
const unitOptions = ["Kg", "Ltr", "Gram", "Ml"];

const ProductDetailsComponent = () => {
  const dispatch = useDispatch();
  const itemDetailDetails = useSelector(
    (state) => state.product.productDetails
  );

  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState("");
  const [selectedUnit, setSelectedUnit] = React.useState("");

  const categoryOptions = ["Grocery", "Dairy", "Snacks", "Beverages"];
  const subCategoryOptions = ["Aata", "Rice", "Pulses", "Spices"];
  const brandOptions = ["Rajdhani", "Sakti", "Bhog", "Milkano", "Desi Choice"];
  const unitOptions = ["Kg", "Ltr", "Gram", "Ml"];
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState([
    {
      productName: "",
      packSize: "",
      HsnCode: "",
      SGST: "",
      IGST: "",
      category: selectedCategory,
    },
  ]);

  const handleChange = (index, field, value) => {
    const updatedDetails = [...productDetails];
    updatedDetails[index][field] = value;
    setProductDetails(updatedDetails);
  };
  const handleupdatedata = () => {
    setProductDetails([
      ...productDetails,
      {
        productName: "",
        packSize: "",
        HsnCode: "",
        SGST: "",
        IGST: "",
        category: selectedCategory,
        selectedSubCategory,
        selectedBrand,
        selectedUnit,
      },
    ]);
  };

  const handleDeleteField = (index) => {
    const updatedDetails = [...productDetails];
    updatedDetails.splice(index, 1);
    setProductDetails(updatedDetails);
  };

  console.log(productDetails);

  const updateOnState = () => {
    const newDetails = productDetails.map((detail) => ({
      ...detail,
      category: selectedCategory, // Corrected key name
      selectedSubCategory,
      selectedBrand,
      selectedUnit,
    }));
    dispatch(updateProductDetails(newDetails));
    navigate("/");
  };

  const handleDropdownSelect = (key, setterFunction) => {
    dispatch(
      updateDropdownSelections({
        selectedCategory,
        selectedSubCategory,
        selectedBrand,
        selectedUnit,
        [setterFunction.name]: key,
      })
    );
    setterFunction(key);
  };

  const handleUpdateData = () => {
    dispatch(updateProductDetails(itemDetailDetails));
  };

  return (
    <>
      <h2 className="heading">product Details</h2>
      <div className="form_wrp product_dtl_Wrp">
        <DropdownSelector
          label="Product Category"
          items={categoryOptions}
          onSelect={(key) => handleDropdownSelect(key, setSelectedCategory)}
          selectedValue={selectedCategory}
        />

        <DropdownSelector
          label="Subcategory"
          items={subCategoryOptions}
          onSelect={(key) => handleDropdownSelect(key, setSelectedSubCategory)}
          selectedValue={selectedSubCategory}
        />

        <DropdownSelector
          label="Product Brand"
          items={brandOptions}
          onSelect={(key) => handleDropdownSelect(key, setSelectedBrand)}
          selectedValue={selectedBrand}
        />

        <DropdownSelector
          label="Unit"
          items={unitOptions}
          onSelect={(key) => handleDropdownSelect(key, setSelectedUnit)}
          selectedValue={selectedUnit}
        />
      </div>
      <div className="form_wrp">
        <h3 className="title">Product Details</h3>

        <Form>
          {productDetails.map((details, index) => (
            <div
              key={index}
              className="mb-3"
              style={{ display: "flex", gap: "8px" }}
            >
              <Form.Group
                controlId={`productName-${index}`}
                className="flex-grow-1"
              >
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  value={details.productName}
                  onChange={(e) =>
                    handleChange(index, "productName", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group
                controlId={`packSize-${index}`}
                className="flex-grow-1"
              >
                <Form.Label>Pack Size</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter pack size"
                  value={details.packSize}
                  onChange={(e) =>
                    handleChange(index, "packSize", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group
                controlId={`packSize-${index}`}
                className="flex-grow-1"
              >
                <Form.Label> SGST</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter SGST"
                  value={details.SGST}
                  onChange={(e) => handleChange(index, "SGST", e.target.value)}
                />
              </Form.Group>

              <Form.Group
                controlId={`packSize-${index}`}
                className="flex-grow-1"
              >
                <Form.Label>IGST</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter IGST"
                  value={details.IGST}
                  onChange={(e) => handleChange(index, "IGST", e.target.value)}
                />
              </Form.Group>

              <Form.Group
                controlId={`packSize-${index}`}
                className="flex-grow-1"
              >
                <Form.Label>HsnCode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter  hsn code "
                  value={details.HsnCode}
                  onChange={(e) =>
                    handleChange(index, "HsnCode", e.target.value)
                  }
                />
              </Form.Group>

        

              <button
                onClick={() => handleDeleteField(index)}
                className="delete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="45"
                  viewBox="0 0 49 45"
                  fill="none"
                >
                  <rect width="49" height="45" rx="5" fill="#FF0000" />
                  <path d="M22 20H23.5V29H22V20Z" fill="white" />
                  <path d="M26.5 20H28V29H26.5V20Z" fill="white" />
                  <path
                    d="M16 15.5V17H17.5V32C17.5 32.3978 17.658 32.7794 17.9393 33.0607C18.2206 33.342 18.6022 33.5 19 33.5H31C31.3978 33.5 31.7794 33.342 32.0607 33.0607C32.342 32.7794 32.5 32.3978 32.5 32V17H34V15.5H16ZM19 32V17H31V32H19Z"
                    fill="white"
                  />
                  <path d="M22 12.5H28V14H22V12.5Z" fill="white" />
                </svg>
              </button>
            </div>
          ))}
          <Button
            variant="primary"
            onClick={handleupdatedata}
            className="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49"
              height="45"
              viewBox="0 0 49 45"
              fill="none"
            >
              <rect width="49" height="45" rx="5" fill="#00B087" />
              <path
                d="M25 11C18.3724 11 13 16.3724 13 23C13 29.6276 18.3724 35 25 35C31.6276 35 37 29.6276 37 23C37 16.3724 31.6276 11 25 11ZM31 24.2H26.2V29H23.8V24.2H19V21.8H23.8V17H26.2V21.8H31V24.2Z"
                fill="white"
              />
            </svg>
          </Button>
        </Form>
      </div>

      <AboutProduct />
      <div className="mb-3 text-end">
        <Button onClick={updateOnState} className="primary_btn">
          Add
        </Button>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
