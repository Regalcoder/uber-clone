import Navbar from "../components/navbar";
import '../styles/home.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

    // carousel data

    const data = [
        {
            id: "product-1",
            toggleImage: "Earn-filled.svg",
            title: "Drive or deliver",
            backImage: "driver.webp",
            header: "Get in the driver's seat and get paid",
            description: "Drive on the platform with the largest network of active riders",
            button: "sign up to drive",
            link: "learn more about driving and delivering"
        },

        {
            id: "product-2",
            toggleImage: "restaurant.svg",
            title: "Drive or deliver",
            backImage: "eat.webp",
            header: "Discover delicious eats",
            description: "Order delivery from restaurants you love",
            button: "Order now",
            link: "Own a restaurant? Partner with Uber Eats"
        },

        {
            id: "product-3",
            toggleImage: "car-front-outlined.svg",
            title: "Drive or deliver",
            backImage: "pickUp.webp",
            header: "Request a ride now",
            description: "Order delivery from restaurants you love",
            placeholder: "Enter pickup location",
            placeholder: "Enter destination",
            button: "Request now",
            button: "Schedule for later"     
        }
    ];
    const [toggled, setToggled] = useState()

    return ( 
        <>
          <Navbar/>
           <div className="body">
            {/* first map to loop through the title, id and background image. */}
               {
                    data.map(({title, id, backImage}) => {
                        return(
                            <div className="main">
                                <image src={backImage}/>
                                
                                    <div className="toggleContainer">
                                      <Link to='' 
                                        onClick={() => setToggled(id)} 
                                        className="toggleButtons">
                                        <image src={toggleImage}/>{title}
                                      </Link>
                                    </div>
                                
                            </div>
                        )
                    })
               }
{/* second map to map through the div contents that we want to toggle. i'm layering the buttons on it as two different containers */}
               {
                 data.map(({id, toggleImage, title, backImage, header, description, placeholder, button }) =>{
                    return(
                        <>
                        {/* conditional statement set to test the state hook with the id and display its content when true and nohing when false */}
                            {toggled === id ? (
                                <div className="wrapper">
                                    <h2>{header}</h2>
                                    <p>{description}</p>
                                    <button>{button}</button>
                                </div>
                            ) : null }
                        </>
                    )
                 })
               }
           </div>
        
        </>
     );
}
 
export default Home;