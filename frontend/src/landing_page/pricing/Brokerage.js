import React from "react";

function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "15px" }}
            className="text-muted p-4"
          >
            <li>
              Helps calculate the total cost of a trade including brokerage and
              all charges.
            </li>
            <li>
              Shows brokerage fees (either percentage-based or flat per order).
            </li>
            <li>
              Includes government & exchange charges like STT, GST, stamp duty,
              SEBI fees.
            </li>
            <li>
              Works for multiple segments such as intraday, delivery, F&O,
              commodities, and currency.
            </li>
            <li>Gives the net profit or loss after deducting all expenses.</li>
            <li>
              Provides quick, accurate, and transparent cost estimation before
              placing trades.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
