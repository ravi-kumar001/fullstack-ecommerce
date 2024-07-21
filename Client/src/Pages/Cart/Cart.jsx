import { Button, Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import QuantityManage from "../../Components/QuantityManage/QuantityManage";
import { RxCross2 } from "react-icons/rx";
import { BsCartFill } from "react-icons/bs";

function Cart(props) {
  return (
    <section className="section cartPage">
      <div className="container">
        <h2 className="hd mb-2">Your Cart</h2>
        <p>
          There are <b className="text-red">3</b> products in your cart
        </p>
        <div className="row">
          <div className="col-md-9">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th width="50%">Product</th>
                    <th width="20%" className="unitPrice">
                      Unit Price
                    </th>
                    <th className="pl-5" width="18%">
                      Quantity
                    </th>
                    <th className="pl-5">SubTotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
              </table>
              <tbody>
                <div className="tableRow"></div>
                <tr>
                  <td width={"45%"}>
                    <Link to="/product/1">
                      <div className="cartPageImageWrapper d-flex align-items-center">
                        <div className="imgWrapper">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                            className="w-100"
                          />
                        </div>
                        <div className="info px-3">
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                          <Rating
                            name="read-only"
                            value={4.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="pl-4">$7.25</td>
                  <td className="pr-5" width={"10%"}>
                    <QuantityManage />
                  </td>
                  <td>$2.51</td>
                  <td className="remove">
                    <RxCross2 />
                  </td>
                </tr>
                <div className="tableRow"></div>
                <tr>
                  <td width={"45%"}>
                    <Link to="/product/1">
                      <div className="cartPageImageWrapper d-flex align-items-center">
                        <div className="imgWrapper">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                            className="w-100"
                          />
                        </div>
                        <div className="info px-3">
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                          <Rating
                            name="read-only"
                            value={4.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="pl-4">$7.25</td>
                  <td className="pr-5" width={"10%"}>
                    <QuantityManage />
                  </td>
                  <td>$2.51</td>
                  <td className="remove">
                    <RxCross2 />
                  </td>
                </tr>
                <div className="tableRow"></div>
                <tr>
                  <td width={"45%"}>
                    <Link to="/product/1">
                      <div className="cartPageImageWrapper d-flex align-items-center">
                        <div className="imgWrapper">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                            className="w-100"
                          />
                        </div>
                        <div className="info px-3">
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                          <Rating
                            name="read-only"
                            value={4.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="pl-4">$7.25</td>
                  <td className="pr-5" width={"10%"}>
                    <QuantityManage />
                  </td>
                  <td>$2.51</td>
                  <td className="remove">
                    <RxCross2 />
                  </td>
                </tr>
                <div className="tableRow"></div>
                <tr>
                  <td width={"45%"}>
                    <Link to="/product/1">
                      <div className="cartPageImageWrapper d-flex align-items-center">
                        <div className="imgWrapper">
                          <img
                            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                            className="w-100"
                          />
                        </div>
                        <div className="info px-3">
                          <h6>Field Roast Chao Cheese Creamy Original</h6>
                          <Rating
                            name="read-only"
                            value={4.5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="pl-4">$7.25</td>
                  <td className="pr-5" width={"10%"}>
                    <QuantityManage />
                  </td>
                  <td>$2.51</td>
                  <td className="remove">
                    <RxCross2 />
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border p-3 cartDetails">
              <h4>CART TOTALS</h4>
              <div className="d-flex align-items-center">
                <span>Subtotal</span>
                <span className="ml-auto text-red font-weight-bold">
                  $12.31
                </span>
              </div>
              <div className="d-flex align-items-center  mt-3">
                <span>Shipping</span>
                <span className="ml-auto font-weight-bold">Free</span>
              </div>
              <div className="d-flex align-items-center mt-3">
                <span>Estimate for</span>
                <span className="ml-auto font-weight-bold">United Kingdom</span>
              </div>
              <div className="d-flex align-items-center mt-3">
                <span>Total</span>
                <span className="ml-auto text-red font-weight-bold">
                  $12.31
                </span>
              </div>
              <br />

              <Button className="btn-blue btn-lg btn-big btn-round">
                <BsCartFill /> &nbsp; Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
