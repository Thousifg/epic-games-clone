import React, { Component } from "react";
import { render } from "react-dom";
import { Routes, Route } from "react-router";
// import { GameCart } from "../Components/Cart/cart";
import { Footer } from "../Components/Footer/Footer";
import { Login } from "../Components/Login/Login";
import { Signup } from "../Components/Signup/Signup";
import { LoginOptions } from "../Components/LoginOptions/LoginOptions";
import { SignupOptions } from "../Components/SignupOptions/SignupOptions";
import { IndividualGame } from "../Components/IndividualGame/IndividualGame";
import { Navbar } from "../Components/Navbar/Navbar";
import { GamesPage } from "../Components/Games/GamesPage";
import { HomepageU } from "../Components/Homepage/Homepage_U";
import { BreadCrum } from "../Components/Homepage/breadcrum";
// import { Provider } from "react-redux";
// import { store } from "../Components/Redux/store";
export const AllRoutes = () => {
  return (
    <>
      <Navbar />

      <BreadCrum />
      <Routes>
        <Route exect path="/" element={<HomepageU />} />
        {/* <Route exact path="/cart" element={<GameCart />} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupoptions" element={<SignupOptions />} />
        <Route exact path="/individualgame/:id" element={<IndividualGame />} />
        <Route exact path="/loginoptions" element={<LoginOptions />} />
        <Route exact path="/products" element={<GamesPage />} />
        <Route exact path="apple-cupcake-41384.herokuapp.com/auth/google" />
      </Routes>
      <Footer />
    </>
  );
};
