import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import ProductZoom from "../../Components/ProductZoom/ProductZoom";
import QuantityManage from "../../Components/QuantityManage/QuantityManage";
import { BsCartFill } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import RelatedProducts from "./RelatedProducts/RelatedProducts";

function ProductDetails(props) {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);
  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <React.Fragment>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pl-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 pl-5 pr-5">
              <h2>All Natural Italian style Chicken Meatbells</h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="mr-1">Brand :</span>
                    <span>Welch's</span>
                  </div>
                </li>

                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <span className="cursor ml-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-denger ml-2">$14.00</span>
              </div>
              <span className="badge badge-success">In Stock</span>

              <p className="mt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat enim nulla cumque perferendis sit obcaecati officiis
                odio possimus laboriosam expedita adipisci non nostrum molestias
                dolorem, aliquam eaque. Laborum, officia repellendus.
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 pl-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      400g
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 5 ? "active" : ""}`}
                      onClick={() => isActive(5)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityManage />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <BsCartFill /> &nbsp; Add to Cart
                </Button>
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <IoMdHeart />
                </Button>
                <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                  <MdCompareArrows />
                </Button>
              </div>
            </div>
          </div>

          <br />

          <div className="card mt-5 p-5 detailsPageTabs">
            <div className="customTabs">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 0 && "active"}`}
                    onClick={() => {
                      setActiveTabs(0);
                    }}
                  >
                    Description
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 1 && "active"}`}
                    onClick={() => {
                      setActiveTabs(1);
                    }}
                  >
                    Addtitional info
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    className={`${activeTabs === 2 && "active"}`}
                    onClick={() => {
                      setActiveTabs(2);
                    }}
                  >
                    Rating (3)
                  </Button>
                </li>
              </ul>

              <br />
              {activeTabs === 0 && (
                <div className="tabContent">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus officiis, asperiores reiciendis atque temporibus
                    magni mollitia, sit accusantium et iure quibusdam voluptate
                    fugit aspernatur ratione assumenda iusto voluptatibus
                    nostrum velit modi enim tenetur dicta quaerat amet in. Saepe
                    iure porro impedit esse recusandae placeat quia corrupti?
                    Quisquam earum neque quidem!
                  </p>
                </div>
              )}
              {activeTabs === 1 && (
                <div className="tabContent">
                  <div className="table-responsive">
                    <table className="table table=bordered">
                      <tbody>
                        <tr className="stand-up">
                          <th>Stand Up</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H(front to back wheel)</p>
                          </td>
                        </tr>
                        <tr className="folded-wo-wheels">
                          <th>Folded (wo wheels)</th>
                          <td>
                            <p>35"L x 24"W x 37-45"H</p>
                          </td>
                        </tr>
                        <tr className="door-pass-through">
                          <th>Door Pass Through</th>
                          <td>
                            <p>34</p>
                          </td>
                        </tr>
                        <tr className="frame">
                          <th>Frame</th>
                          <td>
                            <p>Aluminum</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTabs === 2 && (
                <div className="tabContent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer questions & answers</h3>
                      <br />

                      <div className="card p-4 reviewsCard flex-row">
                        <div className="image">
                          <div className="rounded-circle">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                          </div>
                          <span className="text-g d-block text-center font-weight-bold">
                            Ravi Kumar
                          </span>
                        </div>
                        <div className="info pl-5">
                          <div className="d-flex align-items-center w-100">
                            <h5>10/11/24</h5>
                            <div className="ml-auto">
                              <Rating
                                name="half-rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </div>
                          </div>

                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus molestias consequatur beatae
                            exercitationem laudantium, nostrum, dolor nobis
                            quisquam odio, quibusdam fuga obcaecati neque nihil
                            aspernatur amet voluptatem quas fugiat? Provident!
                          </p>

                          <br className="res-hide" />
                          <br className="res-hide" />
                        </div>
                      </div>
                      <form className="reviewForm mt-4">
                        <h4>Add a review</h4>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="write a review"
                            name="review"
                          ></textarea>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="name"
                              name="username"
                            />
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <Rating
                                name="rating"
                                value={4.5}
                                precision={0.5}
                              />
                            </div>
                          </div>
                        </div>

                        <br />

                        <div className="form-group">
                          <Button
                            type="sumbit"
                            className="btn-blue btn-lg btn-big btn-round"
                          >
                            Sumbit Review
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>



          <RelatedProducts title='Related products'/>
          <RelatedProducts title='Recently Viewed Products'/>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ProductDetails;
