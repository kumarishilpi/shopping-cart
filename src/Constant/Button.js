import React from 'react';


export  default function Button(props) {

  return (
    <button class="button" id={props.name} name={props.name} value={props.value} onClick={props.onClick}> Add Cart</button>
  );
}
