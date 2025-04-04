'use client';

import Frame from './components/Frame';
import styles from './page.module.css';
import { useEffect, useState, useRef } from 'react';
import { useScroll } from 'framer-motion'; // Исправлено с 'motion/react' на 'framer-motion'
import { initialFrames } from '@/data';

export default function Home() {
  const { scrollY } = useScroll();
  const zSpacing = -1000;
  const initialZVals = initialFrames.map((_, i) => i * zSpacing + zSpacing / 2);
  const [zVals, setZVals] = useState<number[]>(initialZVals);
  const lastPosRef = useRef(0);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    lastPosRef.current = scrollY.get();

    const unsubscribe = scrollY.on('change', (current) => {
      const top = current;
      let delta = lastPosRef.current - top;
      lastPosRef.current = top;

      if (isTouchDevice) {
        delta = -delta;
      }

      setZVals((prevZVals) => prevZVals.map((z) => z + delta * (isTouchDevice ? 3 : -3)));
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div className={styles.container}>
      <section className={styles.gallery}>
        {initialFrames.map((frame, i) => (
          <Frame
            key={i}
            {...frame}
            propsStyles={{
              transform: `translateZ(${zVals[i]}px)`,
              opacity: zVals[i] < Math.abs(zSpacing / 1.5) ? 1 : 0,
            }}
          />
        ))}
      </section>
    </div>
  );
}
