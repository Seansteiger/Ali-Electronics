import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES, WHATSAPP_LINK } from '../constants';

export const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20 md:pb-0"
    >
      {/* Hero Section */}
      <section className="px-4 md:px-8 max-w-screen-2xl mx-auto mb-20 pt-4">
        <div className="relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] flex items-center bg-primary-container">
          <div className="absolute inset-0 opacity-40">
            <img 
              alt="High-end 4K Television" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxg6K6T8aSpXrNgq8ehJvQYGNFAahyCMyydilwutDqoFYANmj2SvbCmPi0EYnfGkgKC2tAKX56jNNAZNw2mQ-3aVUAoQS39tiVP07eQPMOpffLqyaCrVzHDBrQkj3s_5As1ylNZU2GnqvZQe-mXj-DolOSXB6k1xzI4b-TFslkhrtcRUI54c6nS2fiKja8VepC7_WA5LU77UYx5-NvDsIeF00Y-CRbMgO--aDKjmWRR7fsfSx1ytgvkFaZr_H5zbvWyobD5IyjBkI"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
          <div className="relative z-10 px-6 md:px-16 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold uppercase tracking-widest mb-6">Premium Collection</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-headline leading-[1.1] mb-6 tracking-tight">
              Elegance in Every <span className="text-secondary-container">Detail</span>.
            </h1>
            <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed max-w-md">
              Upgrade your lifestyle with our curated selection of high-end electronics and luxury home textiles.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="bg-secondary text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-emerald-900/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Order via WhatsApp
              </a>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                View Catalog
              </button>
            </div>
          </div>
          
          {/* Float card */}
          <div className="absolute right-16 bottom-16 hidden lg:block w-72 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-secondary-container" />
              </div>
              <div>
                <p className="text-white font-bold">In Stock</p>
                <p className="text-white/60 text-xs">Fast Local Delivery</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">Experience the soft touch of our premium blankets, available in 12 colors.</p>
          </div>
        </div>
      </section>

      {/* Shop by Category Bento Grid */}
      <section className="px-4 md:px-8 max-w-screen-2xl mx-auto mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight mb-2">Shop by Category</h2>
            <p className="text-on-surface-variant">Quality essentials for every corner of your home.</p>
          </div>
          <Link to="/category/electronics" className="text-primary font-bold flex items-center gap-1 hover:underline underline-offset-4">
            View all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:h-[600px]">
          {/* TVs (Large) */}
          <Link to="/product/tv-1" className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-emerald-50 rounded-xl relative group overflow-hidden h-64 md:h-auto">
            <img 
              alt="Smart TVs" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={CATEGORIES[0].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 p-8">
              <h3 className="text-white text-3xl font-extrabold font-headline mb-2">Smart TVs</h3>
              <p className="text-white/70 mb-4">4K UHD & OLED Displays</p>
              <span className="bg-white text-primary px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Shop Now</span>
            </div>
          </Link>

          {/* Blankets */}
          <Link to="/category/blankets" className="md:col-span-2 lg:col-span-3 bg-emerald-50 rounded-xl relative group overflow-hidden h-64 md:h-auto">
            <img 
              alt="Luxury Blankets" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={CATEGORIES[1].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 p-6">
              <h3 className="text-white text-xl font-extrabold font-headline">Luxury Blankets</h3>
              <p className="text-white/70 text-sm">Ultra-soft plush comfort</p>
            </div>
          </Link>

          {/* Curtains */}
          <Link to="/category/curtains" className="md:col-span-1 lg:col-span-2 bg-emerald-50 rounded-xl relative group overflow-hidden h-64 md:h-auto">
            <img 
              alt="Curtains" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={CATEGORIES[2].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-900/40 group-hover:bg-emerald-900/20 transition-colors"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-extrabold font-headline">Stylish Curtains</h3>
            </div>
          </Link>

          {/* Fans & Cooling */}
          <div className="md:col-span-1 lg:col-span-2 bg-emerald-50 rounded-xl relative group overflow-hidden h-64 md:h-auto">
            <img 
              alt="Fans" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={CATEGORIES[3].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-extrabold font-headline">Fans & Cooling</h3>
            </div>
          </div>

          {/* Luggage */}
          <div className="md:col-span-1 lg:col-span-2 bg-emerald-50 rounded-xl relative group overflow-hidden h-64 md:h-auto">
            <img 
              alt="Luggage" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={CATEGORIES[4].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-extrabold font-headline">Durable Luggage</h3>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Workflow Section */}
      <section className="bg-emerald-50/50 py-24 mb-24">
        <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Easy Ordering</span>
              <h2 className="text-4xl font-extrabold text-primary font-headline mb-8 leading-tight">Order from Home via <br/><span className="text-emerald-600">WhatsApp</span></h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface mb-2">Browse the Collection</h4>
                    <p className="text-on-surface-variant">Choose your favorite products from our extensive online catalog or visit us in store.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface mb-2">Message our Team</h4>
                    <p className="text-on-surface-variant">Send a screenshot or product name to our WhatsApp line for instant pricing and stock info.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-on-surface mb-2">Secure & Deliver</h4>
                    <p className="text-on-surface-variant">Confirm your order, pay via EFT or cash on delivery, and wait for our fast local dispatch.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-outline-variant/20">
                <div>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Direct Support</p>
                  <p className="text-xl font-extrabold text-primary font-headline">071 838 7883</p>
                </div>
                <div className="hidden sm:block h-10 w-[1px] bg-outline-variant/30"></div>
                <a 
                  href={WHATSAPP_LINK}
                  className="bg-secondary text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Chat
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-container rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-primary-fixed rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-white/50">
                <img 
                  alt="WhatsApp Interface" 
                  className="rounded-2xl w-full h-auto" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXNjmXlf021JfYqWtw7voXjnuFnYtxC-DJAT9hviHd2H2Z7xbq88Sxz8VQs5Hr1dIthgaJ2gG5I9xgTTF_uWco_VB7Nh0AyNG56ZNtHJ-X8lX7yl3IHwOpnjUmiJ2Go76WxK64v_2w1lQvkPJGn0HF2nJDLYDdaUFJ7BPZ9zyGt3pv9q5xyFepqqxYvWE_wm-0KloZ9K6QGBVxevSMtDO4hZTZF_QCv7R9a5gvTEHSOnzrRWNaXAz2G4wOZNdGMN2ZOE77Q7TMTsA"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-4 md:px-8 max-w-screen-2xl mx-auto mb-24">
        <h2 className="text-3xl font-extrabold text-on-surface font-headline tracking-tight mb-12">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <div className="relative aspect-square rounded-xl bg-emerald-50 overflow-hidden mb-4">
                <img 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {product.tag}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md py-3 rounded-lg font-bold text-primary flex items-center justify-center gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Inquire Now
                </div>
              </div>
              <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{product.name}</h4>
              <p className="text-sm text-on-surface-variant">{product.description.split('.')[0]}</p>
              <p className="text-emerald-700 font-extrabold mt-1">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Floating WhatsApp Button (Desktop) */}
      <a 
        href={WHATSAPP_LINK}
        className="hidden md:flex fixed bottom-8 right-8 rounded-full py-4 px-6 z-[60] bg-emerald-700 text-white shadow-xl shadow-emerald-900/20 items-center justify-center cursor-pointer hover:brightness-110 hover:scale-105 active:scale-90 transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="font-body font-bold text-sm">Message Us</span>
        </div>
      </a>
    </motion.div>
  );
};
