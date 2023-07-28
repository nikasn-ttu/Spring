import React, { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ButtonTemplate from "../components/ButtonTemplate";
import { IItemCard } from "../domain/IItemCard";
import image_not_found from '../images/test_cat_img.png';
import image_not_found2 from '../images/image_not_found.png';
import { AppContext } from "./Root";
import ImageSelector from "../components/ImageSelector";


const ItemPage = () => {
    const { cartList, setCartList, isScreenSmall } = useContext(AppContext)
    const { id } = useParams();
    const location = useLocation();
    const { cardProps } = location.state as { cardProps: IItemCard };
    const handleSizeSelectorClick = (event: any) => {
        if (document.getElementById("itemSizeSelectorButtonSelected") !== null) {
            console.log(document.getElementById("itemSizeSelectorButtonSelected")!.id);
            document.getElementById("itemSizeSelectorButtonSelected")!.className = ""
            document.getElementById("itemSizeSelectorButtonSelected")!.id = "notSelected";
        }
        event.currentTarget.id = "itemSizeSelectorButtonSelected"
        event.currentTarget.className = "itemSizeSelectorButtonSelected"
    }
    // TODO: Add a request for card data by id

    const handleAddToCartClick = () => {
        //&& item.item.size == cardProps.size also check size
        const itemInCart = cartList.find(item => item.item.id == cardProps.id);
        if (itemInCart === undefined) {
            setCartList([...cartList, { item: cardProps, quantity: 1 }]);
            localStorage.setItem("cartList", JSON.stringify([...cartList, { item: cardProps, quantity: 1 }]));
        } else {
            const newCartList = cartList.filter(item => item.item.id != cardProps.id);
            setCartList([...newCartList, { item: cardProps, quantity: itemInCart.quantity + 1 }]);
            localStorage.setItem("cartList", JSON.stringify([...newCartList, { item: cardProps, quantity: itemInCart.quantity + 1 }]));
        }
        localStorage.setItem("cartExpired", (Math.floor(Date.now() / 1000) + 5).toString());
    }

    const image = [image_not_found, image_not_found2, image_not_found, image_not_found2, image_not_found, image_not_found2]



    // Iterate through each thumbnail and add a click event listener
    const [mainImage, setMainImage] = useState(image[0]);
    const handleThumbnailClick = (thumbnailSrc: string) => {
        setMainImage(thumbnailSrc);
    };

    return (
        (isScreenSmall) ? (<div className="item-view-container-mobile">
            <ImageSelector image_not_found={image_not_found} images={image} mainImage={mainImage} setMainImage={setMainImage} />


            <div className="itemViewTitleContainer">
                <h5 className="itemViewTitle">{cardProps.title}</h5>
            </div>
            <div className="itemViewPrice">Price: {cardProps.price}€</div>
            <div className="sizeTitle">Size:</div>
            <div className="itemSizeSelector">
                <div className="" data-testid="ProductSize-component" onClick={event => console.log(handleSizeSelectorClick(event))} id="">
                    <button className="itemSizeSelectorButton" title="XS">
                        <span>
                            <span>XS</span>
                        </span>
                    </button>
                </div>
                <div className="" data-testid="ProductSize-component" onClick={event => console.log(handleSizeSelectorClick(event))} id="">
                    <button className="itemSizeSelectorButton" title="S">
                        <span className="ProductSize_container__NRkWh">
                            <span className="ProductSize_DisplayLabel__x9KC_ Typography_Typography__jHH_m ck-alias_Typography__u21R5 Typography_bodyLarge__UaC_i">S</span>
                        </span>
                    </button>
                </div>
                <div className="" data-testid="ProductSize-component" onClick={event => console.log(handleSizeSelectorClick(event))}>
                    <button className="itemSizeSelectorButton" title="M">
                        <span className="ProductSize_container__NRkWh">
                            <span className="ProductSize_DisplayLabel__x9KC_ Typography_Typography__jHH_m ck-alias_Typography__u21R5 Typography_bodyLarge__UaC_i">M</span>
                        </span>
                    </button>
                </div>
                
            </div>
            <div className="addToCartButtonContainer">
                <ButtonTemplate onClick={handleAddToCartClick} text="Add to cart" />
            </div>
            <div className="detailsTitle">Details:</div>
            <div className="Accordion_Collapse__Vyg85" data-testid="accordion-collapse">
                <div id="description" className="detailsContent" role="region" aria-labelledby="description-accordion" data-testid="accordion-content">
                    <div className="Typography_Typography__jHH_m ck-alias_Typography__u21R5 Typography_body__kV8NM Typography_bodyMedium__g_5G8" data-testid="typography-div">
                        Young in attitude. Amplified classics. Calvin Klein 1996 is defined by bold prints and colours, featuring the iconic monogram logo framed in a box.<br /> These trunks are crafted with 88% sustainably sourced fabric.<br /><br />• microfiber jersey<br />• low rise waist<br />• Calvin Klein signature elastic waistband Our model is 1.86m (6ft 1in) and is wearing a size M.<br /><br />  88% recycled polyester 12% elastane machine wash tumble dry low fits true to size country of origin: India Boxers, trunks and briefs can only be returned if unopened in original packaging, unworn and in the same condition as delivered, with all tags attached.
                    </div>
                </div>
            </div>
        </div>) :
            (
                <>
                <div className="itemPageContainer">
                <div className="item-view-container-img">
                        <div>
                            <img src={mainImage}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = image_not_found;
                                }}
                                alt="Image not found"
                                className="itemViewImg"
                                id="mainImage"
                            />
                        </div>
                        {image.length > 1 && (
                            <div className="scroll-container">
                                {image.map((image, index) => (<img className="thumbnail" src={image} alt={`Image ${index + 1}`} key={index} onClick={(event) => handleThumbnailClick(image)} />))}
                            </div>
                        )}
                    </div>
                    <div className="item-view-container-buttons">
                        <div className="itemViewTitleContainer">
                            <h5 className="itemViewTitle">{cardProps.title}</h5>
                        </div>
                        <div className="itemViewPrice">Price: {cardProps.price}€</div>
                        <div className="sizeTitle">Size:</div>
                        <div className="itemSizeSelector">
                            <div className="" data-testid="ProductSize-component" onClick={event => console.log(handleSizeSelectorClick(event))} id="">
                                <button className="itemSizeSelectorButton" title="XS">
                                    <span>
                                        <span>XS</span>
                                    </span>
                                </button>
                            </div>
                            <div className="" data-testid="ProductSize-component" onClick={event => console.log(handleSizeSelectorClick(event))} id="">
                                <button className="itemSizeSelectorButton" title="S">
                                    <span className="ProductSize_container__NRkWh">
                                        <span className="ProductSize_DisplayLabel__x9KC_ Typography_Typography__jHH_m ck-alias_Typography__u21R5 Typography_bodyLarge__UaC_i">S</span>
                                    </span>
                                </button>
                            </div>
                            <div className="" data-testid="ProductSize-component" onClick={event => console.log(handleSizeSelectorClick(event))}>
                                <button className="itemSizeSelectorButton" title="M">
                                    <span className="ProductSize_container__NRkWh">
                                        <span className="ProductSize_DisplayLabel__x9KC_ Typography_Typography__jHH_m ck-alias_Typography__u21R5 Typography_bodyLarge__UaC_i">M</span>
                                    </span>
                                </button>
                            </div>
                            
                        </div>
                        <div className="addToCartButtonContainer">
                            <ButtonTemplate onClick={handleAddToCartClick} text="Add to cart" />
                        </div>
                        <div className="detailsTitle">Details:</div>
                        <div className="Accordion_Collapse__Vyg85" data-testid="accordion-collapse">
                            <div id="description" className="detailsContent" role="region" aria-labelledby="description-accordion" data-testid="accordion-content">
                                <div className="Typography_Typography__jHH_m ck-alias_Typography__u21R5 Typography_body__kV8NM Typography_bodyMedium__g_5G8" data-testid="typography-div">
                                    Young in attitude. Amplified classics. Calvin Klein 1996 is defined by bold prints and colours, featuring the iconic monogram logo framed in a box.<br /> These trunks are crafted with 88% sustainably sourced fabric.<br /><br />• microfiber jersey<br />• low rise waist<br />• Calvin Klein signature elastic waistband Our model is 1.86m (6ft 1in) and is wearing a size M.<br /><br />  88% recycled polyester 12% elastane machine wash tumble dry low fits true to size country of origin: India Boxers, trunks and briefs can only be returned if unopened in original packaging, unworn and in the same condition as delivered, with all tags attached.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                </>
            )
    );


}

export default ItemPage;