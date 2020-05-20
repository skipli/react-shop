import React, { Component } from "react";
export class IconPlus extends Component<any> {
  render() {
    return (
      <svg
        className="shopping-cart"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 20 20"
        aria-labelledby="title"
      >
        <title id="title">Shopping Cart Icon</title>
        <g fill="#000000">
          <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
        </g>
      </svg>
    );
  }
}
