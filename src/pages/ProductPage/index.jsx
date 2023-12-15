import { Button } from 'react-bootstrap';
import Layout from '../../component/Layout';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';

const ProductPage = () => {
  const navigate = useNavigate();

  const productData = useSelector((state) => state.product.productDetails);
  console.log('details', productData);

  return (
    <>
      <Layout>
        <div className='card'>
          <div className='card_header' onClick={() => navigate('/addnew')}>
            <h1>master Products</h1>
            <Button type='button' variant='success'>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z'
                  fill='white'
                />
              </svg>
              Add new
            </Button>
          </div>
          <Table className='product_table' striped hover>
            <thead>
              <tr>
                <th>PRODUCT ID</th>
                <th>CATEGORY</th>
                <th>product name</th>
                <th>UNIT</th>
                <th>PACK SIZE</th>
              </tr>
            </thead>
            <tbody>
              {productData?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.category}</td>
                  <td>{item.productName}</td>
                  <td>{item.selectedUnit}</td>
                  <td>{item.packSize}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
