import { useElementWidth } from "../hooks/useElementWidth";

export function useBreakpointsCarousel(breakpoints: { [key: number]: number }) {
  const { width, elementRef } = useElementWidth();

  const breakpoint = Object.keys(breakpoints)
    .map(Number)
    .filter((key) => key <= width)
    .sort((a, b) => b - a)[0];

  const perPage = breakpoints[breakpoint] || 1;

  return { perPage, elementRef };
}
