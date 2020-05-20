import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../components/actions/cartActions";
import { ProductCart, Product } from "../interfaces/product";
import "./cart.scss";
import { IconPlus } from "../components/icons/IconPlus";
import { IconMinus } from "../components/icons/IconMinus";
import { IconRemove } from "../components/icons/IconMinus copy";

class Cart extends Component<any> {
  handleRemove = (id: number) => {
    this.props.removeItem(id);
  };

  handleAddQuantity = (id: number) => {
    this.props.addQuantity(id);
  };

  handleSubtractQuantity = (id: number) => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item: Product) => {
        return (
          <tr className="cart-item" key={item.id}>
            <td>
              <div className="cart-description">
                <span className="image">
                  <img src={item.img} alt={item.name} />
                </span>
                <span className="paragraph">
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-desc">{item.description}</p>
                </span>
              </div>
            </td>
            <td>
              <div className="cart-edit">
                <div>{item.price}€</div>
                <div className="cart-quantity">
                  <button
                    className="no-style quantity-button"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    <IconPlus />
                  </button>
                  <span className="quantity-spacer">{item.quantity}</span>
                  <button
                    className="no-style quantity-button"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    <IconMinus />
                  </button>
                </div>

                <button
                  className="no-style item-remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  <IconRemove />
                </button>
              </div>
            </td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td>
          <h2>Cart is empty.</h2>
        </td>
      </tr>
    );
    return (
      <div className="container">
        <table className="cart">
          <tbody>{addedItems}</tbody>
          <tfoot>
            <td></td>
            <td className="cart-total">
              <span className="paragraph">Total: </span>
              <span className="total">{this.props.total} €</span>
            </td>
          </tfoot>
        </table>
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
const mapDispatchToProps = (dispatch: any) => {
  return {
    removeItem: (id: number) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id: number) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id: number) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
