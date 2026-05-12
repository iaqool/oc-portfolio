import { motion } from 'framer-motion';

export default function FadeIn({
  as = 'div',
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
  amount = 0,
  once = true,
  margin = '50px',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once, margin, amount }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
