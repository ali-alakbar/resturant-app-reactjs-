import React from "react";
import PageTitle from "../../helper/PageTitle/PageTitle";
import "./style/style.css";
import CouponBar from "./Box/CouponBar/CouponBar";
import Inputs from "./Box/Inputs and Order/Inputs";
import Order from "./Box/Inputs and Order/Order";
const Checkout = (props) => {

  return (
    <section className="section checkout-section">
      <PageTitle title={"Checkout"} />
      <form className="container coupon-container">
        <CouponBar />
        <div className="billing-container">
          <Inputs />
          <Order cart={props.cart} />
          
        </div>
      </form>
    </section>
  );
};

export default Checkout;
