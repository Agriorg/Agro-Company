import React, { useState, useEffect, useRef } from 'react'
import whatwedo from "../img/whatwedo.png"
import leaves from "../img/leaves.jpg"
function Aboutmore() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const aboutElement = aboutRef.current;

  //   const handleScroll = () => {
  //     const top = aboutElement.getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     setIsVisible(top < windowHeight);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <img src={leaves} alt='leaves' className='abtimg' />
      <div className='container' style={{ padding: '50px', marginLeft: '30px' }}>
        <div>
          <h2 className='main-title text-center'>About Company</h2>
          <p>
            The core idea behind the establishment of Agri Earth Exports PVT LTD has been to connect our rural Indian
            farmers in our supply chain reducing the exploitation of middlemen in the agriculture industry.
          </p>
          <p>
            Our company delivers only the best quality and value when it comes to agriculture products and supplements.
            We achieve this by using the finest-quality ingredients, trusted suppliers, and state-of-the-art facilities to cut out unnecessary costs.
            All of our products adhere to strict
            Food and Safety norms aligned with FSSAI and global standards.
          </p>
          <p>
            Agri Earth Exports PVT LTD was conceptualized in 2023 and set up our first operations in Maharashtra,
            the region that produces top-quality agriculture products in India.
            Our company is backed by experts with over five decades of experience in agriculture technology,
            and we believe in maintaining a healthy, long-term relationship with our suppliers without compromising on quality.
            At Agri Earth Exports PVT LTD, we bring high-quality agriculture products in different variants, and our unique process,
            technology, and compliance with the highest international quality standards set us apart. We monitor the entire product life cycle
            to ensure that you receive only the best quality. Our quality check begins with the feed provided to the farms,
            water testing and levels, and soil testings.
          </p>
        </div>
      </div>
      <div className='customdiv3' style={{ marginTop: '5rem' }}>
        <img src={whatwedo} className='whatimg' />
        {/* <h2 className='main-title text-center what'>What  We Do?</h2>
        <ul className={`${isVisible ? 'fade-in' : ''} what`} ref={aboutRef}>
          <li>
            <b>Market-Driven Innovation: </b>We innovate by listening
            to market needs, ensuring constant improvement.
          </li>
          <li>
            <b>Quality without Compromise: </b>Our products are the
            result of unwavering commitment to quality at every step of
            the agricultural process.
          </li>
          <li>
            <b>Farmer Empowerment: </b>We support farmers with soil
            testing, crop guidance, and sustainable practices for optimal
            yields.
          </li>
          <li>
            <b>Continuous Quality Monitoring: </b>We maintain high
            standards by monitoring fruit quality throughout the growing
            season.
          </li>
          <li>
            <b>Integrity in Agriculture: </b>Quality begins with our
            rigorous agricultural processes, ensuring only the best goes
            into our products.
          </li>
          <li>
            <b>Environmental Awareness: </b>We keep farmers informed
            with government weather forecasts to prepare for climate
            change.
          </li>
        </ul> */}
      </div>

    </>
  )
}

export default Aboutmore