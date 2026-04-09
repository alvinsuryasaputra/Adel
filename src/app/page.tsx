'use client';
import Image from 'next/image';
import { MessageCircle, Globe, X, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#3d405b] font-sans flex justify-center py-20 px-4 scroll-smooth">
      
      {/* ANIMASI HIGHLIGHT (CSS Injection) */}
      <style jsx global>{`
        @keyframes sectionHighlight {
          0% { 
            background-color: rgba(253, 224, 71, 0.5); /* Warna kuning highlight */
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(253, 224, 71, 0.3);
          }
          50% {
            transform: scale(1.01);
          }
          100% { 
            background-color: transparent;
            transform: scale(1);
            box-shadow: none;
          }
        }

        /* Trigger animasi ketika ID menjadi target di URL */
        section:target {
          animation: sectionHighlight 2s ease-out;
          border-radius: 1rem;
        }
      `}</style>

      <div className="max-w-3xl w-full space-y-24">
        
        {/* SECTION 1: HERO & NAVIGATION */}
        <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full overflow-hidden relative border-4 border-white shadow-md">
              <Image 
                src="/avatar.png" 
                alt="Adel Avatar" 
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#2c3e50] tracking-tight leading-tight">
                CIEL༉ 
              </h1>
              <p className="text-base font-normal text-slate-400 font-sans tracking-wide">(@uchvvjin)</p>
            </div>
            
            <ul className="space-y-1.5 text-[13px] text-slate-600 font-medium">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <ChevronRight size={14} className="text-slate-300" /> ID / EN
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <ChevronRight size={14} className="text-slate-300" /> GMT +7
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 font-bold tracking-widest text-green-600 uppercase">
                <ChevronRight size={14} className="text-green-600" /> CMSN OPEN
              </li>
            </ul>
            
            <div className="flex gap-3 pt-3 justify-center md:justify-start">
              <a href="https://x.com/uchvvjin" target="_blank" className="p-2.5 bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white transition-all shadow-sm">
                <X size={18} />
              </a>
              <a href="https://vgen.co/uchuujin" target="_blank" className="p-2.5 bg-white rounded-full border border-gray-200 hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                <Globe size={18} />
              </a>
              <a href="https://wa.me/6282134140287" target="_blank" className="p-2.5 bg-white rounded-full border border-gray-200 hover:bg-green-500 hover:text-white transition-all shadow-sm">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-60">
            <div className="border-2 border-black p-2 flex justify-between items-center mb-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] uppercase font-black text-black px-1 tracking-[0.2em]">Navigation</span>
              <span className="border-l-2 border-black pl-2 pr-1 text-xs font-bold">≡</span>
            </div>
            <ul className="space-y-2 text-[13px] font-bold">
              <li className="border-b border-gray-300 pb-1.5 hover:pl-2 transition-all group">
                <a href="#pricelist" className="flex items-center gap-2 w-full text-slate-500 hover:text-black">
                  <span className="text-slate-300 group-hover:text-black transition-colors">★</span> Pricelist & Samples
                </a>
              </li>
              <li className="border-b border-gray-300 pb-1.5 hover:pl-2 transition-all group">
                <a href="#capability" className="flex items-center gap-2 w-full text-slate-500 hover:text-black">
                  <span className="text-slate-300 group-hover:text-black transition-colors">★</span> Capability
                </a>
              </li>
              <li className="border-b border-gray-300 pb-1.5 hover:pl-2 transition-all group">
                <a href="#terms" className="flex items-center gap-2 w-full text-slate-500 hover:text-black">
                  <span className="text-slate-300 group-hover:text-black transition-colors">★</span> Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: PRICELIST */}
        <section className="space-y-16 pt-10 transition-all duration-500 origin-center p-4" id="pricelist">
          <div className="space-y-14">
            <div className="w-full">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="pb-4 font-serif font-bold text-2xl w-1/2 text-center uppercase tracking-tight">Normal</th>
                    <th className="pb-4 font-serif font-bold text-2xl w-1/2 text-center uppercase tracking-tight">Price (IDR)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-gray-200">
                    <td className="py-5 italic text-center text-base">Headshot</td>
                    <td className="py-5 font-bold text-center text-base text-black font-mono">65.000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-5 italic text-center text-base">Bust up</td>
                    <td className="py-5 font-bold text-center text-base text-black font-mono">80.000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-5 italic text-center text-base">Waist up</td>
                    <td className="py-5 font-bold text-center text-base text-black font-mono">120.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="w-full">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="pb-4 font-serif font-bold text-2xl w-1/2 text-center uppercase tracking-tight">Chibi</th>
                    <th className="pb-4 font-serif font-bold text-2xl w-1/2 text-center uppercase tracking-tight">Price (IDR)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-gray-200">
                    <td className="py-5 italic text-center text-base">Halfbody</td>
                    <td className="py-5 font-bold text-center text-base text-black font-mono">50.000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-5 italic text-center text-base">Fullbody</td>
                    <td className="py-5 font-bold text-center text-base text-black font-mono">75.000</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-5 italic text-center text-base">Skeb Emotes (x4)</td>
                    <td className="py-5 font-bold text-center text-base text-black font-mono">80.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 3: ADDITIONAL CHARGES */}
        <section className="pt-10 p-4 transition-all duration-500" id="additional">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="pb-4 font-serif font-bold text-xl w-1/2 text-center">Additional charges</th>
                <th className="pb-4 font-serif font-bold text-xl w-1/2 text-center">Charge (IDR)</th>
              </tr>
            </thead>
            <tbody className="text-slate-500 italic">
              <tr className="border-b border-gray-200 text-center text-sm">
                <td className="py-4">Props / Complex Design</td>
                <td className="py-4 font-bold text-black">+5k - 25k/ea</td>
              </tr>
              <tr className="border-b border-gray-200 text-center text-sm">
                <td className="py-4">Private Fee</td>
                <td className="py-4 font-bold text-black">+75%</td>
              </tr>
              <tr className="border-b border-gray-200 text-center text-sm">
                <td className="py-4">Additional Character</td>
                <td className="py-4 font-bold text-black">+100%/ea</td>
              </tr>
              <tr className="border-b border-gray-200 text-center text-sm">
                <td className="py-4">Commercial Use</td>
                <td className="py-4 font-bold text-black">+120%</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SECTION 4: CAPABILITY */}
        <section className="space-y-8 pt-10 border-t-2 border-gray-200 p-4 transition-all duration-500" id="capability">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="pb-4 font-serif font-bold text-xl text-green-700 w-1/2 text-center uppercase tracking-widest">Can</th>
                <th className="pb-4 font-serif font-bold text-xl text-red-700 w-1/2 text-center uppercase tracking-widest">Not</th>
              </tr>
            </thead>
            <tbody className="text-slate-600 italic text-center text-base">
              <tr className="border-b border-gray-200"><td className="py-4">Female Characters</td><td className="py-4">Extreme Muscle</td></tr>
              <tr className="border-b border-gray-200"><td className="py-4">Original Characters (OC)</td><td className="py-4">Elderly / Old People</td></tr>
              <tr className="border-b border-gray-200"><td className="py-4">Fanart</td><td className="py-4">Mecha / Robots</td></tr>
              <tr className="border-b border-gray-200"><td className="py-4">Kemonomimi</td><td className="py-4">Full Furry</td></tr>
              <tr className="border-b border-gray-200"><td className="py-4">Side Profiles</td><td className="py-4">Heavy NSFW</td></tr>
              <tr className="border-b border-gray-200"><td className="py-4">Male (Ask first)</td><td className="py-4">Realism</td></tr>
            </tbody>
          </table>
        </section>

        {/* SECTION 5: TERMS */}
        <section className="space-y-8 pt-10 border-t-2 border-gray-200 p-4 transition-all duration-500" id="terms">
          <h2 className="text-3xl font-serif font-bold text-[#2c3e50] text-center md:text-left tracking-tight">Terms of Service</h2>
          <div className="bg-white p-8 border border-gray-200 rounded-2xl shadow-sm">
            <ul className="text-[15px] text-slate-600 space-y-5 leading-relaxed">
              <li className="flex gap-4"><span className="text-black font-bold">01.</span> First come, first served.</li>
              <li className="flex gap-4"><span className="text-black font-bold">02.</span> TAT: 4 – 20 hari kerja per karya.</li>
              <li className="flex gap-4"><span className="text-black font-bold">03.</span> Update progres berkala via DM.</li>
              <li className="flex gap-4"><span className="text-black font-bold">04.</span> Tidak menerima komisi mendadak/rush.</li>
              <li className="flex gap-4"><span className="text-black font-bold">05.</span> DP 50% di awal.</li>
              <li className="flex gap-4"><span className="text-black font-bold">06.</span> Revisi sketsa sepuasnya.</li>
              <li className="flex gap-4"><span className="text-black font-bold">07.</span> No Refund.</li>
              <li className="font-bold text-red-600 bg-red-50 p-5 rounded-xl border-2 border-red-100 italic shadow-inner">
                DILARANG KERAS menggunakan hasil karya untuk keperluan AI (Artificial Intelligence) dan/atau NFT.
              </li>
              <li className="text-slate-400 italic text-sm border-t border-gray-100 pt-4">
                * Artist berhak memposting hasil komisi ke portofolio.
              </li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <section className="pt-24 pb-12 flex flex-col items-center gap-10 border-t-2 border-gray-200">
          <div className="text-center space-y-3">
            <h3 className="font-serif italic text-3xl text-[#2c3e50]">Ready to order?</h3>
            <p className="text-slate-400 font-sans tracking-widest text-xs uppercase">Choose your preferred platform</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-5 w-full max-w-xl">
            <a href="https://wa.me/6282134140287" target="_blank" className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-lg hover:brightness-110 hover:-translate-y-1 transition-all shadow-[0_8px_0_0_#16a34a] active:translate-y-0 active:shadow-none">
              <MessageCircle size={24} /> WhatsApp
            </a>
            <a href="https://vgen.co/uchuujin" target="_blank" className="flex-1 flex items-center justify-center gap-3 bg-[#7C3AED] text-white px-10 py-5 rounded-2xl font-black text-lg hover:brightness-110 hover:-translate-y-1 transition-all shadow-[0_8px_0_0_#5b21b6] active:translate-y-0 active:shadow-none">
              <Globe size={24} /> VGen
            </a>
          </div>
          <div className="text-center pt-10">
            <p className="text-[10px] text-gray-300 font-mono uppercase tracking-[0.3em]">
              Developed by Alvin <br/> 
              <span className="opacity-40">♡</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}