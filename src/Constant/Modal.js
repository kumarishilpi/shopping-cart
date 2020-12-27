import React from 'react';


class Modal extends React.Component {

  render() {
    return (
      <div>
        <div id="shopping-cart" className="modalDialog">
          <div>
            <a href="#close" title="Close" className="close">X</a>

            <h4 className="success"><img src="image/success.png" alt=""/></h4>
            <p style={{padding:'15px'}}>Total Price: {this.props.price}</p>
            <p className="cheers"> Transaction Successful!</p>

          </div>

        </div>
      </div>
    );
  }

}
export default Modal;
