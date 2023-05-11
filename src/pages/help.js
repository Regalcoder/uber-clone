import '../styles/help.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

const Help = () => {
    return ( 
        <>
        <Navbar />
        <body>
            <section className='helpSection1'>
                <div className='helpSection1__content'>
                    <h1 className='helpHeader'>Welcome to Uber Support</h1>
                    <p>How can we help?</p>
                    <div className='helpFlex'>
                        <Link to='/ride.js' className='noDecor'>
                            <div className='helpflexBox'>
                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                                <title>Car front</title>
                                <path d="m20.9 9-1.5-4.6c-.3-.8-1-1.4-1.9-1.4H6.4c-.9 0-1.6.5-1.9 1.4L3 9H1v3h1v9h4v-2h12v2h4v-9h1V9h-2.1ZM5 14h4v2H5v-2Zm10 2v-2h4v2h-4ZM7.1 6h9.7l1.3 4H5.8l1.3-4Z" fill="currentColor"></path>
                            </svg>
                            <h3>Riders</h3>
                        </div>
                        </Link>
                        <Link className='noDecor' to='/money.js'>
                            <div className='helpflexBox'>
                                <img src='money.svg' alt='money' />
                                <h3>Money</h3>
                            </div>
                        </Link>
                        <Link className='noDecor' to='/'>
                            <div className='helpflexBox'>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                                    <title>Restaurant</title>
                                    <g fill="currentColor">
                                        <path d="M9 8V1h2v7c0 2.3-1.5 4.2-3.5 4.8V23h-3V12.8C2.5 12.1 1 10.2 1 8V1h2v7h2V1h2v7h2ZM13 6c0-2.8 2.2-5 5-5s5 2.2 5 5v2c0 2.2-1.5 4.1-3.5 4.7V23h-3V12.7c-2-.6-3.5-2.5-3.5-4.7V6Z"></path>
                                    </g>
                                </svg>
                                <h3>Uber Eats</h3>
                            </div>
                        </Link>
                        <Link className='noDecor' to='/money'>
                            <div className='helpflexBox'>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                                    <title>Briefcase</title>
                                    <path d="M18 7V2H6v5H1v15h22V7h-5Zm-3 0H9V5h6v2Z" fill="currentColor"></path>
                                </svg>
                                <h3>Business</h3>
                            </div>
                        </Link>
                        <Link className='noDecor' to='/safety'>
                            <div className='helpflexBox'>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none">
                                    <title>Truck</title>
                                    <path d="M22 10V1H2v9H1v6h2v7h4v-2h10v2h4v-7h2v-6h-1Zm-4 9h-4v-2h4v2Zm0-6H6V9h12v4ZM6 17h4v2H6v-2Z" fill="currentColor"></path>
                                </svg>
                                <h3>Freight</h3>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </section>
        </body>
        <Footer />  
        </>
     );
}
 
export default Help;