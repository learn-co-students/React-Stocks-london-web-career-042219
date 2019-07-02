import React from 'react'
// 4) Render the stock from props
const Stock = (props) => {

const {id, ticker,name,price} = props.stock;

// 5) Add a callback to biuy a stock
return (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title" onClick={() => props.buyStock(id)}>{
            //Company Name
            name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            ticker + ':' + price
          }</p>
      </div>
    </div>
  </div> 
)
};

export default Stock
