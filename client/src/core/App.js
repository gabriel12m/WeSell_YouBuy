import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Categories from "../pages/categories/Categories";
import About from "../pages/about/About";
import MyProfile from "../pages/profile/my_profile/MyProfile";
import EditProfile from "../pages/profile/edit_profile/EditProfile";
import ShopHistory from "../pages/profile/shop_history/ShopHistory";
import ShoppingCart from "../pages/shopping_cart/ShoppingCart";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/about" exact component={About} />
        <Route path="/profile" exact component={MyProfile} />
        <Route path="/edit_profile" exact component={EditProfile} />
        <Route path="/shop_history" exact component={ShopHistory} />
        <Route path="/shopping_cart" exact component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
