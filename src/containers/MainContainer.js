import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          updateSortBy={this.props.updateSortBy}
          updateFilterBy={this.props.updateFilterBy}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              myPortfolio={this.props.myPortfolio}
              sellHandleClick={this.props.sellHandleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
