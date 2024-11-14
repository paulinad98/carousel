import { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom1.webp",
  },
  {
    id: 2,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom2.webp",
  },
  {
    id: 3,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom3.webp",
  },
  {
    id: 4,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom4.webp",
  },
  {
    id: 5,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom1.webp",
  },
  {
    id: 6,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom4.webp",
  },
  {
    id: 7,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom2.webp",
  },
  {
    id: 8,
    title: "Zrozum swoje mocne strony",
    description:
      "Stań się mistrzem dialogu! Poznaj techniki, które przekształcą Twoje rozmowy i sprawią, że zbudujesz głębsze relacje w każdej sytuacji. Zyskaj umiejętności, które pozwolą Ci rozwiązywać konflikty, budować zaufanie i efektywnie współpracować z innymi – w pracy i życiu osobistym.",
    img: "/public/desktop-poziom3.webp",
  },
];

const PER_PAGE = 4;

function App() {
  const [activeSlide, setActiveSlide] = useState<null | number>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const isNextDisabled = currentIndex + PER_PAGE >= slides.length;
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
            className="flex h-full w-full gap-x-4"
            onMouseLeave={() => setActiveSlide(null)}
            style={{
              transform: `translateX(calc(-${currentIndex} * ((100% + 16px) / ${PER_PAGE}))`,
            }}
          >
            {slides.map((slide, index) => (
              <>
                {activeSlide === index ? (
                  <motion.div
                    layoutId={`card-${slide.id}`}
                    key={slide.id}
                    className="relative shrink-0 grow-0 basis-1/3 overflow-hidden rounded-xl"
                  >
                    <motion.img
                      layoutId={`img-${slide.id}`}
                      src={slide.img}
                      alt=""
                      className="h-full object-cover object-right"
                    />

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 h-full w-full bg-[#d32244]/45"
                    />

                    <motion.p
                      initial={{ opacity: 0, translateY: 40 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateY: -40 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-0 flex h-full flex-col justify-center space-y-5 px-5 text-white"
                    >
                      <span className="text-xl font-bold">{slide.title}</span>

                      <p className="text-xs font-medium">{slide.description}</p>

                      <button className="mt-auto rounded-xl border-2 border-white px-3 py-1.5 text-xs font-semibold">
                        Zobacz szczegóły
                      </button>
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    layoutId={`card-${slide.id}`}
                    key={slide.id}
                    className={`relative flex-1 shrink-0 grow-0 overflow-hidden rounded-xl`}
                    style={{
                      maxWidth:
                        activeSlide !== null && isVisible(index)
                          ? `calc((100% * 2 / 3 - 3 * 16px) / ${PER_PAGE - 1})`
                          : `calc((100% - 3 * 16px) / ${PER_PAGE})`,
                      flexBasis:
                        activeSlide !== null && isVisible(index)
                          ? `calc((100% * 2 / 3 - 3 * 16px) / ${PER_PAGE - 1})`
                          : `calc((100% - 3 * 16px) / ${PER_PAGE})`,
                    }}
                    onMouseOver={() => setActiveSlide(index)}
                  >
                    <motion.img
                      layoutId={`img-${slide.id}`}
                      src={slide.img}
                      alt=""
                      className="h-full object-cover object-right"
                    />

                    <motion.span
                      initial={{ opacity: 0, translateY: -20 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      exit={{ opacity: 0, translateY: 20 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute bottom-8 left-0 w-full text-center text-xl font-bold text-white"
                    >
                      {slide.title}
                    </motion.span>
                  </motion.div>
                )}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default App;
