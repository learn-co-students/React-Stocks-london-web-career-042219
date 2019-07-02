import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stocks: [],
    myStocks: [],
    filteredStocks: []
  };

  componentDidMount() {
    this.fetchStocksFromServer();
  }

  fetchStocksFromServer = () => {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(data =>
        this.setState({
          stocks: data
        })
      );
  };

  handleAddClick = stock => {
    this.setState({
      myStocks: [...this.state.myStocks, stock]
    });
  };

  handleRemoveClick = stock => {
    this.setState({
      myStocks: this.state.myStocks.filter(
        currentStock => currentStock.id !== stock.id
      )
    });
  };

  handleChange = e => {
    this.setState({
      filteredStocks: this.state.stocks.filter(
        stock => stock.type === e.target.value
      )
    });
  };

  resetStocks = () => {
    this.setState({
      filteredStocks: []
    });
    this.fetchStocksFromServer();
  };

  sortAlphabetically = () => {
    let filteredStocks = this.state.stocks.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      stocks: filteredStocks
    });
  };

  sortPrice = () => {
    let filteredStocks = this.state.stocks.sort((a, b) => a.price - b.price);
    this.setState({
      stocks: filteredStocks
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          resetStocks={this.resetStocks}
          sortAlphabetically={this.sortAlphabetically}
          sortPrice={this.sortPrice}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={
                this.state.filteredStocks.length > 0
                  ? this.state.filteredStocks
                  : this.state.stocks
              }
              handleAddClick={this.handleAddClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              stocks={this.state.myStocks}
              handleRemoveClick={this.handleRemoveClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
