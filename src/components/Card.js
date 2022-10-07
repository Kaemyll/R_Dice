import React from 'react';

const Card = ({ item }) => {
	// destructuring props
	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				{item.map((Val) => {
					return (
						<div className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={Val.id}>
							<div className="card-img-top text-center">
								<img src={Val.img} alt={Val.title} className="photo w-75" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
