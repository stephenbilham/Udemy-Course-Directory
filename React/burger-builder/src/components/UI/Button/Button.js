import React from "react";

import styles from "./Button.module.css";

const button = props => (
  <button
    disabled={props.disabled}
    className={[styles.Button, styles[props.btnType]].join(" ")}
    onClick={
      props.purchaseContinueHandler ||
      props.modalClosed ||
      props.checkoutCancelledHandler ||
      props.checkoutCancelledContinue ||
      props.orderHandler
    }
  >
    {props.children}
  </button>
);

export default button;
