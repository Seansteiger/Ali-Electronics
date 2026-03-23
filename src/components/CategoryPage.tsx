import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { MessageCircle } from 'lucide-react';

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId) || { name: categoryId, image: '' };
  const filteredProducts = PRODUCTS.filter(p => p.category === categoryId);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-20 md:pb-0"
    >
      {/* Category Hero */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {category.image && (
          <img 
            src={category.image} 
            alt={category.name} 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        )}
        <div className="absolute inset-0 bg-emerald-950/60 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-headline tracking-tight mb-4 capitalize">
            {category.name}
          </h1>
          <p className="text-emerald-100/80 max-w-xl mx-auto text-lg">
            Browse our premium selection of {category.name.toLowerCase()} curated for quality and style.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-on-surface-variant text-lg">No products found in this category yet.</p>
              <Link to="/" className="text-primary font-bold mt-4 inline-block">Back to Home</Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
