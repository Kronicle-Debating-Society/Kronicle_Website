import React from 'react';
import './Members.css';

function Members() {
    return (
        <div className="members-page">
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

            {/* Heading Section */}
            <div className="heading-section">
                <h1 className="heading">Co-ordinators</h1>
                <div className="underline"></div>
            </div>

            {/* Facecard Section */}
            <div className="facecard-section">
                <div className="facecard">
                    <div className="name-label">
                        Priyanshu<br/>Midha
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-priyanshu" src="/assets/priyanshu.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Gourav<br/>Vardhan<br/>Panigrahi
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 2"/>
                    <img className="overlay-image" src="/assets/gourav.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
            </div>

            {/* Assistant Co-ordinators Heading Section */}
            <div className="heading-section">
                <h1 className="heading">Assistant Co-ordinators</h1>
                <div className="underline"></div>
            </div>

            {/* Facecard Section */}
            <div className="facecard-section">
                <div className="facecard">
                    <div className="name-label">
                        Aadit<br/>Baxi
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-aadit" src="/assets/aadit.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Parth<br/>Sachdeva
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 2"/>
                    <img className="overlay-image" src="/assets/parth.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
            </div>

            {/* Heading Section */}
            <div className="heading-section">
                <h1 className="heading">Core Members</h1>
                <div className="underline"></div>
            </div>
            {/* Facecard Section */}
            <div className="facecard-section">
                <div className="facecard">
                    <div className="name-label">
                        Aishwarya<br/>Ganesan
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image" src="/assets/aishwarya.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Bhumika<br/>Mohanty
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-bhumika" src="/assets/bhumika.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Jay Anmol<br/>Rath
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 2"/>
                    <img className="overlay-image overlay-jay" src="/assets/jay.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
            </div>
            {/* Facecard Section */}
            <div className="facecard-section">
                <div className="facecard">
                    <div className="name-label">
                        Manavi<br/>Vardhan
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-manavi" src="/assets/manavi.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Omm<br/>Gupta
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-om" src="/assets/om.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Shreya<br/>Bangia
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 2"/>
                    <img className="overlay-image" src="/assets/shreya.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
            </div>
            {/* Facecard Section */}
            <div className="facecard-section">
                <div className="facecard">
                    <div className="name-label">
                        Soham<br/>Nanda
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-soham" src="/assets/soham.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                            Vipul<br/>Tripathi
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 1"/>
                    <img className="overlay-image overlay-vipul" src="/assets/vipul.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
                <div className="facecard">
                    <div className="name-label">
                        Vishesh<br/>Choudhary
                    </div>
                    <img src="/assets/facecardBG.png" alt="Facecard 2"/>
                    <img className="overlay-image overlay-vishesh" src="/assets/vishesh.png" alt="Overlay Image"/>
                    <img className="kronicle-logo" src="/assets/kroniclelogo.png" alt="Kronicle Logo"/>
                    <div className="ellipses">
                        <img src="/assets/elipse.png" alt="Ellipse 1"/>
                        <img src="/assets/elipse.png" alt="Ellipse 2"/>
                        <img src="/assets/elipse.png" alt="Ellipse 3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;
