import { useState } from "react";

import { Carousel } from "./components/Carousel";
import { Slide } from "./components/Slide";

import { SLIDES } from "./utils/constants";
import { useCarouselNavigation } from "./hooks/useCarouselNavigation";

const PER_PAGE = 4;
const GAP = 16;
const COLLAPSED_WIDTH = `calc((100% * 2 / 3 - 3 * ${GAP}px) / ${PER_PAGE - 1})`;
const EXPANDED_WIDTH = `calc((100% - 3 * ${GAP}px) / ${PER_PAGE})`;

function App() {
  const [activeSlide, setActiveSlide] = useState<null | number>(null);

  const {
    currentSlideIndex,
    isNextDisabled,
    isPrevDisabled,
    handleNext,
    handlePrev,
  } = useCarouselNavigation({
    perPage: PER_PAGE,
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
          className="mx-auto h-96 max-w-7xl overflow-hidden"
          onMouseLeave={() => setActiveSlide(null)}
        >
          <Carousel
            perPage={PER_PAGE}
            gap={GAP}
            slides={SLIDES}
            currentSlideIndex={currentSlideIndex}
          >
            {({ slide, index, isVisible }) => (
              <Slide
                key={slide.id}
                {...slide}
                activeSlide={activeSlide}
                collapsedWidth={COLLAPSED_WIDTH}
                expandedWidth={EXPANDED_WIDTH}
                isActive={activeSlide === index}
                isVisible={isVisible}
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
