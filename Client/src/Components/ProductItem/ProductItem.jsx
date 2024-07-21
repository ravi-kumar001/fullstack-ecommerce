import { AiOutlineFullscreen } from "react-icons/ai";

import { FaRegHeart } from "react-icons/fa";

import { Button, Rating } from "@mui/material";
import ProductModal from "../ProductModal/ProductModal";
import { useState } from "react";
const ProductItem = (props) => {
  const [productModalHandler, setProductModalHandler] = useState(false);

  const modalHandler = () => {
    setProductModalHandler(true);
  };
  return (
    <div className={`item productItem cursor ${props.viewController}`}>
      <div className="imageWrapper">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
          alt=""
          className="w-100"
        />
        <span className="badge badge-primary">20%</span>
        <div className="actions">
          <Button onClick={modalHandler}>
            <AiOutlineFullscreen />
          </Button>
          <Button>
            <FaRegHeart />
          </Button>
        </div>
      </div>

      <div className="info">
        <h4>All Natural Italian-Style Chicken Meatballs</h4>
        <span className="text-success d-block">In Stock</span>
        <Rating
          name="read-only"
          value={5}
          readOnly
          size="small"
          precision={0.5}
          className="mt-2 mb-2"
        />

        <div className="d-flex price-info">
          <span className="oldPrice">$20.00</span>
          <span className="netPrice ml-2 text-danger">$14.00</span>
        </div>
      </div>

      {productModalHandler && (
        <ProductModal productModalHandler={productModalHandler} />
      )}
    </div>
  );
};
export default ProductItem;
