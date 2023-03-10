import React, { useState, useEffect } from "react";
import Router from "./router";
import logo from "./assets/images/auth/barbecue 1.png";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <div
        className="d-flex"
        style={{
          backgroundColor: "#efc81a",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img src={logo} alt="Logo" width="100px" height="100px" />
      </div>
    );
  }
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
