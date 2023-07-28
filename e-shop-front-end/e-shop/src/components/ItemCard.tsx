import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { IItemCard } from '../domain/IItemCard';
import image_not_found from '../images/test_cat_img.png';
import ButtonTemplate from './ButtonTemplate';



export const ItemCard = (props: IItemCard) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/products/' + props.id, { state: { cardProps: props } });
    };
    return (
        <div className="page-card">
            <img src={props.image}
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = image_not_found;
                }}
                alt="Image not found"
                className="card-img"
            />
            <h4 className='itemCardTitle'>{props.title}</h4>
            <div className='itemCardSize'>
                <div className='itemCardSizeContent'>
                    <div className='itemCardSizeText'>
                        <h5><del>XS</del></h5> <h5 style={{paddingLeft : "4px", paddingRight : "4px"}}>/</h5>
                        <h5>S</h5> <h5 style={{paddingLeft : "4px", paddingRight : "4px"}}>/</h5>
                        <h5>M</h5> <h5 style={{paddingLeft : "4px", paddingRight : "4px"}}>/</h5>
                        <h5>L</h5> <h5 style={{paddingLeft : "4px", paddingRight : "4px"}}>/</h5>
                        <h5>XL</h5> <h5 style={{paddingLeft : "4px", paddingRight : "4px"}}>/</h5>
                        <h5>XXL</h5>  
                    </div>
                </div>
            </div>
            <h6>Price: {props.price}€</h6>
            <ButtonTemplate onClick={handleClick} text={t("Buy")} />

        </div>
    );
}