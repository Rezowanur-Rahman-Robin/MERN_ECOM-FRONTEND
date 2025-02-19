import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_URL } from '../constants/orderConstants';
import Rating from './Rating';

function Product({product}) {
    return (
        <Card className='my-3 p-3 rounded'>

            <Link to={`/product/${product._id}`}>
            <Card.Img src={`${API_URL}${product.image}`} variant='top'/>
            </Link>

          
           
            <Card.Body>
            <Link to={`/product/${product._id}`}>
            <Card.Title as ='div'>
                {product.name}
                </Card.Title>
            </Link>
             
              <Card.Text as='div'>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as='h3'>
                  ${product.price}
            </Card.Text>

             <Button variant="primary">Add to Cart</Button>
           </Card.Body>
            
        </Card>
    )
}

export default Product;
