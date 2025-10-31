import React from "react";

const Faq = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-14 text-[#7c3d23]" dir="rtl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">الأسئلة الشائعة</h1>
      <p className="text-center mb-10 text-[#8c5a55]">
        هنا تجدين إجابات لأكثر الأسئلة تكرارًا. يمكن تعديل المحتوى لاحقًا بما يناسب متجرك.
      </p>

      <section className="space-y-4">
        <details className="group border border-[#CB908B]/30 rounded-xl p-4">
          <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between">
            ما هي خيارات الدفع المتاحة؟
            <span className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-3 text-sm leading-7 text-[#70423d]">
            نوفر وسائل دفع متعددة مثل Visa وMastercard وApple Pay وGoogle Pay. اختاري ما يناسبك عند إتمام الطلب.
          </div>
        </details>

        <details className="group border border-[#CB908B]/30 rounded-xl p-4">
          <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between">
            كم يستغرق توصيل الطلب؟
            <span className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-3 text-sm leading-7 text-[#70423d]">
            عادةً من 1–3 أيام داخل المدينة، ومن 3–7 أيام للمناطق الأخرى. قد يختلف حسب شركة الشحن والكمية.
          </div>
        </details>

        <details className="group border border-[#CB908B]/30 rounded-xl p-4">
          <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between">
            ما هي سياسة الاستبدال والاسترجاع؟
            <span className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-3 text-sm leading-7 text-[#70423d]">
            يمكن الاستبدال أو الاسترجاع خلال 7 أيام بحالتها الأصلية مع الفاتورة. اطلعي على صفحة
            {" "}
            <a href="/return-policy" className="underline hover:text-[#9B2D1F]">سياسة الاستبدال والاسترجاع</a>
            {" "}للتفاصيل.
          </div>
        </details>

        <details className="group border border-[#CB908B]/30 rounded-xl p-4">
          <summary className="cursor-pointer text-lg font-semibold flex items-center justify-between">
            هل المقاسات تتوافق مع القياسات القياسية؟
            <span className="transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="mt-3 text-sm leading-7 text-[#70423d]">
            نلتزم بالمقاسات الشائعة، لكن قد تختلف القصّات. ننصح بمراجعة دليل المقاسات قبل الطلب أو مراسلتنا للمساعدة.
          </div>
        </details>
      </section>
    </main>
  );
};

export default Faq;
