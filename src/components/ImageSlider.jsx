import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

    return (
        <div>
            <div className="left-arrow" onClick={() => {goToPrevious()}}> I</div>
            <img src={slides[currentIndex].image}></img>
            <div className="left-arrow" onClick={() => {goToNext()}}> D</div>
        </div>
    )
}

export default ImageSlider;