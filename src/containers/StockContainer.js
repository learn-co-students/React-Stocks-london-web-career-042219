import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
			this.props.stocks.map((stock, i) => {
				return <Stock data={stock} key={i} action={this.props.buyStock} />
			})
        }
      </div>
    );
  }

}

export default StockContainer;
