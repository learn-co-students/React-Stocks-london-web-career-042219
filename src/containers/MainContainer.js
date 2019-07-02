import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

	
	API = "http://localhost:3000/stocks"

	state = {
		stocks: [],
		portfolio: [],
		sortBy: "",
		filterBy: ""
	}

	componentDidMount() {
		//Get the stocks data
		fetch(this.API)
			.then(resp => resp.json())
			.then(data => this.setState({stocks: data}));
	}

	buyStock = (e, stock) => {
		let newPortfolio = [...this.state.portfolio];
		newPortfolio.push(stock);
		this.setState({portfolio: newPortfolio});
	}

	sellStock = (e, stock) => {
		let newPortfolio = [...this.state.portfolio];
		const index = newPortfolio.indexOf(stock);

		if(index > -1) {
			newPortfolio.splice(index, 1);
		}

		this.setState({portfolio: newPortfolio});
	}

	setSortBy = (e) => {
		this.setState({sortBy: e.target.name});
	}

	setFilterBy = (e) => {
		this.setState({filterBy: e.target.value})
	}

	sortStocks = (stocks) => {
		if(this.state.sortBy == "") {
			return stocks;
		}
		const sortFuncs = {
			alphabetically: (a, b) => {return a.ticker.localeCompare(b.ticker)},
			price: (a, b) => {return a.price - b.price}
		}
		return stocks.sort(sortFuncs[this.state.sortBy]);
	}

	filterStocks = (stocks) => {
		if(this.state.filterBy == "") {
			return stocks;
		}
		return stocks.filter((stock) => {return stock.type == this.state.filterBy})
	}
	
	render() {
		const sortedStocks = this.filterStocks(this.sortStocks(this.state.stocks));
		return (
			<div>
				<SearchBar setSortBy={this.setSortBy} setFilterBy={this.setFilterBy} filter={this.state.sortBy} />

				<div className="row">
					<div className="col-8">

						<StockContainer stocks={sortedStocks} buyStock={this.buyStock}/>

					</div>
					<div className="col-4">

						<PortfolioContainer stocks={this.state.portfolio} sellStock={this.sellStock} />

					</div>
				</div>
			</div>
		);
	}

}

export default MainContainer;
