import React from 'react';
import { Briefcase, Database, Cloud, Cpu, Layers, BarChart, Globe, Code, Zap } from 'lucide-react';

const companies = [
  { name: 'FutureWorks', icon: <Briefcase /> },
  { name: 'DataFlow', icon: <Database /> },
  { name: 'CloudScale', icon: <Cloud /> },
  { name: 'SmartSys', icon: <Cpu /> },
  { name: 'NextGen', icon: <Layers /> },
  { name: 'PeakTech', icon: <BarChart /> },
  { name: 'MetaVerse', icon: <Globe /> },
  { name: 'ByteLogic', icon: <Code /> },
  { name: 'QuantumTech', icon: <Zap /> },
];

const FloatingLogos: React.FC = () => {
  return (
    <div className="relative m-auto overflow-hidden bg-black py-6 w-[1200px] md:mt-32 mt-10  md:mb-32 mb-10">
      {/* Wrapper for infinite scrolling effect */}
      <div className="flex whitespace-nowrap animate-scroll">
        {/* Duplicated array to ensure seamless infinite scroll */}
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 px-8 text-white text-2xl font-bold opacity-90"
          >
            <div className="w-12 h-12 text-purple-400">{company.icon}</div>
            <span>{company.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          gap: 3rem;
          animation: scroll 5s linear infinite; /* Reduced speed */
        }
      `}</style>
    </div>
  );
};

export default FloatingLogos;
