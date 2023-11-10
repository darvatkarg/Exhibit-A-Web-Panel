import React from "react";
import { useHistory } from "react-router-dom";
import parse from "html-react-parser";

const Payment = () => {
  const history = useHistory();
  console.log("location.state", history.location.state);
  return <div>{parse(history.location.state.replace(/!important/g, ""))}</div>;
};

export default Payment;
