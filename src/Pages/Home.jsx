import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Announcement from '../Components/Announcement.jsx';
import Slider from '../Components/Slider.jsx';
import Categories from '../Components/Categories.jsx';
import Products from '../Components/Products.jsx';
import NewsLetter from '../Components/NewsLetter.jsx';
import Footer from '../Components/Footer.jsx';


const Home = () => {
    return(
        <React.Fragment> 
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>

        </React.Fragment>
    )
}

export default Home;