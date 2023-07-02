import image_not_found from '../images/test_cat_img.png';
import test_image from '../images/category_images/category_underwear_mens.png';

const HomePage = () => {

    return (
        <>
            <div className="home-page-content-container">
            <p>FEATURED COLLECTIONS</p>
            <div className="home-page-title">
                <h1>Summer</h1>
                <h1>Collections</h1>
            </div>
            <div className="category-scroll-container">
            <div className="category-scroll-container-item">
                <img src={test_image} alt="Image is not available" />
                <p>MEN'S UNDERWEAR</p>
            </div>
            
        </div>
        </div>
        
        </>
        
    );
}

export default HomePage;