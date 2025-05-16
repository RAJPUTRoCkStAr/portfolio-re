import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useEffect } from 'react';

type UseScrollAnimationReturn = {
  ref: (node?: Element | null) => void;
  controls: AnimationControls;
  inView: boolean;
};

const useScrollAnimation = (threshold: number = 0.1): UseScrollAnimationReturn => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

export default useScrollAnimation;