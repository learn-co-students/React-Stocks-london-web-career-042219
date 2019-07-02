import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import { throws } from "assert";

const API = "http://localhost:3000/stocks";

class App extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sort: false,
    filter: "All"
  };

  editPortfolioStatus = stock => {
    if (this.state.portfolio.includes(stock)) {
      this.setState({
        portfolio: this.state.portfolio.filter(s => s.id !== stock.id)
      });
    } else {
      this.setState({ portfolio: [...this.state.portfolio, stock] });
    }
  };

  editStocksToRender = () => {
    let stocks = this.state.stocks;
      if (this.state.sort !== false) {
      stocks = stocks.sort((a, b) => {
        if (a[this.state.sort] < b[this.state.sort]) {
          return -1;
        }
        if (a[this.state.sort] > b[this.state.sort]) {
          return 1;
        }
        return 0;
      });
    }
    if (this.state.filter !== "All") { 
      stocks = stocks.filter(stock => stock.type === this.state.filter)
    }
    return stocks;
  };

  sortFunction = e => {
    this.setState({ sort: e.target.value });
    this.editStocksToRender();
  };

  // sortByTicker = () => {
  //   this.setState({ sortTicker: !this.state.sortTicker });
  //   this.editStocksToRender();
  // };

  filterStocks = event => { 
    this.setState({ filter: event.target.value })
    this.editStocksToRender
  }

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          sortFunction={this.sortFunction}
          filterStocks={this.filterStocks}
          stocks={this.editStocksToRender()}
          portfolio={this.state.portfolio}
          editPortfolioStatus={this.editPortfolioStatus}
        />
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
      .then(results => results.json())
      .then(json => {
        this.setState({ stocks: json });
      });
  }
}

export default App;
