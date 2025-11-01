// ========================= src/pages/shop/SingleProduct.jsx =========================
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { addToCart } from "../../../redux/features/cart/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);
  const { country } = useSelector((state) => state.cart);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cartQty, setCartQty] = useState(1);

  const isAEDCountry = country === "الإمارات" || country === "دول الخليج";
  const currency = isAEDCountry ? "د.إ" : "ر.ع.";
  const exchangeRate = isAEDCountry ? 9.5 : 1;

  if (isLoading) return <p>جاري التحميل...</p>;
  if (error) return <p>حدث خطأ أثناء تحميل تفاصيل المنتج.</p>;
  if (!data) return null;

  const basePrice = Number(data.price || 0);
  const baseOldPrice = Number(data.oldPrice || 0);
  const finalPriceOMR = basePrice;
  const displayPrice = finalPriceOMR * exchangeRate;
  const displayOldPrice = baseOldPrice ? baseOldPrice * exchangeRate : 0;

  const hasDiscount = baseOldPrice > basePrice;
  const discountPercent = hasDiscount
    ? Math.round(((baseOldPrice - basePrice) / baseOldPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        price: finalPriceOMR,
        quantity: cartQty,
        currency,
        exchangeRate,
      })
    );
  };

  return (
    <section className="section__container mt-8" dir="rtl">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center">
        {/* الصورة */}
        <div className="md:w-1/2 w-full flex flex-col items-center text-center">
          {data.image && data.image.length > 0 ? (
            <>
              <div className="relative w-full max-w-md overflow-hidden rounded-md shadow-sm">
                {hasDiscount && (
                  <span className="absolute top-3 right-3 z-10 bg-[#7c3d23] text-white text-sm font-bold px-3 py-1 rounded-full shadow">
                    خصم {discountPercent}%
                  </span>
                )}
                <img
                  src={data.image[currentImageIndex]}
                  alt={data.name}
                  className="w-full h-auto rounded-md"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/500";
                  }}
                />
              </div>

              {/* ✅ الصور المصغرة تظهر أسفل إذا وُجد أكثر من صورة */}
              {data.image.length > 1 && (
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {data.image.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`صورة ${idx + 1}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-16 h-16 object-cover cursor-pointer rounded-md border-2 transition-all ${
                        idx === currentImageIndex
                          ? "border-[#7c3d23]"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p>لا توجد صور متاحة.</p>
          )}
        </div>

        {/* التفاصيل */}
        <div className="md:w-1/2 w-full text-center md:text-right">
          <h3
            className="text-2xl font-semibold mb-4"
            title={`${data.name}${data.weight ? ` (${data.weight})` : ""}`}
          >
            {data.name}
            {data.weight && (
              <span className="text-base text-gray-600 font-normal">
                {" "}
                ({data.weight})
              </span>
            )}
          </h3>

          <p className="text-gray-600 mb-2">الفئة: {data.category}</p>
          {data.size && (
            <p className="text-gray-600 mb-2">المقاس/السعة: {data.size}</p>
          )}
          <p className="text-gray-700 mb-4 leading-relaxed">
            {data.description}
          </p>

          {/* الأسعار */}
          <div className="mb-6">
            {hasDiscount ? (
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-2xl font-bold text-[#7c3d23]">
                  {displayPrice.toFixed(2)} {currency}
                </span>
                <span className="text-gray-400 line-through">
                  {displayOldPrice.toFixed(2)} {currency}
                </span>
                <span className="text-xs font-semibold bg-[#7c3d23]/10 text-[#7c3d23] px-2 py-1 rounded">
                  وفر {discountPercent}%
                </span>
              </div>
            ) : (
              <div className="text-2xl font-bold text-[#7c3d23]">
                {displayPrice.toFixed(2)} {currency}
              </div>
            )}
          </div>

          {/* عداد الكمية */}
          <div className="mb-6 flex items-center justify-center md:justify-start gap-4">
            <button
              type="button"
              onClick={() => setCartQty((q) => (q > 1 ? q - 1 : 1))}
              className="w-10 h-10 flex items-center justify-center bg-[#7c3d23] text-white rounded-md"
            >
              -
            </button>
            <div className="min-w-[3rem] text-center font-bold text-lg">
              {cartQty}
            </div>
            <button
              type="button"
              onClick={() => setCartQty((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center bg-[#7c3d23] text-white rounded-md"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-[#7c3d23] text-white rounded-md hover:opacity-90"
          >
            إضافة إلى السلة
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
