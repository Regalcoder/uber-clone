import { Link } from "react-router-dom";
import '../styles/modals.css'


const SignupModal = ({show2, close2}) => {
   
    
    return ( 
        <>
           {
            show2 ? 
            <body className="modalBody">
                <section onClick={(e) => e.stopPropagation()} className="modalContent">
                    <div className="modalCloseFlex">
                        <div className="modalClose">
                            <svg onClick={() => close2()} width="45" height="25" viewBox="0 0 24 24" fill="none" color="black">
                                <path d="m21.1 5.1-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9Z" fill="currentColor">
                                </path>
                            </svg>
                        </div>
                    </div>
                    
                    <div className="modalFlex">
                        <div className="modalSign">
                            <Link className="modalLinkFlex" to='/form'>
                                <h1 className="modalHeader">Sign up to drive & deliver</h1>
                                <svg className="imagePosition" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="m22.2 12-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9Z" fill="currentColor">
                                    </path>
                                </svg>
                            </Link>
                            
                        </div>
                        <div className="modalSign">
                        <Link className="modalLinkFlex" to='/form'>
                                <h1 className="modalHeader">Create a rider account</h1>
                                <svg className="imagePosition" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                    <path d="m22.2 12-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9Z" fill="currentColor">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            </body>
            :null
           }
        </>
     );
}
 
export default SignupModal;