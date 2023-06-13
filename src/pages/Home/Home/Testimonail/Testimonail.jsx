import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonail = () => {
  const [reviews, setReviws] = useState([])
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviws(data))
  }, [])

  return (
    <div>
      <SectionTitle subHeading="---What Our Clients Say---" heading="TESTIMONIALS"></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          reviews.map(review => <SwiperSlide key={review._id}>
            <div className='flex flex-col items-center px-20'>
              <Rating
                style={{ maxWidth: 120, marginTop: 30, marginBottom: 30 }}
                value={review.rating}

              />
              <p>{review.details}</p>
              <b className='text-4xl text-yellow-600'>{review.name}</b>
            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default Testimonail;