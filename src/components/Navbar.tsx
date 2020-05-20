import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "./icons/IconShoppingCart";
import "./navbar.scss";
import { connect } from "react-redux";
import { ProductCart } from "../interfaces/product";

class Navbar extends Component<any> {
  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-content">
          <span className="nav-title">
            <Link to="/" className="brand-logo">
              <h1>whee</h1>
            </Link>
            <span className="brand-slogan">
              The most definitive shape store in the world
            </span>
          </span>
          <span className="nav-shopping-cart">
            <span>Cart total: {this.props.total}€</span>
            <Link to="/cart" className="nav-cart-icon">
              <IconShoppingCart />
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: ProductCart) => {
  return {
    items: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Navbar);
