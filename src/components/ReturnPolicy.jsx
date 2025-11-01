import React from 'react';

const ReturnPolicy = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#7C3D23] mb-6">
          سياسة الاسترجاع والاستبدال
        </h1>

        {/* مقدمة الصفحة */}
        <div className="mb-8 text-right space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            نُرحّب بك في <span className="font-semibold text-[#7C3D23]">صفاء البحر للتمور</span>، 
            متجر عماني يهتم بتقديم أجود أنواع التمور العُمانية ومنتجاتها الطبيعية، 
            إضافةً إلى مجموعة مختارة من العطور والبهارات والمشروبات الفاخرة.
          </p>
          <p className="text-gray-600">
            نحرص على رضاك التام وثقتك بمنتجاتنا، لذا وضعنا سياسة استرجاع واستبدال واضحة 
            تحافظ على حقوق عملائنا الكرام وتضمن أعلى معايير الجودة والسلامة الغذائية.
          </p>
        </div>

        {/* البنود الأساسية */}
        <div className="space-y-6 text-right">
          
          {/* البند الأول */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">الاسترجاع</h3>
            <p className="text-gray-600 leading-relaxed">
              حفاظًا على جودة وسلامة المنتجات الغذائية، لا نقبل استرجاع التمور أو المنتجات الغذائية 
              بعد استلامها إلا في حالة وجود تلف واضح أو خطأ في الطلب من جانبنا. 
              يجب تقديم طلب الاسترجاع خلال 
              <span className="font-semibold text-[#7C3D23]"> 24 ساعة من استلام الطلبية</span>.
            </p>
          </div>

          {/* البند الثاني */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">الاستبدال</h3>
            <p className="text-gray-600 leading-relaxed">
              يمكن استبدال المنتج فقط إذا تم تسليم منتج مختلف عن المطلوب أو كان هناك خلل في التغليف. 
              لا يمكن استبدال المنتجات المفتوحة أو المستخدمة.
            </p>
          </div>

          {/* البند الثالث */}
          <div className="border-b border-gray-100 pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">المنتجات التالفة</h3>
            <p className="text-gray-600 leading-relaxed">
              في حال استلام منتج تالف أو منتهي الصلاحية، يُرجى التواصل معنا فورًا 
              خلال 24 ساعة من استلام الطلب مع إرفاق صور توضح الحالة.
            </p>
          </div>

          {/* البند الرابع */}
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">تكاليف الشحن</h3>
            <p className="text-gray-600 leading-relaxed">
              تتحمل <span className="font-semibold text-[#7C3D23]">صفاء البحر للتمور</span> 
              تكاليف الشحن في حال وجود خطأ من طرفنا (منتج خاطئ أو تالف). 
              أما في الحالات الأخرى، فتكون تكاليف الشحن على العميل.
            </p>
          </div>
        </div>

        {/* فقرة ختامية */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          نشكركم على ثقتكم بـ <span className="font-semibold text-[#7C3D23]">صفاء البحر للتمور</span> 
          ونتعهد بتقديم أفضل جودة وخدمة ترضيكم دائمًا.
        </div>

      </div>
    </div>
  );
};

export default ReturnPolicy;
