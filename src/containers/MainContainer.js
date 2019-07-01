import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    filter: "",
    stocksPortfolio: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(data =>
        this.setState({
          stocks: data
        })
      );
  }

  handleSort = e => {
    // console.log(e.target.value);
    switch (e.target.value) {
      case "Type":
        this.setState({
          stocks: this.state.stocks.sort((a, b) => a.type.localeCompare(b.type))
        });
        break;

      case "Name":
        this.setState({
          stocks: this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
        });
        break;

      case "Price":
        this.setState({
          stocks: this.state.stocks.sort((a, b) => a.price - b.price)
        });
        break;

      default:
    }
  };

  handleFilter = e => {
    this.setState({
      filter: e.target.value
      // stocks: this.data.filter(stock => stock.type === "Tech")
    });
  };

  filterStocks = stocks => {
    return stocks.filter(stock => stock.type.includes(this.state.filter));
  };

  buyStock = stock => {
    if (this.state.stocksPortfolio.includes(stock)) return;

    this.setState({ stocksPortfolio: [...this.state.stocksPortfolio, stock] });
  };

  sellStock = stock => {
    const newArray = [...this.state.stocksPortfolio].filter(
      soldStock => stock !== soldStock
    );
    this.setState({ stocksPortfolio: newArray });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleFilter={this.handleFilter}
          handleSort={this.handleSort}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.filterStocks(this.state.stocks)}
              buyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocksPortfolio={this.state.stocksPortfolio}
              sellStock={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
