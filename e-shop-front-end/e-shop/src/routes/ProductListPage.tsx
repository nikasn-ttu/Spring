import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';
import { ItemCard } from '../components/ItemCard';
import { HelperMethods } from '../helpers/Helpers';

interface IItemCard {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string,
}

const ProductListPage = () => {


    const { t } = useTranslation();
    let contentContainerWidth = document.getElementById("main")?.offsetWidth;

    const [card, setCard] = useState({
        id: '1',
        title: 'titleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'description',
        price: 100,
        image: 'image',
    } as IItemCard)

    const element = document.getElementById('main');
    if (element !== null) {
        HelperMethods.setAmountOfProductInRow(element);
    }

    window.onresize = function () {

        const element = document.getElementById('main');
        if (element !== null) {
            
            HelperMethods.setAmountOfProductInRow(element);
        }
    };


    return (
        <>
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
        </>
        


    )
}

export default ProductListPage;
