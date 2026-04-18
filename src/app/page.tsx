'use client';
import Image from 'next/image';
import { MessageCircle, Globe, X, ChevronRight, Star } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#3d405b] font-sans flex justify-center py-12 px-6">

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&display=swap');

        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }

        @keyframes sectionHighlight {
          0% {
            background-color: rgba(253, 224, 71, 0.4);
            transform: scale(1.01);
            box-shadow: 0 0 20px rgba(253, 224, 71, 0.2);
          }
          100% {
            background-color: transparent;
            transform: scale(1);
            box-shadow: none;
          }
        }
        section:target {
          animation: sectionHighlight 2s ease-out;
          border-radius: 14px;
        }

        .nav-link:hover .nav-star { color: #1a1a1a; }
        .nav-link:hover { color: #1a1a1a; padding-left: 4px; }
      `}</style>

      <div className="max-w-3xl w-full flex flex-col gap-[72px]">

        {/* ── SECTION 1: HERO ── */}
        <section className="flex flex-col md:flex-row gap-8 items-start">

          {/* Avatar */}
          <div className="flex-shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md relative bg-[#e8e6e0]">
            <Image src="/avatar.png" alt="CIEL avatar" fill className="object-cover" priority />
          </div>

          {/* Bio */}
          <div className="flex-1 flex flex-col gap-3.5">
            <div>
              <h1 className="font-serif-display text-3xl md:text-[32px] font-bold text-[#2c3040] leading-tight tracking-tight">
                CIEL༉
              </h1>
              <p className="text-[12px] md:text-[13px] text-slate-400 tracking-wide">(@uchvvjin)</p>
            </div>

            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-2 text-[12px] md:text-[13px] text-slate-500 font-medium">
                <ChevronRight size={12} className="text-slate-300" /> ID / EN
              </li>
              <li className="flex items-center gap-2 text-[12px] md:text-[13px] text-slate-500 font-medium">
                <ChevronRight size={12} className="text-slate-300" /> GMT +7
              </li>
              <li className="flex items-center gap-2 text-[10px] md:text-[11px] text-green-700 font-black uppercase tracking-widest">
                <ChevronRight size={12} className="text-green-600" /> CMSN OPEN
              </li>
            </ul>

            <div className="flex gap-2.5 pt-1">
              <a href="https://x.com/uchvvjin" target="_blank"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm">
                <X size={16} />
              </a>
              <a href="https://vgen.co/uchuujin" target="_blank"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-sm">
                <Globe size={16} />
              </a>
              <a href="https://wa.me/6282134140287" target="_blank"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#25d366] hover:text-white transition-all shadow-sm">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Nav Box */}
          <div className="w-full md:w-56 flex-shrink-0">
            <div className="border-2 border-black bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-3 py-2 flex justify-between items-center mb-3">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black">Navigation</span>
              <span className="text-sm font-bold border-l-2 border-black pl-2">≡</span>
            </div>
            <ul className="flex flex-col gap-0 text-[11px] md:text-[12px] font-bold">
              {[
                { href: '#pricelist', label: 'Pricelist & Samples' },
                { href: '#capability', label: 'Capability' },
                { href: '#terms', label: 'Terms of Service' },
              ].map((item) => (
                <li key={item.href} className="border-b border-gray-200 pb-2 mb-2">
                  <a href={item.href}
                    className="nav-link flex items-center gap-2 text-slate-400 transition-all duration-150">
                    <Star size={11} className="nav-star text-slate-300 transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── SECTION 2: PRICELIST ── */}
        <section id="pricelist" className="flex flex-col gap-10 md:gap-14 p-2 md:p-4 transition-all duration-500">

          {/* Normal */}
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="font-serif-display text-lg md:text-[22px] font-bold text-center uppercase tracking-tight pb-3 md:pb-4 w-1/2">Normal</th>
                <th className="font-serif-display text-lg md:text-[22px] font-bold text-center uppercase tracking-tight pb-3 md:pb-4 w-1/2">Price (IDR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Headshot', price: '65.000' },
                { type: 'Bust up', price: '80.000' },
              ].map((row) => (
                <tr key={row.type} className="border-b border-gray-200">
                  <td className="py-4 md:py-5 italic text-center text-[13px] md:text-[15px] text-slate-500">{row.type}</td>
                  <td className="py-4 md:py-5 font-bold text-center text-[13px] md:text-[15px] text-black font-mono">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Chibi */}
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="font-serif-display text-lg md:text-[22px] font-bold text-center uppercase tracking-tight pb-3 md:pb-4 w-1/2">Chibi</th>
                <th className="font-serif-display text-lg md:text-[22px] font-bold text-center uppercase tracking-tight pb-3 md:pb-4 w-1/2">Price (IDR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Halfbody', price: '50.000' },
                { type: 'Fullbody', price: '75.000' },
                { type: 'Skeb Emotes (×4)', price: '80.000' },
              ].map((row) => (
                <tr key={row.type} className="border-b border-gray-200">
                  <td className="py-4 md:py-5 italic text-center text-[13px] md:text-[15px] text-slate-500">{row.type}</td>
                  <td className="py-4 md:py-5 font-bold text-center text-[13px] md:text-[15px] text-black font-mono">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ── SECTION 3: ART SAMPLES ── */}
        <section id="samples" className="flex flex-col gap-8 p-2 md:p-4 transition-all duration-500">
          <div>
            <h2 className="font-serif-display text-2xl md:text-[28px] font-bold text-[#2c3040] tracking-tight">Art Samples</h2>
            <div className="w-16 h-[3px] bg-black mt-2" />
          </div>

          {/* Normal Style */}
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

          {/* Chibi Style */}
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
        </section>

        {/* ── SECTION 4: ADDITIONAL CHARGES ── */}
        <section id="additional" className="p-2 md:p-4 transition-all duration-500">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="font-serif-display text-base md:text-[18px] font-bold text-center pb-3 md:pb-4 w-1/2">Additional charges</th>
                <th className="font-serif-display text-base md:text-[18px] font-bold text-center pb-3 md:pb-4 w-1/2">Charge (IDR)</th>
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
        </section>

        {/* ── SECTION 5: CAPABILITY ── */}
        <section id="capability" className="p-2 md:p-4 border-t-2 border-gray-200 transition-all duration-500">
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
        </section>

        {/* ── SECTION 6: TERMS OF SERVICE ── */}
        <section id="terms" className="flex flex-col gap-6 p-2 md:p-4 border-t-2 border-gray-200 transition-all duration-500">
          <h2 className="font-serif-display text-2xl md:text-[28px] font-bold text-[#2c3040] tracking-tight">Terms of Service</h2>
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
        </section>

        {/* ── FOOTER ── */}
        <section className="flex flex-col items-center gap-6 md:gap-8 pt-8 pb-12 border-t-2 border-gray-200">
          <div className="text-center flex flex-col items-center gap-2">
            <h3 className="font-serif-display italic text-2xl md:text-[28px] text-[#2c3040]">Ready to order?</h3>
            <p className="text-slate-400 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">Choose your preferred platform</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <a href="https://wa.me/6282134140287" target="_blank"
              className="flex-1 flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 md:py-5 rounded-2xl font-black text-[14px] md:text-[15px] shadow-[0_6px_0_0_#16a34a] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all">
              <MessageCircle size={20} className="md:w-[22px] md:h-[22px]" /> WhatsApp
            </a>
            <a href="https://vgen.co/uchuujin" target="_blank"
              className="flex-1 flex items-center justify-center gap-3 bg-[#7C3AED] text-white px-8 py-4 md:py-5 rounded-2xl font-black text-[14px] md:text-[15px] shadow-[0_6px_0_0_#5b21b6] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all">
              <Globe size={20} className="md:w-[22px] md:h-[22px]" /> VGen
            </a>
          </div>

          <p className="text-[9px] md:text-[10px] text-gray-300 font-mono uppercase tracking-[0.3em] text-center leading-loose mt-4">
            Developed by Alvin<br />
            <span className="opacity-40">♡</span>
          </p>
        </section>

      </div>
    </main>
  );
}