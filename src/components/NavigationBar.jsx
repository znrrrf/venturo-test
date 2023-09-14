import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function NavigationBar(props) {
  const { value } = useSelector((state) => state.cartSlice);
  console.log(value);
  const toggleCart = () => {
    props.setOpenCart((prev) => !prev);
  };

  useEffect(() => {
    console.log(props.cartOpen);
  }, [props.cartOpen]);

  return (
    <div className="navigation-bar">
      <div>
        <h3>Main Curse</h3>
      </div>
      <div className="btn-cart" onClick={() => toggleCart()}>
        {value.length > 0 ? (
          <div className="cart-count">{value.length}</div>
        ) : null}

        <div>Keranjang</div>
      </div>
    </div>
  );
}

export default NavigationBar;
