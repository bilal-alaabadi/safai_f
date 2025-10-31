// ShopFiltering.jsx
import React from "react";

const SectionCard = ({ title, children, defaultOpen = true }) => (
  <details
    className="group rounded-xl border border-[#7c3d23]/20 bg-white shadow-sm open:shadow-md transition-all"
    open={defaultOpen}
  >
    <summary className="flex items-center justify-between cursor-pointer select-none p-4">
      <h4 className="text-base md:text-lg font-semibold text-[#593431]">{title}</h4>
      <span className="text-[#7c3d23] transition-transform group-open:rotate-180">▾</span>
    </summary>
    <div className="px-4 pb-4">{children}</div>
  </details>
);

const Label = ({ children }) => (
  <span className="text-xs text-[#7c4e49]">{children}</span>
);

const Input = ({ label, ...props }) => (
  <label className="flex flex-col gap-1">
    <Label>{label}</Label>
    <input
      {...props}
      className="h-10 border rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3d23]/40 border-[#7c3d23]/30"
    />
  </label>
);

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
  const onChange = (name, value) => setFiltersState((p) => ({ ...p, [name]: value }));

  return (
    <aside className="md:sticky md:top-24" dir="rtl">
      {/* رأس جميل */}
      <div className="relative overflow-hidden rounded-2xl border border-[#7c3d23]/20 bg-white shadow-[0_6px_24px_rgba(203,144,139,0.12)]">
        <div className="h-2 bg-gradient-to-l from-[#7c3d23] via-[#d7b1ad] to-[#f3e5e4]" />

        <div className="p-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#593431]">تصفية المنتجات</h3>
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs md:text-sm px-3 py-1.5 rounded-full border border-[#7c3d23]/30 text-[#7c3d23] hover:bg-[#7c3d23] hover:text-white transition"
          >
            مسح الكل
          </button>
        </div>

        <div className="p-4 pt-0 space-y-4">
          {/* القسم: النوع (الفئة) */}
          <SectionCard title="النوع">
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => {
                const active = filtersState.category === category;
                return (
                  <label key={category} className="inline-block">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={active}
                      onChange={(e) => onChange("category", e.target.value)}
                      className="peer sr-only"
                    />
                    <span
                      className={[
                        "inline-flex items-center gap-2 px-3 py-2 rounded-full border text-sm transition",
                        "border-[#7c3d23]/30",
                        active
                          ? "bg-[#7c3d23] text-white shadow"
                          : "bg-white text-[#7c3d23] hover:bg-black hover:text-white",
                      ].join(" ")}
                    >
                      {category}
                    </span>
                  </label>
                );
              })}
            </div>
          </SectionCard>

          {/* القسم: السعر */}
          <SectionCard title="السعر (ريال)" defaultOpen={false}>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="الأدنى"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                inputMode="decimal"
                value={filtersState.minPrice}
                onChange={(e) => onChange("minPrice", e.target.value)}
              />
              <Input
                label="الأعلى"
                type="number"
                min="0"
                step="0.1"
                placeholder="مثال: 50"
                inputMode="decimal"
                value={filtersState.maxPrice}
                onChange={(e) => onChange("maxPrice", e.target.value)}
              />
            </div>

            {/* شريط معلومات بسيط */}
            <div className="mt-3 text-[12px] text-[#7c4e49] bg-[#7c3d23]/5 border border-[#7c3d23]/20 rounded-lg px-3 py-2">
              {filtersState.minPrice || filtersState.maxPrice ? (
                <>
                  النطاق الحالي:
                  {" "}
                  <strong>
                    {filtersState.minPrice || 0} – {filtersState.maxPrice || "∞"}
                  </strong>
                  {" "}ريال
                </>
              ) : (
                <>لم يتم تحديد نطاق السعر.</>
              )}
            </div>
          </SectionCard>

          {/* القسم: الوزن */}
          <SectionCard title="الوزن (غرام)" defaultOpen={false}>
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="الحد الأدنى"
                type="number"
                min="0"
                step="1"
                placeholder="مثال: 100"
                inputMode="numeric"
                value={filtersState.minWeight}
                onChange={(e) => onChange("minWeight", e.target.value)}
              />
              <Input
                label="الحد الأعلى"
                type="number"
                min="0"
                step="1"
                placeholder="مثال: 1000"
                inputMode="numeric"
                value={filtersState.maxWeight}
                onChange={(e) => onChange("maxWeight", e.target.value)}
              />
            </div>

            {/* شريط معلومات بسيط */}
            <div className="mt-3 text-[12px] text-[#7c4e49] bg-[#7c3d23]/5 border border-[#7c3d23]/20 rounded-lg px-3 py-2">
              {filtersState.minWeight || filtersState.maxWeight ? (
                <>
                  النطاق الحالي:
                  {" "}
                  <strong>
                    {filtersState.minWeight || 0} – {filtersState.maxWeight || "∞"}
                  </strong>
                  {" "}غرام
                </>
              ) : (
                <>لم يتم تحديد نطاق الوزن.</>
              )}
            </div>
          </SectionCard>
        </div>
      </div>
    </aside>
  );
};

export default ShopFiltering;
