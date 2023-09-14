import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import MenuCard from "./components/MenuCard";
import { useDispatch } from "react-redux";
import { cartData } from "./feature/cart/cartSlice";
import DrawerCart from "./components/DrawerCart";

function App() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(true);

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const data = await axios.get("https://tes-mobile.landa.id/api/menus");
      setMenu(data.data.datas);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    dispatch(cartData(cart));
    // console.log(cart);
  }, [cart]);

  return (
    <div className="container">
      <DrawerCart setOpenCart={setOpenCart} openCart={openCart} />

      <NavigationBar setOpenCart={setOpenCart} openCart={openCart} />
      <MenuCard menu={menu} setCart={setCart} cart={cart} />
      <div></div>
    </div>
  );
}

export default App;
