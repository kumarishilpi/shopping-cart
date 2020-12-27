import React from 'react';
import "../Card.css"
import IncrementDecrement from "../Constant/IncrementDecrement";
class Card extends React.Component{
  constructor(props) {
    super(props);

  }

  render() {
    const {product} = this.props;
    console.log(product)
    if (product.length) {
      return (

        <div>


          {product.map(key => {
            return <div className="card">

              <div className="image">
                <img src={key.imageurl}/>
                <p>18% off</p>
              </div>
              <div className="content">
                <div className="brand">
                  <h3>{key.brandname}</h3>
                </div>
                <div className="productname">
                  <p>{key.productname}</p>
                </div>
                <div className="qty">
                  <p>{key.quantity}</p>
                </div>
                <div className="mrp">
                  <p>MRP {key.mrp}</p>
                </div>
                <div className="price">
                  <p><strong>RS {key.mrp * 0.82}</strong></p>
                </div>
<IncrementDecrement handleAdd={()=>this.props.handleAdd(key.mrp)} handleDelete={this.props.handleDelete}/>

              </div>

            </div>
          })
          }</div>

      )
    }
    return <h1>no product found </h1>
  }



};
 export default Card;
