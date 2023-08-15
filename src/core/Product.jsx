import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { addItem, updateItem, removeItem } from "./cartHelpers";

import ShowImage from "./ShowImage";
import { read, listRelated } from "./apiCore";
import Card1 from "./Card";
import Menu from "./Menu";
import Copyright from "./Copyright";
import ShowImageProd from "./ShowImageProd";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);
  console.log(product);
  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  const showAddToCartButton = true;
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = (showAddToCartButton) => {
    return (
      showAddToCartButton && (
        <Button
          style={{
            background: "rgb(70 70 228 / 69%)",
            color: "#fff",
            width: "150px",
            padding: "8px",
            fontWeight: "700",
            fontSize: "0.9rem",
          }}
          variant="contained"
          color="white"
          onClick={addToCart}
        >
          Add to Cart
        </Button>
      )
    );
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <>
      <div style={{ padding: 25 }}>
        <Menu />
      </div>
      <div
        style={{
          minHeight: "550px",
          boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.2)",
          marginTop: "2rem",
        }}
        className="container my-2 py-4"
      >
        <div className="row mt-2 mb-5">
          <div
            className="col-12 col-lg-7 mr-5"
            style={{
              marginBottom: "2rem",
            }}
          >
            <div className="h-28 border-t border-gray-300 px-4 py-2 flex justify-between items-center text-base lg:font-medium !important">
              <h4
                style={{
                  // color: "#d01277cf",
                  fontWeight: "900",
                  fontSize: "1.5rem",
                }}
              >
                Product Details
              </h4>
              {product && product.description && (
                // <Card product={product} showViewProductButton={false} />
                <div className="card">
                  <div className="wrapper">
                    <div
                      className="card_img"
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "rgb(169 181 196 / 28%)",
                        height: "400px",
                      }}
                    >
                      {shouldRedirect(redirect)}
                      <ShowImageProd item={product} url="product" />
                    </div>
                  </div>
                  <div
                    style={{ textAlign: "center", gap: "0.5rem" }}
                    className="d-flex justify-content-center my-3"
                  >
                    <button
                      style={{
                        background: "#000",
                        height: "13px",
                        width: "7px",
                        borderRadius: "50%",
                        border: "1px solid green",
                      }}
                    ></button>
                    <button
                      style={{
                        background: "rgb(230 211 211 / 41%)",
                        height: "13px",
                        width: "7px",
                        borderRadius: "50%",
                        border: "1px solid green",
                      }}
                    ></button>
                    <button
                      style={{
                        background: "rgb(230 211 211 / 41%)",
                        height: "13px",
                        width: "7px",
                        borderRadius: "50%",
                        border: "1px solid green",
                      }}
                    ></button>
                  </div>
                  <h1 style={{ fontSize: "1.6rem", color: "green" }}>
                    {product.name} + Lorem we mut
                  </h1>
                  {/* <div style={{ textAlign: "center" }} className="cardInfo "> */}
                  <div className="action">
                    {/* <div className="priceGroup d-flex gap-4"> */}
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        marginRight: "1rem",
                        color: "wine",
                        background: "#91689194",
                        padding: "0.3rem 0.5rem",
                        width: "100px",
                        borderRadius: "5px",
                        margin: "1rem 0",
                      }}
                      className="price newPrice"
                    >
                      Rs {product.price}
                    </p>

                    {showAddToCartBtn(showAddToCartButton)}
                    {/* </div> */}
                  </div>
                  {/* </div> */}
                </div>
              )}
            </div>
          </div>
          {/* <div className="row mt-4"> */}
          <div
            style={{ background: "#989191c2", borderRadius: "5px" }}
            className="col-12 col-md-4  mt-3 p-4"
          >
            <div className="desc">
              <h5
                style={{
                  color: "#d01277cf",
                  fontWeight: "900",
                  fontSize: "1.5rem",
                }}
              >
                Description :
              </h5>
              <hr
                style={{
                  background: "#fff",
                }}
              />
              <p
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                accusamus vel nobis neque, exercitationem omnis ipsa totam
                eveniet ex voluptas voluptatibus nesciunt quis, eos autem
                aliquam perspiciatis iste aliquid quam?
              </p>
            </div>
            <h5
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "1.1rem",
              }}
            >
              Product Specification
            </h5>
            <ul className="prod-specification">
              <li
                style={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Full Sleeve
              </li>
              <li
                style={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Check Design
              </li>
              <li
                style={{
                  color: "#ffffff",
                  fontWeight: "400",
                  fontSize: "1.1rem",
                }}
              >
                Button Down Coton
              </li>
            </ul>
            <div>
              <h5
                style={{
                  color: "#000000",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                }}
              >
                Fabric :{" "}
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "normal",
                    color: "#ffffff",
                  }}
                >
                  65% Linen 35% Cotton
                </span>{" "}
              </h5>
            </div>
            <h5
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "1.1rem",
              }}
            >
              Fit :{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "normal",
                  color: "#ffffff",
                }}
              >
                Slim Fit
              </span>{" "}
            </h5>
            <h5
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "1.1rem",
              }}
            >
              Model :{" "}
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "normal",
                  color: "#ffffff",
                }}
              >
                Height 6 feet
              </span>{" "}
            </h5>
          </div>
        </div>
      </div>

      <Copyright />
    </>
  );
};

export default Product;
