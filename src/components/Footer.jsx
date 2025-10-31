import React from "react";
import log from "../assets/ChatGPT Image Oct 5, 2025, 10_22_40 PM.png";
import { SiVisa, SiMastercard, SiApplepay, SiGooglepay } from "react-icons/si";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const ACCENT = "#7c3d23";

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* ===== شريط علوي FULL-BLEED بعرض الشاشة بالكامل ===== */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        {/* الخلفية المنحنية */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 36"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M28 0 H100 V36 H28 A28 28 0 0 1 28 0 Z" fill={ACCENT} />
        </svg>

        {/* محتوى الشريط */}
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            {/* الشعار */}
            <div className="shrink-0 self-start">
              <img
                src={log}
                alt="شعار RF_COLLECTION"
                className="w-28 md:w-40 object-contain select-none pointer-events-none"
              />
            </div>

            {/* وسائل الدفع */}
            <div className="text-white w-full md:w-auto md:ml-auto md:self-center">
              <div className="w-full flex justify-end">
                <div className="flex items-center gap-5 md:gap-6 mb-3 md:mb-4">
                  <SiVisa className="text-3xl md:text-4xl drop-shadow-sm" />
                  <SiMastercard className="text-3xl md:text-4xl drop-shadow-sm" />
                  <SiApplepay className="text-3xl md:text-4xl drop-shadow-sm" />
                  <SiGooglepay className="text-3xl md:text-4xl drop-shadow-sm" />
                </div>
              </div>

              <p className="text-right text-lg md:text-2xl font-semibold leading-relaxed">
                وسائل دفع متعددة
                <br />
                اختر وسيلة الدفع المناسبة
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ===== نهاية الشريط العلوي ===== */}

      {/* الأقسام السفلية */}
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="py-10 grid grid-cols-1 md:grid-cols-4 gap-10 bg-white md:text-right text-center"
          style={{ color: ACCENT }}
        >
          {/* أكتب عن الشركة */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold mb-3">أكتب عن الشركة</h4>
            <p className="text-sm leading-relaxed mb-4">
              شركة صفاء البحر للتمور هي شركة عُمانية رائدة في مجال إنتاج وتوزيع التمور عالية الجودة. 
              نحن نفتخر بتقديم أفضل أنواع التمور العُمانية الأصيلة التي تُجمع بعناية فائقة من أفضل المزارع. 
              نسعى دائمًا لتلبية توقعات عملائنا من خلال منتجاتنا المتميزة وخدماتنا المتكاملة.
            </p>
            <p className="text-sm leading-relaxed">
              نؤمن بالجودة والتميز في كل ما نقدمه، ونسعى لأن نكون الخيار الأول لكل من يبحث عن تمور عُمانية أصيلة بمواصفات عالمية.
            </p>
          </div>

          {/* روابط مهمة */}
          <div>
            <h4 className="text-xl font-bold mb-3">روابط مهمة</h4>
            <ul className="space-y-2 text-sm">
              {/* <li>
                <a
                  href="/about"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="/partners"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  شركاؤنا
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  عملاؤنا
                </a>
              </li>
              <li>
                <a
                  href="/achievements"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  إنجازاتنا
                </a>
              </li> */}
              <li>
                <a
                  href="/contact"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  تواصل معنا
                </a>
              </li>
              <li>
                <a
                  href="/return-policy"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  سياسة الاستبدال والاسترجاع
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="transition hover:opacity-80"
                  style={{ color: ACCENT }}
                >
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div>
            <h4 className="text-xl font-bold mb-3">تواصل معنا</h4>
            <p className="text-sm mb-4">+96892760882</p>

            {/* أيقونات وسائل التواصل التي زودتنا بها */}
            <div className="flex justify-center md:justify-end gap-5">
              <a
                href="https://whatsapp.com/channel/0029Vak5ilU0rGiN0RaEWF1L"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-80"
                style={{ color: ACCENT }}
                aria-label="قناة واتساب"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/safaalbaherco?igsh=eWRhNGwwc2Q5ajBr&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-80"
                style={{ color: ACCENT }}
                aria-label="انستجرام صفاء البحر"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@safaalbaherco"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:opacity-80"
                style={{ color: ACCENT }}
                aria-label="يوتيوب صفاء البحر"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div
          className="border-t pt-4 pb-8 text-center text-sm"
          dir="rtl"
          style={{ borderColor: `${ACCENT}4D`, color: ACCENT }} // 4D ≈ 30% opacity
        >
          جميع الحقوق محفوظة لدى شركة صفاء البحر للتمور —{" "}
          <a
            href="https://www.instagram.com/mobadeere/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:opacity-80"
            style={{ color: ACCENT }}
          >
            تصميم مبادر
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;