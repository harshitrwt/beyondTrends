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
    <div className="relative overflow-hidden bg-black py-6 space-x-5 w-full max-w-[1200px] mx-auto mt-10 md:mt-32 mb-10 md:mb-32">
      <div className="scroll-container">
        <div className="scroll-track">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-4 text-white text-2xl font-bold opacity-60 shrink-0"
            >
              <div className="w-6 h-6 text-purple-500">{company.icon}</div>
              <span className='font-semibold md:text-3xl text-md'>{company.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scroll-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingLogos;
