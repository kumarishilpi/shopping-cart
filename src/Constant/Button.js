import React from 'react';


export  default function Button(props) {
  return (
    <button class={"button"} id={props.name} name={props.name} value={props.value}> Add Cart</button>
  );
}
