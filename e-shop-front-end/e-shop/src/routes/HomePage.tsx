import image_not_found from '../images/test_cat_img.png';
import test_image from '../images/category_images/category_underwear_mens.png';
import profileIcon from '../images/loginForm/profileIcon.png'
import { useEffect } from 'react';


const HomePage = () => {

    const handleScroll = (event: any) => {
        event.preventDefault(); // Prevent default scroll behavior to avoid double scrolling
        event.currentTarget.scrollLeft += event.deltaY
    }

    useEffect(() => {
        const container = document.getElementById('scrollMenu');
    
        const options = { passive: false };
        if(container == null) return; 
        container.addEventListener('wheel', handleScroll, options);
    
        return () => {
          container.removeEventListener('wheel', handleScroll);
        };
      }, []);
    

    return (
        <>
            <div className="home-page-content-container">
                <div className="home-page-title">
                    <p>FEATURED COLLECTIONS</p>
                    <h1>Summer</h1>
                    <h1>Collections</h1>
                </div>
                <div className="category-scroll-container" id='scrollMenu'>
                    <div className="category-scroll-container-item">
                        <img src={profileIcon} alt="Image is not available" />
                        <p>MEN'S UNDERWEAR</p>
                    </div>
                    <div className="category-scroll-container-item">
                        <img src={profileIcon} alt="Image is not available" />
                        <p>MEN'S UNDERWEAR</p>
                    </div>
                    <div className="category-scroll-container-item">
                        <img src={profileIcon} alt="Image is not available" />
                        <p>MEN'S UNDERWEAR</p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default HomePage;