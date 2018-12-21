import React from "react";

export default function Bars(props) {
  let bar = props.list.map((bar, ind) => {
    return <h1 key={ind}>{bar}</h1>;
  });
  return <div>{bar}</div>;
}
