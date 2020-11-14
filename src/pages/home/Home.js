import React from "react";
import { Link } from "react-router-dom";
import SigninButton from "../../components/buttons/SigninButton";
import Product from "../../components/product/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "./images/hero.jpg";
import hero2 from "./images/amazonHero2.jpg";
import hero3 from "./images/brightCream16x9.jpg";
import hero4 from "./images/tablet16x9.jpg";
import CarouselArrow from "./CarouselArrow";
import "./Home.css";

const Home = () => {
   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      nextArrow: <CarouselArrow type="next" />,
      prevArrow: <CarouselArrow type="prev" />,
   };
   return (
      <>
         <div className="home">
            <Slider {...settings}>
               <img src={hero} alt="hero" className="home__hero" />
               <img src={hero2} alt="hero2" className="home__hero" />
               <img src={hero3} alt="hero2" className="home__hero" />
               <img src={hero4} alt="hero2" className="home__hero" />
            </Slider>
            <div className="home__row">
               <Product
                  id="1"
                  title="Deal of the Day"
                  name="PC set"
                  img="../images/amazonProduct.jpg"
                  price="70.3"
                  description="Is made in Germany, reliable and water proof, 1 year guarantee"
                  rating={4}
               />
               <Product
                  id="2"
                  title="New Arrival"
                  name="DSLR"
                  img="../images/amazonProduct3.jpg"
                  price="800.3"
                  description="Tech items eliable and water proof, 1 year guarantee"
                  rating={3}
               />
               <Product
                  id="3"
                  title="Alexa ot your car"
                  name="Alexa"
                  img="../images/amazonProduct2.jpg"
                  price="90.99"
                  description="Another new arrival and water proof, 1 year guarantee"
                  rating={3}
               />
               <div className="home__card">
                  <div className="home__card-signin">
                     <h3>Sign in for your best experience</h3>
                     <Link to="/signin">
                        <SigninButton />
                     </Link>
                  </div>
                  <div className="home__card-bottom">
                     <img src="../images/amazonProduct4.jpg" alt="speaker" />
                     <h3>amazon essentials</h3>
                  </div>
               </div>
            </div>
            <div className="home__row">
               <Product
                  id="4"
                  title="Blurr Watch"
                  name="Watch"
                  img="../images/blur1.jpg"
                  price="40.3"
                  description="Made in Germany, reliable and water proof"
                  rating={3}
               />
               <Product
                  id="6"
                  title="Cup"
                  name="Coffee cup"
                  img="../images/coffee.jpg"
                  price="40.3"
                  description=" Daily use ceramic coffee cup in 3 colors "
                  rating={2}
               />
            </div>
            <div className="home__row">
               <Product
                  id="5"
                  title="Watch"
                  name="Classic"
                  img="../images/brass1.jpg"
                  price="40.3"
                  description="Is made in Germany, reliable and water proof, 1 year guarantee"
                  rating={5}
               />
            </div>
         </div>
      </>
   );
};
export default Home;
