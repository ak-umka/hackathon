import React, { useState, useEffect } from "react";
import MyRoutes from "./routes";
import { useDispatch } from "react-redux";
import { checkAutoLogin } from "./store/services";
import { Footer, Header } from "./components/Organisms";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    checkAutoLogin(dispatch);
  });
  return (
    <div>
      <Router>
        <Header />
        <MyRoutes />
        <Footer />
      </Router>
    </div>
  );
}
