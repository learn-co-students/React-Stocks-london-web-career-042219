import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
		<div>
			<h2>My Portfolio</h2>
			{
				this.props.stocks.map((stock, i) => {
					return <Stock data={stock} key={i} action={this.props.sellStock} />
				})
			}
		</div>
    );
  }

}

export default PortfolioContainer;
