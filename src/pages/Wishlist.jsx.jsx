import React from 'react'
import '../assets/css/ionicons.min.css';
import '../assets/css/simple-line-icons.css';
import '../assets/css/plugins/jquery-ui.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/plugins/plugins.css';
import '../assets/css/style.min.css';
function Wishlist() {
  return (
    <div>
    
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <meta name="description" content="" />
  <title>Gulabi decor</title>
  {/* Favicon */}
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
  {/*********************************** 
  all css files 
    **************************************/}
  {/**************************************************** 
 fontawesome,bootstrap,plugins and main style css
     ****************************************************/}
  {/* cdn links */}
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  <link rel="stylesheet" href="assets/css/ionicons.min.css" />
  <link rel="stylesheet" href="assets/css/simple-line-icons.css" />
  <link rel="stylesheet" href="assets/css/plugins/jquery-ui.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/plugins.css" />
  <link rel="stylesheet" href="assets/css/style.min.css" />
  {/* Use the minified version files listed below for better performance and remove the files listed above */}
  {/***************************** 
   Minified  css 
    *****************************/}
  {/************************************************ 
 vendor min css,plugins min css,style min css
     ************************************************/}
  {/* <link rel="stylesheet" href="assets/css/vendor/vendor.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/plugins.min.css" />
    <link rel="stylesheet" href="assets/css/style.min.css" /> */}
  {/* OffCanvas Cart Start */}
  <div id="offcanvas-cart" className="offcanvas offcanvas-cart theme1">
    <div className="inner">
      <div className="head d-flex flex-wrap justify-content-between">
        <span className="title">Cart</span>
        <button className="offcanvas-close">×</button>
      </div>
      <ul className="minicart-product-list">
        <li>
          <a href="single-product.html" className="image">
            <img src="assets/img/mini-cart/1.png" alt="Cart product Image" />
          </a>
          <div className="content">
            <a href="single-product.html" className="title">
              orginal Age Defying Cosmetics Makeup
            </a>
            <span className="quantity-price">
              1 x <span className="amount">₹100.00</span>
            </span>
            <a href="#" className="remove">
              ×
            </a>
          </div>
        </li>
        <li>
          <a href="single-product.html" className="image">
            <img src="assets/img/mini-cart/2.png" alt="Cart product Image" />
          </a>
          <div className="content">
            <a href="single-product.html" className="title">
              On Trend Makeup and Beauty Cosmetics
            </a>
            <span className="quantity-price">
              1 x <span className="amount">₹35.00</span>
            </span>
            <a href="#" className="remove">
              ×
            </a>
          </div>
        </li>
        <li>
          <a href="single-product.html" className="image">
            <img src="assets/img/mini-cart/3.png" alt="Cart product Image" />
          </a>
          <div className="content">
            <a href="single-product.html" className="title">
              orginal Age Defying Cosmetics Makeup
            </a>
            <span className="quantity-price">
              1 x <span className="amount">₹9.00</span>
            </span>
            <a href="#" className="remove">
              ×
            </a>
          </div>
        </li>
      </ul>
      <div className="sub-total d-flex flex-wrap justify-content-between">
        <strong>Subtotal :</strong>
        <span className="amount">₹144.00</span>
      </div>
      <a
        href="cart.html"
        className="btn btn-secondary btn--lg d-block d-sm-inline-block me-sm-2"
      >
        view cart
      </a>
      <a
        href="checkout.html"
        className="btn btn-dark btn--lg d-block d-sm-inline-block mt-4 mt-sm-0"
      >
        checkout
      </a>
      <p className="minicart-message">Free Shipping on All Orders Over ₹100!</p>
    </div>
  </div>
  {/* OffCanvas Cart End */}
  {/* header start */}
   
  {/* header end */}
  {/* breadcrumb-section start */}
  <nav className="breadcrumb-section theme1 bg-lighten2 pt-110 pb-110">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title text-center">
            <h2 className="title pb-4 text-dark text-capitalize">cart</h2>
          </div>
        </div>
        <div className="col-12">
          <ol className="breadcrumb bg-transparent m-0 p-0 align-items-center justify-content-center">
            <li className="breadcrumb-item">
              <a href="index-2.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              cart
            </li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
  {/* breadcrumb-section end */}
  {/* product tab start */}
  <section className="whish-list-section theme1 pt-80 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="title mb-30 pb-25 text-capitalize">Your cart items</h3>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th className="text-center" scope="col">
                    Product Image
                  </th>
                  <th className="text-center" scope="col">
                    Product Name
                  </th>
                  <th className="text-center" scope="col">
                    Stock Status
                  </th>
                  <th className="text-center" scope="col">
                    Qty
                  </th>
                  <th className="text-center" scope="col">
                    Price
                  </th>
                  <th className="text-center" scope="col">
                    action
                  </th>
                  <th className="text-center" scope="col">
                    Checkout
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-center" scope="row">
                    <img src="assets/img/product/2.png" alt="img" />
                  </th>
                  <td className="text-center">
                    <span className="whish-title">
                      Water and Wind Resistant cream
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-danger position-static">
                      In Stock
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="product-count style">
                      <div className="count d-flex justify-content-center">
                        <input
                          type="number"
                          min={1}
                          max={10}
                          step={1}
                          defaultValue={1}
                        />
                        <div className="button-group">
                          <button className="count-btn increment">
                            <i className="fas fa-chevron-up" />
                          </button>
                          <button className="count-btn decrement">
                            <i className="fas fa-chevron-down" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="whish-list-price"> ₹38.24 </span>
                  </td>
                  <td className="text-center">
                    <a href="#">
                      <span className="trash">
                        <i className="fas fa-trash-alt" />{" "}
                      </span>
                    </a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-dark btn--lg">
                      add to cart
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-center" scope="row">
                    <img src="assets/img/product/4.png" alt="img" />
                  </th>
                  <td className="text-center">
                    <span className="whish-title">
                      Originals Kaval nail polish
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-danger position-static">
                      In Stock
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="product-count style">
                      <div className="count d-flex justify-content-center">
                        <input
                          type="number"
                          min={1}
                          max={10}
                          step={1}
                          defaultValue={1}
                        />
                        <div className="button-group">
                          <button className="count-btn increment">
                            <i className="fas fa-chevron-up" />
                          </button>
                          <button className="count-btn decrement">
                            <i className="fas fa-chevron-down" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="whish-list-price"> ₹38.24 </span>
                  </td>
                  <td className="text-center">
                    <a href="#">
                      <span className="trash">
                        <i className="fas fa-trash-alt" />{" "}
                      </span>
                    </a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-dark btn--lg">
                      add to cart
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className="text-center" scope="row">
                    <img src="assets/img/product/6.png" alt="img" />
                  </th>
                  <td className="text-center">
                    <span className="whish-title">
                      New Balance Arish makeup box
                    </span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-danger position-static">
                      In Stock
                    </span>
                  </td>
                  <td className="text-center">
                    <div className="product-count style">
                      <div className="count d-flex justify-content-center">
                        <input
                          type="number"
                          min={1}
                          max={10}
                          step={1}
                          defaultValue={1}
                        />
                        <div className="button-group">
                          <button className="count-btn increment">
                            <i className="fas fa-chevron-up" />
                          </button>
                          <button className="count-btn decrement">
                            <i className="fas fa-chevron-down" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="whish-list-price"> ₹38.24 </span>
                  </td>
                  <td className="text-center">
                    <a href="#">
                      <span className="trash">
                        <i className="fas fa-trash-alt" />{" "}
                      </span>
                    </a>
                  </td>
                  <td className="text-center">
                    <a href="#" className="btn btn-dark btn--lg">
                      add to cart
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* product tab end */}
  <div className="check-out-section pb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="billing-info-wrap">
            <h3 className="title">calculate shipping</h3>
            <form
              className="personal-information"
              action="assets/php/contact.php"
            >
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="billing-select mb-20px">
                    <select id="inputState" className="form-select mb-3">
                      <option>Select country</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-select mb-20px">
                    <select id="inputState2" className="form-select mb-3">
                      <option>Select State</option>
                      <option>Azerbaijan</option>
                      <option>Bahamas</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="billing-info mb-20px">
                    <input placeholder="Postcode / ZIP" type="text" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="billing-select mb-20px">
                    <a href="#" className="btn btn-primary check-out-btn">
                      estimate
                    </a>
                  </div>
                </div>
                <div className="col-12">
                  <h3 className="coupon-title">Discount coupon Code</h3>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="billing-info mb-20px">
                    <input placeholder="coupon Code" type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <a href="#" className="btn btn-primary check-out-btn">
                    apply code
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-5 mt-4 mt-lg-0">
          <div className="your-order-area">
            <div className="your-order-wrap gray-bg-4">
              <div className="your-order-product-info">
                <div className="your-order-top">
                  <ul>
                    <li>Product</li>
                    <li>Total</li>
                  </ul>
                </div>
                <div className="your-order-bottom">
                  <ul>
                    <li className="your-order-shipping">Shipping</li>
                    <li>Free shipping</li>
                  </ul>
                </div>
                <div className="your-order-total mb-0">
                  <ul>
                    <li className="order-total">Total</li>
                    <li>₹329</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Place-order mt-25">
              <a className="btn btn--lg btn-primary me-3" href="#">
                update cart
              </a>
              <a className="btn btn--lg btn-primary my-2 my-sm-0" href="#">
                checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/************************ 
  all js files
     ************************/}
  {/******************************************************* 
  jquery,modernizr ,poppe,bootstrap,plugins and main js
     *******************************************************/}
  {/* Use the minified version files listed below for better performance and remove the files listed above */}
  {/**************************** 
    Minified  js 
     ****************************/}
  {/************************************ 
   vendor,plugins and main js
************************************/}
  {/* 
    
     */}
</>
</div>
  )
}

export default Wishlist