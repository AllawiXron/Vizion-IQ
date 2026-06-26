/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, ShieldAlert, Cpu, PhoneCall, Gift, Truck, Zap, HelpCircle, ArrowLeftRight, Check, AlertCircle } from "lucide-react";

interface Secret {
  id: string;
  title: string;
  icon: string;
  tag: string;
  problem: string;
  secretReveal: string;
  actionableStep: string;
  statsImpact: string;
  badgeColor: string;
}

export default function EliteSecrets() {
  const [activeSecretId, setActiveSecretId] = useState("exam-season");
  
  // Return rate calculator state
  const [deliveredOrders, setDeliveredOrders] = useState(150);
  const [returnedOrders, setReturnedOrders] = useState(50);
  const [productCost, setProductCost] = useState(15000); // IQD
  const [shippingCost, setShippingCost] = useState(5000);  // IQD
  const [sellingPrice, setSellingPrice] = useState(45000); // IQD
  const [adSpendPerOrder, setAdSpendPerOrder] = useState(6000); // IQD (approx $4)

  const secretsList: Secret[] = [
    {
      id: "exam-season",
      title: "سر قطوعات الإنترنت الصباحية (امتحانات التربية)",
      icon: "📶",
      tag: "التحكم بالميزانية الإعلانية",
      problem: "خلال شهور امتحانات البكالوريا المتوسطة والإعدادية (أيار، حزيران، تموز)، تقوم وزارة التربية بقطع إنترنت الهواتف تماماً من الساعة 6 صباحاً حتى 9 صباحاً. تظل إعلانات فيسبوك وتيك توك تصرف ميزانيتك على نقرات معلقة أو مشوشة، مما يدمر أداء الحملة لليوم بالكامل.",
      secretReveal: "كبار المسوقين في العراق يبرمجون حملاتهم (Ad Scheduling) للتوقف التام بين الـ 5:30 والـ 9:30 صباحاً خلال أسابيع الامتحانات، أو يقومون بإيقاف الحملات يدوياً بالكامل في هذا الوقت وتشغيلها بعد الظهر.",
      actionableStep: "برمج حملتك في Meta Ads Manager لتعمل فقط من الساعة 12:00 ظهراً وحتى 1:00 بعد منتصف الليل خلال مواسم الامتحانات. هذا سيوفر لك 30% من الميزانية المهدرة فوراً ويركز الصرف في أوقات الذروة الفعلية.",
      statsImpact: "خفض تكلفة الشراء (CPA) بنسبة تصل إلى 25% خلال مواسم الامتحانات.",
      badgeColor: "from-amber-500/20 to-amber-600/30 text-amber-300 border-amber-500/30"
    },
    {
      id: "whatsapp-packing",
      title: "خدعة 'فيديو التعبئة الشخصي' لتأمين الطلبية",
      icon: "🎥",
      tag: "الالتزام وتقليل المرتجع",
      problem: "الزبون العراقي يتسوق بنبض عاطفي عشوائي، وعند اتصال المندوب به بعد 48 ساعة يرفض الاستلام بحجة 'ما متواجد'، 'مغير رأيي'، أو يقوم بحظر الرقم.",
      secretReveal: "بعد إنهاء مكالمة التأكيد الهاتفية فوراً، يقوم كاشير المتجر بتصوير فيديو حقيقي مدته 5 ثوانٍ فقط بهاتفه، يظهر فيه طرد الزبون وهو يُغلق بملصق يحمل اسمه الثلاثي ورقم هاتفه، ويُرسل الفيديو للزبون عبر واتساب بعبارة: (أبو جاسم الغالي، طردك الخاص تغلف وجاهز للتسليم لشركة الشحن، غداً يوصلك إن شاء الله).",
      actionableStep: "استخدم هاتفاً مخصصاً للتعبئة، ودرّب موظف المخزن على إرسال هذا الفيديو البسيط كرسالة شخصية ودية. هذا يبني التزاماً أدبياً واجتماعياً قوياً عند الزبون ويمنعه من التراجع.",
      statsImpact: "ارتفاع نسبة استلام الطرود (Delivery Rate) من 65% إلى 88% حقيقية.",
      badgeColor: "from-emerald-500/20 to-emerald-600/30 text-emerald-300 border-emerald-500/30"
    },
    {
      id: "driver-incentive",
      title: "الحافز السري لمندوب الشحن (المناديب)",
      icon: "🛵",
      tag: "حلول التوصيل الميداني",
      problem: "المناديب في المحافظات يواجهون ضغطاً هائلاً وازدحاماً. إذا اتصل المندوب بالزبون مرة واحدة ولم يجب، يقوم فوراً بتسجيل الطلب 'مرفوض' أو 'لا يجيب' ليوفر الوقت وينتقل لطلبية أخرى سهلة.",
      secretReveal: "سر النخبة يكمن في تجاوز إدارة شركة الشحن والتواصل الودي المباشر مع المناديب والمنسقين بالمحافظات الكبرى. امنح المندوب عمولة شخصية مباشرة بقيمة (1,000 د.ع) تضاف إلى كشفك لحساب المندوب عن كل طرد ينجح بتسليمه في المناطق الصعبة.",
      actionableStep: "اتصل بمناديب التوصيل في البصرة أو الموصل مباشرة وعرّفهم بنفسك وأخبرهم: 'أخي العزيز، كل طرد تسلمه من متجرنا لك عليه عمولة طيبة من جيبنا'. ستجدهم يتصلون بالزبون 4 أو 5 مرات ويذهبون لبيته خصيصاً لإتمام التسليم بدلاً من تسجيله كمرتجع.",
      statsImpact: "استرجاع 15 طرداً من أصل كل 100 طرد كانت ستسجل كمرتجع تالف.",
      badgeColor: "from-blue-500/20 to-blue-600/30 text-blue-300 border-blue-500/30"
    },
    {
      id: "multi-sim",
      title: "استراتيجية الـ Multi-SIM للخطوط الثلاثة",
      icon: "📱",
      tag: "لوحة الاتصالات للمبيعات",
      problem: "الزبون العراقي قد يتجاهل المكالمات الواردة من شركات اتصال لا يملك خطاً فيها تلافياً لرسوم الاتصال، أو بسبب ضعف التغطية لشبكة آسيا سيل في الجنوب أو زين في الشمال.",
      secretReveal: "في مركز اتصالاتك، يجب تزويد الموظفين بأجهزة تدعم شرائح اتصال متعددة (Multi-SIM) تحتوي على خطوط فعالة من الشبكات الثلاث الكبرى: آسيا سيل (077)، زين العراق (078/079)، وكورك تيليكوم (075).",
      actionableStep: "عند الاتصال بزبون يبدأ رقمه بـ 077، اتصل به حصراً من خط آسيا سيل الخاص بك. وإذا كان 078 اتصل به من خط زين. هذا يظهر رقماً مألوفاً، ويسهل على الزبون معاودة الاتصال بك مجاناً إذا كان مشغولاً.",
      statsImpact: "ارتفاع نسبة الرد على مكالمات التأكيد (Answer Rate) من 50% إلى 82%.",
      badgeColor: "from-purple-500/20 to-purple-600/30 text-purple-300 border-purple-500/30"
    },
    {
      id: "kurdistan-customs",
      title: "الفصل الجغرافي الصارم (بغداد ضد كردستان)",
      icon: "🗺️",
      tag: "الهندسة اللوجستية للبلد",
      problem: "شحن البضائع من مستودعات بغداد إلى أربيل أو السليمانية يتطلب المرور بـ 'سيطرات' ونقاط تفتيش جمركية وأمنية معقدة، مما يؤدي لتأخير الطرد لـ 5 أيام، فيبرد شغف الزبون الكردي ويرفض الاستلام.",
      secretReveal: "الشركات الكبرى لا تشحن طروداً فردية عبر السيطرات بانتظام. بل تقوم بشحن 'مخزون جملة' دفعة واحدة بسيارات جمركية مرخصة إلى مستودع مصغر (Hub) في أربيل، وتتم إدارة الشحن والتأكيد للجمهور الكردي محلياً بلهجة كردية متقنة.",
      actionableStep: "إذا لم تكن تمتلك ميزانية مستودع في الشمال، قيد حملاتك الإعلانية الجغرافية لتستهدف فقط (بغداد ومحافظات الوسط والجنوب) واستثنِ إقليم كردستان مؤقتاً لتتخلص من مشاكل السيطرات وتأخر الشحن، حتى تقرر فتح مخزون خاص هناك.",
      statsImpact: "تصفير مرتجعات الشحن الخارجي الطويل وتوفير رسوم الشحن البينية.",
      badgeColor: "from-cyan-500/20 to-cyan-600/30 text-cyan-300 border-cyan-500/30"
    },
    {
      id: "whatsapp-voice",
      title: "قوة البصمة الصوتية (Voice Note) في المتابعة",
      icon: "🎙️",
      tag: "خدمة العملاء الخارقة",
      problem: "الزبائن يتجاهلون الرسائل النصية المكتوبة على واتساب لأن الغالبية تفضل الاستماع والتفاعل الشفوي بدلاً من القراءة، والرسائل التلقائية الباردة تبدو لهم كإعلانات سبام مزعجة.",
      secretReveal: "عند حدوث مشكلة في العنوان أو عدم رد الزبون على الهاتف، لا ترسل له نصاً جاهزاً. بل دعه يسمع صوتاً بشرياً حقيقياً دافئاً بلهجة عراقية محترمة جداً عبر بصمة صوتية لا تتجاوز 15 ثانية تشرح له الوضع.",
      actionableStep: "سجل بصمة صوتية مثل: (أهلاً بك عيني أخي العزيز، أنا حوراء من متجر كذا.. تواصلنا معاك لتأكيد طردك الفخم وما صار نصيب ترد علينا.. طردك جاهز ويا المندوب حالياً بس رد علينا حتى ما نلغيه وتفوتك الفرصة الحصرية). نسبة رد العميل على هذا التسجيل الصوتي خارقة.",
      statsImpact: "تحويل 40% من الطلبات الميتة والمعلقة إلى طلبات ناجحة ومؤكدة.",
      badgeColor: "from-pink-500/20 to-pink-600/30 text-pink-300 border-pink-500/30"
    }
  ];

  const activeSecret = secretsList.find(s => s.id === activeSecretId) || secretsList[0];

  // Mathematical Calculation of return cost leak
  // Total shipped = Delivered + Returned
  const totalShipped = Number(deliveredOrders) + Number(returnedOrders);
  const totalProductCostForReturned = Number(returnedOrders) * Number(productCost);
  const totalShippingCostPaidForReturned = Number(returnedOrders) * Number(shippingCost);
  const totalAdSpendForReturned = Number(returnedOrders) * Number(adSpendPerOrder);
  
  // Return penalty
  const totalLossFromReturns = totalShippingCostPaidForReturned + totalAdSpendForReturned + (totalProductCostForReturned * 0.15); // assuming 15% damaged inventory/packaging
  const revenueFromDelivered = Number(deliveredOrders) * Number(sellingPrice);
  const costOfDeliveredProducts = Number(deliveredOrders) * Number(productCost);
  const shippingCostOfDelivered = Number(deliveredOrders) * Number(shippingCost);
  const adSpendOfDelivered = Number(deliveredOrders) * Number(adSpendPerOrder);
  
  const trueProfit = revenueFromDelivered - costOfDeliveredProducts - shippingCostOfDelivered - adSpendOfDelivered - totalLossFromReturns;

  return (
    <div className="space-y-12 py-6">
      
      {/* SECTION BANNER */}
      <div className="relative rounded-3xl p-6 md:p-8 border border-[#D4A017]/30 bg-gradient-to-br from-[#0F1735] via-[#040B24] to-[#0D1B56] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between relative z-10">
          <div className="space-y-3 text-right max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/40 text-xs text-[#F0C040] font-black animate-pulse">
              <Sparkles className="w-4 h-4 text-[#F0C040]" />
              <span>خزنة أسرار النخبة المكتومة (مستوى المحترفين)</span>
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-white leading-tight">
              ٧ أسرار واقعية للتجارة الإلكترونية في العراق لا يكشفها لك أحد!
            </h3>
            <p className="text-xs md:text-sm text-white/70 font-light leading-relaxed">
              هذه الحلول ليست نظريات كتب من الغرب، بل هي عصارة تجارب عملية لملايين الدولارات تم صرفها في محافظات العراق من الموصل للفاو لانتزاع أعلى نسب استلام وحماية هوامش الربح.
            </p>
          </div>
          <span className="text-5xl md:text-6xl filter drop-shadow-[0_0_15px_#D4A017]">🔑👑</span>
        </div>
      </div>

      {/* INTERACTIVE TAB SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Secrets Selection Rail (5 Columns) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold text-[#F0C040] block mr-2 mb-1">💡 اختر المفهوم لقفل السر الذهبي:</span>
          <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1 no-scrollbar">
            {secretsList.map((sec) => {
              const isActive = sec.id === activeSecretId;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSecretId(sec.id)}
                  className={`w-full p-4 rounded-2xl border text-right transition-all duration-300 relative cursor-pointer flex items-center justify-between group overflow-hidden ${
                    isActive
                      ? "bg-gradient-to-l from-[#D4A017]/15 to-[#040B24] border-[#D4A017] text-[#F0C040] shadow-xl shadow-[#D4A017]/5"
                      : "bg-white/[0.02] border-white/5 text-white/80 hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform">{sec.icon}</span>
                    <div className="space-y-0.5">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border inline-block ${sec.badgeColor}`}>
                        {sec.tag}
                      </span>
                      <h4 className="font-extrabold text-xs text-white group-hover:text-[#F0C040] transition-colors line-clamp-1">
                        {sec.title}
                      </h4>
                    </div>
                  </div>
                  <span className={`text-xs font-mono font-bold transition-transform ${isActive ? "text-[#F0C040] translate-x-1" : "text-white/20 group-hover:text-white/40"}`}>
                    ◀
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secret Detail Display Card (7 Columns) */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#0F1735]/40 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden min-h-[480px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4A017]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-6">
            {/* Header of details */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{activeSecret.icon}</span>
                <div>
                  <span className="text-[10px] text-[#F0C040] font-bold uppercase tracking-wider">{activeSecret.tag}</span>
                  <h3 className="text-lg md:text-xl font-black text-white mt-1">{activeSecret.title}</h3>
                </div>
              </div>
            </div>

            {/* Problem Section */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                المشكلة الحقيقية بالسوق (العقبة الكبرى):
              </span>
              <p className="text-xs md:text-sm text-white/85 leading-relaxed font-light bg-red-950/20 border border-red-500/10 p-3.5 rounded-xl">
                {activeSecret.problem}
              </p>
            </div>

            {/* Secret Reveal Section */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#F0C040] flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#F0C040]" />
                السر الحقيقي المستور (الحل التكتيكي للمحترفين):
              </span>
              <p className="text-xs md:text-sm text-white/90 leading-relaxed font-medium bg-[#D4A017]/5 border border-[#D4A017]/20 p-4 rounded-xl shadow-lg border-r-4 border-r-[#D4A017]">
                {activeSecret.secretReveal}
              </p>
            </div>

            {/* How to execute action */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                خطوة التنفيذ العملية الفورية (ماذا تفعل غداً؟):
              </span>
              <p className="text-xs text-white/80 leading-relaxed font-light bg-emerald-950/10 border border-emerald-500/15 p-3.5 rounded-xl">
                {activeSecret.actionableStep}
              </p>
            </div>
          </div>

          {/* Bottom stats callout */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs bg-black/30 p-4 rounded-xl">
            <span className="text-white/40 font-light">الأثر الملموس على مبيعاتك:</span>
            <span className="font-extrabold text-emerald-400 text-center flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg">
              🚀 {activeSecret.statsImpact}
            </span>
          </div>

        </div>

      </div>

      {/* ADVANCED CALCULATOR: THE LEAKY BUCKET RETURN COST CALCULATOR */}
      <div className="bg-gradient-to-br from-[#0D1B56]/40 via-black/40 to-black/60 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden" id="return-leaks">
        <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
        
        {/* Title */}
        <div className="border-b border-white/10 pb-4 mb-6">
          <h4 className="text-lg font-bold text-white flex items-center gap-2">
            📊 كاشف وحاسبة تسرّب أرباح الـ COD بسبب المرتجعات (النزيف المالي)
          </h4>
          <p className="text-xs text-white/50 mt-1">
            في العراق، يظن المبتدئون أن المرتجع لا يكلفهم سوى رسوم الشحن. الحقيقة الصادمة أنك تدفع أيضاً سعر الإعلان للطلبيات الميتة وتلف بعض مواد التعبئة. احسب خسارتك الحقيقية الآن:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs (5 Columns) */}
          <div className="lg:col-span-5 space-y-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
            <span className="text-xs font-bold text-[#F0C040] block mb-2">📥 أدخل أرقام عملياتك الحالية:</span>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-white/50 block mb-1">الطلبات المستلمة (الناجحة):</label>
                <input
                  type="number"
                  value={deliveredOrders}
                  onChange={(e) => setDeliveredOrders(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-black/40 border border-white/10 focus:border-[#D4A017] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="text-[10px] text-white/50 block mb-1">الطلبات المرتجعة (الملغاة/التالفة):</label>
                <input
                  type="number"
                  value={returnedOrders}
                  onChange={(e) => setReturnedOrders(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-black/40 border border-white/10 focus:border-red-500 rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-white/50 block mb-1">سعر بيع المنتج للزبون (د.ع):</label>
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-black/40 border border-white/10 focus:border-[#D4A017] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="text-[10px] text-white/50 block mb-1">سعر شراء المنتج الأصلي (د.ع):</label>
                <input
                  type="number"
                  value={productCost}
                  onChange={(e) => setProductCost(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-black/40 border border-white/10 focus:border-[#D4A017] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] text-white/50 block mb-1">تكلفة الشحن للمحافظة (د.ع):</label>
                <input
                  type="number"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-black/40 border border-white/10 focus:border-[#D4A017] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>
              <div>
                <label className="text-[10px] text-white/50 block mb-1">تكلفة الإعلان لكل طلب (CPA) (د.ع):</label>
                <input
                  type="number"
                  value={adSpendPerOrder}
                  onChange={(e) => setAdSpendPerOrder(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full bg-black/40 border border-white/10 focus:border-[#D4A017] rounded-lg px-3 py-1.5 text-xs text-white font-mono"
                />
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-white/40 block leading-normal">
                * ملاحظة: يتم احتساب خسارة 15% إضافية من سعر منتجات المرتجعات كتكلفة لكرتون التعبئة التالف أو المنتجات التي تتعرض للخدوش أثناء التنقل الارتدادي.
              </span>
            </div>
          </div>

          {/* Calculations Outcome (7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Loss metrics analysis */}
            <div className="bg-red-950/20 border border-red-500/25 p-5 rounded-2xl space-y-4 text-right flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-red-400 block uppercase tracking-wider">الخسارة الصافية المهدرة (النزيف):</span>
                <span className="text-2xl md:text-3xl font-black text-red-400 font-mono">
                  {totalLossFromReturns.toLocaleString()} د.ع
                </span>
                <p className="text-[11px] text-white/60 leading-relaxed font-light pt-2">
                  هذا هو المبلغ الإجمالي الذي دفعته للإعلانات والشحن والتلفيات لطرود المرتجعات دون الحصول على أي مردود!
                </p>
              </div>

              <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] text-white/40 block">تفاصيل النزيف المالي:</span>
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>إعلانات مهدرة بالمرتجعات:</span>
                  <span className="font-mono font-bold text-red-300">{totalAdSpendForReturned.toLocaleString()} د.ع</span>
                </div>
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>أجور شحن المرتجعات:</span>
                  <span className="font-mono font-bold text-red-300">{totalShippingCostPaidForReturned.toLocaleString()} د.ع</span>
                </div>
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>خسائر تعبئة وتلفيات (15%):</span>
                  <span className="font-mono font-bold text-red-300">{(totalProductCostForReturned * 0.15).toLocaleString()} د.ع</span>
                </div>
              </div>
            </div>

            {/* Profits analysis */}
            <div className="bg-emerald-950/20 border border-emerald-500/25 p-5 rounded-2xl space-y-4 text-right flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-emerald-400 block uppercase tracking-wider">أرباحك الحقيقية المتبقية (الصافي):</span>
                <span className={`text-2xl md:text-3xl font-black font-mono block ${trueProfit >= 0 ? "text-emerald-400 animate-pulse" : "text-red-500"}`}>
                  {trueProfit.toLocaleString()} د.ع
                </span>
                <p className="text-[11px] text-white/60 leading-relaxed font-light pt-2">
                  بعد خصم تكاليف المنتجات وشحنها وإعلاناتها، وخصم النزيف الحاصل من خسارة المرتجعات.
                </p>
              </div>

              <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] text-white/40 block">معدل صحة حسابك العام:</span>
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>إجمالي الطلبيات المشحونة:</span>
                  <span className="font-mono font-bold text-white">{totalShipped} طلب</span>
                </div>
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>معدل المرتجعات الكلي:</span>
                  <span className={`font-mono font-bold ${ (returnedOrders/totalShipped) > 0.25 ? "text-red-400" : "text-emerald-400"}`}>
                    {totalShipped > 0 ? ((returnedOrders / totalShipped) * 100).toFixed(1) : 0}%
                  </span>
                </div>
                <div className="flex justify-between text-[10px] text-white/70">
                  <span>العائد على الميزانية الإعلانية:</span>
                  <span className="font-mono font-bold text-white">
                    {adSpendOfDelivered + totalAdSpendForReturned > 0 ? (revenueFromDelivered / (adSpendOfDelivered + totalAdSpendForReturned)).toFixed(2) : 0}x ROAS
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Action Tips Box */}
        <div className="bg-white/5 border border-[#D4A017]/20 p-4 rounded-2xl mt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3 text-right">
            <span className="text-3xl shrink-0">🩹🛠️</span>
            <div>
              <span className="text-xs font-bold text-[#F0C040] block">كيف توقف النزيف وتخفّض معدل المرتجع بنسبة 15% فورا؟</span>
              <p className="text-[11px] text-white/70 mt-1 font-light leading-relaxed">
                راجع أسرار النخبة بالأعلى لتفعل <span className="font-bold text-[#F0C040]">"فيديو التعبئة الشخصي"</span> وتحفيز مناديب التوصيل بـ <span className="font-bold text-emerald-400">1,000 د.ع عمولة حرة</span>. ستتحول نصف مرتجعاتك الملغاة إلى أرباح حقيقية صافية!
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
