import { motion } from "framer-motion";

type Props = {
  activeSlide: number | null;
  collapsedWidth: string;
  description: string;
  expandedWidth: string;
  id: number;
  isActive: boolean;
  isVisible: boolean;
  src: string;
  title: string;
  onMouseOver: () => void;
};

export function Slide({
  activeSlide,
  collapsedWidth,
  description,
  expandedWidth,
  id,
  isActive,
  isVisible,
  src,
  title,
  onMouseOver,
}: Props) {
  const isActiveVisible = activeSlide !== null && isVisible;

  return (
    <>
      {isActive ? (
        <motion.div
          layoutId={`card-${id}`}
          className="relative shrink-0 grow-0 basis-1/3 overflow-hidden rounded-xl"
        >
          <motion.img
            layoutId={`img-${id}`}
            src={src}
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
            <span className="text-xl font-bold">{title}</span>

            <p className="text-xs font-medium">{description}</p>

            <button className="mt-auto rounded-xl border-2 border-white px-3 py-1.5 text-xs font-semibold">
              Zobacz szczegóły
            </button>
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          layoutId={`card-${id}`}
          className={`relative flex-1 shrink-0 grow-0 overflow-hidden rounded-xl`}
          style={{
            maxWidth: isActiveVisible ? collapsedWidth : expandedWidth,
            flexBasis: isActiveVisible ? collapsedWidth : expandedWidth,
          }}
          onMouseOver={onMouseOver}
        >
          <motion.img
            layoutId={`img-${id}`}
            src={src}
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
            {title}
          </motion.span>
        </motion.div>
      )}
    </>
  );
}
