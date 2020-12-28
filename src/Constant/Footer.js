import React from 'react';
import Modal from "./Modal";


class Footer extends React.Component {

  render() {
    return (
<div>
  <Modal price={this.props.price} />
      <div className="footer">
<div className="footerdiv">
        <p>Quantity: {this.props.quantity}</p><br/>
        <p>Total: {this.props.price}</p>
</div>
        {this.props.quantity>0 ? <div className="footerdiv"><a className="checkout" href="#shopping-cart">Checkout</a></div>
          : <div className="footerdiv"><a className="checkout">Checkout</a></div> }

      </div>
</div>
    );
  }

}
export default Footer;
