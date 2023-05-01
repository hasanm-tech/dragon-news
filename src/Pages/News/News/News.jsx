import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorInsight from '../EditorInsight/EditorInsight';

const News = () => {

    const news = useLoaderData();
    const {title,author, image_url,details,_id, category_id,total_view} = news;

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body style={{textAlign:'justify'}}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link  to={`/category/${category_id}`}>
                    <Button style={{margin: '20px 0'}} variant='danger'> <FaArrowLeft />  All news in this category </Button>
                </Link>
                </Card.Body>
            </Card> 
            <EditorInsight></EditorInsight>
        </div>
    );
};

export default News;