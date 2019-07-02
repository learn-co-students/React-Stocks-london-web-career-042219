import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
import PortfolioContainer from "./containers/PortfolioContainer";

const stocksUrl = "http://localhost:3000/stocks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stocks: [],
      myPortfolio: [],
      sortBy: "none",
      filterBy: "All"
    };
  }

  updateSortBy = event => {
    this.setState({
      sortBy: event.target.value
    });
  };

  updateFilterBy = filterType => {
    console.log(filterType);
    this.setState({
      filterBy: filterType
    });
  };

  filterStocks = () => {
    const { stocks, filterBy } = this.state;
    return filterBy !== "All"
      ? stocks.filter(stock => stock.type === this.state.filterBy)
      : stocks;
  };

  sortStocks = stocks => {
    const { sortBy } = this.state;
    const stocksCopy = [...stocks];

    if (sortBy === "Price") {
      stocksCopy.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "Alphabetically") {
      stocksCopy.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }

    return stocksCopy;
  };

  getStocks = () => {
    fetch(stocksUrl)
      .then(response => response.json())
      .then(stocks => this.setState({ stocks: stocks }));
  };

  componentDidMount() {
    this.getStocks();
  }

  handleClick = (event, stock) => {
    event.preventDefault();
    // console.log(stock);
    if (this.state.myPortfolio.includes(stock)) {
      alert("You already bought this stock, greedy!");
    } else {
      this.setState({
        myPortfolio: [...this.state.myPortfolio, stock]
      });
    }
  };

  sellHandleClick = (event, stock) => {
    event.preventDefault();
    this.setState({
      myPortfolio: this.state.myPortfolio.filter(
        eachStock => eachStock !== stock
      )
    });
  };

  render() {
    const filteredStocks = this.filterStocks();
    const sortedStocks = this.sortStocks(filteredStocks);
    return (
      <div>
        <Header />
        <MainContainer
          getStocks={this.getStocks}
          stocks={sortedStocks}
          handleClick={this.handleClick}
          myPortfolio={this.state.myPortfolio}
          updateSortBy={this.updateSortBy}
          updateFilterBy={this.updateFilterBy}
          sellHandleClick={this.sellHandleClick}
        />
      </div>
    );
  }
}

export default App;
