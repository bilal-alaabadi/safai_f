// src/pages/AboutSafaaAlBahr.jsx
import React from "react";
import brandImg from "../assets/ChatGPT Image Oct 5, 2025, 10_22_40 PM.png";

const About = () => {
  return (
    <div dir="rtl" className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* الصورة */}
          <div className="md:w-1/2">
            <img
              src={brandImg}
              alt="صفاء البحر — تمور بجودة راسخة وهوية عُمانية"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          {/* النص */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#70423d] mb-4">
              صفاء البحر
              <br />
              <span>حكاية تمر… بروح المكان وصدق النكهة</span>
            </h2>

            <p className="text-lg leading-loose mb-4">
              في قلب عُمان، حيث تتعانق النخلة مع نسيم البحر، وُلدت{" "}
              <span className="font-semibold text-[#70423d]">صفاء البحر</span>.
              بدأت الحكاية برغبة بسيطة: أن تصل تمور عُمانية أصيلة إلى كل بيت،
              بجودة ثابتة وطعم لا يُنسى. ومن بساتين الأجداد انطلقت خطوة بخطوة،
              حتى أصبحت صفاء البحر اسمًا يُجسّد الثقة في كل حبة تمر.
            </p>

            <p className="leading-loose mb-4">
              لم نبحث عن التجمّل بقدر ما بحثنا عن الأصالة: انتقاء دقيق للمحاصيل،
              عناية بالتعبئة تحفظ الطزاجة، وتفاصيل صغيرة تصنع فرقًا كبيرًا في
              التجربة—من المذاق وحتى الهدية التي تحمل بصمتنا.
            </p>

            <p className="leading-loose mb-4">
              ومع كل موسم، تعلّمنا أن الجودة ليست وعودًا تُقال، بل ممارسات تُرى:
              شراكات محلية تعزّز مواردنا، ومعايير ضبط جودة لا تساوم، وخدمة
              عملاء تعتبر كل زبون ضيفًا عزيزًا.
            </p>

            <div className="mt-6 p-5 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#70423d] mb-3">
                رؤيتنا
              </h3>
              <ul className="space-y-2 list-disc pr-5">
                <li>أن تصبح تمور عُمان سفيرًا للطعم الأصيل في كل العالم.</li>
                <li>تجربة منتج متكاملة: من المزرعة حتى لحظة التذوّق.</li>
                <li>بناء علامة تُقاس بالثقة والاستمرارية لا بالمواسم.</li>
              </ul>
            </div>

            <div className="mt-6 p-5 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#70423d] mb-3">
                رسالتنا
              </h3>
              <p className="leading-loose">
                تقديم تمورٍ منتقاة بعناية، تعبأ بمعايير رفيعة، وتصل للعميل بلمسة
                إنسانية؛ لنحفظ قيمة المحصول، ونُكرم الذائقة، ونبني علاقة دائمة.
              </p>
            </div>

            <div className="mt-6 p-5 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#70423d] mb-3">
                قيمنا
              </h3>
              <ul className="space-y-2 list-disc pr-5">
                <li>الأصالة: جذورٌ في الأرض، وهوية لا تتبدّل.</li>
                <li>الجودة: معيارٌ ثابت في الاختيار والتعبئة والتسليم.</li>
                <li>الشفافية: نعد بما نستطيع، ونفي بما نعد.</li>
                <li>المجتمع: شراكات ورعاية لبرامج ثقافية وخيرية مستدامة.</li>
              </ul>
            </div>

            <p className="mt-8 text-lg font-medium text-[#70423d]">
              صفاء البحر… لكل حبةٍ قصة، ولكل هدية أثر.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-[#70423d]">
            نؤمن أن الجودة تبدأ من النخلة… وتكتمل بابتسامة العميل.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
