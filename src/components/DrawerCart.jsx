import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function DrawerCart(props) {
  const toggleCart = () => {
    props.setOpenCart((prev) => !prev);
  };

  const { value } = useSelector((state) => state.cartSlice);

  return (
    <>
      {props.openCart ? (
        <div className="cart-con">
          <div className="header-cart">
            <div>Main Course</div>
            <div className="close-btn" onClick={() => toggleCart()}>
              x
            </div>
          </div>

          {value?.map((el, index) => {
            return (
              <div key={index} className="cart-menu-con">
                <div className="data-cart">
                  <div className="cart-img-con">
                    <img className="cart-img" src={el.gambar} />
                  </div>
                  <div className="cart-menu-info">
                    <div className="menu-title">{el.nama}</div>
                    <div className="menu-price">
                      <span>Rp.</span>
                      {el.harga}
                    </div>
                    <div className="count-menu">
                      <div>mantap</div>
                      <div className="cart-btn-count">
                        <div className="conting-menu">-</div>
                        <div>1</div>
                        <div className="conting-menu">+</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <input
                    placeholder="masukan catatan disini ..."
                    className="note-cart"
                    type="text"
                  />
                </div>
              </div>
            );
          })}

          <div className="cart-menu-con">
            <hi>Tambahkan Voucer</hi>
            <input
              className="note-cart"
              placeholder="Masukan Voucer Disini ..."
              type="text"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DrawerCart;
