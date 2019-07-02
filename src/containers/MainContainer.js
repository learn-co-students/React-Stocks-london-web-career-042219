import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sort: "",
    filter: ""
  };

  componentDidMount() {
    this.fetchStocks();
  }

  buyStock = id => {
    const targetStock = this.state.stocks.find(stock => stock.id === id);
    this.setState({ portfolio: [...this.state.portfolio, targetStock] });
  };

  sellStock = stock => {
    let newPortfolio = this.state.portfolio;

    if (this.state.portfolio.length > 1) {
      const targetStockIndex = this.state.stocks.indexOf(stock);
      newPortfolio.splice(targetStockIndex, 1);
    } else {
      newPortfolio = [];
    }
    this.setState({ portfolio: newPortfolio });
  };

  handleFilterSortChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  fetchStocks = () => {
    const URL = "http://localhost:4000/stocks";
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({ stocks: data }));
  };

  render() {
    return (
      <div>
        <SearchBar
          sort={this.state.sort}
          filter={this.state.filter}
          handleChange={this.handleFilterSortChange}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              filter={this.state.filter}
              sort={this.state.sort}
              stocks={this.state.stocks}
              buyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.state.portfolio}
              sellStock={this.sellStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
