import React, { Component } from "react";
import Stock from "../components/Stock";

class StockContainer extends Component {
  filterStocks = () => {
    if (this.props.filter) {
      return this.props.stocks.filter(
        stock => stock.type === this.props.filter
      );
    } else {
      return this.props.stocks;
    }
  };

  sortStocks = () => {
    switch (this.props.sort) {
      case "Alphabetically":
        return this.filterStocks().sort((stock1, stock2) => {
          const a = stock1.name;
          const b = stock2.name;
          return a < b ? -1 : 0;
        });

      case "Price":
        return this.filterStocks().sort((stock1, stock2) => {
          const a = stock1.price;
          const b = stock2.price;
          return a < b ? -1 : 0;
        });

      default:
        return this.filterStocks();
    }
  };

  renderAllStocks = () => {
    return this.sortStocks().map(stock => {
      return (
        <Stock key={stock.id} stock={stock} buyStock={this.props.buyStock} />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderAllStocks()}
      </div>
    );
  }
}

export default StockContainer;
