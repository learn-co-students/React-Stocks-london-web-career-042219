import React from "react";

const Stock = props => {
  // console.log(props.handleClick);
  return (
    <div>
      <div
        onClick={event => props.handleClick(event, props.stock)}
        className="card"
      >
        <div className="card-body">
          <h5 className="card-title">{props.stock.company}</h5>
          <p className="card-text">
            {[props.stock.ticker] + ": " + [props.stock.price]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stock;
