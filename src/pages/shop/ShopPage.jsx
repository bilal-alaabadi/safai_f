// ShopPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';
import imge from "../../assets/تصميم-بنر-عطور.png";

const filters = {
  categories: [
    'الكل',
    'تمور ومشتقاتها',
    'بهارات وتوابل',
    'عطورات طبيعية',
    'منتجات بحرية',
    'مستلزمات موسمية',
    'الخضار والفواكه',
  ],
};

const ShopPage = () => {
  const [searchParams] = useSearchParams();

  const [filtersState, setFiltersState] = useState({
    category: 'الكل',
    minPrice: '',
    maxPrice: '',
    minWeight: '',
    maxWeight: '',
  });

  useEffect(() => {
    const categoryFromURL = searchParams.get('category');
    if (categoryFromURL && filters.categories.includes(categoryFromURL)) {
      setFiltersState((prev) => ({ ...prev, category: categoryFromURL }));
    }
  }, [searchParams]);

  const [currentPage, setCurrentPage] = useState(1);
  const [ProductsPerPage] = useState(8);
  const [showFilters, setShowFilters] = useState(false);

  const { category, minPrice, maxPrice, minWeight, maxWeight } = filtersState;

  useEffect(() => {
    setCurrentPage(1);
  }, [filtersState]);

  const {
    data: { products = [], totalPages = 1, totalProducts = 0 } = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: category !== 'الكل' ? category : undefined,
    page: currentPage,
    limit: ProductsPerPage,
    ...(minPrice ? { minPrice } : {}),
    ...(maxPrice ? { maxPrice } : {}),
    ...(minWeight ? { minWeight } : {}),
    ...(maxWeight ? { maxWeight } : {}),
  });

  const clearFilters = () => {
    setFiltersState({
      category: 'الكل',
      minPrice: '',
      maxPrice: '',
      minWeight: '',
      maxWeight: '',
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (isLoading)
    return <div className="text-center py-8 text-[#7c3d23]">جاري تحميل المنتجات...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">حدث خطأ أثناء تحميل المنتجات.</div>;

  const startProduct = totalProducts === 0 ? 0 : (currentPage - 1) * ProductsPerPage + 1;
  const endProduct = Math.min(startProduct + ProductsPerPage - 1, totalProducts);

  return (
    <>
      {/* ====== البانر ====== */}
      <section
        className="relative w-full overflow-hidden bg-[#e2e5e5]"
        style={{ aspectRatio: '16/9' }}
      >
        <img
          src={imge}
          alt="متجر"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4">
            منتجاتنا المميزة
          </h1>
        </div>
      </section>

      {/* ====== قسم المنتجات والفلاتر ====== */}
      <section className="py-8">
        {/* ✅ فلتر أفقي للكمبيوتر */}
        <div className="hidden md:block mb-8">
          <div className="w-full bg-white rounded-xl shadow-md border border-[#7c3d23]/20 px-6 py-4 flex flex-wrap items-end gap-6 justify-between animate-fade-in">
            {/* الفئة */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#7c3d23] mb-1">الفئة</label>
              <select
                value={filtersState.category}
                onChange={(e) => setFiltersState((p) => ({ ...p, category: e.target.value }))}
                className="border border-[#7c3d23]/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3d23]/40"
              >
                {filters.categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* السعر */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#7c3d23] mb-1">السعر (ريال)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="من"
                  value={filtersState.minPrice}
                  onChange={(e) => setFiltersState((p) => ({ ...p, minPrice: e.target.value }))}
                  className="w-24 border border-[#7c3d23]/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3d23]/40"
                />
                <input
                  type="number"
                  placeholder="إلى"
                  value={filtersState.maxPrice}
                  onChange={(e) => setFiltersState((p) => ({ ...p, maxPrice: e.target.value }))}
                  className="w-24 border border-[#7c3d23]/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3d23]/40"
                />
              </div>
            </div>

            {/* الوزن */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-[#7c3d23] mb-1">الوزن (غرام)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="من"
                  value={filtersState.minWeight}
                  onChange={(e) => setFiltersState((p) => ({ ...p, minWeight: e.target.value }))}
                  className="w-24 border border-[#7c3d23]/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3d23]/40"
                />
                <input
                  type="number"
                  placeholder="إلى"
                  value={filtersState.maxWeight}
                  onChange={(e) => setFiltersState((p) => ({ ...p, maxWeight: e.target.value }))}
                  className="w-24 border border-[#7c3d23]/30 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c3d23]/40"
                />
              </div>
            </div>

            {/* زر المسح */}
            <div className="flex items-end">
              <button
                type="button"
                onClick={clearFilters}
                className="h-10 px-5 rounded-md bg-[#7c3d23] text-white text-sm hover:bg-[#593431] transition"
              >
                مسح الكل
              </button>
            </div>
          </div>
        </div>

        {/* ✅ فلتر الجوال */}
        <div className="block md:hidden mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-[#7c3d23] text-white py-2 px-4 rounded-md flex items-center justify-between transition-colors"
          >
            <span>{showFilters ? 'إخفاء الفلاتر' : 'تصفية المنتجات'}</span>
            <svg
              className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
              <ShopFiltering
                filters={filters}
                filtersState={filtersState}
                setFiltersState={setFiltersState}
                clearFilters={clearFilters}
              />
            </div>
          )}
        </div>

        {/* ✅ قائمة المنتجات */}
        <div>


          {products.length > 0 ? (
            <>
              <ProductCards products={products} />

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-[#7c3d23]">
                    الصفحة {currentPage} من {totalPages}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-md border transition-colors ${
                        currentPage === 1
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-200'
                          : 'border-[#7c3d23] text-[#7c3d23] hover:bg-black hover:text-white'
                      }`}
                    >
                      السابق
                    </button>

                    <div className="flex gap-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const active = currentPage === index + 1;
                        return (
                          <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-10 h-10 flex items-center justify-center rounded-md border transition-colors ${
                              active
                                ? 'bg-[#7c3d23] text-white border-[#7c3d23]'
                                : 'border-[#7c3d23] text-[#7c3d23] bg-white hover:bg-black hover:text-white'
                            }`}
                          >
                            {index + 1}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-md border transition-colors ${
                        currentPage === totalPages
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed border-gray-200'
                          : 'border-[#7c3d23] text-[#7c3d23] hover:bg-black hover:text-white'
                      }`}
                    >
                      التالي
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-lg text-[#7c3d23]">لا توجد منتجات متاحة حسب الفلتر المحدد</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-[#7c3d23] text-white rounded-md transition-colors"
              >
                عرض جميع المنتجات
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
