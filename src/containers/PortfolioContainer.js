import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {//render your portfolio stocks here
        this.props.myPortfolio.map((stock, index) => (
          <Stock
            buyStock={this.props.buyStock}
            key={index}
            stock={stock}
            sell={true}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
