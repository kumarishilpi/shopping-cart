import React from 'react';


class Footer extends React.Component {

  render() {
    return (
<div>
  <div id="openModal-about" className="modalDialog">
    <div>
      <a href="#close" title="Close" className="close">X</a>

      <h4 className="success"><img src="image/success.png" alt=""/></h4>
      <p className="cheers"> Transaction Successful!</p>
      <p style={{padding:'15px'}}>Total Price: {this.props.price}</p>
    </div>

  </div>
      <div className="footer">
<div className="footerdiv">
        <p>Quantity: {this.props.quantity}</p><br/>
        <p>Total: {this.props.price}</p>
</div>
        <div className="footerdiv"> <a className="checkout" href="#openModal-about">Checkout</a></div>

      </div>
</div>
    );
  }

}
export default Footer;
