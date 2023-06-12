import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import feturedImg from "../../../../assets/home/featured.jpg"
import './fetured.css'
const Fetured = () => {
  return (
    <div className='fetured text-yellow-300 mb-7 bg-fixed bg-blend-soft-light '>
      <div className="mt-8 py-8">     <SectionTitle subHeading="Check it Out" heading="FROM OUR MENU"></SectionTitle></div>

      <div className="flex justify-center items-center gap-8 px-32 py-32">
        <div className="">
          <img src={feturedImg} alt="image" />
        </div>
        <div className="">
          <p>March 20, 2023</p>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

          <button className="btn mt-8 text-white btn-outline border-0 border-b-4"> order now</button>
        </div>
      </div>
    </div>
  );
};

export default Fetured;