import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import { ItemCard } from '../components/ItemCard';

interface IItemCard {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
}

const ProductListPage = () => {


    const { t } = useTranslation();

    const [card, setCard] = useState({
        id: '1',
        title: 'titleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'description',
        price: 100,
        image: 'image',
    } as IItemCard)

    const element = document.getElementById('main');
    if (element !== null) {
        document.documentElement.style.setProperty('--card-width', `${(element.offsetWidth - 10 * 6) / 3}px`); //change / * 3 to / * 2 for 2 cards per row
        document.documentElement.style.setProperty('--main-width', `${element.offsetWidth}px`);
    }

    window.onresize = function () {
        
        const element = document.getElementById('main');
        if (element !== null) {
            document.documentElement.style.setProperty('--card-width', `${(element.offsetWidth - 10 * 6) / 3}px`);
            document.documentElement.style.setProperty('--main-width', `${element.offsetWidth}px`);
        }
    };


    return (
        <div className='page-cards'>
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
            <ItemCard {...card} />
        </div>


    )
}

export default ProductListPage;
