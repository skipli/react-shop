import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../components/actions/cartActions";
import { Product, ProductCart } from "../interfaces/product";
import "./home.scss";

class Home extends Component<any> {
  handleClick = (id: number) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item: Product) => {
      return (
        <div className="item" key={item.id}>
          <div className="item-image">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="item-description">
            <span className="item-title">
              <h2>{item.name}</h2>
            </span>
            <span>
              <p>{item.description}</p>
            </span>
          </div>
          <div className="item-price">
            <p>{item.price}€</p>
            <span>
              <button
                className="add-button"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                Add to cart
              </button>
            </span>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="shop">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state: ProductCart) => {
  return {
    items: state.products,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (id: number) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
