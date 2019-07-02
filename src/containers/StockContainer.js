import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  render() {
    const { stocks } = this.props;

    return (
      <div>
        <h2>Stocks</h2>
        {stocks.map(stock => (
          <Stock stock={stock} addToPortfolio={this.props.addToPortfolio} />
        ))}
      </div>
    );
  }
}

export default StockContainer;
