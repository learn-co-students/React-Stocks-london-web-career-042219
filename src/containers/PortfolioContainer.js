import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.props.myPortfolio.map(stock => (
          <Stock
            handleClick={this.props.sellHandleClick}
            key={`stock-${stock.id}`}
            stock={stock}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
