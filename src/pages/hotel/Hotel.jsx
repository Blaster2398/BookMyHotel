import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './hotel.css';
import { faCircleArrowRight, faIndianRupeeSign, faLocationDot, faCircleArrowLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import { useState } from 'react';

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206683386.jpg?k=b63335d3b0e3ecaed0a67ea1663a1bb5b88b2ae2bc948a5dd19e7bd2744328a9&o=&hp=1" },
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/206683386.jpg?k=b63335d3b0e3ecaed0a67ea1663a1bb5b88b2ae2bc948a5dd19e7bd2744328a9&o=&hp=1" },
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538920140.jpg?k=b32eea2ddf3882ebc607dabd6de7d0e3c453549be2d581b73a449f2b4ef123b5&o=&hp=1" },
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538919384.jpg?k=d710a07832ba9492c9cbc8aab00c0094d4422a5915bc2bd83afe7de789d96a86&o=&hp=1" },
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538919111.jpg?k=29b09322cc169eef595b830b1fb3d03cbc2ebef5f4834ef39e75d8c636f040bd&o=&hp=1" },
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/538919828.jpg?k=41a2005937862a963b9cb222729164f62b4688b1d669db7a4e9086b6908c25cb&o=&hp=1" },
    { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/294945513.jpg?k=5690258777944537396d6ba3ab151e91ee541531796884989f708cdb17961293&o=&hp=1" }
  ];

  const handleOpen = (index) => {
    setOpen(true);
    setSlideNumber(index);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={() => handleMove('left')} />
              <div className="sliderWrapper">
                <img src={photos[slideNumber].src} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove('right')} />
            </div>
          )}
          <div className="hotelWrapper">
            <button className="bookNow">Book Now</button>
            <h1 className="hotelTitle">Plaza Resort</h1>
            <div className="hotelAddress">
              <span className='hAddDesc'>
                <FontAwesomeIcon icon={faLocationDot} /> Beverly Villa, near new era school, pudumund 643001 Ooty, India
                <span className="hAddExtra"> - Excellent Location - 100m from City Center </span>
              </span>
              <span className="hotelPriceHighlight">
                Book a stay over <FontAwesomeIcon icon={faIndianRupeeSign} /> 5999 at this property and get a free taxi
              </span>
            </div>
            <div className="hotelImgs">
              <div className="upperImg">
                <div className="hleft">
                  {photos.slice(0, 2).map((photo, index) => (
                    <img onClick={() => handleOpen(index)} src={photo.src} className='hImg' alt='' key={index} />
                  ))}
                </div>
                <div className="hright">
                  <img onClick={() => handleOpen(2)} src={photos[2].src} className='hImg' alt='' />
                </div>
              </div>
              <div className="lowerImg">
                {photos.slice(3).map((photo, index) => (
                  <img onClick={() => handleOpen(index + 3)} src={photo.src} className='hImg' alt='' key={index + 3} />
                ))}
              </div>
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h2 className="hotelTitle">Stay in the Comfort of Ooty</h2>
                <p className="hotelDesc">
                  Located in Ooty and with Ooty Lake reachable within 2.5 miles, Beverly villa provides express check-in and check-out, allergy-free rooms, a garden, free WiFi throughout the property, and a terrace. This 3-star hotel offers a 24-hour front desk and room service. There is free private parking and the property has paid airport shuttle service.
                  <br /><br />
                  Guest rooms at the hotel are equipped with a seating area, a flat-screen TV with satellite channels, a safety deposit box, and a private bathroom with a shower, a hairdryer, and free toiletries. Each room includes an electric tea pot, while selected rooms have a kitchenette with a dishwasher, a microwave, and a fridge. At Beverly villa, all rooms are equipped with bed linen and towels.
                  <br /><br />
                  Ooty Botanical Gardens is an 18-minute walk from the accommodation, while Ooty Rose Garden is 1.1 miles away. The nearest airport is Coimbatore International Airport, 60 miles from Beverly villa.
                  Couples in particular like the location – they rated it 9.4 for a two-person trip.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for 3-night stay!</h1>
                <span>Top Location: Highly rated by recent guests 9.2!</span>
                <h2>
                  <b><FontAwesomeIcon icon={faIndianRupeeSign} /> 12999</b> (3 Nights)
                </h2>
                <button>Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </>
  );
}

export default Hotel;
