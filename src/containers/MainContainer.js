import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    let {sortFunction, filterStocks, editPortfolioStatus, portfolio, stocks} = this.props
    return (
      <div>
        <SearchBar
          sortFunction={sortFunction}
          filterStocks={filterStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={stocks}
              editPortfolioStatus={editPortfolioStatus}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={portfolio}
              editPortfolioStatus={editPortfolioStatus}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
