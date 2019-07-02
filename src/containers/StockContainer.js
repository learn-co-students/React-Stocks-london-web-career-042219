import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
//3) Map over the stocks and push each one into the stock component
  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} buyStock={this.props.buyStock}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
