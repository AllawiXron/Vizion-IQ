/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { Sparkles, Mouse, ArrowDown, ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Sparkles background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId: number;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Light-weight floating sparks
    interface Spark {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;
    }

    const sparks: Spark[] = [];
    const maxSparks = 40;

    for (let i = 0; i < maxSparks; i++) {
      sparks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: (Math.random() * -0.2) - 0.1, // Drifts up slowly
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 160, 23, ${s.opacity})`;
        ctx.fill();

        // Update position
        s.y += s.speedY;
        if (s.y < 0) {
          s.y = height;
          s.x = Math.random() * width;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.getElementById("contents-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featureCards = [
    { icon: "🛠️", title: "Meta Ads الاحترافي", desc: "أقوى استراتيجيات الاستهداف وإطلاق الحملات وضبط أحداث البكسل بذكاء في العراق." },
    { icon: "🇮🇶", title: "السوق العراقي المحلي", desc: "دراسة سلوك العميل وتوزيعه الديموغرافي بين المحافظات الكبرى والأقضية." },
    { icon: "🔍", title: "تشخيص الفشل الفوري", desc: "طرق تحليل الحملات الضعيفة، وعلاجات الميزانية المستنزفة دون نتائج." },
    { icon: "📅", title: "خطة ٣٠ يوماً منظمة", desc: "خريطة طريق يومية عملية لدمج المهارات وتحقيق أول ١٠٠٠ مبيعة ناجحة." },
    { icon: "💰", title: "مضاعفة المبيعات الفورية", desc: "صياغة عروض مغرية بنظام الحزم وعمل تسويق إضافي ورفع متوسط سلتك." },
    { icon: "🏆", title: "النصائح الهاتفية الذهبية", desc: "سكريبتات حوارية لتأكيد الطلبيات COD عبر الهاتف لخفض المرتجعات تماماً." }
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-20 px-4 md:px-6 text-center select-none" id="hero-section">
      {/* Sparks Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />

      {/* Luxury Cinematic Glow Blobs */}
      <div className="absolute top-[10%] right-[10%] w-[450px] h-[450px] bg-[#D4A017]/10 rounded-full blur-[100px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#0D1B56]/50 rounded-full blur-[120px] pointer-events-none animate-float-medium" />

      {/* Main Container */}
      <div className="max-w-4xl z-10 space-y-8 flex flex-col items-center">
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 shadow shadow-[#D4A017]/5 text-xs text-[#F0C040] font-bold animate-[pulse_3s_infinite]">
          <Sparkles className="w-3.5 h-3.5 text-[#F0C040]" />
          <span>✦ الدليل الاحترافي الشامل للتجارة الرقمية</span>
        </div>

        {/* Headings */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5.5xl md:text-7xl font-black text-white tracking-tight leading-none">
            دليلك الشامل لزيادة
          </h1>
          <h2 className="text-5xl sm:text-6.5xl md:text-8xl font-black tracking-tight leading-none gold-gradient-text uppercase">
            المبيعات في العراق
          </h2>
        </div>

        {/* Shimmering Divider Line */}
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent shadow-[0_0_10px_#D4A017]" />

        {/* Description */}
        <p className="text-sm md:text-lg text-white/85 max-w-2xl leading-relaxed font-light">
          استراتيجيات <span className="font-bold text-[#F0C040] font-sans">Meta Ads</span> المتقدمة — من صياغة الإعلانات الجاذبة للهجات المحلية إلى المبيعات الملموسة والدفع نقدًا عند الاستلام.
        </p>

        {/* Features Bento Grid (6 cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl pt-8">
          {featureCards.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-panel border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#D4A017]/40 shadow-lg group relative overflow-hidden"
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-[#D4A017]/0 group-hover:bg-[#D4A017]/[0.02] transition-colors" />
              
              <span className="text-2xl mb-2.5 transform group-hover:scale-110 transition-transform">{feat.icon}</span>
              <h3 className="text-xs font-extrabold text-white mb-1.5 group-hover:text-[#F0C040] transition-colors">{feat.title}</h3>
              <p className="text-[10px] text-white/50 leading-relaxed font-light">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={handleScrollDown}
          className="pt-10 flex flex-col items-center gap-1.5 text-[10px] text-white/40 hover:text-white transition-colors cursor-pointer group"
        >
          <Mouse className="w-5 h-5 text-[#F0C040] animate-bounce" />
          <span className="font-medium tracking-widest group-hover:text-[#F0C040] transition-colors">تصفح فهرس المحتويات</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/30 group-hover:text-[#F0C040] transition-colors" />
        </button>

      </div>
    </div>
  );
}
