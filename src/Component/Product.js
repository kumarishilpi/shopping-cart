
import React from 'react';
import getProduct from '../Constant/ConstantJson'
import IncrementDecrement from "../Constant/IncrementDecrement";
import Card from "./Card";
import axios from "axios";
import Footer from "../Constant/Footer";


class Product extends React.Component {
  constructor(props) {
    super(props);
    {
      this.state={
        product:[{}],
      quantity:0,
      totalprice:0}
    }
  }
  componentDidMount() {
// axios.get("https://drive.google.com/file/d/1xB_9KrJUMPEBZFqXxCV4lvWwNUjK3w2u/view?usp=sharing",{ headers: {'Access-Control-Allow-Origin': '*'} }).then(
//   respons=>{
//     console.log(respons);
//   }
// )
    this.setState({product:getProduct()})

  }

  render() {
    const handleAdd=(price)=>{
      console.log(price,'jh')
      this.setState(prevState => {
          return {
            quantity: prevState.quantity + 1
          }
        }
      );
      this.setState(prevState => {
          return {
            totalprice: prevState.totalprice + price
          }
        }
      );


    }
    const handleDelete=(price)=>{
      console.log('jhjhj')
      this.setState(prevState => {
          return {
            quantity: prevState.quantity - 1
          }
        }
      );
      this.setState({price:price+10})

      //this.setState({price:mrp+10})

    }

    console.log(this.state.quantity)
    console.log(this.state.totalprice)
    return (
      <div>
        <div class="container">
          <Card product={this.state.product} handleAdd={handleAdd} handleDelete={handleDelete}/>

        </div>
        <Footer quantity={this.state.quantity} price={this.state.totalprice} handleDelete={handleDelete}/>
      </div>
    );
  }
}

export default Product;
