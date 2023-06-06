import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const data = [
  {
    id: "product-1",
    toggleImage: "/Earn-filled.svg",
    title: "Drive or deliver",
    backImage: "driver.webp",
    header: "Get in the driver's seat and get paid",
    description:
      "Drive on the platform with the largest network of active riders",
    button: "sign up to drive",
    link: "learn more about driving and delivering",
    to: "#",
  },
  {
    id: "product-2",
    toggleImage: "restaurant.svg",
    title: "Eat",
    backImage: "eat.webp",
    header: "Discover delicious eats",
    description: "Order delivery from restaurants you love",
    button: "Order now",
    link: "Own a restaurant? Partner with Uber Eats",
  },
  {
    id: "product-3",
    toggleImage: "car-front-outlined.svg",
    title: "Ride",
    backImage: "pickUp.webp",
    header: "Request a ride now",
    description: "Order delivery from restaurants you love",
    placeholder1: "Enter pickup location",
    placeholder2: "Enter destination",
    button1: "Request now",
    button2: "Schedule for later",
  },
];

const Home = () => {
  const [selectedData, setSelectedData] = useState(data[0]);

  return (
    <>
      <Navbar />
     <div className="body">
      <br/><br/><br/>
      {/* <section className="container">
        <img className="image" src={selectedData.backImage} alt="" />
        <div className="main">
          <div className="tabs">
            {data.map((item) => {
              return (
                <div className="items" key={item.id} onClick={() => setSelectedData(item)}>
                  <img className={item.id !== "product-2" ? "img" : null} src={item.toggleImage} alt="" />
                  <p>{item.title}</p>
                  {selectedData.id === item.id ? (
                    <span className="tab-active" />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="containerBody">
            <h1 className="header">{selectedData.header}</h1>
            
            {selectedData.id !== "product-3" ? (
              <>
                <p className="texts">{selectedData.description}</p>
                <div className={selectedData.id === "product-1" ? "column" : "row"}>
                  <Link to='/form'><button className="button">{selectedData.button}</button></Link>
                  <Link className="link" to='/form'>{selectedData.link}</Link>
                </div>
              </>  
            ) : (     
              <>     */}
              {/* the bracket used above is used to capture the conditional statement that must be carried out when a condition is reached. everything contained in the bracket is treated as single */}
                  {/* <div className="inputContainer">
                    <input className="inputBox" type="text" placeholder="Enter pickup location"/>
                        <Link className="sendIcon">
                          <svg aria-hidden="true" focusable="false" width="16px" height="16px" fill="currentColor" viewBox="0 0 24 24" tabindex="0" role="button" aria-label="Locate me" class="pe-location-fetch css-jeUcem">
                              <path d="M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z">
                              </path>
                          </svg>
                        </Link>
                        
                    
                 </div>
                 
                 <input className="inputBox2" type="text" placeholder="Enter destination"/>
                 <div className="buttonContainer">
                     <Link to='/form'><button className="button1">{selectedData.button1}</button></Link>
                     <Link to='/form'><button className="button2">{selectedData.button2}</button></Link>
                 </div>
              </>
            )}
          </div>
        </div>
      </section> */}
   {/*   <section className="container2">
        <img className="backImage2" src="empirestate.jpg" alt=""/>
        <div className="subContainer">
          <h1 className="headerText">Uber for Business</h1>
          <p className="paraText">Transform the way your company moves and feeds its people</p>
          <Link to='/'>
              <button className="seeButton">see how</button>
          </Link>
        </div>
        
      </section>
      <section className="container3">
        <h1 className="headertext">Focused on safety, wherever you go</h1>
        <div className="subContainerFlex">
          <div className="flex1">
            <img className="image1" src="Safety_Home_Img2x.png" alt=""/>
            <h3 className="midHeader">Our commitment to your safety</h3>
            <p className="midText">
              With every safety feature and every standard in our Community 
              Guidelines, we're committed to helping to create a safe environment 
              for our users.
            </p>
            <div className="linkContainer">
              <Link className="links" to='#'>Read about our Community Guidelines</Link>
              <Link className="links" to='#'>See all safety features</Link>
            </div>
          </div>
          <div className="flex2">
            <img className="image1" src="Cities_Home_Img2x.webp" alt=""/>
            <h3 className="midHeader">Seting 10,000+ cities in motion</h3>
            <p className="midText">
              The app is available in thousands of cities worldwide,
              so you can request a ride even when you're far from home
            </p>
            <Link className="links2" to='#'>View all cities</Link>
          </div>
        </div>
        <div className="subContainer3">
          <div className="sub1">
            <img className="people" src="person-multiple-outlined.svg" alt=""/>
            <h4 className="about">About us</h4>
            <p className="find">
              Find out how we started, what drives us,
              and how we're reimagining how the world moves.
            </p>
            <Link className="links2">Learn more about Uber</Link>
          </div>
          <div className="sub2">
            <img className="people" src="document-outlined.svg" alt=""/>
            <h4 className="about">Newsroom</h4>
            <p className="find">
              See announcements about our latest releases,
              initiative, and partnerships.
            </p>
            <Link className="links2">Go to Newsroom</Link>
          </div>
          <div className="sub3">
          < img className="people" src="home-outlined.svg" alt=""/>
            <h4 className="about">Global citizenship</h4>
            <p className="find">
              Read about our commitment to making a 
              positive impact in the cities we serve
            </p>
            <Link className="links2">See our partnerships</Link>
          </div>
        </div>
      </section>
      <section className="container4">
        <h1 className="heading">There's more to love in the apps</h1>
        <div className="containerFlex">
          
            <Link className="containerFlex1" to='https://skuo.app.link/Wnc0AB7j0ib?%243p=a_custom_47734&%24uri_redirect_mode=1&uclick_id=138ae22a-f799-4b38-b262-3730b5c3aa13&~campaign=uber-com-homepage-block&~tune_publisher_sub1=a5ad1b1d-fff6-4e2a-96f9-1c0fb579b5b9'>
                <div className="flex arrow">
                  <img height='155px' src="driver-app-logo.webp" alt=""/>
                  <h3 className="noLink">Download the driver app</h3>
                </div>
            </Link>
          
          
            <Link className="containerFlex1" to='https://ocie.app.link/6qlyRoi7dfb?%243p=a_custom_47734&uclick_id=138ae22a-f799-4b38-b262-3730b5c3aa13&~tune_publisher_sub1=a5ad1b1d-fff6-4e2a-96f9-1c0fb579b5b9'>
                <div className="flex arrow">
                  <img height='155px' src="rider-app-logo.webp" alt=""/>
                  <h3 className="noLink">Download the uber app</h3>
                </div>
            </Link>
          </div>
      </section>  
      <section className="container5">
        <Link to='#' class="arrow-button">
          <h1>Sign up to drive</h1>
          <span class="arrow2"></span>
        </Link>
        <Link to='#' class="arrow-button">
          <h1>Sign up to ride</h1>
          <span class="arrow2"></span>
        </Link>
      </section>   */}
      
     
    </div>   
    <Footer/>
    
    </>
  );
};

export default Home;
