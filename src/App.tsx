import { useState } from "react";

import { motion } from "framer-motion";

import { Slide } from "./components/Slide";

import { SLIDES } from "./utils/constants";

const PER_PAGE = 4;
const GAP = 16;
const COLLAPSED_WIDTH = `calc((100% * 2 / 3 - 3 * ${GAP}px) / ${PER_PAGE - 1})`;
const EXPANDED_WIDTH = `calc((100% - 3 * ${GAP}px) / ${PER_PAGE})`;

function App() {
  const [activeSlide, setActiveSlide] = useState<null | number>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const isNextDisabled = currentIndex + PER_PAGE >= SLIDES.length;
  const isPrevDisabled = currentIndex === 0;

  function handleNext() {
    if (isNextDisabled) return;

    setCurrentIndex(currentIndex + 1);
  }

  function handlePrev() {
    if (isPrevDisabled) return;

    setCurrentIndex(currentIndex - 1);
  }

  function isVisible(index: number) {
    return index >= currentIndex && index < currentIndex + PER_PAGE;
  }

  return (
    <>
      <div className="p-6">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>

        <div className="mx-auto h-96 max-w-7xl overflow-hidden">
          <motion.div
            className="flex h-full w-full"
            onMouseLeave={() => setActiveSlide(null)}
            style={{
              transform: `translateX(calc(-${currentIndex} * ((100% + 16px) / ${PER_PAGE}))`,
              gap: GAP,
            }}
          >
            {SLIDES.map((slide, index) => (
              <Slide
                key={slide.id}
                {...slide}
                onMouseOver={() => setActiveSlide(index)}
                expandedWidth={EXPANDED_WIDTH}
                collapsedWidth={COLLAPSED_WIDTH}
                activeSlide={activeSlide}
                isVisible={isVisible(index)}
                isActive={activeSlide === index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
