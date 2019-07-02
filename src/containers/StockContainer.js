import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.props.stocks.map((stock,index) => {
          return <Stock 
          buyStock={this.props.buyStock} 
          key={index} 
          stock={stock} />
        })}
        {/* CURLIES ALWAYS FUCK ME UP */}
      </div>
    );
  }
}
// id": 2,
//     "ticker": "FB",
//     "name": "Facebook",
//     "type": "Tech",
//     "price": 168.85

export default StockContainer;
