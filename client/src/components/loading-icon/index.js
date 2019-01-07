import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <svg x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30">
        <rect
          x="0"
          y="9.69703"
          width="4"
          height="10.6059"
          fill="#333"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="8"
          y="7.19703"
          width="4"
          height="15.6059"
          fill="#333"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="16"
          y="5.30297"
          width="4"
          height="19.3941"
          fill="#333"
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            values="0.2; 1; .2"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            values="10; 20; 10"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            values="10; 5; 10"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    );
  }
}
