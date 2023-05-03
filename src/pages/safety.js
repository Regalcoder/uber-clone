import Footer from "../components/footer";
import Navbar from "../components/navbar";
import '../styles/safety.css'

const Safety = () => {
    return ( 
        <>
          <Navbar />
           <body>
              <section className="section1">
                <div className="container1">
                    <div className="subContainer1">
                        <h1 className="headerText1">Our commitment to safety</h1>
                        <p className="paraTexts1">We want you to move freely, make the most of your 
                            time, and be connected to the people and places that 
                            matter most to you. That’s why we are committed to safety, 
                            from the creation of new standards to the development of 
                            technology with the aim of reducing incidents.
                        </p>
                    </div>
                    <div className="subContainer1">
                        <img src="smiling-mum.webp" width='550px' alt=""/>
                    </div>
                </div>
              </section>
              <section className="nextSection">
                <div className="nextSub">
                    <h1 className="headertexts2">Helping to keep each other safe during COVID-19</h1>
                    <p>We’re actively monitoring the coronavirus (COVID-19) 
                        situation and are continually working to help keep 
                        those who rely on our platform healthy and safe
                    </p>
                </div>
              </section>
              <section className="nextSection2">
                <h1 className="headerTexts3">How safety is built into your experience</h1>
                <div className="subFlex">
                    <div className="subContainers">
                        <h3 className="subHeader">Safety features in the app</h3>
                        <p className="paragraphs">Share your trip details with loved ones. 
                            Track your trip during your ride. Our 
                            technology helps put peace of mind at your 
                            fingertips.
                        </p>
                    </div>
                    <div className="subContainers">
                        <h3 className="subHeader">An inclusive community</h3>
                        <p className="paragraphs">Millions of riders and drivers share a set of Community 
                            Guidelines, holding each other accountable to do the right thing.
                        </p>
                    </div>
                    <div className="subContainers">
                        <h3 className="subHeader">Support at every turn</h3>
                        <p className="paragraphs">A specially trained team is available 24/7. Reach them in the app, 
                            day or night, with any questions or safety concerns.
                        </p>
                    </div>
                </div>
              </section>
              <section className="nextsection3">
                <h1 className="headerTexts4">Building safer journeys for everyone</h1>
                <div className="subFlex2">
                    <div className="box">
                        <img width='550px' src='smiling-guy.webp' alt='guy sitting on car' />
                        <h3 className="subHeaders">Driver safety</h3>
                        <p className="paragraphs">Count on 24/7 support to help with any questions or 
                            safety concerns. Share your trip with loved ones. 
                            Our focus is on your safety, so you can go where the 
                            opportunity is.
                        </p>
                    </div>
                    <div className="box">
                        <img  width='550px' src='girl-hat.webp' alt='smiling girl wearing a hat' />
                        <h3 className="subHeaders">Ride safety</h3>
                        <p>Millions of rides are requested every day. 
                            Every rider has access to safety features 
                            built into the app. And every ride has a support team if 
                            you need them.
                        </p>
                    </div>
                </div>
                
              </section>
              <section className="nextSection4">
                <div className="subcontainers2">
                    <h3 className="subHeaders2">“Every day, our technology puts millions of people together in cars in 
                        cities around the world. Helping keep people safe is a huge responsibility 
                        and one we do not take lightly.”
                    </h3>
                    <p className="paragraphs2">Dara Khosrowshahi, Uber CEO</p>
                </div>
              </section>
              <section>
                <div className="subFlex3">
                    <div><img width='520px' src='smilig-mama.webp' alt='beautiful woman smiling' /></div>
                    <div className="subcontainers3">
                        <h1 className="headerTexts5">Partnering to make a difference</h1>
                        <p className="paragraphs3">Our commitment to safety goes beyond your ride. 
                            We have teamed up with leading experts—from 
                            public safety officials to anti-violence 
                            organizations—to help make roads and cities 
                            safer for all.
                        </p>
                    </div>
                </div>
              </section>
              <section className="nextSection5">
                <div>
                    <img className="imagePad" src='steering_wheel.svg' alt='steering wheel' />
                    <h3 className="subheaderPad">Driver safety</h3>
                    <p>Drive when and where you want with confidence</p>
                </div>
                <div>
                    <img className="imagePad" src="car_front.svg" alt="" />
                    <h3 className="subheaderPad">Rider safety</h3>
                    <p>Go anytime and get there comfortably</p>
                </div>
              </section>
              <p className="finalParag">*Certain requirements and features vary by region and may be unavailable.</p>
           </body>
          <Footer /> 
        </>
     );
}
 
export default Safety;