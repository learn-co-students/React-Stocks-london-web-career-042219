import React, { Component } from "react";
import Stock from "../components/Stock";

class PortfolioContainer extends Component {
  render() {
    let {editPortfolioStatus, portfolio} = this.props
      return (
      < div >
        <h2>My Portfolio</h2>
        {portfolio.map(stock => (
          <Stock
            stock={stock}
            editPortfolioStatus={editPortfolioStatus}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioContainer;
