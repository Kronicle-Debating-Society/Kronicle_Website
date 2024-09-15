import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            {/* Carousel Section */}
            <section className="container">
                <div className="slider-wrapper">
                    <div className="slider">
                        <img id="slide-1" src="/assets/slide-1.jpg" alt="Slide 1" />
                        <img id="slide-2" src="/assets/slide-2.jpg" alt="Slide 2" />
                        <img id="slide-3" src="/assets/slide-3.jpg" alt="Slide 3" />
                    </div>
                    <div className="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                </div>
            </section>

            {/* Know About Us Section */}
            <section className="about-section">
                <h2 className="about-title">Know About Us</h2>
                <div className="layered-box">
                    <div className="dark-grey-rectangle"></div>
                    <div className="light-grey-content">
                        <p>
                            Kronicle is the literary and debating society of KIIT University. For good ideas and true
                            innovation, you need human interaction, conflict, argument and debate. Here, at Kronicle, we
                            learn not just how to win an argument but convince the masses with logic and reasoning.
                            One can develop a variety of soft skills like fluently speaking with logic, embracing their
                            analytical skills and also to become a good listener, all of which holds a stringent
                            importance in the corporate world. The active members of the society get a range of
                            opportunities to participate in national and international level debate, extempore and
                            symposium. Kronicle also hosts few of the most eminent and prestigious events of our
                            University like Pratijja and Founder's cup. The knowledge and experience that one gains here
                            is profound and of great significance in their overall personality development.
                        </p>
                    </div>
                    <img className="podium-image" src="/assets/Podium.png" alt="Podium" />
                </div>
            </section>

            {/* Image Row Section */}
            <div className="image-row">
                <img src="/assets/logo1.png" alt="Logo 1" />
                <img src="/assets/logo2.png" alt="Logo 2" />
                <img src="/assets/logo3.png" alt="Logo 3" />
            </div>

            {/* Extra Space and Cards Section */}
            <div className="extra-space">
                <div className="glassmorphism-box">
                    <div className="glass-title">Faculty In Charge</div>
                    <div className="cards-container">

                        {/* First Card */}
                        <div className="base-card">
                            <div className="black-card">
                                <img src="/assets/design.png" alt="Design Image" className="card-image" />
                            </div>
                            <img className="layered-image" src="/assets/bigpeople1.png" alt="Layered Big People 1" />
                            <div className="black-strip left">
                                <div className="grey-shape left"></div>
                            </div>
                            <div className="black-strip right">
                                <div className="grey-shape right"></div>
                            </div>
                            {/* Title and Subtitle */}
                            <div className="card-text">
                                <h3>Dr Sushanta Tripathy</h3>
                                <p>Faculty Coordinator</p>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="base-card">
                            <div className="black-card">
                                <img src="/assets/design.png" alt="Design Image" className="card-image" />
                            </div>
                            <img className="layered-image" src="/assets/bigpeople2.png" alt="Layered Big People 2" />
                            <div className="black-strip left">
                                <div className="grey-shape left"></div>
                            </div>
                            <div className="black-strip right">
                                <div className="grey-shape right"></div>
                            </div>
                            {/* Title and Subtitle */}
                            <div className="card-text">
                                <h3>Dr Shyam Sundar Behura</h3>
                                <p>Dy. Director KSAC</p>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="base-card">
                            <div className="black-card">
                                <img src="/assets/design.png" alt="Design Image" className="card-image" />
                            </div>
                            <img className="layered-image" src="/assets/bigpeople3.png" alt="Layered Big People 3" />
                            <div className="black-strip left">
                                <div className="grey-shape left"></div>
                            </div>
                            <div className="black-strip right">
                                <div className="grey-shape right"></div>
                            </div>
                            {/* Title and Subtitle */}
                            <div className="card-text">
                                <h3>Umang Ghildyal</h3>
                                <p>Faculty Coordinator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
