import React from "react";

// 🖼️ استدعِ صورك بنفسك هنا
import img1 from "../assets/WhatsApp_Image_2025-10-22_at_10.55.19_AM-removebg-preview.png";
import img2 from "../assets/WhatsApp_Image_2025-10-22_at_10.55.19_AM__3_-removebg-preview.png";
import img3 from "../assets/WhatsApp_Image_2025-10-22_at_10.55.19_AM__2_-removebg-preview.png";
import img4 from "../assets/WhatsApp_Image_2025-10-22_at_10.55.19_AM__1_-removebg-preview.png";

const achievements = [
  {
    id: 1,
    title: "شكر وتقدير",
    entity: "صفاء البحر للتمور",
    date: "23 / 07 / 2025 م",
    hijri: "1447 هـ",
    issuer: "اللجنة الثقافية بالعـامرة",
    highlight: "رعاية مسابقة القرآن الكريم",
    image: img1,
    blurb:
      "إسهام فاعل في إنجاح مسابقة القرآن الكريم لعام 1447 هـ عبر دعم جوائز المتسابقين وتغطية الجوانب التنظيمية. امتنان المنظمين امتد لحرصنا على استدامة البرامج القرآنية المجتمعية.",
  },
  {
    id: 2,
    title: "شكر وتقدير",
    entity: "صفاء البحر للتمور",
    date: "03 / 05 / 2023 م",
    hijri: "1444 هـ",
    issuer: "اللجنة الثقافية بالعـامرة",
    highlight: "رعاية المسابقات الرمضانية",
    image: img2,
    blurb:
      "رعاية الفعاليات الرمضانية الثقافية والاجتماعية التي أسهمت في تعزيز المشاركة المجتمعية، ودعم الجوائز والأنشطة التطوعية المصاحبة للمسابقة.",
  },
  {
    id: 3,
    title: "شركاء النجاح الأعزاء",
    entity: "صفاء البحر للتجارة",
    date: "2025",
    issuer: "مصنع الأمين للتمور",
    highlight: "شراكة استراتيجية وتميّز",
    image: img3,
    blurb:
      "تكريم لشراكة استراتيجية قائمة على الشفافية والابتكار. التعاون ساهم في تطوير المنتجات وتحسين الجودة وتعزيز قيم التميز في السوق المحلي والإقليمي.",
  },
  {
    id: 4,
    title: "شكر وتقدير",
    entity: "صفاء البحر للتمور",
    date: "08 / 05 / 2024 م",
    hijri: "1445 هـ",
    issuer: "اللجنة الثقافية بالعـامرة",
    highlight: "رعاية المسابقات الرمضانية",
    image: img4,
    blurb:
      "استمرار الرعاية السنوية للمسابقات الرمضانية بما يشمل دعم التحكيم والضيافة والهدايا التشجيعية، مما ساهم في رفع جودة التنظيم وزيادة عدد المشاركين.",
  },
];

const Achievements = () => {
  return (
    <section dir="rtl" className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#7c3d23]">
        إنجازاتنا
      </h1>

      <div className="flex flex-col gap-16">
        {achievements.map((a, index) => (
          <div
            key={a.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all`}
          >
            {/* الصورة */}
            <div className="md:w-1/2 w-full bg-gray-50 flex justify-center items-center p-6">
              <img
                src={a.image}
                alt={a.title}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>

            {/* النص */}
            <div className="md:w-1/2 w-full p-8 text-right">
              <h2 className="text-3xl font-bold text-[#7c3d23] mb-2">
                {a.title} – {a.entity}
              </h2>
              <p className="text-lg font-semibold text-amber-700 mb-3">
                {a.highlight}
              </p>
              <p className="text-gray-700 leading-8 mb-4">{a.blurb}</p>
              <div className="text-sm text-gray-500 flex flex-col gap-1">
                {a.hijri && <span>السنة الهجرية: {a.hijri}</span>}
                <span>التاريخ: {a.date}</span>
                <span>الجهة: {a.issuer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
