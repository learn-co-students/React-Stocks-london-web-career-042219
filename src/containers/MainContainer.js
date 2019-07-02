import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const url = "http://localhost:3002/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    myPortfolio: [],
    filterType: "All"
  }

  componentDidMount() {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => this.setState({stocks: data}))

  }

  addToMyPortfolio = (stock)  => {
    if (this.state.myPortfolio.includes(stock)) {
      alert("You already bought this stock")
    } else {
      this.setState({myPortfolio: [...this.state.myPortfolio, stock]})
    }

  }

  removeFromPortfolio = (stock) => {

    let array = [...this.state.myPortfolio].filter(boughtStock => stock !== boughtStock)
    this.setState({myPortfolio: array})

  }

  sortByAlphabet = () => {
    this.setState({stocks: this.state.stocks.sort((a,b) => a.name.localeCompare(b.name))})

  }

  sortByPrice = () => {
    this.setState({stocks: this.state.stocks.sort((a,b) => a.price - b.price)})
  }

  setFilter = (event) => {
    this.setState({filterType: event.target.value})
  }

  getFilteredStocks = () => {
    return this.state.stocks.filter(stock => stock.type === this.state.filterType || this.state.filterType === "All")
  }

  render() {
    return (
      <div>
        <SearchBar sortByAlphabet={this.sortByAlphabet} prices={this.sortByPrice} filter={this.setFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.getFilteredStocks()} addToPortfolio={this.addToMyPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.state.myPortfolio} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
