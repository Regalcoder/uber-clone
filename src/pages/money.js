import Navbar from "../components/navbar";
import '../styles/money.css'
import Footer from '../components/footer'


const Money = () => {
    return ( 
        <>
          <Navbar />
          <body>
             <section className="moneySection1">
                <h1 className="moneyHeader1">Introducing Uber Money</h1>
             </section>
             <section className="moneySection2">
               <div className="moneyContainer1">
                  <h1 className="moneyHeader2">Make your money work better for you, at Uber speed.</h1>
                  <p className="moneyTexts">Uber Money provides financial products that 
                     help you access, manage, and grow your money, 
                     putting opportunities you want within reach.
                  </p>
               </div>
             </section>
             <section className="moneySection3">
               <div className="moneyContainer2">
                  <div className="moneyFlex1">
                     <h1 className="moneyHeader3">Uber Wallet</h1>
                     <p>Wallet is the new home for your money on Uber. 
                        Easily track your earning and spending history, 
                        manage and move your money, and discover new 
                        financial products all in one place.
                     </p>
                  </div>
                  <div className="moneyFlex2">
                     <img height='597.5' src="money-phone.webp" alt="big phone" />
                  </div>
               </div>
             </section>
             <section className="moneySection4">
               <div className="moneyContainer3">
                  <h1 className="moneyHeader4">Uber Pay</h1>
                  <p>Uber Pay lets partners integrate seamlessly 
                     with our platform. Use our API to easily 
                     enable new payment methods on Uber and grow 
                     your transaction volume, or delight your 
                     customers by turning membership points into 
                     Uber Cash.
                  </p>
               </div>
             </section>
             <Footer />
          </body>
        </>
     );
}
 
export default Money;