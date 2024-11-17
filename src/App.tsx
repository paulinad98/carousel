import { useState } from "react";

import { Carousel } from "./components/Carousel";
import { Slide } from "./components/Slide";

import { SLIDES } from "./utils/constants";

import { useCarouselNavigation } from "./hooks/useCarouselNavigation";
import { useBreakpointsCarousel } from "./hooks/useBreakpointsCarousel";

const GAP = 16;
const BREAKPOINTS: {
  [key: number]: number;
} = {
  640: 1,
  768: 2,
  1024: 3,
  1280: 4,
  1536: 5,
};

function App() {
  const { perPage, elementRef } = useBreakpointsCarousel(BREAKPOINTS);

  const [activeSlide, setActiveSlide] = useState<null | number>(null);

  const {
    currentSlideIndex,
    isNextDisabled,
    isPrevDisabled,
    handleNext,
    handlePrev,
  } = useCarouselNavigation({
    perPage: perPage,
    slidesCount: SLIDES.length,
  });
  return (
    <>
      <div className="p-6">
        <button onClick={handlePrev} disabled={isPrevDisabled}>
          prev
        </button>
        <button onClick={handleNext} disabled={isNextDisabled}>
          next
        </button>

        <div
          ref={elementRef}
          className="mx-auto h-96 max-w-7xl overflow-hidden"
          onMouseLeave={() => setActiveSlide(null)}
        >
          <Carousel
            perPage={perPage}
            gap={GAP}
            slides={SLIDES}
            currentSlideIndex={currentSlideIndex}
          >
            {({ slide, index, isVisible }) => (
              <Slide
                key={slide.id}
                {...slide}
                activeSlide={activeSlide}
                isActive={activeSlide === index}
                isVisible={isVisible}
                gap={GAP}
                perPage={perPage}
                onMouseOver={() => setActiveSlide(index)}
              />
            )}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default App;
