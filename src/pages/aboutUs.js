import Footer from "../components/footer";
import Navbar from "../components/navbar";
import '../styles/aboutUs.css'
import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <>
          <Navbar />
            <body className="aboutBody">
                <section className="backImageAbout">
                    <h1 className="header1">About us</h1>
                </section>
                <section className="section2">
                    <h1 className="header2">We reimagine the way the world moves for the better</h1>
                    <p className="texts">Movement is what we power. It’s our lifeblood. It runs 
                        through our veins. It’s what gets us out of bed each morning. 
                        It pushes us to constantly reimagine how we can move better. 
                        For you. For all the places you want to go. For all the things 
                        you want to get. For all the ways you want to earn. 
                        Across the entire world. In real time. At the incredible 
                        speed of now.
                    </p>
                    <div className='faqContent'>
                        <details>
                            <summary>
                                <span className="summary-title">Read our full mission statement</span>
                            </summary>

                            <div className="summary-content"> We are Uber. The go-getters. 
                                The kind of people who are relentless about our mission to help 
                                people go anywhere and get anything and earn their way. Movement 
                                is what we power. It’s our lifeblood. It runs through our veins. 
                                It’s what gets us out of bed each morning. It pushes us to constantly 
                                reimagine how we can move better. For you. For all the places you want to go. 
                                For all the things you want to get. For all the ways you want to earn. 
                                Across the entire world. In real time. At the incredible speed of now.

                                We are a tech company that connects the physical and digital worlds 
                                to help make movement happen at the tap of a button. Because we believe 
                                in a world where movement should be accessible. So you can move and earn safely. 
                                In a way that’s sustainable for our planet. And regardless of your gender, race, 
                                religion, abilities, or sexual orientation, we champion your right to move and earn 
                                freely and without fear. Of course, we haven’t always gotten it right. But we’re not 
                                afraid of failure, because it makes us better, wiser, and stronger. And it makes us 
                                even more committed to do the right thing by our customers, local communities and cities, 
                                and our incredibly diverse set of international partners.

                                The idea for Uber was born on a snowy night in Paris in 2008, and ever since then our 
                                DNA of reimagination and reinvention carries on. We’ve grown into a global platform 
                                powering flexible earnings and the movement of people and things in ever expanding ways. 
                                We’ve gone from connecting rides on 4 wheels to 2 wheels to 18-wheel freight deliveries. 
                                From takeout meals to daily essentials to prescription drugs to just about anything you need 
                                at any time and earning your way. From drivers with background checks to real-time verification, 
                                safety is a top priority every single day. At Uber, the pursuit of reimagination is never finished, 
                                never stops, and is always just beginning. 
                            </div>
                        </details>
                    </div>
                    
                </section>
                <section className="section3">
                    <div className="section3Flex">
                        <div className="flexbox1">
                           <img width='550px' src='Sustainability.jpg' alt='' />
                        </div>
                        <div>
                            <h1 className="header3">Sustainability</h1>
                            <p className="texts2">Uber is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides
                               taking place in zero-emission vehicles, on public transit, or with micromobility. It is our 
                               responsibility as the largest mobility platform in the world to more aggressively tackle the 
                               challenge of climate change. We will do this by offering riders more ways to ride green, helping 
                               drivers go electric, making transparency a priority and partnering with NGOs and the private sector 
                               to help expedite a clean and just energy transition.
                            </p>
                            <Link className="linkText" to=''>Learn more</Link>
                        </div>
                    </div>
                </section>

                <section className="section3">
                    <div className="section3Flex">
                        <div className="flexbox1">
                           <img width='550px' src='UberIM_20250-medium-(2).webp' alt='' />
                        </div>
                        <div className="flexbox2">
                            <h1 className="header3">Rides and beyond</h1>
                            <p className="texts2">In addition to helping riders find a way to go 
                                from point A to point B, we're helping people order food quickly 
                                and affordably, removing barriers to healthcare, creating new 
                                freight-booking solutions, and helping companies provide a seamless 
                                employee travel experience. And always helping drivers and couriers earn.
                            </p>
                            <div className="linksFlex">
                              <Link className="linkText" to=''>How to use the Uber app</Link>
                              <Link className="linkText" to=''>Our offerings</Link>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className="section3">
                    <div className="section3Flex">
                        
                        <div className="flexbox2">
                            <h1 className="header3">Your safety drives us</h1>
                            <p className="texts2">Whether you’re in the back seat or 
                               behind the wheel, your safety is essential. We 
                               are committed to doing our part, and technology is 
                               at the heart of our approach. We partner with safety 
                               advocates and develop new technologies and systems 
                               to help improve safety and help make it easier for 
                               everyone to get around.
                            </p>
                            <Link className="linkText" to=''>Learn more</Link>
                        </div>
                        <div className="flexbox1">
                           <img width='550px' src='_background-01.svg' alt='' />
                        </div>
                    </div>
                </section>
                <section className="section4">
                    <h1 className="header4">Company info</h1>
                    <div className="flexthree">
                        <div>
                            <img width='350px' src="conference.webp" alt='' />
                            <h3 className="header5">Who's driving Uber</h3>
                            <p className="texts3">We’re building a culture within Uber that emphasizes 
                                doing the right thing, period, for riders, 
                                drivers, and employees. Find out more about the 
                                team that’s leading the way.
                            </p>
                            <Link className="linkText" to=''>See our leadership</Link>
                        </div>
                        <div>
                            <img width='350px' src="people.webp" alt='' />
                            <h3 className="header5">Getting diversity right</h3>
                            <p className="texts3">It’s our goal to create a workplace that is inclusive 
                                and reflects the diversity of the cities we serve—where 
                                everyone can be their authentic self, and where that 
                                authenticity is celebrated as a strength. By creating 
                                an environment where people from every background can thrive, 
                                we’ll make Uber a better company—for our employees and our 
                                customers.
                            </p>
                            <Link className="linkText" to=''>Read about diversity</Link>
                        </div>
                        <div>
                            <img width='350px' src="developers.webp" alt='' />
                            <h3 className="header5">Acting with integrity</h3>
                            <p className="texts3">Uber's Ethics & Compliance Program Charter outlines our 
                                commitment to integrity at the highest levels within the 
                                company. Transparency is critical to an ethical culture; 
                                we achieve this through our Integrity Helpline and suite 
                                of scalable and effective compliance initiatives.
                            </p>
                            <Link className="linkText" to=''>Learn more</Link>
                        </div>
                    </div>
                </section>
                <section className="section5">
                    <h1 className="headerText2">Keep up with the latest</h1>
                    <div className="announcement">
                        <div className="announce">
                            <img src='megaphone.svg' alt='' />
                            <h3 className="header6">Newsroom</h3>
                            <p className="texts6">Get announcements about partnerships, app updates, 
                                initiatives, and more near you and around the world.
                            </p>
                        </div>
                        <div className="announce">
                            <img src='group.svg' alt='' />
                            <h3 className="header6">Blog</h3>
                            <p className="texts6">Find new places to explore and learn about Uber 
                                products, partnerships, and more.
                            </p>
                        </div>
                        <div className="announce">
                            <img src='network.svg' alt='' />
                            <h3 className="header6">Investor relations</h3>
                            <p className="texts6">Download financial reports, see next-quarter plans, 
                            and read about our corporate responsibility initiatives.
                            </p>
                        </div>
                    </div>
                </section>
            </body>
          <Footer />
        </>
     );
}
 
export default AboutUs;