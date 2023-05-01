import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaShareAlt ,FaBookmark, FaStar, FaEye,FaRegStar,} from "react-icons/fa";
import './NewsCart.css'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';

const NewsCart = ({news}) => {
    const {title,author, image_url,details,_id, rating,total_view} = news;
    return (
        <div>
           <Card className="text-center my-4">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='header-news'>
                        <Image className='news-cart-img' src={author?.img} roundedCircle />
                        <p>{moment(author?.published_date).format("Do MMM YY")}</p>
                    </div>

                    <div className='d-flex news-header-btn'>
                        <button><FaBookmark /></button> 
                        <button><FaShareAlt /> </button>
                    </div>
                </Card.Header>


                    <Card.Body>
                        <Card.Title className='title'>{title}</Card.Title>

                        <div>
                         <img className='w-100' src={image_url} alt="" />
                        </div>

                        <Card.Text className='news-details'>
                        {
                            details.length < 250 ? <>{details}</> : 
                            <>{details.slice(0,250)}...<br/><Link className='my-3' to={`/news/${_id}`}>read more</Link></>
                        }
                        </Card.Text>
                    </Card.Body>
                <Card.Footer className="text-muted">
                    <div className='d-flex align-items-center justify-content-between'>
                        <ul className='d-flex star align-items-center'>

                            <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            fullSymbol={<FaStar/>}
                            placeholderSymbol={<FaStar />}
                            readonly
                            />

                            <span className='rating'>{rating?.number}</span>
                        </ul>
                        <ul className='d-flex star align-items-center'>
                            <li><FaEye /></li>
                            <span className='rating'>{total_view}</span>
                        </ul>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;