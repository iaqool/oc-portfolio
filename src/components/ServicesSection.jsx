import FadeIn from './ui/FadeIn';

const SERVICES = [
  {
    n: '01',
    name: 'AI Fullstack Development',
    desc: 'End-to-end AI products: agents, RAG pipelines, multi-agent systems and production-ready integrations on top of GPT, Gemini and open models.',
  },
  {
    n: '02',
    name: 'Web Design & Development',
    desc: 'Clean, modern, conversion-focused websites — from high-converting landings to complex SaaS dashboards with attention to typography and motion.',
  },
  {
    n: '03',
    name: 'Web3 & Solana',
    desc: 'Smart contracts, programmable wallets and on-chain logic on Solana — Anchor programs, oracles and full-stack dApps wired to real product flows.',
  },
  {
    n: '04',
    name: 'AI Content & Avatars',
    desc: 'Virtual influencers, generative video and image pipelines for brands that need a constant stream of striking content at 10x speed.',
  },
  {
    n: '05',
    name: 'Automation & Integrations',
    desc: 'WhatsApp / Telegram bots, CRM workflows (amoCRM, Bitrix24, 1C) and AI-driven back office that quietly does the boring work for you.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#FFFFFF', color: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={30}
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{
          color: '#0C0C0C',
          fontSize: 'clamp(3rem, 12vw, 160px)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
        }}
      >
        Services
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((item, i) => (
          <FadeIn
            key={item.n}
            delay={i * 0.1}
            y={20}
            className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : 'none',
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            <div
              className="font-black flex-shrink-0"
              style={{
                color: '#0C0C0C',
                fontSize: 'clamp(3rem, 10vw, 140px)',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              {item.n}
            </div>
            <div className="flex-1 flex flex-col gap-3 sm:gap-4 md:gap-5">
              <h3
                className="font-medium uppercase"
                style={{
                  color: '#0C0C0C',
                  fontSize: 'clamp(1rem, 2.2vw, 2.1rem)',
                  lineHeight: 1.1,
                  letterSpacing: '0.02em',
                }}
              >
                {item.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {item.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
