import React from "react";

import { NavLink } from "react-router-dom";

class Faqs extends React.Component {
  render() {
    return (
      <div className="faqs">
        <h2> FAQs </h2>
        <h4> Can I customize my Rare Charcuterie board?</h4>
        <p>
          Yes, you can! But please note all requests are subject to
          availability. During the check-out process, you can indicate any
          Special Requests you have... for example: if you want a specific type
          of cheese included, no meat, nut-free, gluten-free, keto, etc. We will
          do our best to customize your box to your specific preferences!{" "}
        </p>
        <h4>Can I order a board if I live outside DMV area?</h4>
        <p>
          You can absolutely still order one of our Rare Charcuterie boards!
          Pickup is available - and will be arranged once your order is placed.
        </p>
        <h4>Am I able to rush order a board?</h4>
        <p>
          Yes, you are! A rush fee of $15-$25 will be applied depending on size
          of board. Please contact us if this is the case!
        </p>
        <h4>What different sizes do the boards come in?</h4>
        <p>
          Our boards come in 6 different sizes: 6"x 6", 8"x 8", 10"x 10" Square,
          12" x 12" Round, 16" x 12" Rectangle, 18" x 18" Round.{""}
        </p>
        <h4>What does the charcuterie come on?</h4>
        <p>
          We use disposable palm leaf trays + cardboard delivery boxes to offer
          you different sizing options. You have the option to upgrade all
          boards (except the 18" round) to a bamboo cutting board.{""}
        </p>
        <h4>Do you make boards for vegetarians?</h4>
        <p>
          Yes! As stated above, meat is optional on all of our boards. We will
          replace it with extra cheese and accoutrements. Please indicate this
          on the "Special Requests" section during check out.
        </p>
        <h4>Do you make boards for vegans?</h4>
        <p>
          Yes, we can make a vegan board for you. Contact us to discuss
          specifications and special pricing.
        </p>
        <h4>What are you doing to maintain safety during Covid19?</h4>
        <div>
          <p>
            We are doing our best to keep up with daily updated CDC guidelines +
            recommended safety measures. It's important that we note that our
            kitchen space is held to the highest health standards and we have
            the following procedures in place:
            <br></br>
            <li>
              Multiple sanitized Work stations are set up , with different sets
              of gloves and masks to prevent and eliminate cross contamination.
            </li>
            <li>
              We use disposable boxes to offer you different sizing options and
              to minimize equipment use.
            </li>
            <li>
              All produce is rinsed, and all items are wiped down before use.
            </li>
            <li>
              We offer contact-less pick up and delivery to avoid your box
              coming into contact with multiple environments and/or people.
            </li>
            <br></br>
          </p>
        </div>

        {/* <button id="sort-dresses">Sort Dresses </button> */}
      </div>
    );
  }
}

export default Faqs;
