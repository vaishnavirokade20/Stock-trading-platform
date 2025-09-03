import React from "react";

function Signup() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Open a free demat and trading account online</h1>
        <h3 className="text-muted fs-5 mt-3 mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders{" "}
        </h3>
        <div className="col-6 p-4 mt-5">
          <img src="media\images\signup.png"></img>
        </div>
        <div className="col-2"></div>
        <div className="col-4 p-4 mt-5">
          <h1 className="" style={{ textAlign: "left" }}>
            Signup now
          </h1>
          <p className="text-muted fs-4" style={{ textAlign: "left" }}>
            Or track your existing application
          </p>
        </div>
      </div>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
