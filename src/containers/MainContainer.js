import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar 
        changeSortType={this.props.changeSortType} 
        setFilter={this.props.setFilter}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              buyStock={this.props.buyStock}
              stocks={this.props.stocks}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myPortfolio={this.props.myPortfolio}
              buyStock={this.props.buyStock}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
