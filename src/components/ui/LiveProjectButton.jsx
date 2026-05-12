export default function LiveProjectButton({ href, label = 'Live Project', className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-block rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 ${className}`}
      style={{
        borderColor: '#D7E2EA',
        color: '#D7E2EA',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(215, 226, 234, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
      }}
    >
      {label}
    </a>
  );
}
