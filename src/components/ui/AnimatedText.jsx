import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';

function Char({ char, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <Motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {char}
      </Motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / total;
        const end = start + 1 / total;
        return <Char key={i} char={char} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}
