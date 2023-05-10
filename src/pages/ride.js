import Navbar from "../components/navbar";
import Footer from '../components/footer'
import "../styles/ride.css";
import { Link } from "react-router-dom";

const Ride = () => {
  return (
    <>
      <Navbar />
      <body>
        <section className="rideSection">
          <div className="rideFlex">
            <div className="rideContainer1">
              <h1 className="rideHeader1">Always the ride you want</h1>
              <p>Request a ride, hop in, and relax</p>
              <Link className="rideButtonContainer" to="/form">
                <button className="rideButton">Sign up to ride</button>
              </Link>
            </div>
            <div className="rideContainer2">
              <img width="400px" src="travelling.webp" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="rideContainer3">
            <h1 className="rideHeader2">Why use the Uber app?</h1>
            <div className="ridersImage">
               <img src="animated-riders.svg" alt='animated riders' />
            </div>
            <div className="riderContainerFlex">
               <div className="flexBox1">
                  <img width='25' src='clock.svg' alt='clock' />
                  <h3>Rides on demand</h3>
                  <p>Request a ride at anytime and on any day of the year.</p>
               </div>
               <div className="flexBox1">
                  <img width='25' src="money.svg" alt="money" />
                  <h3>Budget-friendly option</h3>
                  <p>Compare prices on every kind of ride, from daily commutes to special evenings out.</p>
               </div>
               <div className="flexBox1">
                  <img width='25' src='reportMap.svg' alt="map and location" />
                  <h3>An easy way to get around</h3>
                  <p>Tap and let your driver take you where you want to go.</p>
               </div>
            </div>
          </div>
        </section>
        <section>
         <div className="rideContainer4">
            <h1 className="rideHeader2">Your safety matters</h1>
            <p>Peace of mind is designed into your experience</p>
            <div className="riderContainerFlex2">
               <div className="flexBox2">
                  <img width='50' src="star-shield.svg" alt="star shield logo" />
                  <h3>Safety features</h3>
                  <p>Tell your loved ones where you are.
                     Get help with the tap of a button. Technology makes
                     travel safer than ever before.
                  </p>
               </div>
               <div className="flexBox2">
                  <img width='50' src="community-guidelines.svg" alt="community-guidelines" />
                  <h3>An inclusive community</h3>
                  <p>We are millions of riders and drivers 
                     who share Community Guidelines and 
                     depend on one another to do the right thing.
                  </p>
               </div>
               <div className="flexBox2">
                  <img width='50' src="24_7-support.svg" alt="24_7-support" />
                  <h3>Help if you need it</h3>
                  <p>Get 24/7 support in the app
                     for any questions or safety concerns
                     you might have
                  </p>
               </div>
            </div>
            <Link to='/safety' className="linkText">Learn more about safety</Link>
         </div>
        </section>
        <section>
         <div className="rideContainer5">
            <h1 className="rideHeader2">Everywhere that you travel</h1>
            <div className="riderContainerFlex3">
               <div className="flexBox3">
                  <img width='500' src="cities.webp" alt="landmark cities" />
                  <h3>10,000+ cities</h3>
                  <p>The app is available in thousands of
                     cities worldwide, so you can request
                     a ride even when you're far from home.
                  </p>
               </div>
               <div className="flexBox3">
                  <img width='500' src="traveler.webp" alt="landmark cities" />
                  <h3>600+ airports</h3>
                  <p>You can get a ride to and from most
                     major airports. Schedule a ride to 
                     the airport for one less thing to worry 
                     about.
                  </p>
               </div>
            </div>
         </div>
        </section>
        <section className="rideSession">
         <div className="rideContainer6">
            <img height='350' src="womanwithphone.svg" alt="woman with phone" />
            <div className="flexBox4">
               <h1 className="rideHeader3">Ways people move around the world</h1>
               <p>The Uber app gives you the power to 
                  get where you want to go with access 
                  to different types of rides across more 
                  than 10,000 cities.
               </p>
               <Link to='/ride'><button className="rideButton2">View ride options</button></Link>
            </div>
         </div>
        </section>
        <section>
         <div className="rideContainer7">
            <h1 className="rideHeader2">Frequently asked questions</h1>
            
                <div className='faqContent2'>
                        <details>
                            <summary>
                                <span className="summary-title">How do I create an account?</span>
                            </summary>

                            <div className="summary-content"> 
                              Download the Uber app from the App Store or Google Play, 
                              then create an account with your email address and mobile 
                              phone number. A payment method is also needed before you 
                              can request a ride.
                            </div>
                        </details>
                    </div>

                    <div className='faqContent2'>
                        <details>
                            <summary>
                                <span className="summary-title">Is Uber available in my city?</span>
                            </summary>

                            <div className="summary-content"> 
                              You can find Uber in more than 10,000 
                              cities around the world.
                            </div>
                        </details>
                    </div>

                    <div className='faqContent2'>
                        <details>
                            <summary>
                                <span className="summary-title">How do i request a ride?</span>
                            </summary>

                            <div className="summary-content"> 
                                 When you’re ready to go, open 
                                 the app and enter your destination. 
                                 Then choose the ride option that best
                                 suits your needs. Confirm your pickup 
                                 by tapping Confirm Pickup.
                            </div>
                        </details>
                    </div>

                    <div className='faqContent2'>
                        <details>
                            <summary>
                                <span className="summary-title">Can i use Uber without a smartphone?</span>
                            </summary>

                            <div className="summary-content"> 
                               Yes, in certain markets you can 
                               request a ride by signing in to 
                               m.uber.com.
                            </div>
                        </details>
                    </div>
            
         </div>
        </section>
        <Footer />
      </body>
    </>
  );
};

export default Ride;
