import React from 'react'

const Stock = ({data, action}) => {
	const {name, price} = data;

	return(
		<div onClick={(e) => {action(e, data)}}>

			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{
						name
					}</h5>
					<p className="card-text">{
						price
					}</p>
				</div>
			</div>


		</div>
	);
};

export default Stock
