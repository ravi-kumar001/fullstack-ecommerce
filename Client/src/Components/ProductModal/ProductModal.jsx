import React, { useRef, useState } from "react";
import { Button, Dialog, Rating } from "@mui/material";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { IoCloseSharp } from "react-icons/io5";
import ProductZoom from "../ProductZoom/ProductZoom";
import QuantityManage from "../QuantityManage/QuantityManage";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
const ProductModal = (props) => {
  const [productModal, setProductModal] = useState(true);

  return (
    <React.Fragment>
      <Dialog
        onClose={() => setProductModal(props.productModalHandler)}
        open={productModal}
        className="productModal locationModal"
      >
        <Button onClick={() => setProductModal(false)} className="closeMenu">
          <IoCloseSharp />
        </Button>
        <h6 className="entry-title mb-2">
          Blue Diamond Almonds Lightly Salted
        </h6>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brand:</span>
            <span className="ml-2">Frito Lay, Oreo, Welch's</span>
          </div>
          <Rating
            name="read-only"
            value={5}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>
        <hr />

        <div className="row mt-2">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="info d-flex align-items-center">
              <span className="oldPrice lg">$20.00</span>
              <span className="netPrice lg ml-3 text-danger">$14.00</span>
            </div>
            <span className="badge bg-success mt-4">IN STOCK</span>

            <p className="mt-4">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="d-flex align-itmes-center mt-4">
              <QuantityManage />
              <Button className="btn-blue btn-lg btn-big btn-round border-0">
                Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-4">
              <Button
                variant="text"
                className="btn btn-round btn-black btn-sml border"
              >
                <IoIosHeartEmpty />
                &nbsp; Add to WishList
              </Button>
              <Button className=" btn-black ml-3">
                <MdOutlineCompareArrows />
                &nbsp; Compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
};
export default ProductModal;
