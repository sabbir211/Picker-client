import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* https://i.ibb.co/61C2Prm/pexels-orhun-r-zgar-z-10912797.png
https://i.ibb.co/6nRGp18/pexels-cottonbro-7568428.png
https://i.ibb.co/BZ4jYgH/obi-pixel6propix-Irdm0-tev-Pc-unsplash.png */}
                <SwiperSlide>
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://i.ibb.co/61C2Prm/pexels-orhun-r-zgar-z-10912797.png" className=" hidden lg:block max-w-sm rounded-lg " alt="" />
                            <div>
                                <h1 className="text-5xl font-bold">Buy Parts with your desire</h1>
                                <p className="py-6">We are a leading Parts manufacturing company. We will provide Whatever you  want.</p>
                                <button className="btn btn-primary">Take a Tour</button>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide> <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/6nRGp18/pexels-cottonbro-7568428.png" className="hidden lg:block max-w-sm rounded-lg " alt=""/>
                        <div>
                        <h1 className="text-5xl font-bold">Buy Parts with your desire</h1>
                                <p className="py-6">We are a leading Parts manufacturing company. We will provide Whatever you  want.</p>
                                <button className="btn btn-primary">Take a Tour</button>
                        </div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide> <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/BZ4jYgH/obi-pixel6propix-Irdm0-tev-Pc-unsplash.png " className=" hidden lg:block max-w-sm rounded-lg " alt=""/>
                        <div>
                        <h1 className="text-5xl font-bold">Buy Parts with your desire</h1>
                                <p className="py-6">We are a leading Parts manufacturing company. We will provide Whatever you  want.</p>
                                <button className="btn btn-primary">Take a Tour</button>
                        </div>
                    </div>
                </div></SwiperSlide>

            </Swiper>
        </>
    );
}
export default Banner;
