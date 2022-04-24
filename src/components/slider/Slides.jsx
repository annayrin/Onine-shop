import React, { useState } from "react";
import slidesData from "../../services/slideData";
import "./slide.css";
import { Button, Icon } from "semantic-ui-react";
import slideshow from "../../services/slideshow";

function Slides() {
  const [slideData, setSlideData] = useState(slidesData());
  const [index, setIndex] = useState(0);

  function handleNext() {
    index !== slideData.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function handlePrev() {
    index !== 0 ? setIndex(index - 1) : setIndex(slideData.length - 1);
  }



    // (function autoHandle () {              !!miacru
    //    return setInterval(handleNext,5000)
    // })()


  return (
      <div>
        <div id="slide" >
          <div className="slideImg">
            <img src={slideData[index].image} />
            <Button
                data-testid="button-prev"
                className="small left"
                onClick={() => {
                  handlePrev();
                }}
            >
              <Icon name="chevron left" />
            </Button>

            <Button
                data-testid="button-next"
                className="small right"
                onClick={() => {
                  handleNext();
                }}
            >
              <Icon name="chevron right" />
            </Button>
          </div>
        </div>
      </div>
  );
}

export default Slides;
