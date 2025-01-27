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

            {/* Coming Soon Section */}
            <div
                className="flex items-center justify-center font-sans"
                style={{
                    marginTop: '250px',
                    marginBottom: '250px',
                }}
            >
                <div
                    className="flex flex-col items-center justify-center h-[50vh] w-[50vw] rounded-lg"
                    style={{
                        backgroundColor: '#444', // Muted dark gray background
                        border: '2px solid #888', // Subtle gray border
                        padding: '30px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)', // Soft shadow
                    }}
                >
                    <h2
                        className="text-center text-9xl font-bold uppercase font-style: italic"
                        style={{
                            color: '#d4d4d4', // Soft, light gray text
                            letterSpacing: '2px', 
                        }}
                    >
                        Coming Soon!
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Events;
