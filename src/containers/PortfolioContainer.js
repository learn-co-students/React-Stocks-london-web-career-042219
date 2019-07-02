import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    const { myPortfolio, removeFromPortfolio } = this.props;
    return (
      <div>
        <h2>My Portfolio</h2>
        {myPortfolio.map(stock => (
          <Stock stock={stock} addToPortfolio={removeFromPortfolio} />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
