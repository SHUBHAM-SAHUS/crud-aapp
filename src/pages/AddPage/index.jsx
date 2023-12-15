// AddPage.js
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropdownSelector from "../../component/DropdownSelector";
import ProductDetailsComponent from "../../component/ProductDetails";
import AboutProduct from "../../component/AboutProduct";
import {
  updateProductDetails,
  updateDropdownSelections,
} from "../../redux/productslice";
import { Form, Button } from "react-bootstrap";
import Layout from "../../component/Layout";
import "./style.css";

const AddPage = () => {
  const childRef = useRef();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.product.productDetails);

  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedSubCategory, setSelectedSubCategory] = React.useState("");
  const [selectedBrand, setSelectedBrand] = React.useState("");
  const [selectedUnit, setSelectedUnit] = React.useState("");

  const categoryOptions = ["Grocery", "Dairy", "Snacks", "Beverages"];
  const subCategoryOptions = ["Aata", "Rice", "Pulses", "Spices"];
  const brandOptions = ["Rajdhani", "Sakti", "Bhog", "Milkano", "Desi Choice"];
  const unitOptions = ["Kg", "Ltr", "Gram", "Ml"];

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
    dispatch(updateProductDetails(productDetails));
  };




  return (
    <Layout>
      <div className="card">
        <div className="card_header">
          <h1>master Products</h1>
        </div>
        <ProductDetailsComponent handleUpdateData={handleUpdateData} />
      
        {/* <AboutProduct /> */}
      </div>
      <div className="flex">
      
      </div>

     

    
    </Layout>
  );
};

export default AddPage;
