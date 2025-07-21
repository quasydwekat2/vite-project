import { useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function useTiltEffect(ref, isMobile) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    if (!ref.current || isMobile) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left) / width);
    y.set((e.clientY - top) / height);
  };

  return {
    rotateX: isMobile ? 0 : rotateX,
    rotateY: isMobile ? 0 : rotateY,
    handleMouseMove: isMobile ? undefined : handleMouseMove,
  };
}