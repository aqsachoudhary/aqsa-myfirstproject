import REACT, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ProductsData from "../../helper/ProductsData";

const Products = (props) => {
  const [productsList, setProductsList] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setProductsList(ProductsData);
  }, []);
  const handleDelete = (id) => {
    const filterData = productsList.filter((u) => u.id !== id);
    setProductsList(filterData);
  };

  const handleCreate = () => {
    history.push("/product/new");
  };
  const handleEdit = (id) => {
    history.push("/product/product-details/" + id);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          padding: "10px 10px",
          marginTop: "20px",
        }}
      >
        <h1>Products</h1>
      </div>
      <button
        style={{
          position: "absolute",
          top: "35px",
          right: "30px",
          height: "30px",
        }}
        onClick={() => {
          handleCreate();
        }}
      >
        Create Products
      </button>
      <table style={{ backgroundColor: "white" }}>
        <tr>
          <th>name</th>
          <th>company</th>
          <th>quantity</th>
          <th>price</th>
          <th>moodal</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        <tbody>
          {productsList.map((phone) => (
            <tr key={phone.id}>
              <td>{phone.name}</td>
              <td>{phone.company}</td>
              <td>{phone.quantity}</td>
              <td>{phone.price}</td>
              <td>{phone.moodal}</td>

              <td>
                <button
                  onClick={() => {
                    handleDelete(phone.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleEdit(phone.id);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
};
export default Products;
