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

  buyStock = targetStock => {
    const index = this.state.portfolio.findIndex(
      stock => stock.id === targetStock.id
    );
    const newPortfolio = this.state.portfolio;

    if (index >= 0) {
      newPortfolio[index].qty += 1;
      this.setState({
        portfolio: newPortfolio
      });
    } else {
      newPortfolio.push(Object.assign(targetStock, { qty: 1 }));
      this.setState({
        portfolio: newPortfolio
      });
    }
  };

  sellStock = targetStock => {
    let newPortfolio = this.state.portfolio;
    const index = newPortfolio.findIndex(stock => stock.id === targetStock.id);
    if (newPortfolio.length === 1 && newPortfolio[index].qty === 1) {
      newPortfolio = [];
    } else if (newPortfolio[index].qty === 1) {
      newPortfolio.splice(index, 1);
    } else {
      newPortfolio[index].qty -= 1;
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
