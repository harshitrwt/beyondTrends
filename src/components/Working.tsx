'use client';
import { WavyBackground } from "../components/ui/wavy-background";

const steps = [
  {
    title: "1. Discover",
    description: "Explore curated tech content — articles, GitHub repos, videos — all handpicked to boost your learning.",
  },
  {
    title: "2. Personalize",
    description: "Follow topics that interest you. Get suggestions based on your preferences and current skill level.",
  },
  {
    title: "3. Engage",
    description: "Bookmark resources, share with friends, and join discussions to stay actively involved.",
  },
  {
    title: "4. Level Up",
    description: "Track your learning, revisit top picks, and always stay ahead in the tech space.",
  }
];

export default function Working() {
  return (
    <section className="relative w-full max-w-7xl mx-auto my-12 md:my-24 px-4 md:px-8">

      {/* Wavy background only for small screens */}
      {/* Wavy background only for small screens */}
<div className="block md:hidden">
  <WavyBackground className="!py-10 px-2">
    <h1 className="text-center text-3xl font-bold text-white mb-10 leading-tight mt-36 md:mt-0">
      How It Works
    </h1>
    <div className="flex flex-col items-center gap-6">
      {steps.slice(0, 3).map((step, idx) => ( // Show only first 3 steps
        <div
          key={idx}
          className="bg-gradient-to-br from-purple-700 to-purple-900 w-full p-5 rounded-none shadow-md text-center min-h-[220px] flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
          <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  </WavyBackground>
</div>


      {/* Regular layout for medium and up */}
      <div className="hidden md:block">
        <h1 className="text-center text-5xl font-bold text-white mb-14 leading-tight">
          How It Works
        </h1>
        <div className="flex items-stretch justify-between gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex-1 bg-gradient-to-br from-purple-700 to-purple-900 p-8 shadow-md text-center min-h-[260px] flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
