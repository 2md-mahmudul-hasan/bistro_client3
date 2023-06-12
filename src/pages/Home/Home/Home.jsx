import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PapularItems from "../PapularItems/PapularItems";
import Fetured from "./Fetured/Fetured";
import Testimonail from "./Testimonail/Testimonail";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PapularItems></PapularItems>
      <Fetured></Fetured>
      <Testimonail></Testimonail>
    </div>
  );
};

export default Home;