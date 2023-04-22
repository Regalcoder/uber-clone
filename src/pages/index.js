import Navbar from "../components/navbar";
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
      <section className="container">
        <img className="image" src={selectedData.backImage} alt="" />
        <div className="main">
          <div className="tabs">
            {data.map((item) => {
              return (
                <div className="items" key={item.id} onClick={() => setSelectedData(item)}>
                  <img className="" src={item.toggleImage} alt="" />
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
                  <button className="button">{selectedData.button}</button>
                  <Link className="link" to={selectedData.to}>{selectedData.link}</Link>
                </div>
              </>
            ) : (
              <>
                 <div className="inputContainer">
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
                     <button className="button1">{selectedData.button1}</button>
                     <button className="button2">{selectedData.button2}</button>
                 </div>
              </>
            )}
          </div>
        </div>
      </section>
     
    </div>  
    </>
  );
};

export default Home;
