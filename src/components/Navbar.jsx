// ========================= src/components/Navbar.jsx =========================
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartModal from '../pages/shop/CartModal';
import avatarImg from "../assets/avatar.png";
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';
import log from "../assets/ChatGPT Image Oct 5, 2025, 10_22_40 PM.png";
import { setCountry } from '../redux/features/cart/cartSlice';

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const { country } = useSelector((state) => state.cart);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  const handleCartToggle = () => setIsCartOpen(!isCartOpen);
  const handleDropDownToggle = () => setIsDropDownOpen(!isDropDownOpen);
  const handleSideToggle = () => setIsSideOpen(!isSideOpen);

  const handleCountryChange = (e) => {
    dispatch(setCountry(e.target.value));
  };

  const adminMenus = [
    { label: "لوحة التحكم", path: "/dashboard/admin" },
    { label: "إدارة العناصر", path: "/dashboard/manage-products" },
    { label: "جميع الطلبات", path: "/dashboard/manage-orders" },
    { label: "إضافة منتج", path: "/dashboard/add-product" },
  ];

  const userMenus = [{ label: "لوحة التحكم", path: "/dashboard" }];
  const dropdownMenus = user?.role === 'admin' ? adminMenus : userMenus;

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
<>
  <style>{`
    :root {
      --color-primary: #7c3d23;
      --color-secondary: #d3ae27;
      --color-text: #000000;
      --color-bg: #ffffff;
    }
  `}</style>

<header className="w-full bg-white shadow-sm relative z-50 pt-10">
  <div className="mx-auto px-4">
    {/* Mobile Navbar */}
    <div className="md:hidden flex items-center justify-between h-16 mb-2 pb-12 pt-4">
      <button
        onClick={handleSideToggle}
        className="text-[var(--color-primary)] hover:text-black text-2xl"
      >
        <i className="ri-menu-3-line"></i>
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img
            src={log}
            alt="شعار الأنثور"
            className="h-24 object-contain"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4" dir="rtl">
        {user ? (
          <div className="relative">
            <img
              onClick={handleDropDownToggle}
              src={user?.profileImage || avatarImg}
              alt="صورة المستخدم"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-200"
            />
            {isDropDownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {dropdownMenus.map((menu, idx) => (
                    <li key={idx}>
                      <Link
                        to={menu.path}
                        onClick={() => setIsDropDownOpen(false)}
                        className="block px-4 py-3 text-lg text-[var(--color-primary)] hover:text-black transition-colors"
                      >
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-right px-4 py-3 text-lg text-[var(--color-primary)] hover:text-black transition-colors"
                    >
                      تسجيل الخروج
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-[var(--color-primary)] hover:text-black text-2xl">
            <i className="ri-user-line"></i>
          </Link>
        )}

        <button
          onClick={handleCartToggle}
          className="relative text-[var(--color-primary)] hover:text-black text-2xl"
        >
          <i className="ri-shopping-bag-line"></i>
          {products.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--color-secondary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {products.length}
            </span>
          )}
        </button>
      </div>
    </div>

    {/* Desktop Navbar */}
    <div className="hidden md:flex items-center justify-between h-20 pb-7">
      <div className="flex items-center gap-6">
        <button
          onClick={handleSideToggle}
          className="text-[var(--color-primary)] hover:text-black text-3xl transition-transform hover:scale-110"
        >
          <i className="ri-menu-3-line"></i>
        </button>

        <button
          onClick={handleCartToggle}
          className="relative text-[var(--color-primary)] hover:text-black text-3xl"
        >
          <i className="ri-shopping-bag-line"></i>
          {products.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--color-secondary)] text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
              {products.length}
            </span>
          )}
        </button>
      </div>

      <div className="flex-grow flex justify-center">
        <Link to="/">
          <img
            src={log}
            alt="شعار الأنثور"
            className="h-28 object-contain hover:scale-105 transition-transform"
          />
        </Link>
      </div>

      <div className="flex items-center gap-4" dir="rtl">
        {user ? (
          <div className="relative">
            <img
              onClick={handleDropDownToggle}
              src={user?.profileImage || avatarImg}
              alt="صورة المستخدم"
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-200 hover:border-[var(--color-secondary)] transition-colors"
            />
            {isDropDownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  {dropdownMenus.map((menu, idx) => (
                    <li key={idx}>
                      <Link
                        to={menu.path}
                        onClick={() => setIsDropDownOpen(false)}
                        className="block px-4 py-3 text-lg text-[var(--color-primary)] hover:text-black transition-colors"
                      >
                        {menu.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-right px-4 py-3 text-lg text-[var(--color-primary)] hover:text-black transition-colors"
                    >
                      تسجيل الخروج
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-[var(--color-primary)] hover:text-black text-3xl transition-colors">
            <i className="ri-user-line"></i>
          </Link>
        )}
      </div>
    </div>

    <nav className="hidden md:flex justify-center border-t border-gray-200 py-4 mt-2">
      <div className="flex gap-10">
        <Link to="/shop" className="text-[var(--color-primary)] hover:text-black font-bold text-xl transition-colors">
          المنتجات
        </Link>
        <Link to="/" className="text-[var(--color-primary)] hover:text-black font-bold text-xl transition-colors">
          الصفحة الرئيسية
        </Link>
        <Link to="/about" className="text-[var(--color-primary)] hover:text-black font-bold text-xl transition-colors">
          قصتنا
        </Link>
      </div>
    </nav>
  </div>

  {/* الشاشه الجانبية */}
  <div className={`fixed inset-0 z-50 ${isSideOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
    <div
      onClick={handleSideToggle}
      className={`absolute inset-0 bg-black transition-opacity duration-300 ${isSideOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
    />
    <aside
      className={`absolute top-0 right-0 h-full w-80 md:w-96 bg-white shadow-2xl transform transition-transform duration-300 flex flex-col justify-between ${isSideOpen ? 'translate-x-0' : 'translate-x-full'}`}
      dir="rtl"
    >
      <div className="px-5 py-4 space-y-6 overflow-y-auto flex-1">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[var(--color-primary)]">القائمة</h3>
          <button onClick={handleSideToggle} className="text-2xl text-[var(--color-primary)] hover:text-black">
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="rounded-2xl border border-gray-200 p-4 bg-white">
          <label className="block mb-2 text-sm font-medium text-gray-600">الدولة / العملة</label>
          <div className="flex items-center gap-3">
            <i className="ri-earth-line text-xl text-[var(--color-primary)]"></i>
            <select
              value={country}
              onChange={handleCountryChange}
              className="flex-1 p-3 border rounded-lg text-[var(--color-primary)] hover:text-black bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent"
            >
              <option value="عمان">عمان 🇴🇲 (ر.ع.)</option>
              <option value="دول الخليج">دول الخليج (د.إ)</option>
            </select>
          </div>
        </div>

        {/* الروابط العامة */}
        <ul className="space-y-2">
          {/* روابط إضافية للجوال فقط */}
          <li className="md:hidden"><Link to="/shop" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">المنتجات</Link></li>
          <li className="md:hidden"><Link to="/" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">الصفحة الرئيسية</Link></li>
          <li className="md:hidden"><Link to="/about" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">قصتنا</Link></li>

          {/* باقي الروابط لجميع الأجهزة */}
          <li><Link to="/partners" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">شركاؤنا</Link></li>
          <li><Link to="/clients" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">عملاؤنا</Link></li>
          <li><Link to="/achievements" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">إنجازاتنا</Link></li>
          <li><Link to="/faq" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">الأسئلة الشائعة</Link></li>
          <li><Link to="/contact" onClick={handleSideToggle} className="block p-4 rounded-xl border border-gray-200 hover:border-[var(--color-secondary)] transition-all">تواصل معنا</Link></li>
        </ul>
      </div>

      {/* اللوغو في الأسفل */}
      <div className="border-t border-gray-100 p-6 bg-gradient-to-t from-[#f9f7f5] to-white flex flex-col items-center justify-center">
        <img src={log} alt="شعار الأنثور" className="h-14 w-auto mb-2 opacity-90 hover:opacity-100 transition-opacity" />
        <p className="text-[var(--color-primary)] text-sm font-semibold">© الأنثور 2025</p>
      </div>
    </aside>
  </div>

  {isCartOpen && (
    <CartModal
      products={products}
      isOpen={isCartOpen}
      onClose={handleCartToggle}
    />
  )}
</header>
</>
  );
};

export default Navbar;
