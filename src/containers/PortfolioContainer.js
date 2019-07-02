import React, { Component } from "react";
import PortfolioStock from "../components/PortfolioStock";

class PortfolioContainer extends Component {
  renderAllPortfolioStocks = () => {
    return this.props.portfolio.map((stock, index) => {
      return (
        <PortfolioStock
          key={index}
          stock={stock}
          sellStock={this.props.sellStock}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderAllPortfolioStocks()}
      </div>
    );
  }
}

export default PortfolioContainer;
