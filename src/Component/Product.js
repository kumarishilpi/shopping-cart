
import React from 'react';
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
axios.get( 'https://api.npoint.io/bceec8e6af0c6e91839a').then(
  response=>{
    console.log(response.data,'hhjh');
    this.setState({product:response.data.data})
  }
)
   // this.setState({product:getProduct()})
  }

  render() {
    console.log(this.state.product,'ju')
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
            totalprice: prevState.totalprice + parseInt(price)
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
      this.setState(prevState => {
          return {
            totalprice: prevState.totalprice - parseInt(price)
          }

        }
      );
     // this.setState({price:price+10})

      //this.setState({price:mrp+10})

    }

    console.log(this.state.quantity)
    console.log(this.state.totalprice)
    return (
      <div>
        <div class="container">
          <Card product={this.state.product} handleAdd={handleAdd} handleDelete={handleDelete}/>

        </div>
        <Footer quantity={this.state.quantity} price={this.state.totalprice} />
      </div>
    );
  }
}

export default Product;
