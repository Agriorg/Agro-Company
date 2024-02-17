import React from 'react'
// import whatwedo from "../img/whatwedo.png"
import frame1 from "../img/Frame 348.png"
import frame2 from "../img/Frame 349.png"
import frame3 from "../img/Frame 350.png"
import frame4 from "../img/Frame 351.png"
import frame5 from "../img/Frame 352.png"
import frame6 from "../img/Frame 353.png"
import leaves from "../img/leaves.jpg"
function Aboutmore() {

  return (
    <>
      <img src={leaves} alt='leaves' className='abtimg' />
      <div className='container' style={{ padding: '50px', marginLeft: '30px' }}>
        <div>
          <h2 className='main-title text-center' style={{fontSize:'35px'}}>About Company</h2>
          <p style={{fontSize:'23px',textAlign:'center'}}>
            The core idea behind the establishment of Agri Earth Exports PVT LTD has been to connect our rural Indian
            farmers in our supply chain reducing the exploitation of middlemen in the agriculture industry.
          </p>
          <p style={{fontSize:'23px',textAlign:'center'}}>
            Our company delivers only the best quality and value when it comes to agriculture products and supplements.
            We achieve this by using the finest-quality ingredients, trusted suppliers, and state-of-the-art facilities to cut out unnecessary costs.
            All of our products adhere to strict
            Food and Safety norms aligned with FSSAI and global standards.
          </p>
          <p style={{fontSize:'23px',textAlign:'center'}}>
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
      <h2 className='main-title text-center'>What  We Do?</h2> 
      <div className='customdiv3' style={{ marginTop: '5rem' }}>
        {/* <img src={whatwedo} className='whatimg' /> */}
        <img src={frame1} />
        <img src={frame2}/>
        <img src={frame3} />
        <img src={frame4} />
        <img src={frame5} />
        <img src={frame6} />
      </div>

    </>
  )
}

export default Aboutmore



// <ul className={`${isVisible ? 'fade-in' : ''} what`} ref={aboutRef}>
//   <li>
//     <b>Market-Driven Innovation: </b>We innovate by listening
//     to market needs, ensuring constant improvement.
//   </li>
//   <li>
//     <b>Quality without Compromise: </b>Our products are the
//     result of unwavering commitment to quality at every step of
//     the agricultural process.
//   </li>
//   <li>
//     <b>Farmer Empowerment: </b>We support farmers with soil
//     testing, crop guidance, and sustainable practices for optimal
//     yields.
//   </li>
//   <li>
//     <b>Continuous Quality Monitoring: </b>We maintain high
//     standards by monitoring fruit quality throughout the growing
//     season.
//   </li>
//   <li>
//     <b>Integrity in Agriculture: </b>Quality begins with our
//     rigorous agricultural processes, ensuring only the best goes
//     into our products.
//   </li>
//   <li>
//     <b>Environmental Awareness: </b>We keep farmers informed
//     with government weather forecasts to prepare for climate
//     change.
//   </li>
// </ul> */}