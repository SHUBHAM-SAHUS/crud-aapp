// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productDetails: [
      {
        productName: '',
        packSize: '',
        hsnCode: '',
        sgst: '',
        igst: '',
        selectedCategory: '',
        selectedSubCategory: '',
        selectedBrand: '',
        selectedUnit: '',
      },
    ],
  },
  reducers: {
    updateProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    updateDropdownSelections: (state, action) => {
      const {
        selectedCategory,
        selectedSubCategory,
        selectedBrand,
        selectedUnit,
      } = action.payload;

      state.productDetails = state.productDetails.map((details) => ({
        ...details,
        selectedCategory,
        selectedSubCategory,
        selectedBrand,
        selectedUnit,
      }));
    },
  },
});

export const { updateProductDetails, updateDropdownSelections } = productSlice.actions;
export default productSlice.reducer;
