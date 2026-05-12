import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './ui/FadeIn';
import LiveProjectButton from './ui/LiveProjectButton';

function shot(url, params = '') {
  const base = `https://image.thum.io/get/${params ? params + '/' : ''}${url}`;
  return base;
}

const PROJECTS = [
  {
    n: '01',
    category: 'Client',
    name: 'chsh studio',
    href: 'https://chsh.online/',
    summary: 'AI systems for businesses in Kazakhstan — WhatsApp bots, landing pages and AI content production.',
    img1: shot('https://chsh.online/', 'width/720/viewportWidth/375'),
    img2: shot('https://chsh.online/', 'width/1280/crop/900'),
    img3: shot('https://chsh.online/', 'width/1280'),
  },
  {
    n: '02',
    category: 'Client',
    name: 'azyktulyk',
    href: 'https://azyktulyk.site/',
    summary: 'Streetwear-inspired clothing store with custom catalog flow and fast checkout.',
    img1: shot('https://azyktulyk.site/', 'width/720/viewportWidth/375'),
    img2: shot('https://azyktulyk.site/', 'width/1280/crop/900'),
    img3: shot('https://azyktulyk.site/', 'width/1280'),
  },
  {
    n: '03',
    category: 'Personal',
    name: 'agri-subsidy',
    href: 'https://agri-subsidy.vercel.app/',
    summary: 'AI drought oracle on Solana — satellite NDVI + weather data driving automated subsidy payouts via Anchor smart contracts.',
    img1: shot('https://agri-subsidy.vercel.app/', 'width/720/viewportWidth/375'),
    img2: shot('https://agri-subsidy.vercel.app/', 'width/1280/crop/900'),
    img3: shot('https://agri-subsidy.vercel.app/', 'width/1280'),
  },
  {
    n: '04',
    category: 'Personal',
    name: 'cortex',
    href: 'https://cortex-six-rosy.vercel.app/',
    summary: 'Programmable wallets and a skill marketplace for AI agents on Solana — on-chain per-call & daily caps, single-tx settlement.',
    img1: shot('https://cortex-six-rosy.vercel.app/', 'width/720/viewportWidth/375'),
    img2: shot('https://cortex-six-rosy.vercel.app/', 'width/1280/crop/900'),
    img3: shot('https://cortex-six-rosy.vercel.app/', 'width/1280'),
  },
  {
    n: '05',
    category: 'Client',
    name: 'Beast Mode Tom',
    href: 'https://musclecat.vercel.app/',
    summary: 'Premium oversized gym tees — bold e-commerce landing with strong typography and product storytelling.',
    img1: shot('https://musclecat.vercel.app/', 'width/720/viewportWidth/375'),
    img2: shot('https://musclecat.vercel.app/', 'width/1280/crop/900'),
    img3: shot('https://musclecat.vercel.app/', 'width/1280'),
  },
  {
    n: '06',
    category: 'Client',
    name: 'NE JEYMIZ',
    href: 'https://nejemyz.vercel.app/',
    summary: 'Bilingual nutrition app — clean typography and a calm flow to help users make better daily food choices.',
    img1: shot('https://nejemyz.vercel.app/', 'width/720/viewportWidth/375'),
    img2: shot('https://nejemyz.vercel.app/', 'width/1280/crop/900'),
    img3: shot('https://nejemyz.vercel.app/', 'width/1280'),
  },
];

function ProjectCard({ project, index, total, progress }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div
      className="h-[85vh] flex items-start justify-center sticky"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <Motion.div
        style={{
          scale,
          background: '#0C0C0C',
          borderColor: '#D7E2EA',
        }}
        className="origin-top w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 relative"
      >
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div className="flex items-end gap-4 sm:gap-6 md:gap-10">
            <div
              className="hero-heading font-black"
              style={{
                fontSize: 'clamp(3rem, 10vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              {project.n}
            </div>
            <div className="flex flex-col gap-1 sm:gap-2">
              <span
                className="font-light uppercase tracking-widest"
                style={{ color: '#D7E2EA', opacity: 0.55, fontSize: 'clamp(0.7rem, 1vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(1.1rem, 2.2vw, 2rem)',
                  lineHeight: 1.1,
                  letterSpacing: '0.01em',
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <p
          className="font-light max-w-3xl"
          style={{
            color: '#D7E2EA',
            opacity: 0.7,
            fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)',
            lineHeight: 1.5,
          }}
        >
          {project.summary}
        </p>

        <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5">
          <div className="col-span-12 sm:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-5">
            <img
              src={project.img1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.img2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="col-span-12 sm:col-span-7">
            <img
              src={project.img3}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ minHeight: '100%' }}
            />
          </div>
        </div>
      </Motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="-mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={30}
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{
          fontSize: 'clamp(3rem, 12vw, 160px)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        Projects
      </FadeIn>

      <div className="flex flex-col">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.n}
            project={p}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
