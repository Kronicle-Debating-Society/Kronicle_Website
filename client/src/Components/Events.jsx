import React from 'react';

const Events = () => {
    return (
        <div>
            {/* Carousel Section */}
            <section className="container mx-auto my-8">
                <div className="slider-wrapper relative overflow-hidden w-full h-64">
                    <div className="slider flex transition-transform duration-300 ease-in-out">
                        <img id="slide-1" src="/assets/slide-1.jpg" alt="Slide 1" className="w-full object-cover" />
                        <img id="slide-2" src="/assets/slide-2.jpg" alt="Slide 2" className="w-full object-cover" />
                        <img id="slide-3" src="/assets/slide-3.jpg" alt="Slide 3" className="w-full object-cover" />
                    </div>
                    <div className="slider-nav absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        <a href="#slide-1" className="w-3 h-3 rounded-full bg-white"></a>
                        <a href="#slide-2" className="w-3 h-3 rounded-full bg-white"></a>
                        <a href="#slide-3" className="w-3 h-3 rounded-full bg-white"></a>
                    </div>
                </div>
            </section>

            <div className="bg-black text-white p-6 font-sans">
                {/* Recruitment Section */}
                <div
                    className="flex flex-col items-center justify-center w-[512px] h-[198px] p-6 rounded-lg mx-auto"
                    style={{
                        backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/event-container.png?updatedAt=1730142330620')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="text-2xl font-bold mb-2 text-left w-full">RECRUITMENT</h2>
                    <div className="flex items-center justify-between w-full">
                        <p className="flex-1 mr-2 text-sm text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="w-24 h-24 overflow-hidden rounded-md">
                            <img
                                src="https://ik.imagekit.io/shubhusarathy/image.png?updatedAt=1730174901334"
                                alt="Recruitment"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="text-left mt-2 w-full">( Recruitment Results )</span>
                </div>

                {/* Pratijja Section */}
                <div
                    className="flex flex-col items-center justify-center w-[512px] h-[198px] p-6 rounded-lg mx-auto"
                    style={{
                        backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/event2-container.png?updatedAt=1730173980636')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-right w-full">PRATIJJA</h2>
                    <div className="flex items-center justify-between w-full">
                        <div className="w-24 h-24 overflow-hidden rounded-md text-left">
                            <img
                                src="https://ik.imagekit.io/shubhusarathy/image.png?updatedAt=1730202907977"
                                alt="Pratijja"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="flex-1 mr-1 text-sm text-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <span className="mt-2 inline-block text-right w-full">( Past Winners )</span>
                </div>

                {/* Founder's Cup Section */}
                <div
                    className="flex flex-col items-center justify-center w-[512px] h-[198px] p-6 rounded-lg mx-auto"
                    style={{
                        backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/event3-cotainer.png?updatedAt=1730174345589')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="text-2xl font-bold mb-2 text-left w-full">FOUNDER'S CUP</h2>
                    <div className="flex items-center justify-between w-full">
                        <p className="flex-1 mr-2 text-sm text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="w-24 h-24 overflow-hidden rounded-md">
                            <img
                                src="https://ik.imagekit.io/shubhusarathy/image(1).png?updatedAt=1730203074773"
                                alt="Founder's Cup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="text-left mt-2 w-full">( Past Winners )</span>
                </div>

                {/* Vivaad Section */}
                <div
                    className="flex flex-col items-center justify-center w-[512px] h-[198px] p-6 rounded-lg mx-auto"
                    style={{
                        backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/event2-container.png?updatedAt=1730173980636')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="text-2xl font-bold mb-4 text-right w-full">VIVAAD</h2>
                    <div className="flex items-center justify-between w-full">
                        <div className="w-24 h-24 overflow-hidden rounded-md text-left">
                            <img
                                src="https://ik.imagekit.io/shubhusarathy/image(2).png?updatedAt=1730203527495"
                                alt="Vivaad"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="flex-1 mr-1 text-sm text-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <span className="mt-2 inline-block text-right w-full">( Past Winners )</span>
                </div>

                {/* Devil's Advocate Section */}
                <div
                    className="flex flex-col items-center justify-center w-[512px] h-[198px] p-6 rounded-lg mx-auto"
                    style={{
                        backgroundImage: "url('https://ik.imagekit.io/shubhusarathy/event3-cotainer.png?updatedAt=1730174345589')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <h2 className="text-2xl font-bold mb-2 text-left w-full">DEVIL'S ADVOCATE</h2>
                    <div className="flex items-center justify-between w-full">
                        <p className="flex-1 mr-2 text-sm text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="w-24 h-24 overflow-hidden rounded-md">
                            <img
                                src="https://ik.imagekit.io/shubhusarathy/image(3).png?updatedAt=1730203676851"
                                alt="Founder's Cup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <span className="text-left mt-2 w-full">( Past Winners )</span>
                    <span className="text-right mt-2 w-full">Follow for more</span>
                </div>
            </div>
        </div>
    );
};

export default Events;
