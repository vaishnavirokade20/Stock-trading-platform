import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4
            className="mt-5"
            style={{
              color: "#424242",
              fontWeight: "400",
            }}
          >
            Nithin Kamath
          </h4>
          <h6
            style={{
              color: "#666",
              fontSize: "0.9rem",
              lineHeight: "2.9rem",
            }}
          >
            Founder, CEO
          </h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p style={{ fontSize: "1.1rem" }}>
            {"Connect on "}
            <a
              href=""
              style={{ textDecoration: "none", fontWeight: "500" }}
              className="link "
            >
              Homepage
            </a>
            {" / "}
            <a
              href=""
              style={{
                textDecoration: "none",
                fontWeight: "500",
              }}
              className="link"
            >
              TradingQnA
            </a>
            {" / "}
            <a
              href=""
              style={{ textDecoration: "none", fontWeight: "500" }}
              className="link "
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
