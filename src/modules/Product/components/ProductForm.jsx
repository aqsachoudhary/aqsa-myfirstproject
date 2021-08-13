import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../../../styles/productsForm.css";
import CustomeInput from "../../../components/CustomeInput";
import ProductsData from "../../../helper/ProductsData";

const ProductForm = (props) => {
  const history = useHistory();
  const [productId, setProductId] = useState(props.match.params.id);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [moodal, setMoodal] = useState("");
  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [moodalError, setMoodalError] = useState("");
  const [error, setError] = useState(true);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (history.location.pathname === "/product/new") {
      setIsNew(true);
    } else {
      setIsNew(false);
      findProduct();
    }
  }, []);
  useEffect(() => {
    if (name == "" || name.length <= 3) {
      setError(true);
      return;
    } else if (company == "" || company.length <= 3) {
      setError(true);
      return;
    } else if (quantity == "" || parseInt(quantity) < 1) {
      setError(true);
      return;
    } else if (price == "" || parseInt(price) < 1) {
      setError(true);
      return;
    } else if (moodal == "") {
      setError(true);
      return;
    } else {
      setError(false);
    }
  }, [name, company, quantity, price, moodal]);

  const handlesubmit = (e) => {
    e.preventDefault();

    if (error) {
      return;
    }

    if (isNew) {
      createProduct();
    } else {
      updateProduct();
    }
  };
  const createProduct = () => {
    const newProducts = {
      id: Math.random(),
      name,
      company,
      quantity,
      price,
      moodal,
    };

    ProductsData.push(newProducts);
    alert("product created successfully ");
  };
  const findProduct = () => {
    const productExist = ProductsData.find((u) => u.id == productId);
    if (productExist) {
      setName(productExist.name);
      setCompany(productExist.company);
      setQuantity(productExist.quantity);
      setPrice(productExist.price);
      setMoodal(productExist.moodal);
    } else {
      alert("Product not found");
    }
  };
  const updateProduct = () => {
    const index = ProductsData.findIndex((u) => u.id == productId);
    // console.log("productExist :>> ", productExist);

    ProductsData[index] = {
      ...ProductsData[index],
      name,
      company,
      quantity,
      price,
      moodal,
    };

    console.log("ProductsData :>> ", ProductsData);
  };

  return (
    <div className="productForm">
      <div className="innerContainer">
        <h1>{isNew ? "Create user" : "Edit user"}</h1>
        <form action="" onSubmit={handlesubmit}>
          <CustomeInput
            placeholder="Name"
            type="text"
            value={name}
            error={nameError}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={() => {
              if (name == "") {
                setNameError("Enter Your Name");
              } else {
                setNameError("");
              }
            }}
          />

          <CustomeInput
            placeholder="Company"
            type="text"
            value={company}
            error={companyError}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            onBlur={() => {
              if (company == "") {
                setCompanyError("Enter Your Company");
              } else {
                setCompanyError("");
              }
            }}
          />
          <CustomeInput
            placeholder="Quantity"
            type="number"
            value={quantity}
            error={quantityError}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            onBlur={() => {
              if (quantity == "" || parseInt(quantity) < 1) {
                setQuantityError("Enter Your Quantity");
              } else {
                setQuantityError("");
              }
            }}
          />
          <CustomeInput
            placeholder="Price"
            type="number"
            value={price}
            error={priceError}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            onBlur={() => {
              if (price == "" || parseInt(price) < 1) {
                setPriceError("Enter Your Price");
              } else {
                setPriceError("");
              }
            }}
          />
          <CustomeInput
            placeholder="Moodal"
            type="text"
            value={moodal}
            error={moodalError}
            onChange={(e) => {
              setMoodal(e.target.value);
            }}
            onBlur={() => {
              if (price == "") {
                setMoodalError("Enter Your Moodal");
              } else {
                setMoodalError("");
              }
            }}
          />
          <button
            type="submit"
            className="buttonForm"
            style={{
              backgroundColor: error ? "tomato" : "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {isNew ? "create" : "Edit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ProductForm;
