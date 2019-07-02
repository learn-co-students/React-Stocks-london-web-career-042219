import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  // 1) Fetch data into state
  constructor(props) {
    super(props);
    this.state = {
      stocks: [],
      portfolio: [],
      type: "Tech",
      order: "Alphabetically"
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(response => response.json())
      .then(data => {
        this.setState({
          stocks: data.sort((a, b) => (a.name > b.name ? 1 : -1))
        });
      });
  }

  // 4) Send a function to set the filter
  // REMEMBER to use arrow functions .... or you get weird errors
  setTypeState = event => {
    this.setState({ type: event.target.value });
  };

  // And finally order the stocks according to the sort by filter
  setOrder = event => {
    let stocks = [...this.state.stocks];
    if (event.target.value === "Alphabetically") {
      stocks.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      stocks.sort((a, b) => a.price - b.price);
    }
    this.setState({ stocks: stocks });
  };

  //5) Ability to buy the stock - pushed down to Stock.js
  buyStock = id => {
    // Add to the porfolio
    let stock = this.state.stocks.find(stock => stock.id === id);
    let portfolio = [...this.state.portfolio]; // Make a copy

    // If stock not in portfolio, add
    let portfolioIndex = portfolio.findIndex(stock => stock.id === id);
    if (portfolioIndex >= 0) {
      portfolio.splice(portfolioIndex, 1); // Remove from array
    } else {
      // Add the stock
      portfolio = [...portfolio, stock];
    }
    this.setState({ portfolio: portfolio });
  };

  // 2) Send the stocks state down in props
  render() {
    return (
      <div>
        <SearchBar setTypeState={this.setTypeState} setOrder={this.setOrder} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.state.stocks.filter(
                stock => stock.type === this.state.type
              )}
              buyStock={this.buyStock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer stocks={this.state.portfolio} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
