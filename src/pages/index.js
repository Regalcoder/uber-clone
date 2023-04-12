import Navbar from "../components/navbar";
import '../styles/home.css';
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <>
          <Navbar/>
          <div>
                <ul>
                    <li>
                        <a className="links" href='#drive'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <path fill="#000" d="M6 16H2v4h4v-4zM11.5 12h-4v8h4v-8zM17 8h-4v12h4V8zM22.5 4h-4v16h4V4z"/>
                            </svg>
                            Drive or deliver
                        </a>
                        <div className="content">
                            <h1>Get in the driver's seat and get paid</h1>
                            <p>Drive on the platform with the largest network of active riders</p>
                            <button>Sign up to drive</button>
                            <Link to='#'>Learn more about driving and delivering</Link>
                        </div>
                    </li>
                    <li>
                        <a className="links" href='#eat'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <g transform="translate(1 1)">
                                    <path fill="currentColor" fill-rule="evenodd" d="M10 7V0H8v7H6V0H4v7H2V0H0v7c0 2.3 1.5 4.2 3.5 4.8V22h3V11.8c2-.7 3.5-2.6 3.5-4.8zm2-2c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V22h-3V11.7c-2-.6-3.5-2.5-3.5-4.7V5zm5 4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2s-2 .9-2 2v2c0 1.1.9 2 2 2z" clip-rule="evenodd"/>
                                </g>
                            </svg>
                            Eat
                        </a>
                        <div className="content">
                            <h1>Discover delicious eats</h1>
                            <p>Order delivery from restaurants you love</p>
                            <div>
                                <button>Order now</button>
                                <Link to=''><p>Own a restaurant? Partner with Uber Eats</p></Link>
                            </div>
                        </div>
                        
                    </li>
                    <li>
                        <a className="links" href='#ride'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                <g transform="translate(1 3)">
                                    <path fill="currentColor" d="M20 6l-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H5.4c-.8 0-1.6.6-1.9 1.4L2 6H0v3h1v9h4v-2h12v2h4V9h1V6h-2zm-3 7H4v-1h4V9H4.2l2-6h9.7l2 6H14v3h4v1h-1z"/>
                                </g>
                            </svg>
                            Ride
                        </a>
                        <div className="content">
                            <h1>Request a ride now</h1>
                            <form>
                                <div>
                                    <input type="text" placeholder="Enter pickup location"/>
                                    <input type="text" placeholder="Enter destination"/>
                                </div>
                                <div>
                                    <button>Request now</button>
                                    <button>Schedule for later</button>
                                </div>
                                
                            </form>
                        </div>
                        
                    </li>
                </ul>
                <div >
                    <section id='drive'>
                        <image src='driver.webp'/>
                    </section>
                    <section id='eat'>
                        <image src='eat.webp'/>
                    </section>
                    <section id='ride'>
                        <image src='pickUp.webp'/>
                    </section>
                </div>
          </div>
        
        </>
     );
}
 
export default Home;