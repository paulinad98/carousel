import { useState } from "react";

type CarouselNavigationProps = {
  perPage: number;
  slidesCount: number;
};

export function useCarouselNavigation({
  perPage,
  slidesCount,
}: CarouselNavigationProps) {
  const [currentSlideIndex, setCurrentIndex] = useState<number>(0);

  const isNextDisabled = currentSlideIndex + perPage >= slidesCount;
  const isPrevDisabled = currentSlideIndex === 0;

  function handleNext() {
    if (isNextDisabled) return;

    setCurrentIndex((prev) => prev + 1);
  }

  function handlePrev() {
    if (isPrevDisabled) return;

    setCurrentIndex((prev) => prev - 1);
  }

  return {
    currentSlideIndex,
    isNextDisabled,
    isPrevDisabled,
    handleNext,
    handlePrev,
  };
}
