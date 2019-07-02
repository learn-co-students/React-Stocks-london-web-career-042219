import React, { Component } from "react";
import Header from "./components/Header";
import MainContainer from "./containers/MainContainer";
const STOCKS_URL = `http://localhost:3000/stocks/`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
      myPortfolio: [],
      filterType: "All",
      sortType: "Alphabetically"
    };
  }

  changeSortType = event => {
    console.log(event.target.value);
    this.setState({ sortType: event.target.value });
    this.sortStocks();
  };

  sortStocks = () => {
    if (this.state.sortType === "Alphabetically") {
      let stocksCopy = [...this.state.stocks];
      return [...stocksCopy.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))];
    } else if (this.state.sortType === "Price") {
      let stocksCopy = [...this.state.stocks];
      return [...stocksCopy.sort((a, b) => b.price - a.price)];
    }
  };

  setFilter = event => {
    this.setState({ filterType: event.target.value });
  };

  filterStocks = sortedStocks => {
    return sortedStocks.filter(
      stock =>
        stock.type === this.state.filterType || this.state.filterType === "All"
    );
  };

  componentDidMount() {
    fetch(STOCKS_URL)
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({ stocks }, () => console.log(stocks));
      });
  }

  buyStock = (event, selectedStock, sell) => {
    event.persist();
    if (!sell) {
      if (!this.state.myPortfolio.includes(selectedStock)) {
        this.setState({
          myPortfolio: [...this.state.myPortfolio, selectedStock]
        });
        alert(`${selectedStock.name} stock purchased!`);
      } else {
        alert("You already own this stock!");
      }
    } else {
      let newPortfolio = this.state.myPortfolio.filter(
        stock => stock !== selectedStock
      );
      this.setState({ myPortfolio: [...newPortfolio] });
      alert(`${selectedStock.name} stock sold`);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <MainContainer
          stocks={this.filterStocks(this.sortStocks())}
          buyStock={this.buyStock}
          myPortfolio={this.state.myPortfolio}
          changeSortType={this.changeSortType}
          setFilter={this.setFilter}
        />
      </div>
    );
  }
}

export default App;
