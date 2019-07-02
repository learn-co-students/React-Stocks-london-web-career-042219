import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";
import { timingSafeEqual } from "crypto";

class MainContainer extends Component {
  state = {
    stocks: [],
    myPortfolio: [],
    filteredStocks: []
  };

  componentDidMount() {
    fetch("http://localhost:3002/stocks")
      .then(resp => resp.json())
      .then(resp =>
        this.setState({
          stocks: resp
        })
      );
  }

  addToPortfolio = stock => {
    this.setState({
      myPortfolio: [...this.state.myPortfolio, stock]
    });
  };

  removeFromPortfolio = stock => {
    const newArray = [...this.state.myPortfolio].filter(
      broughtStock => stock !== broughtStock
    );
    this.setState({ myPortfolio: newArray });
  };

  filterStocksPrice = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => a.price - b.price)
    });
  };

  filterStocksAlphabet = () => {
    this.setState({
      stocks: this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
    });
  };

  filterStock = event => {
    this.setState({
      filteredStocks: this.state.filteredStocks.filter(
        stock => stock.type === event.target.value
      )
    });
  };
  reset = () => {
    this.setState({
      filteredStocks: []
    });
    this.componentDidMount();
  };

  render() {
    const { stocks, myPortfolio } = this.state;

    return (
      <div>
        <SearchBar
          filterStocksPrice={this.filterStocksPrice}
          filterStocksAlphabet={this.filterStocksAlphabet}
          filterStock={this.filterStock}
          reset={this.reset}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={stocks}
              addToPortfolio={this.addToPortfolio}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myPortfolio={myPortfolio}
              removeFromPortfolio={this.removeFromPortfolio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
