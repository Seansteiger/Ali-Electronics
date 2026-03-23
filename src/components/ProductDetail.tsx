import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MessageCircle, CheckCircle2, Zap, Monitor, Speaker, Wifi } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS, WHATSAPP_LINK } from '../constants';

export const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-primary font-bold underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-8 pb-20 md:pb-0 px-4 md:px-8 max-w-screen-2xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        {/* Product Image Showcase */}
        <div className="lg:col-span-7">
          <div className="bg-emerald-50 rounded-xl overflow-hidden aspect-[4/3] group relative shadow-sm border border-emerald-100/20">
            <img 
              alt={product.name} 
              className="w-full h-full object-cover" 
              src={product.image}
              referrerPolicy="no-referrer"
            />
            {product.tag && (
              <div className="absolute top-6 left-6">
                <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-emerald-500/20">
                  {product.tag}
                </span>
              </div>
            )}
          </div>
          
          {/* Thumbnail Grid (Mock) */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-emerald-50 rounded-lg aspect-square overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-500 transition-all">
                <img 
                  alt={`Thumbnail ${i}`} 
                  className="w-full h-full object-cover opacity-60" 
                  src={product.image}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details & Primary CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <nav className="flex gap-2 text-xs font-bold text-emerald-600 mb-6 uppercase tracking-[0.2em]">
            <Link to="/" className="hover:text-emerald-800">Home</Link>
            <span className="text-on-surface-variant/30">/</span>
            <Link to={`/category/${product.category}`} className="hover:text-emerald-800 capitalize">{product.category}</Link>
          </nav>
          
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface leading-[1.1] mb-4">
            {product.name}
          </h1>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold text-emerald-600">{product.price}</span>
            {product.oldPrice && (
              <>
                <span className="text-on-surface-variant/60 line-through text-lg">{product.oldPrice}</span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold ring-1 ring-emerald-200">SAVE 20%</span>
              </>
            )}
          </div>
          
          <p className="text-on-surface-variant leading-relaxed mb-10 text-lg">
            {product.description}
          </p>

          <div className="space-y-4 mb-12">
            <a 
              href={`${WHATSAPP_LINK}?text=Hi, I'm interested in the ${product.name}`}
              className="flex items-center justify-center gap-3 w-full bg-emerald-600 text-white py-6 rounded-2xl font-headline font-extrabold text-xl shadow-xl hover:scale-[1.03] transition-all active:scale-95 group"
            >
              <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
              Click to Order on WhatsApp
            </a>
            <p className="text-center text-sm text-on-surface-variant font-semibold tracking-tight">
              Instant response. Secure arrangements via chat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 glass-card rounded-2xl border-emerald-100/30">
              <Zap className="w-6 h-6 text-emerald-500 mb-2" />
              <h4 className="font-bold text-on-surface text-sm">High Performance</h4>
              <p className="text-xs text-on-surface-variant/80 mt-1">Quality guaranteed</p>
            </div>
            <div className="p-5 glass-card rounded-2xl border-emerald-100/30">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-2" />
              <h4 className="font-bold text-on-surface text-sm">Certified Item</h4>
              <p className="text-xs text-on-surface-variant/80 mt-1">Official stockist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      {product.specs && (
        <section className="mb-24">
          <div className="flex items-end justify-between mb-12 border-b-2 border-emerald-100 pb-6">
            <div>
              <h2 className="font-headline text-3xl font-extrabold text-emerald-900 mb-2">Technical Specifications</h2>
              <p className="text-emerald-700/70 font-medium">Precision engineering in every pixel.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
            <div className="p-8 glass-card rounded-3xl border-emerald-100/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Monitor className="w-6 h-6 text-emerald-500" />
                <h3 className="font-headline font-extrabold text-emerald-900 uppercase tracking-tighter">Display</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between py-3 border-b border-emerald-100/30">
                  <span className="text-emerald-800/60 font-medium">Screen Size</span>
                  <span className="font-bold text-emerald-900">{product.specs['Screen Size']}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-emerald-100/30">
                  <span className="text-emerald-800/60 font-medium">Resolution</span>
                  <span className="font-bold text-emerald-900">{product.specs['Resolution']}</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-emerald-800/60 font-medium">Panel Type</span>
                  <span className="font-bold text-emerald-900">{product.specs['Panel Type']}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 glass-card rounded-3xl border-emerald-100/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Speaker className="w-6 h-6 text-emerald-500" />
                <h3 className="font-headline font-extrabold text-emerald-900 uppercase tracking-tighter">Audio</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between py-3 border-b border-emerald-100/30">
                  <span className="text-emerald-800/60 font-medium">Sound Output</span>
                  <span className="font-bold text-emerald-900">{product.specs['Sound Output']}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-emerald-100/30">
                  <span className="text-emerald-800/60 font-medium">Speaker Type</span>
                  <span className="font-bold text-emerald-900">{product.specs['Speaker Type']}</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-emerald-800/60 font-medium">Dolby Atmos</span>
                  <span className="font-bold text-emerald-500">{product.specs['Dolby Atmos']}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 glass-card rounded-3xl border-emerald-100/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="w-6 h-6 text-emerald-500" />
                <h3 className="font-headline font-extrabold text-emerald-900 uppercase tracking-tighter">Connectivity</h3>
              </div>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between py-3 border-b border-emerald-100/30">
                  <span className="text-emerald-800/60 font-medium">HDMI Ports</span>
                  <span className="font-bold text-emerald-900">{product.specs['HDMI Ports']}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-emerald-100/30">
                  <span className="text-emerald-800/60 font-medium">USB Ports</span>
                  <span className="font-bold text-emerald-900">{product.specs['USB Ports']}</span>
                </li>
                <li className="flex justify-between py-3">
                  <span className="text-emerald-800/60 font-medium">Wireless</span>
                  <span className="font-bold text-emerald-900">{product.specs['Wireless']}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Related Items */}
      <section>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-headline text-3xl font-extrabold text-emerald-900">You might also like</h2>
          <div className="h-1 flex-grow bg-gradient-to-r from-emerald-100 to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group cursor-pointer">
              <div className="bg-white rounded-2xl aspect-[3/4] overflow-hidden mb-4 relative shadow-sm group-hover:shadow-xl transition-all duration-500 border border-emerald-50">
                <img 
                  alt={p.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src={p.image}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-emerald-900 group-hover:text-emerald-500 transition-colors">{p.name}</h3>
              <p className="text-emerald-500 font-extrabold mt-1">{p.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
