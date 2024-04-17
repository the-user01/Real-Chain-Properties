
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";

const Home = () => {

    const { loader } = useContext(AuthContext);

    const properties = useLoaderData()


    return (
        <div>
            <Helmet>
                <title>RealChainProperties | Home</title>
            </Helmet>

            <div className="text-center">
                {
                    loader && <span className="loading loading-dots loading-lg"></span>
                }
            </div>

            {/* Banner section */}
            <section className="mt-12 mb-12">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {
                        properties.map(data => <SwiperSlide key={data.id}><img src={data.image} alt="" className="h-52 w-full"/></SwiperSlide>)
                    }

                </Swiper>
            </section>

            {/* Showcase Section */}
            <section className="container mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold">Explore Good Places</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        properties.map(data => <PropertiesCard key={data.id} property={data}></PropertiesCard>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;