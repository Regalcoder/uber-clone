import Navbar from "../components/navbar";
import '../styles/home.css';
import { Link } from "react-router-dom";
import { useState } from "react";
const data = [
    {
        id: "product-1",
        toggleImage: "/Earn-filled.svg",
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
const Home = () => {

    // carousel data

    

    const [toggled, setToggled] = useState()
    const [currentImage, setCurrentImage] = useState(data[0].backImage)

    return ( 
        <>
          <Navbar/>
           <div className="body">
                <img className="image" src={currentImage} alt=''/>
                <div className="main"></div>
           </div>
        
        </>
     );
}
 
export default Home;