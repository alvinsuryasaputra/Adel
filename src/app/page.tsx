'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, Globe, X, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  const [activeView, setActiveView] = useState('home');

  const toggleView = (view: string) => {
    if (activeView === view) {
      setActiveView('home'); 
    } else {
      setActiveView(view); 
    }
  };

  return (
    <main className="min-h-[100dvh] bg-[#f5f4f0] text-[#3d405b] font-sans flex justify-center py-8 px-4 md:py-12 md:px-6">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInSlide {
          from { 
            opacity: 0; 
            transform: translateX(15px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        .animate-view {
          animation: fadeInSlide 0.4s ease-out forwards;
        }

        .nav-button:hover .nav-star { color: #1a1a1a; }
      `}</style>

      <div className="m-auto max-w-3xl w-full flex flex-col gap-8 md:gap-10">

        {/* ── SECTION 1: HERO (SELALU MUNCUL) ── */}
        <section className="flex flex-row justify-between items-start gap-2 sm:gap-4 md:gap-8 w-full">

          <div className="flex flex-row gap-2.5 sm:gap-4 md:gap-8 flex-1 min-w-0">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-36 md:h-36 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-sm md:shadow-md relative bg-[#e8e6e0]">
              <Image src="/avatar.png" alt="CIEL avatar" fill className="object-cover" priority />
            </div>

            <div className="flex-1 flex flex-col gap-1.5 md:gap-3.5 min-w-0">
              <div>
                <h1 className="font-serif-display text-[18px] sm:text-2xl md:text-[32px] font-bold text-[#2c3040] leading-none tracking-tight truncate">
                  CIEL༉
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-[13px] text-slate-400 tracking-wide mt-1 truncate">(@uchvvjin)</p>
              </div>

              {/* ── LIST DENGAN BULLET POINTS ── */}
              <ul className="flex flex-col gap-1 md:gap-1.5">
                <li className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[13px] text-slate-500 font-medium truncate">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-300 flex-shrink-0" /> ID / EN
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[13px] text-slate-500 font-medium truncate">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-slate-300 flex-shrink-0" /> GMT +7
                </li>
                <li className="flex items-center gap-2 md:gap-3 text-[8px] md:text-[11px] text-[#2c3040] font-black uppercase tracking-widest truncate">
                  <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#2c3040] flex-shrink-0 opacity-40" /> ART AND ENTERTAINMENT
                </li>
              </ul>

              {/* ── BUTTON PROJECT SEKAI ── */}
              <div className="flex pt-1 md:pt-1.5">
                <a href="https://wa.me/6282134140287?text=Project%20Sekai!" target="_blank"
                  className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#2c3040] hover:text-white transition-all shadow-sm text-[10px] md:text-[12px] font-bold text-slate-500 tracking-wide">
                  Project Sekai Reroll Account?
                </a>
              </div>
              
            </div>
          </div>

          <div className="w-[125px] sm:w-[140px] md:w-56 flex-shrink-0">
            <div className="border border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:border-2 md:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-1.5 md:px-3 py-1 md:py-2 flex justify-between items-center mb-2 md:mb-3">
              <span className="text-[6.5px] sm:text-[7px] md:text-[9px] font-black uppercase tracking-tight md:tracking-[0.2em] text-black truncate">ART COMMISSION</span>
              <span className="text-[10px] md:text-sm font-bold border-l border-black pl-1 md:pl-2">≡</span>
            </div>
            <ul className="flex flex-col gap-0 text-[8px] sm:text-[9px] md:text-[12px] font-bold">
              {[
                { id: 'pricelist', label: 'Pricelist' },
                { id: 'samples', label: 'Samples' },
                { id: 'capability', label: 'Capability' },
                { id: 'terms', label: 'Terms of Service' },
              ].map((item) => (
                <li key={item.id} className="border-b border-gray-200 pb-1.5 md:pb-2 mb-1.5 md:mb-2">
                  <button 
                    onClick={() => toggleView(item.id)}
                    className={`nav-button w-full text-left flex items-center gap-1 md:gap-2 transition-all duration-300 ${
                      activeView === item.id 
                        ? 'text-black pl-1.5 md:pl-2 border-l-2 border-[#2c3040]' 
                        : 'text-slate-400 hover:text-black hover:pl-1'
                    }`}
                  >
                    <Star size={8} className={`nav-star md:w-2.5 md:h-2.5 flex-shrink-0 transition-colors ${activeView === item.id ? 'text-black' : 'text-slate-300'}`} />
                    <span className="truncate">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── AREA KONTEN DINAMIS ── */}
        {activeView !== 'home' && (
          <div className="animate-view flex flex-col gap-8 md:gap-12 pt-4 md:pt-6 border-t-2 border-dashed border-gray-200">
            
            {/* VIEW 1: PRICELIST */}
            {activeView === 'pricelist' && (
              <div className="flex flex-col gap-10 md:gap-14">
                <div className="flex flex-col gap-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="font-serif-display text-lg md:text-[22px] font-bold text-center uppercase tracking-tight pb-3 md:pb-4 w-1/2">Commission Type</th>
                        <th className="font-serif-display text-lg md:text-[22px] font-bold text-center uppercase tracking-tight pb-3 md:pb-4 w-1/2">Price (IDR / USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Chibi Icon', price: '50.000 / $15' },
                        { type: 'Portrait Skeb', price: '80.000 / $20' },
                        { type: 'Chibi Mini Splash', price: '85.000 / $25' },
                      ].map((row) => (
                        <tr key={row.type} className="border-b border-gray-200">
                          <td className="py-4 md:py-5 italic text-center text-[13px] md:text-[15px] text-slate-500">{row.type}</td>
                          <td className="py-4 md:py-5 font-bold text-center text-[13px] md:text-[15px] text-black font-mono">{row.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div>
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="font-serif-display text-base md:text-[18px] font-bold text-center pb-3 md:pb-4 w-1/2">Additional charges</th>
                        <th className="font-serif-display text-base md:text-[18px] font-bold text-center pb-3 md:pb-4 w-1/2">Charge</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: 'Props / Complex Design', charge: '+5k – 25k/ea' },
                        { label: 'Private Fee', charge: '+75%' },
                        { label: 'Additional Character', charge: '+100%/ea' },
                        { label: 'Commercial Use', charge: '+120%' },
                      ].map((row) => (
                        <tr key={row.label} className="border-b border-gray-200 text-center">
                          <td className="py-3 md:py-4 italic text-slate-500 text-[13px] md:text-[14px]">{row.label}</td>
                          <td className="py-3 md:py-4 font-bold text-black text-[13px] md:text-[14px]">{row.charge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VIEW 2: SAMPLES */}
            {activeView === 'samples' && (
              <div className="flex flex-col gap-8">
                <div className="text-center md:text-left">
                  <h2 className="font-serif-display text-2xl md:text-[28px] font-bold text-[#2c3040] tracking-tight">Art Samples</h2>
                  <div className="w-16 h-[3px] bg-black mt-2 mx-auto md:mx-0" />
                </div>

                <div>
                  <h3 className="font-serif-display text-[16px] md:text-[17px] italic font-semibold text-slate-600 border-l-4 border-yellow-400 pl-4 mb-4">
                    Normal Style
                  </h3>
                  <div className="columns-2 md:columns-4 gap-3.5 space-y-3.5">
                    {['sample1.jpg', 'sample2.jpg', 'sample3.jpg'].map((img, i) => (
                      <div key={i} className="group break-inside-avoid mb-3.5 rounded-xl overflow-hidden border-2 border-white shadow-sm hover:shadow-md transition-all">
                        <Image
                          src={`/samples/${img}`}
                          alt={`Normal sample ${i + 1}`}
                          width={1000}
                          height={1000}
                          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-display text-[16px] md:text-[17px] italic font-semibold text-slate-600 border-l-4 border-purple-400 pl-4 mb-4">
                    Chibi Style
                  </h3>
                  <div className="columns-2 md:columns-4 gap-3.5 space-y-3.5">
                    {['samplec1.jpg', 'samplec2.jpg', 'samplec3.jpg', 'samplec4.jpg'].map((img, i) => (
                      <div key={i} className="group break-inside-avoid mb-3.5 rounded-xl overflow-hidden border-2 border-white shadow-sm hover:shadow-md transition-all">
                        <Image
                          src={`/samples/${img}`}
                          alt={`Chibi sample ${i + 1}`}
                          width={1000}
                          height={1000}
                          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: CAPABILITY */}
            {activeView === 'capability' && (
              <div className="animate-view">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="font-serif-display text-base md:text-[18px] font-bold text-green-700 text-center uppercase tracking-widest pb-3 md:pb-4 w-1/2">Can</th>
                      <th className="font-serif-display text-base md:text-[18px] font-bold text-red-700 text-center uppercase tracking-widest pb-3 md:pb-4 w-1/2">Cannot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Female Characters', 'Extreme Muscle'],
                      ['Original Characters (OC)', 'Elderly / Old People'],
                      ['Fanart', 'Mecha / Robots'],
                      ['Kemonomimi', 'Full Furry'],
                      ['Side Profiles', 'Heavy NSFW'],
                      ['Male (Ask first)', 'Realism'],
                    ].map(([can, cant], i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="py-3 md:py-4 italic text-center text-[13px] md:text-[15px] text-slate-500">{can}</td>
                        <td className="py-3 md:py-4 italic text-center text-[13px] md:text-[15px] text-slate-500">{cant}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* VIEW 4: TERMS OF SERVICE */}
            {activeView === 'terms' && (
              <div className="animate-view flex flex-col gap-6">
                <h2 className="font-serif-display text-2xl md:text-[28px] font-bold text-[#2c3040] tracking-tight text-center md:text-left">Terms of Service</h2>
                <div className="bg-white p-6 md:p-8 border border-gray-200 rounded-2xl shadow-sm">
                  <ul className="flex flex-col gap-4 md:gap-5 text-[13px] md:text-[14px] text-slate-500 leading-relaxed">
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">01.</span> First come, first served.</li>
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">02.</span> TAT: 4 – 20 hari kerja per karya.</li>
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">03.</span> Update progres berkala via DM.</li>
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">04.</span> Mohon bersabar! Tidak menerima komisi mendadak/deadline.</li>
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">05.</span> DP 50% di awal, pelunasan setelah sketsa.</li>
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">06.</span> Revisi sketsa bebas, setelah sketsa hanya bisa revisi warna.</li>
                    <li className="flex gap-3 md:gap-4"><span className="font-bold text-black shrink-0">07.</span> No Refund! kecuali jika saya tidak bisa melanjutkan karena kondisi tertentu.</li>
                    <li>
                      <p className="font-bold text-red-700 bg-red-50 border-2 border-red-100 rounded-xl px-4 md:px-5 py-3 md:py-4 italic text-[12px] md:text-[13px] leading-relaxed">
                        DILARANG KERAS menggunakan hasil karya untuk keperluan AI (Artificial Intelligence) dan/atau NFT.
                      </p>
                    </li>
                    <li className="text-slate-400 italic text-[11px] md:text-[12px] border-t border-gray-100 pt-3 md:pt-4">
                      * Saya selalu memposting hasil commission ke SNS, jadi mohon beri tahu dulu jika tidak ingin dipublikasikan.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <button 
              onClick={() => setActiveView('home')}
              className="mt-4 mx-auto md:mx-0 w-fit text-[11px] md:text-sm font-bold text-slate-400 hover:text-black uppercase tracking-widest border-b border-transparent hover:border-black transition-all"
            >
              Close / Return
            </button>
          </div>
        )}

        {/* ── FOOTER / TOMBOL ORDER (SELALU MUNCUL DI BAWAH) ── */}
        <section className={`flex flex-col items-center gap-6 md:gap-8 transition-all duration-500 ${activeView === 'home' ? 'pt-2' : 'pt-8 border-t-2 border-gray-200'}`}>
          
          {activeView !== 'home' && (
            <div className="text-center flex flex-col items-center gap-2">
              <h3 className="font-serif-display italic text-2xl md:text-[28px] text-[#2c3040]">Ready to order?</h3>
              <p className="text-slate-400 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">Choose your preferred platform</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-2xl">
            <a href="https://wa.me/6282134140287" target="_blank"
              className="flex-1 flex items-center justify-center gap-3 bg-[#2c3040] text-white px-4 md:px-6 py-3.5 md:py-5 rounded-2xl font-black text-[13px] md:text-[15px] shadow-[0_4px_0_0_#1a1d26] md:shadow-[0_6px_0_0_#1a1d26] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all">
              <MessageCircle size={18} className="md:w-[22px] md:h-[22px]" /> WhatsApp
            </a>
            <a href="https://vgen.co/uchuujin" target="_blank"
              className="flex-1 flex items-center justify-center gap-3 bg-[#2c3040] text-white px-4 md:px-6 py-3.5 md:py-5 rounded-2xl font-black text-[13px] md:text-[15px] shadow-[0_4px_0_0_#1a1d26] md:shadow-[0_6px_0_0_#1a1d26] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all">
              <Globe size={18} className="md:w-[22px] md:h-[22px]" /> VGen
            </a>
            <a href="https://x.com/uchvvjin" target="_blank"
              className="flex-1 flex items-center justify-center gap-3 bg-[#2c3040] text-white px-4 md:px-6 py-3.5 md:py-5 rounded-2xl font-black text-[13px] md:text-[15px] shadow-[0_4px_0_0_#1a1d26] md:shadow-[0_6px_0_0_#1a1d26] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all">
              <X size={18} className="md:w-[22px] md:h-[22px]" /> X
            </a>
          </div>

          <p className="text-[9px] md:text-[10px] text-gray-300 font-mono uppercase tracking-[0.3em] text-center mt-2 md:mt-4">
            <a href="https://instagram.com/vinfinfinfin" target="_blank" rel="noopener noreferrer">vin</a><br />
            <span className="opacity-40">♡</span>
          </p>
        </section>

      </div>
    </main>
  );
}