import React, { Component } from "react";
export class IconRemove extends Component<any> {
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
          <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M14.789,13.061  L13.06,14.79L10,11.729l-3.061,3.06L5.21,13.06L8.272,10L5.211,6.939L6.94,5.211L10,8.271l3.061-3.061l1.729,1.729L11.728,10  L14.789,13.061z" />
        </g>
      </svg>
    );
  }
}
