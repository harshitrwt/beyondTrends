// 'use client'
// export default function Working() {
//   return (
//     <>
//       <h1 className="text-center text-3xl md:text-4xl font-bold mb-8">How it works</h1>
//       <section className="flex flex-col items-center py-16 bg-black w-[90%] max-w-[1150px] mx-auto rounded-xl border-[1px] border-purple-700 shadow-lg md:mb-32 mb-20" 
//         style={{
//           backgroundImage: `url('https://i.pinimg.com/736x/59/fc/11/59fc119b7b8c5baa2f21ee03b0449503.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           position: 'relative',
//           opacity: 1.2,
//           filter: 'blur(0.6px)',
//           zIndex: 1,
//           overflow: 'hidden',
//         }}>

//         <div className="relative flex flex-col items-center w-[90%] max-w-5xl p-6 md:p-12 bg-[#0e0e10] rounded-2xl border border-white/10 text-center md:text-left">
//           {/* Text Section */}
//           <div className="flex-1 text-white px-4 md:px-12">
//             <div className="flex items-center justify-center md:justify-start space-x-3">
//               <div className="w-12 h-12 flex items-center justify-center bg-[#c4fa57] rounded-full shadow-md">
//                 <span className="text-[#6434eb] text-lg">✔️</span>
//               </div>
//               <h2 className="text-2xl md:text-3xl font-bold">
//                 <span className="text-white">Do </span>
//                 <span className="text-gray-400">more,</span>
//                 <span className="text-white"> Stress </span>
//                 <span className="text-gray-400">less</span>
//               </h2>
//             </div>
//             <p className="mt-4 text-gray-300 text-base md:text-lg">
//               Our intuitive platform automates tasks, organizes your workflow, and prioritizes your to-dos. You'll
//               accomplish more in less time, freeing you to focus on what truly matters.
//             </p>
//           </div>

//           {/* Image Section */}
//           <div className="relative flex-1 flex justify-center mt-8 md:mt-6">
//             <div className="relative w-full max-w-md bg-[#1b1b1e] rounded-xl overflow-hidden p-6 shadow-md">
//               <img src="/how-it-works.png" alt="How It Works" className="rounded-lg opacity-80 w-full" />
              
//               {/* User Label */}
//               <div className="absolute top-4 right-4 flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full text-sm">
//                 <span>Josephine</span>
//                 <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
//               </div>
              
//               {/* Stats */}
//               <div className="absolute bottom-4 left-4 bg-[#26262b] p-4 rounded-lg flex items-center space-x-3 shadow-lg">
//                 <div className="text-white">
//                   <p className="text-xs md:text-sm text-gray-400">Completed Tasks</p>
//                   <p className="text-lg md:text-2xl font-bold">25</p>
//                   <p className="text-xs text-green-400">+33%</p>
//                 </div>
//                 <div className="w-10 h-10 bg-[#c4fa57] rounded-full flex items-center justify-center">
//                   <span className="text-purple-700 text-lg">✔️</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

'use client'
import { CheckCircle, ArrowRight } from 'lucide-react';
import { WavyBackground } from "../components/ui/wavy-background";

export default function Working() {
  return (
    <>
      <h1 className="text-center md:text-[7vh] text-3xl font-semibold mb-8 mt-5 md:mt-40">How it works</h1>
      
      {/* Main Container */}
      <section className="relative flex flex-col md:flex-row md:h-[60vh] h-[60vh] items-center justify-between py-16 bg-black w-[90%] max-w-[1150px] mx-auto rounded-sm shadow-purple-700 shadow-xl md:mb-32 mb-20 overflow-hidden">
        
        {/* Text Section */}
        <WavyBackground >
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 p-6 md:p-12">
          <div className="flex items-center space-x-3 mb-4 ">
            <CheckCircle className="text-[#c4fa57] w-10 h-10" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Do More, Stress Less</h2>
          </div>
          <p className="text-gray-300 text-base md:text-lg">
            Our platform automates tasks, organizes your workflow, and prioritizes your to-dos, so you achieve more in less time.
          </p>
        </div>

        {/* Arrow SVG for Small Screens */}
        <div className="md:hidden my-4">
          <ArrowRight className="text-purple-500 w-10 h-10 rotate-90" />
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md bg-[#1b1b1e] rounded-xl overflow-hidden p-6 shadow-md">
            <img src="/how-it-works.png" alt="How It Works" className="rounded-lg opacity-90 w-full" />
            {/* Label */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full text-sm">
              <span>Josephine</span>
              <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
            </div>
            {/* Stats */}
            <div className="absolute bottom-4 left-4 bg-[#26262b] p-4 rounded-lg flex items-center space-x-3 shadow-lg">
              <div className="text-white">
                <p className="text-xs md:text-sm text-gray-400">Completed Tasks</p>
                <p className="text-lg md:text-2xl font-bold">25</p>
                <p className="text-xs text-green-400">+33%</p>
              </div>
              <div className="w-10 h-10 bg-[#c4fa57] rounded-full flex items-center justify-center">
                <CheckCircle className="text-purple-700 w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
        </WavyBackground>
      </section>
    </>
  );
}
