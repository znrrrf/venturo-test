import React, { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { cartData } from "../feature/cart/cartSlice";

function MenuCard(props) {
  console.log(props);

  const addToCart = (data) => {
    const result = props.cart.find((el) => {
      return el.nama === data.nama;
    });

    if (!result) {
      props.setCart((prev) => {
        return [...prev, data];
      });
    }
  };

  return (
    <div className="menu-con">
      {props.menu?.map((el, index) => {
        return (
          <div key={index} className="menu">
            <div className="menu-cover">
              <img className="menu-img" src={el.gambar} />
            </div>
            <div className="menu-info">
              <div className="menu-title">{el.nama}</div>
              <div className="menu-price">
                <span>Rp.</span>
                {el.harga}
              </div>
            </div>

            <div>
              <button onClick={() => addToCart(el)} className="btn-add-cart">
                <p className="text-add-cart">
                  <BiPlus /> Tambahkan ke
                </p>
                <p className="text-add-cart">keranjang</p>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuCard;
