import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, MessageCircle, User, Search, ShoppingCart } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export const TopNav = () => {
  return (
    <nav className="bg-white/60 dark:bg-emerald-950/60 backdrop-blur-md fixed top-0 w-full z-50 shadow-[0_20px_40px_rgba(0,52,46,0.06)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl md:text-2xl font-extrabold text-emerald-900 dark:text-emerald-50 tracking-tighter font-headline">
            Ali Electronics
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/category/electronics" className="text-emerald-700 dark:text-emerald-400 font-headline font-bold tracking-tight transition-all hover:opacity-80">Electronics</Link>
            <Link to="/category/blankets" className="text-emerald-900/70 dark:text-emerald-100/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors font-headline font-bold tracking-tight">Blankets</Link>
            <Link to="/category/curtains" className="text-emerald-900/70 dark:text-emerald-100/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors font-headline font-bold tracking-tight">Curtains</Link>
            <Link to="/contact" className="text-emerald-900/70 dark:text-emerald-100/70 hover:text-emerald-900 dark:hover:text-emerald-50 transition-colors font-headline font-bold tracking-tight">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden lg:flex items-center bg-emerald-50 dark:bg-emerald-900/50 rounded-full px-4 py-2 text-emerald-900/60 dark:text-emerald-100/60">
            <Search className="w-4 h-4 mr-2" />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body" 
              placeholder="Search electronics..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-2 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/50 rounded-lg text-emerald-900 dark:text-emerald-50 transition-all active:scale-95">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/50 rounded-lg text-emerald-900 dark:text-emerald-50 transition-all active:scale-95">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-emerald-100 z-50 px-6 py-3">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/') ? 'text-emerald-600' : 'text-emerald-900/40'}`}>
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </Link>
        <Link to="/category/electronics" className={`flex flex-col items-center gap-1 ${isActive('/category/electronics') ? 'text-emerald-600' : 'text-emerald-900/40'}`}>
          <ShoppingBag className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Shop</span>
        </Link>
        <a href={WHATSAPP_LINK} className="flex flex-col items-center gap-1 text-emerald-900/40">
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Chat</span>
        </a>
        <Link to="/contact" className={`flex flex-col items-center gap-1 ${isActive('/contact') ? 'text-emerald-600' : 'text-emerald-900/40'}`}>
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Contact</span>
        </Link>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-emerald-50 dark:bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-12 py-16 max-w-screen-2xl mx-auto">
        <div>
          <span className="font-headline font-bold text-lg text-emerald-900 dark:text-emerald-50 block mb-6">Ali Electronics</span>
          <p className="text-emerald-900/60 dark:text-emerald-100/60 font-body text-sm leading-relaxed mb-6">
            Your premier destination for high-quality electronics, blankets, curtains, and essential household items in Johannesburg.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-100 text-sm uppercase tracking-widest">Contact Information</h4>
          <ul className="space-y-3 font-body text-sm leading-relaxed">
            <li className="flex items-start gap-2 text-emerald-900/60 dark:text-emerald-100/60">
              <span className="mt-1">📍</span>
              <span>Cnr Bree & Wanderers, Johannesburg</span>
            </li>
            <li className="flex items-center gap-2 text-emerald-900/60 dark:text-emerald-100/60">
              <span>📞</span>
              <span>071 838 7883</span>
            </li>
            <li className="flex items-center gap-2 text-emerald-900/60 dark:text-emerald-100/60">
              <span>📞</span>
              <span>067 677 9741</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-emerald-900 dark:text-emerald-100 text-sm uppercase tracking-widest">Customer Service</h4>
          <ul className="space-y-3 font-body text-sm">
            <li><Link to="#" className="text-emerald-900/60 dark:text-emerald-100/60 hover:text-emerald-900 dark:hover:text-emerald-50 underline underline-offset-4">Privacy Policy</Link></li>
            <li><Link to="#" className="text-emerald-900/60 dark:text-emerald-100/60 hover:text-emerald-900 dark:hover:text-emerald-50 underline underline-offset-4">Delivery Terms</Link></li>
            <li><a href={WHATSAPP_LINK} className="text-emerald-900/60 dark:text-emerald-100/60 hover:text-emerald-900 dark:hover:text-emerald-50 underline underline-offset-4">WhatsApp Catalog</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-12 py-6 border-t border-emerald-900/5 text-center">
        <p className="text-emerald-900/60 dark:text-emerald-100/60 font-body text-xs">© 2024 Ali Electronics, Blankets & Curtains. All rights reserved.</p>
      </div>
    </footer>
  );
};
