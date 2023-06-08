import { Link } from "react-router-dom";
import '../styles/forms.css'
import Navbar from "../components/navbar";

const Register = () => {
    return ( 
        <>
        <Navbar /> 
        <body>
            <section className="formSection">
               <h1 className="formHeader">What's your phone number or email?</h1>
               <input className="ForminputBox" placeholder="Enter phone number or email"/>
               <Link to='/'><button className="formButton">Continue</button></Link>
               <p className="paragraphLine"><span className="borders2">or</span></p>
               
               <Link className="noLine" to='/'>
                   <button className="googleButton">
                       <svg className="iconSize" width="18" height="18" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" class="d4 d5" preserveAspectRatio="xMidYMid">
                           <path d="M255.9 133.5c0-10.8-.9-18.6-2.8-26.7H130.6v48.4h71.9a63.8 63.8 0 01-26.7 42.4l-.2 1.6 38.7 30 2.7.3c24.7-22.8 38.9-56.3 38.9-96" fill="#4285F4">
                           </path>
                           <path d="M130.6 261.1c35.2 0 64.8-11.6 86.4-31.6l-41.2-32c-11 7.8-25.8 13.1-45.2 13.1a78.6 78.6 0 01-74.3-54.2l-1.5.1-40.3 31.2-.6 1.5C35.4 231.8 79.5 261 130.6 261" fill="#34A853">
                           </path>
                           <path d="M56.3 156.4a80.4 80.4 0 01-.2-51.7V103L15.3 71.3l-1.4.6a130.7 130.7 0 000 117.3l42.4-32.8" fill="#FBBC05">
                           </path>
                           <path d="M130.6 50.5c24.5 0 41 10.6 50.4 19.4L218 34C195.2 13 165.8 0 130.6 0 79.5 0 35.4 29.3 13.9 72l42.2 32.7a79 79 0 0174.4-54.2" fill="#EB4335">
                            </path>
                        </svg>
                        <span>Continue with Google</span>
                   </button>
               </Link>
               <Link className="noLine" to='/'>
                   <button className="googleButton2">
                        <svg className="iconSize2" width="22" height="22" viewBox="0 0 22 22" fill="#000000" xmlns="http://www.w3.org/2000/svg" class="d4 d5">
                            <g transform="matrix( 1 0 0 1 3 1 )"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2676 3.23104C11.9166 2.39314 12.4087 1.20886 12.2307 0C11.1698 0.0737252 9.92984 0.752465 9.2063 1.63717C8.54675 2.43878 8.00468 3.63126 8.21639 4.78863C9.37613 4.8249 10.5731 4.12978 11.2676 3.23104ZM17 14.6022C16.5359 15.6367 16.3125 16.099 15.7146 17.0153C14.8806 18.2943 13.7046 19.887 12.2459 19.8987C10.9512 19.9128 10.6173 19.0503 8.85967 19.0608C7.10203 19.0702 6.73561 19.9151 5.4386 19.9022C3.98106 19.8894 2.86668 18.4523 2.03264 17.1732C-0.300809 13.5993 -0.546251 9.404 0.892672 7.17235C1.91632 5.58785 3.53089 4.66101 5.04775 4.66101C6.59136 4.66101 7.56267 5.51295 8.84106 5.51295C10.0811 5.51295 10.836 4.65867 12.6216 4.65867C13.9733 4.65867 15.4052 5.39944 16.4242 6.67734C13.0834 8.5193 13.6243 13.3185 17 14.6022Z" fill="#000000" opacity="1">
                               </path>
                            </g>
                        </svg>
                        <span>Continue with Apple</span>
                   </button>
                </Link>
               <Link className="noLine" to='/'>
                   <button className="googleButton3">
                       <svg className="iconSize3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 266.9 266.9">
                           <path fill="#3C5A99" d="M248 262.3c8 0 14.3-6.4 14.3-14.2V18.8c0-7.8-6.4-14.2-14.2-14.2H18.8C11 4.6 4.6 11 4.6 18.8v229.3c0 7.8 6.4 14.2 14.2 14.2h229.3z">
                           </path><path fill="#FFF" d="M182.4 262.3v-99.8H216l5-38.9h-38.5V98.8c0-11.3 3.1-19 19.3-19h20.6V45c-3.6-.4-15.8-1.5-30-1.5-29.7 0-50 18.1-50 51.4v28.7h-33.6v38.9h33.5v99.8h40.2z">
                           </path>
                        </svg>
                        <span>Continue with Facebook</span>
                   </button>
                </Link>
                <p className="termsText">By proceeding, you consent to get calls, WhatsApp 
                   or SMS messages, including by automated means, from 
                   Uber and its affiliates to the number provided. 
                   This site is protected by reCAPTCHA and the Google <Link className="lastLink" to='/'>Privacy Policy</Link> and <Link className="lastLink"  to='/'> Terms of Service</Link> apply.
                </p>
            </section>
        </body>
           
        </>
     );
}
 
export default Register;