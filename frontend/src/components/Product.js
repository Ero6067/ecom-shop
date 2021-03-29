import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Products = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title className="text-center" as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div' className="d-flex justify-content-center">
					<Rating 
						
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as='h3' className='py-2 text-center'>
					${product.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Products;
