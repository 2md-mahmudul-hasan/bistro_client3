import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PapularItems from "../PapularItems/PapularItems";
import Fetured from "./Fetured/Fetured";




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PapularItems></PapularItems>
      <Fetured></Fetured>
    </div>
  );
};

export default Home;