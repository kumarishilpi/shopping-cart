import React from 'react';
import Button from "./Button";


class IncrementDecrement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      show: true,
      max: 5,
      min: 0
    };
  }

  IncrementItem = () => {
    this.setState(prevState => {
      if(prevState.quantity < 500) {
        return {
          quantity: prevState.quantity + 1
        }
      } else {
        return null;
      }
    });
  }
  DecreaseItem = () => {
    this.setState(prevState => {
      if(prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      } else {
        return null;
      }
    });
  }
  ToggleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  handleChange = (event) => {
    const {name}=event.target
    if(name=== "increment"){
      this.IncrementItem();
      this.props.handleAdd()
    }if(name==="decrement"){
      this.DecreaseItem();
      this.props.handleDelete()
    }


  }
  render() {
    console.log(this.state.quantity,'+u')
    return (
      <div>
        <Button/>

        <button name="increment" class="buttonincrement" onClick= {this.handleChange}>+</button>
        <input class="zerostate" value={this.state.quantity} />
        <button name="decrement" class="buttonincrement" onClick={this.handleChange}>-</button>
      </div>
    );
  }

}
  export default IncrementDecrement;
