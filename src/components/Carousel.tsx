import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type CarouselChildrenProps<T> = {
  slide: T;
  index: number;
  isVisible: boolean;
};

type Props<T> = {
  currentSlideIndex: number;
  perPage: number;
  gap: number;
  slides: T[];
  children: (props: CarouselChildrenProps<T>) => ReactNode;
};

export const Carousel = <T,>({
  perPage,
  gap,
  slides,
  currentSlideIndex,
  children,
}: Props<T>) => {
  function isVisible(index: number) {
    return index >= currentSlideIndex && index < currentSlideIndex + perPage;
  }

  return (
    <motion.div
      className="flex h-full w-full"
      style={{
        transform: `translateX(calc(-${currentSlideIndex} * ((100% + ${gap}px) / ${perPage})))`,
        gap,
      }}
    >
      {slides.map((slide, index) => (
        <React.Fragment key={index}>
          {children({
            slide,
            index,
            isVisible: isVisible(index),
          })}
        </React.Fragment>
      ))}
    </motion.div>
  );
};
