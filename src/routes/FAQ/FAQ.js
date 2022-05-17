import "./style/style.css";
import PageTitle from "../../helper/PageTitle/PageTitle";
import React, {  } from "react";
import Box from './Box/Box'

const FAQ = () => {
  return (
    <section className="section faq-section">
      <PageTitle title={"FAQ"} />
      <div className="container">
        <Box
          question={"How does this work?"}
          hiddenContent={`Simply put, we deliver your favourite menu from fast-food restaurant of
        choice. Our platform enables you to enter your postcode and select a
        nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for
        delivery. Within each of these restaurants you will find their menus
        which you can add to basket, choose your payment method (PayPal or
        Credit / Debit Card) and submit. There you go, your order is sent to the
        selected restaurant or the nearby delivery driver where applicable.`}
        />
        <Box
          question={"How do I take away my order?"}
          hiddenContent={`Simply put, we deliver your favourite menu from fast-food restaurant of
        choice. Our platform enables you to enter your postcode and select a
        nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for
        delivery. Within each of these restaurants you will find their menus
        which you can add to basket, choose your payment method (PayPal or
        Credit / Debit Card) and submit. There you go, your order is sent to the
        selected restaurant or the nearby delivery driver where applicable.`}
        />
        <Box
          question={"How does this work?"}
          hiddenContent={`Simply put, we deliver your favourite menu from fast-food restaurant of
        choice. Our platform enables you to enter your postcode and select a
        nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for
        delivery. Within each of these restaurants you will find their menus
        which you can add to basket, choose your payment method (PayPal or
        Credit / Debit Card) and submit. There you go, your order is sent to the
        selected restaurant or the nearby delivery driver where applicable.`}
        />
        <Box
          question={"Can I order from different location?"}
          hiddenContent={`Simply put, we deliver your favourite menu from fast-food restaurant of
        choice. Our platform enables you to enter your postcode and select a
        nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for
        delivery. Within each of these restaurants you will find their menus
        which you can add to basket, choose your payment method (PayPal or
        Credit / Debit Card) and submit. There you go, your order is sent to the
        selected restaurant or the nearby delivery driver where applicable.`}
        />
        <Box
          question={"Are your menu prices the same as those at the resturant?"}
          hiddenContent={`Simply put, we deliver your favourite menu from fast-food restaurant of
        choice. Our platform enables you to enter your postcode and select a
        nearby restaurant of choice e.g McDonalds, KFC, …Wagamama e.t.c for
        delivery. Within each of these restaurants you will find their menus
        which you can add to basket, choose your payment method (PayPal or
        Credit / Debit Card) and submit. There you go, your order is sent to the
        selected restaurant or the nearby delivery driver where applicable.`}
        />
      </div>
    </section>
  );
};

export default FAQ;
