import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cart.css";
import { AiFillWindows } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import axios from "axios";
import useRazorpay from "react-razorpay";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, getCartData, removeCart } from '../../redux/Cart/action';

export const GameCart = () => {

  const data = useSelector((state) => state.Cart);
  console.log(data);

  const Razorpay = useRazorpay();
  const dispatchcart = useDispatch()
  const navigate = useNavigate();
  const [game, setGame] = useState([]);
  const [orderId, setOrderId] = useState("");
  var currentUser = JSON.parse(localStorage.getItem("userData"));
  var final = [] || JSON.parse(localStorage.getItem("finalprice"));

  useEffect(() => {

    getData();

  },[]);

  const getData = () => {
    axios
      .get(`https://quiet-fortress-03621.herokuapp.com/cart/${currentUser._id}`)
      .then((res) => {
        console.log("hello", res.data);
        setGame([...res.data]);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://quiet-fortress-03621.herokuapp.com/cart/${id}`)
      .then((res) => {
        console.log("hey", res.data);
        getData();
      });
  };
  var sum = 0;
  var discount = 0;
  game.forEach((e) => {
    sum += +e.game_id.price;
  });
  game.forEach((e) => {
    discount += +e.game_id.price * (+e.game_id.discount / 100);
  });

  var totalPrice = Math.floor((sum - discount) * 100);
  // RAZORPAY

  const handlePayEvent = (id)=>{
    navigate(`/Payment`)
  }

  return (
    <div className="rcartcontainer">
      <div>
        <p className="rmyCart">My Cart</p>
        <div id="rcart" className="rgame-cart">
          <div id="rgamesList">
            {game.map((ele) => {
              return (
                <div>
                  <div className="rtobuygames">
                    <img
                      className="rbuygameimage"
                      src={ele.game_id.image}
                    ></img>
                    <div className="rdetaildiv">
                      <span className="rdetailflex">
                        <p className="rbasegame">BASE GAME</p>
                        <div className="rpricedetail">
                          <p className="rblueDiscount">
                            -{ele.game_id.discount}%
                          </p>
                          <p className="rgap rlineprice">
                            ???{ele.game_id.price}
                          </p>
                          <p className="rgap ractualporice">
                            ???
                            {`${Math.floor(
                              ele.game_id.price -
                                ele.game_id.price * (ele.game_id.discount / 100)
                            )}`}
                          </p>
                        </div>
                      </span>
                      <span className="rdetail2flex">
                        <p className="rtitle">{ele.game_id.title}</p>
                        <p className="rsale">Sale Ends 4/7/2022 at 8:30pm</p>
                      </span>
                      <span className="rdetail3flex">
                        <div className="rpricedetail2">
                          <AiFillWindows className="rwindowLogo" />
                          <span className="rspanwish">
                            <RiAddCircleLine className="rgap23 rgraddcircle" />
                            <p className="rgap2 rwishlist">Wishlist</p>
                            <p
                              className="rremove"
                              onClick={() => {
                                handleDelete(ele._id);
                              }}
                            >
                              Remove
                            </p>
                          </span>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="rgamesPrice">
            <p className="rGamesandSummary">Games and App Summary</p>
            <br />
            <span className="rshowPrice">
              <p>Price</p>
              <p>???{Math.floor(sum)}</p>
            </span>
            <span className="rshowPrice">
              <p>Sale Discount</p>
              <p>-???{Math.floor(discount)}</p>
            </span>
            <span className="rshowPrice">
              <p>Taxes</p>
              <p>NA</p>
            </span>
            <div className="rline"></div>
            <span className="rshowPrice">
              <p>Subtotal</p>
              <p>???{Math.floor(sum - discount)}</p>
            </span>
            <button
              className="rcheckoutButton"
              onClick={()=>handlePayEvent()}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
