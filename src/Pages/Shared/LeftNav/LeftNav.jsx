import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'
import EditorInsight from '../../News/EditorInsight/EditorInsight';
import SingleInsight from '../../News/EditorInsight/SingleInsight';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>All Category</h2>
            <div className='py-5 category'>
                {
                    categories.map(cat => <p className='text-left px-4' key={cat.id} > <Link to={`/category/${cat.id}`} className='text-decoration-none '> {cat.name}</Link></p>)
                }
            </div>
            <div>
                <SingleInsight></SingleInsight>
            </div>
        </div>
    );
};

export default LeftNav;