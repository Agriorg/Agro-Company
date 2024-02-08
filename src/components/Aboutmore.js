import React , {useState,useEffect,useRef}from 'react'

function Aboutmore() {
    const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutElement = aboutRef.current;

    const handleScroll = () => {
      const top = aboutElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className='container' style={{padding:'76px'}}>
      <h2 className='main-title text-center'>What  We Do?</h2>
                    <ul   className ={`${isVisible ?  'fade-in' : ''}`}   ref={aboutRef}>
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
              </ul>
    </div>
  )
}

export default Aboutmore