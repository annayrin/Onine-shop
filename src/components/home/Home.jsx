import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import "../home/home.css";

function Home() {
  let countPageProduct = 6;
  return (
    <div className="home container">
      <Slide slides={slidesData()} />
        {/*<Filter/>*/}
      <Cards pageDivider={countPageProduct}/>
    </div>
  );
}
export default Home;
