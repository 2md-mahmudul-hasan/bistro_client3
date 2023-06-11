// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

import { Pagination, Navigation } from "swiper";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle heading={"Order online"} subHeading={"From 11.00 to 5.pm"}></SectionTitle>
      </section>
      <div className="my-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={slider1} /> <h3 className="uppercase text-center text-warning -mt-10">Salads</h3></SwiperSlide>
          <SwiperSlide><img src={slider2} /><h3 className="uppercase text-center text-warning -mt-10">Soup</h3></SwiperSlide>
          <SwiperSlide><img src={slider3} /><h3 className="uppercase text-center text-warning -mt-10">Pizza</h3></SwiperSlide>
          <SwiperSlide><img src={slider4} /><h3 className="uppercase text-center text-warning -mt-10">Desert</h3></SwiperSlide>
          <SwiperSlide><img src={slider5} /><h3 className="uppercase text-center text-warning -mt-10">Drinks</h3></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Category;