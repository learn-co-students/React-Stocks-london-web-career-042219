import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar
          sortFunction={this.props.sortFunction}
          filterStocks={this.props.filterStocks}
        />

        <div className="row">
          <div className="col-8">
            <StockContainer
              stocks={this.props.stocks}
              editPortfolioStatus={this.props.editPortfolioStatus}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              portfolio={this.props.portfolio}
              editPortfolioStatus={this.props.editPortfolioStatus}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
