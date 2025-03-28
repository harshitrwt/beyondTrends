import React, { useEffect, useRef } from 'react';

const companies = [
  'FutureWorks',
  'DataFlow', 'CloudScale', 'SmartSys', 'NextGen',
  'PeakTech', 'MetaVerse', 'ByteLogic', 'QuantumTech'
];

const FloatingLogos: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logos = container.getElementsByClassName('floating-logo');
    
    Array.from(logos).forEach((logo, index) => {
      const element = logo as HTMLElement;
      element.style.setProperty('--start-position', `${container.offsetWidth + 50}px`);
      element.style.animationDelay = `${index * 2}s`;
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative h-16 max-w-4xl mx-auto overflow-hidden"
    >
      {companies.map((company, index) => (
        <div
          key={index}
          className="floating-logo absolute whitespace-nowrap text-gray-400 text-lg font-bold opacity-80"
          style={{
            animation: 'floatLeft 20s linear infinite',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          {company}
        </div>
      ))}

      <style>{`
        @keyframes floatLeft {
          from {
            transform: translateX(var(--start-position));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          to {
            transform: translateX(-150px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingLogos;
