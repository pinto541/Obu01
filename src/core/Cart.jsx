// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Layout from "./Layout";
// import { getCart } from "./cartHelpers";
// import Card1 from "./Card1";
// // import { getProducts } from "../core/apiCore";
// import ShowImageProd from "./ShowImageProd";
// import Checkout from "./Checkout";
// import Menu from "./Menu";
// import Copyright from "./Copyright";
// import { getProducts } from "./apiCore";
// import { Button } from "@material-ui/core";

// import "./Cart.css";
// const Cart = () => {
//   const [items, setItems] = useState([]);
//   const [run, setRun] = useState(false);

//   // useEffect(() => {
//   //   setItems(getCart());
//   // }, [run]);

//   // remove this once you get the cart items
//   const [productsBySell, setProductsBySell] = useState([]);
//   const [productsByArrival, setProductsByArrival] = useState([]);
//   const [error, setError] = useState([]);
//   const loadProductsByArrival = () => {
//     getProducts("createdAt").then((data) => {
//       if (data?.error) {
//         setError(data?.error);
//       } else {
//         setProductsByArrival(data);
//       }
//     });
//   };
//   useEffect(() => {
//     loadProductsByArrival();
//   }, []);
//   // remove this once you get the cart items Ends here

//   const showItems = (items) => {
//     return (
//       <>
//         <Menu />
//         <div>
//           <h2>Your cart has {`${items.length}`} items</h2>
//           <hr />
//           {items.map((product, i) => (
//             <Card1
//               key={i}
//               product={product}
//               showViewButton={false}
//               showRemoveProductButton={false}
//               setRun={setRun}
//               run={run}
//             />
//           ))}
//           {/* Here you add your cart */}
//         </div>
//       </>
//     );
//   };

//   const noItemsMessage = () => (
//     <h2>
//       Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
//     </h2>
//   );

//   console.log(productsByArrival);
//   return (
//     <>
//       <div style={{ padding: 25 }}>
//         <Menu />
//       </div>
//       <div
//         className="container my-4 pt-2"
//         style={{
//           minHeight: "520px",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <div className="row">
//           <div className="col-12 col-md-10">
//             <div className="d-flex justify-content-between align-items-center">
//               <h2>Your cart</h2>
//               <h5 style={{ cursor: "pointer" }}>❌</h5>
//             </div>
//             <hr />
//             {/* {items.length > 0 ? showItems(items) : noItemsMessage()} */}
//             <div className="row p-1">
//               {productsByArrival?.slice(0, 2)?.map((product, i) => (
//                 <div
//                   key={i}
//                   className="col-12 col-md-7 my-2 clor p-1"
//                   style={{ margin: "0 auto" }}
//                 >
//                   <div className="card">
//                     <div className="wrapper d-flex">
//                       <div
//                         className="card_img"
//                         style={{
//                           borderRadius: "5px",
//                           backgroundColor: "rgb(169 181 196 / 28%)",
//                           height: "240px",
//                           width: "200px",
//                           marginRight: "1rem",
//                         }}
//                       >
//                         <ShowImageProd item={product} url="product" />
//                       </div>
//                       <div
//                         className="cart-one"
//                         style={{
//                           display: "flex",
//                           flexDirection: "column",
//                           // justifyContent: "space-around",
//                           gap: "1rem",
//                         }}
//                       >
//                         <h5 className="mt-3 cart-h5">Frio Maroon Line Shirt</h5>
//                         <h6>
//                           Color:{" "}
//                           <span
//                             style={{
//                               fontSize: "13px",
//                               fontWeight: 400,
//                               marginLeft: "0.4rem",
//                             }}
//                           >
//                             Maroon
//                           </span>{" "}
//                         </h6>
//                         <h6>
//                           Size:{" "}
//                           <span
//                             style={{
//                               fontSize: "13px",
//                               fontWeight: 400,
//                               marginLeft: "0.4rem",
//                             }}
//                           >
//                             XXl
//                           </span>{" "}
//                         </h6>
//                         <div className="d-flex justify-content-between align-items-center cart-incr">
//                           <div
//                             style={{
//                               border: "1px solid #e3e3e3",
//                               fontSize: "18px",
//                               padding: "0px",
//                               fontWeight: "bolder",
//                             }}
//                           >
//                             <Button> &ndash;</Button>
//                             <span>1</span>
//                             <Button>+</Button>
//                           </div>
//                           <div
//                             className="cart-pricing"
//                             style={{ marginLeft: "6rem" }}
//                           >
//                             <h6>Rs. 1,33</h6>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="col-12 col-md-10">
//             {/* <h2 className="mb-4">Your cart summary</h2> */}
//             <hr />
//             <div
//               className="col-12 col-md-7 my-2 px-3"
//               style={{ margin: "0 auto" }}
//             >
//               <div className="d-flex justify-content-between">
//                 <h5>Subtotal :</h5>
//                 <span>Rs. 33.4</span>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <h5>Total :</h5>
//                 <span>Rs. 33.4</span>
//               </div>
//             </div>
//             <div
//               className="col-12 col-md-7 my-2 px-3"
//               style={{ margin: "0 auto" }}
//             >
//               <div className="">
//                 <h6 className="my-4">
//                   Shipping, Taxes, and discount codes calculated at Checkout.
//                 </h6>
//               </div>
//               <div
//                 className="d-flex justify-content-between bg-dark pt-3 pb-0 px-3 align-items-center "
//                 style={{ color: "#fff", cursor: "pointer" }}
//               >
//                 <div>
//                   <h5>Proceed To Checkout</h5>
//                   <p>Save Rs 100 on Prepaid Orders</p>
//                 </div>
//                 <div>&#8658;</div>
//               </div>
//             </div>
//             {/* <Checkout products={items} setRun={setRun} run={run} /> */}
//           </div>
//         </div>
//       </div>
//       <Copyright />
//     </>
//   );
// };

// export default Cart;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card1 from "./Card1";
import Checkout from "./Checkout";
import Menu from "./Menu";
import { getProducts } from "../core/apiCore";
import ShowImageProd from "./ShowImageProd";
import { Button } from "@material-ui/core";
import Copyright from "./Copyright";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([]);
  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data?.error) {
        setError(data?.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };
  useEffect(() => {
    loadProductsByArrival();
  }, []);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = () => {
    return (
      <>
        <div style={{ padding: 25 }}>
          <Menu />
        </div>
        <div
          className="container my-4 pt-2"
          style={{
            minHeight: "520px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="row">
            <div className="col-12 col-md-10">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Your cart</h2>
                <h5 style={{ cursor: "pointer" }}>❌</h5>
              </div>
              <hr />
              {/* {items.length > 0 ? showItems(items) : noItemsMessage()} */}
              <div className="row p-1">
                {productsByArrival?.slice(0, 2)?.map((product, i) => (
                  <div
                    key={i}
                    className="col-12 col-md-7 my-2 clor p-1"
                    style={{ margin: "0 auto" }}
                  >
                    <div className="card">
                      <div className="wrapper d-flex">
                        <div
                          className="card_img"
                          style={{
                            borderRadius: "5px",
                            backgroundColor: "rgb(169 181 196 / 28%)",
                            height: "240px",
                            width: "200px",
                            marginRight: "1rem",
                          }}
                        >
                          <ShowImageProd item={product} url="product" />
                        </div>
                        <div
                          className="cart-one"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // justifyContent: "space-around",
                            gap: "1rem",
                          }}
                        >
                          <h5 className="mt-3 cart-h5">{product.name}</h5>
                          <h6>
                            Color:{" "}
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: 400,
                                marginLeft: "0.4rem",
                              }}
                            >
                              Maroon
                            </span>{" "}
                          </h6>
                          <h6>
                            Size:{" "}
                            <span
                              style={{
                                fontSize: "13px",
                                fontWeight: 400,
                                marginLeft: "0.4rem",
                              }}
                            >
                              XXl
                            </span>{" "}
                          </h6>
                          <div className="d-flex justify-content-between align-items-center cart-incr">
                            <div
                              style={{
                                border: "1px solid #e3e3e3",
                                fontSize: "18px",
                                padding: "0px",
                                fontWeight: "bolder",
                              }}
                            >
                              <Button> &ndash;</Button>
                              <span>1</span>
                              <Button>+</Button>
                            </div>
                            <div
                              className="cart-pricing"
                              style={{ marginLeft: "6rem" }}
                            >
                              <h6>Rs.{product.price}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <>
      <div style={{ padding: 25 }}>
        <Menu />
      </div>
      <div className="row">
        <div className="col-md-4">
          {items.length > 0 ? showItems() : noItemsMessage()}
        </div>
        {/* <div className='col-md-4'>
          <h2 className='mb-4'>Your cart summary</h2>
          <hr />
          <Checkout products={items} setRun={setRun} run={run} />
        </div> */}
      </div>
      <div className="col-12 col-md-10">
        {/* <h2 className="mb-4">Your cart summary</h2> */}
        <hr />
        <div className="col-12 col-md-7 my-2 px-3" style={{ margin: "0 auto" }}>
          <div className="d-flex justify-content-between">
            <h5>Subtotal :</h5>
            <span>Rs. 33.4</span>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Total :</h5>
            <span>Rs. 33.4</span>
          </div>
        </div>
        <div className="col-12 col-md-7 my-2 px-3" style={{ margin: "0 auto" }}>
          <div className="">
            <h6 className="my-4">
              Shipping, Taxes, and discount codes calculated at Checkout.
            </h6>
          </div>
          <div
            className="d-flex justify-content-between bg-dark pt-3 pb-0 px-3 align-items-center "
            style={{ color: "#fff", cursor: "pointer" }}
          >
            <div>
              <h5>Proceed To Checkout</h5>
              <p>Save Rs 100 on Prepaid Orders</p>
            </div>
            <div>&#8658;</div>
          </div>
        </div>
        {/* <Checkout products={items} setRun={setRun} run={run} /> */}
      </div>

      <Copyright />
    </>
  );
};

export default Cart;
