import Navbar from "../components/navbar";
import '../styles/ride.css'
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
                        <Link className="rideButtonContainer" to='/form'>
                           <button className="rideButton">Sign up to ride</button>
                        </Link>
                    </div>
                    <div className="rideContainer2">
                        <img width='400px' src='travelling.webp' alt=""/>
                    </div>
                 </div>
              </section>
           </body>
        </>
     );
}
 
export default Ride;