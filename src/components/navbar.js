import '../styles/navbar.css'
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginModal';
import { useState } from 'react';
import SignupModal from './signupModal';
import { RxHamburgerMenu } from 'react-icons/rx';
import { ImCross } from 'react-icons/im'


const Navbar = () => {
    // navbar for mobile and tablet view
    const [Mobile, setMobile] = useState(false)

    // login modal state hook
    const [modal, setLoginModal] = useState(false);

    // sign up modal state hook
    const [modal2, setSignupModal] = useState(false);

    // conditional statement to check for when login modal is open or closed so as to toggle scroll bar
    const Toggle = () => {
        setLoginModal(true)
        document.body.style.overflow = 'hidden';
        
    };

    // company menu drop down state initialization
    const [content, setContent] = useState(false)

    const contentToggle = () => {
        if (!content){
            setContent(true)
        }else{
            setContent(false)
        }
        
    }

    const contentToggle2 = () => {
        if (!content){
            setContent(true)
        }else{
            setContent(false)
        }
        
    }

    const closeModal = () => {
        setLoginModal(!modal)

        document.body.style.overflow = 'unset';
    }


    // conditional statement to check for when signup modal is open or closed so as to toggle scroll bar
    const Toggle2 = () => {
        setSignupModal(true)
        document.body.style.overflow = 'hidden';
        
    };

    const mobileMenu = () => {
        if (!Mobile) {
            setMobile(true)
            document.body.style.overflow = 'hidden';
        }else {
            setMobile(false)
            document.body.style.overflow = 'unset';
        }
        
        
        
    };

    const closeModal2 = () => {
        setSignupModal(!modal2)

        document.body.style.overflow = 'unset';
    }

    return ( 
        <>
           <div className='nav'>
                <div className='menu1'>
                    <Link className='home' to='/'>Uber</Link>
                    
                    
                        
                </div>   
                <div className={Mobile ? 'menu-mobile' : 'menu2'} > 

                    <div className='buttonFlex'>
                        <div className='dropdown' onClick={() => contentToggle()}>
                            <button className="dropbtn" >Company 
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                    <path d="M18 11.7v3.8l-6-4.6-6 4.6v-3.8l6-4.6 6 4.6Z" fill="currentColor"></path>
                                </svg>
                            </button>
                            <div className={content ? 'dropdown-content' : 'dropdownNone'} >
                                <Link to="/aboutUs">About us</Link>
                                <Link to="/aboutUs">Our offerings</Link>
                                <Link to="/aboutUs">How Uber works</Link>
                                <Link to="/aboutUs">Global citizenship</Link>
                                <Link to="/aboutUs">Newsroom</Link>
                            </div>
                        </div>
                        <Link to='/safety'><button className='safety'>Safety</button></Link>
                    </div>

                    <div className="dropdown2" onClick={() => contentToggle2()}>
                            <button className="dropbtn2">
                                <svg className='prodImage' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z" fill="currentColor">

                                    </path>
                                </svg>
                            Products
                            </button>
                                <div className={content ? 'dropdown-content2' : 'dropdownNone2'}>
                                    <Link  to="/">
                                        <div className='dropdownFlexMenu'>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <title>Home</title>
                                            <path d="M12 1 2 10.1V23h20V10.1L12 1Zm7 19h-5v-6h-4v6H5v-8.6L12 5l7 6.4V20Z" fill="currentColor">
                                            </path>
                                        </svg>
                                            Home
                                        </div>
                                         
                                    </Link>
                                    <Link to="/ride">
                                        <div className='dropdownFlexMenu'>
                                            <img width='14px' src='car-front-outlined.svg' alt='' />
                                            Ride
                                        </div>
                                        
                                    </Link>
                                    <Link  to="/money">
                                        <div className='dropdownFlexMenu'>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                                <title>Money</title>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 20V4h22v16H1Zm16-6h3V7H7v3H4v7h13v-3Zm-2-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="currentColor">
                                                </path>
                                            </svg>
                                            Money
                                        </div>
                                         
                                    </Link>
                                    
                                </div>
                        </div>
                    
                    
                </div> 
                <div className='onMobile'>
                    <div className='menu3'>
                        <button onClick={() => Toggle()} className='help'>Log In</button>
                        <button onClick={() => Toggle2()}  className='signUp'>Sign Up</button>
                    </div>
                    <button onClick={() => mobileMenu()} className='mobile-menu-icon' >
                        {Mobile? <ImCross className='cross' /> : <RxHamburgerMenu/>}
                    </button>
                </div>
                
           </div>
           {/* the show={modal sets the modal jsx to become equal to the use state initial modal defined  in the hook on line 7} */}
           {/* the close which carries an onclick event from the modal jsx is set equal to the toggle function in line 8 where we have set the final state of the modal to false. */}
           {/* the {} symbol or curly braces is where we represent non jsx elements within a jsx body */}
           <LoginModal show={modal} title="My Modal" close={closeModal} />
           <SignupModal show2={modal2} title="My Modal" close2={closeModal2} />
        
        </>
     );
}
 
export default Navbar;