import React, { Component } from "react";

class Stock extends Component {
  render() {
    const { name, ticker, price } = this.props.stock;
    return (
      <div>
        <div
          className="card"
          onClick={e => this.props.editPortfolioStatus(this.props.stock)}
        >
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {ticker}: {price}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Stock;
