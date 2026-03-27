import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroLagFree({ title = 'Boujee Buns', subtitle = 'Luxury ingredients. Street attitude.', onOrder, onViewMenu }: { title?: string, subtitle?: string, onOrder?: () => void, onViewMenu?: () => void }) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-brand-light/10 rounded-full blur-[150px] mix-blend-screen" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-brand">The Hype is Real</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-9xl lg:text-[10rem] font-cursive tracking-normal mb-6 text-white drop-shadow-2xl"
        >
          {title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-3xl text-white/80 max-w-2xl mb-12 font-light"
        >
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          {onOrder && (
            <button 
              onClick={onOrder}
              className="group relative px-8 py-4 bg-brand text-charcoal rounded-full font-display text-xl uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-2 font-bold">
                Order Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          )}
          {onViewMenu && (
            <button 
              onClick={onViewMenu}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-display text-xl uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-md"
            >
              View Menu
            </button>
          )}
        </motion.div>
      </div>
    </div>
  );
}
