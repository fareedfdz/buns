import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Star, 
  Instagram, 
  Twitter, 
  Facebook, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Zap, 
  Crown,
  ChevronRight,
  Plus
} from 'lucide-react';
import { MENU_ITEMS, REVIEWS, LOCATIONS } from './constants';
import { MenuItem } from './types';
import Hero from './components/ui/hero';
import HeroLagFree from './components/ui/hero-lagfree';

import { LiquidButton } from './components/ui/liquid-glass-button';
import { TextScramble } from './components/ui/text-scramble';

const Logo = ({ className = "" }: { className?: string }) => (
  <span className={`font-cursive text-white drop-shadow-md tracking-normal normal-case ${className}`}>
    Boujee Buns
  </span>
);

// --- Components ---

const Navbar = ({ activePage, setActivePage, cartCount }: { activePage: string, setActivePage: (p: string) => void, cartCount: number }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Locations', id: 'locations' },
    { name: 'About', id: 'about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => setActivePage('home')} className="flex items-center gap-2 group">
          <Logo className="text-4xl" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button 
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-semibold uppercase tracking-widest hover:text-brand transition-colors ${activePage === link.id ? 'text-brand' : 'text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <LiquidButton 
            onClick={() => setActivePage('order')}
            className="font-bold text-sm uppercase tracking-tighter flex items-center gap-2"
          >
            Order Now
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-charcoal">
                  {cartCount}
                </span>
              )}
            </div>
          </LiquidButton>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <MenuIcon className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-charcoal z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Logo className="text-3xl" />
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8">
              {navLinks.map(link => (
                <button 
                  key={link.id}
                  onClick={() => { setActivePage(link.id); setIsMobileMenuOpen(false); }}
                  className="text-4xl font-display text-left hover:text-brand transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <LiquidButton 
                onClick={() => { setActivePage('order'); setIsMobileMenuOpen(false); }}
                className="py-4 rounded-xl font-display text-2xl uppercase mt-4"
              >
                Order Now
              </LiquidButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};



const SocialProof = () => {
  return (
    <div className="bg-white/5 py-8 border-y border-white/10">
      <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-charcoal" alt="Avatar" />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1 text-gold">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-xs font-bold uppercase tracking-tighter text-white/60">Loved by 50,000+ Foodies</p>
          </div>
        </div>
        <div className="flex items-center gap-12 opacity-40 grayscale">
          <span className="font-display text-2xl">Eater</span>
          <span className="font-display text-2xl">Vogue</span>
          <span className="font-display text-2xl">Foodie</span>
          <span className="font-display text-2xl">The Feed</span>
        </div>
      </div>
    </div>
  );
};

const BurgerCard = ({ item, onAdd }: { item: MenuItem, onAdd: (i: MenuItem) => void, key?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass rounded-3xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.isViral && (
          <span className="absolute top-4 left-4 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
            <Zap className="w-3 h-3" /> Viral Choice
          </span>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-charcoal to-transparent opacity-60"></div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl leading-none">{item.name}</h3>
          <span className="text-brand font-bold text-xl">Rs. {item.price}</span>
        </div>
        <p className="text-white/60 text-sm mb-8 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <LiquidButton 
          onClick={() => onAdd(item)}
          className="w-full py-4 rounded-2xl font-bold uppercase tracking-tighter flex items-center justify-center gap-2"
        >
          Add to Cart <Plus className="w-4 h-4" />
        </LiquidButton>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { icon: <Crown className="w-8 h-8 text-brand" />, title: "Premium Smash", desc: "Crispy edges, juicy centers. The perfect smash every single time." },
    { icon: <Zap className="w-8 h-8 text-brand" />, title: "Secret Sauces", desc: "Our signature sauces are crafted in small batches for maximum flavor." },
    { icon: <Clock className="w-8 h-8 text-blue-400" />, title: "Late Night", desc: "Cravings don't sleep, and neither do we. Open late to serve you." },
    { icon: <Instagram className="w-8 h-8 text-pink-400" />, title: "Viral Aesthetic", desc: "Designed to be seen. Your followers aren't ready for this." },
  ];

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl mb-4">
          <TextScramble text="Why" className="mr-4" />
          <span className="text-brand"><TextScramble text="Boujee?" /></span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">Because basic is boring. We've redefined the burger experience for the modern era.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-colors">
            <div className="mb-6">{f.icon}</div>
            <h3 className="text-xl mb-3">{f.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const PromoSection = () => {
  return (
    <section className="py-24 bg-brand relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-[200px] font-display uppercase mr-20">LATE NIGHT CRAVINGS • LATE NIGHT CRAVINGS • </span>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-6xl md:text-8xl text-charcoal mb-8 leading-none flex flex-col items-center">
          <TextScramble text="LATE NIGHT" />
          <TextScramble text="CRAVINGS SORTED" />
        </h2>
        <p className="text-charcoal/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
          Join the inner circle. Get exclusive access to secret menu items and limited time drops.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white/20 border-2 border-charcoal/20 rounded-2xl px-6 py-4 text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:border-charcoal flex-1"
          />
          <LiquidButton className="px-8 py-4 rounded-2xl font-display text-xl hover:scale-105 transition-transform">
            Join Now
          </LiquidButton>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl mb-4 flex flex-wrap gap-4">
            <TextScramble text="The" />
            <span className="text-brand"><TextScramble text="Hype" /></span>
            <TextScramble text="is Real" />
          </h2>
          <p className="text-white/50">Lahore's finest smash burgers. The taste everyone is talking about.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-2xl font-display">4.9/5</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40">Average Rating</p>
          </div>
          <div className="flex text-brand">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {REVIEWS.map(r => (
          <div key={r.id} className="glass p-8 rounded-3xl relative">
            <div className="flex items-center gap-4 mb-6">
              <img src={r.avatar} className="w-12 h-12 rounded-full border border-white/20" alt={r.name} />
              <div>
                <p className="font-bold text-sm">{r.name}</p>
                <p className="text-[10px] text-brand font-bold uppercase tracking-widest">{r.handle}</p>
              </div>
            </div>
            <p className="text-white/70 italic leading-relaxed mb-6">"{r.text}"</p>
            <div className="flex text-brand gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white/5 pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Logo className="text-4xl" />
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Redefining fast food with a luxury edge. We're not just a burger joint; we're a lifestyle brand for the bold and the hungry.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Instagram className="w-5 h-5" /></button>
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Twitter className="w-5 h-5" /></button>
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-brand transition-colors"><Facebook className="w-5 h-5" /></button>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-white/40 text-sm">
              <li><button className="hover:text-white transition-colors">Menu</button></li>
              <li><button className="hover:text-white transition-colors">Locations</button></li>
              <li><button className="hover:text-white transition-colors">Order Online</button></li>
              <li><button className="hover:text-white transition-colors">About Us</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-8">Contact</h4>
            <ul className="flex flex-col gap-4 text-white/40 text-sm">
              <li>hello@boujeebuns.com</li>
              <li>+1 (555) BOU-JEE1</li>
              <li>DHA Phase 5, Lahore</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-white/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest text-white/20">© 2026 Boujee Buns. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/20">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ViralSection = () => {
  return (
    <section className="py-24 bg-charcoal-light relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="relative aspect-square rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              alt="Viral Burger" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-charcoal to-transparent opacity-40"></div>
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-brand text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest animate-pulse">
                Trending Now
              </span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-5xl md:text-7xl mb-8 leading-none flex flex-col items-start">
            <TextScramble text="THE" />
            <span className="text-brand"><TextScramble text="MAIN CHARACTER" /></span>
            <TextScramble text="DROP." />
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Triple patty, triple cheese, beef bacon, onion rings, and BBQ sauce. You are the star of this show. The most talked-about bite in DHA.
          </p>
          <div className="glass p-8 rounded-2xl mb-10 border-l-4 border-l-brand">
            <p className="text-white font-bold mb-2 italic">"I literally cried when I took the first bite. The cheese pull is insane."</p>
            <p className="text-white/40 text-xs">— @foodie_queen on TikTok</p>
          </div>
          <LiquidButton className="px-10 py-4 rounded-2xl font-display text-2xl flex items-center gap-3">
            Secure Yours <ArrowRight className="w-6 h-6" />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
};

// --- Pages ---

const HomePage = ({ onAddToCart, onNavigate }: { onAddToCart: (i: MenuItem) => void, onNavigate: (p: string) => void, key?: string }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <HeroLagFree 
        title="Boujee Buns" 
        subtitle="Luxury ingredients. Street attitude." 
        onOrder={() => onNavigate('menu')} 
        onViewMenu={() => onNavigate('menu')} 
      />
      <SocialProof />
      
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl mb-4">
              <TextScramble text="Signature" className="mr-4" />
              <span className="text-brand"><TextScramble text="Drops" /></span>
            </h2>
            <p className="text-white/50">Our most viral creations. Limited quantities daily.</p>
          </div>
          <LiquidButton 
            onClick={() => onNavigate('menu')}
            className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
            variant="ghost"
          >
            View Full Menu <ChevronRight className="w-4 h-4" />
          </LiquidButton>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {MENU_ITEMS.filter(i => i.category === 'beef').slice(0, 3).map(item => (
            <BurgerCard key={item.id} item={item} onAdd={onAddToCart} />
          ))}
        </div>
      </section>

      <ViralSection />
      <Features />
      <PromoSection />
      <Reviews />
    </motion.div>
  );
};

const MenuPage = ({ onAddToCart }: { onAddToCart: (i: MenuItem) => void, key?: string }) => {
  const [activeCategory, setActiveCategory] = useState<'beef' | 'chicken' | 'combos' | 'fries' | 'drinks' | 'sauces'>('beef');
  const categories = ['beef', 'chicken', 'combos', 'fries', 'drinks', 'sauces'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl mb-4">
          <TextScramble text="The" className="mr-4" />
          <span className="text-brand"><TextScramble text="Menu" /></span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">Luxury ingredients. Street attitude. Choose your player.</p>
      </div>

      <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4 no-scrollbar">
        {categories.map(cat => (
          <LiquidButton 
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            variant={activeCategory === cat ? 'default' : 'ghost'}
            className="px-8 py-3 rounded-full font-display text-xl uppercase tracking-tighter"
          >
            {cat}
          </LiquidButton>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {MENU_ITEMS.filter(i => i.category === activeCategory).map(item => (
          <BurgerCard key={item.id} item={item} onAdd={onAddToCart} />
        ))}
      </div>
    </motion.div>
  );
};

const LocationsPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-8xl mb-4">
          <TextScramble text="Find" className="mr-4" />
          <span className="text-brand"><TextScramble text="Us" /></span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto">We're taking over the city. Visit our high-fashion burger boutiques.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {LOCATIONS.map(loc => (
          <div key={loc.id} className="glass p-12 rounded-3xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-48 h-48 bg-white/5 rounded-2xl flex items-center justify-center">
              <MapPin className="w-16 h-16 text-brand" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500">Currently Open</span>
              </div>
              <h3 className="text-3xl mb-4">{loc.name}</h3>
              <p className="text-white/50 mb-6">{loc.address}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/70">
                <Clock className="w-4 h-4" /> {loc.hours}
              </div>
              <LiquidButton className="mt-8 px-8 py-3 rounded-xl font-bold uppercase tracking-tighter">Get Directions</LiquidButton>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-6xl md:text-8xl mb-8 leading-none flex flex-col items-start">
              <TextScramble text="NOT YOUR" />
              <span className="text-brand"><TextScramble text="AVERAGE" /></span>
              <TextScramble text="BURGER." />
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Boujee Buns was born out of a simple frustration: why does fast food have to be so... basic? We wanted the indulgence of street food with the quality of a premium kitchen.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              We sourced the finest beef, developed our own signature sauces, and built a brand that speaks the language of the streets. We're here to disrupt the industry, one smash burger at a time.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-brand/20">
              <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="About" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-display mb-1">EST. 2024</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">The Revolution Started Here</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OrderPage = ({ cart, onRemove, onClear, onNavigate }: { cart: MenuItem[], onRemove: (id: string) => void, onClear: () => void, onNavigate: (p: string) => void, key?: string }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-12">
          <TextScramble text="Your" className="mr-4" />
          <span className="text-brand"><TextScramble text="Order" /></span>
        </h1>
        
        {cart.length === 0 ? (
          <div className="glass p-20 rounded-3xl text-center">
            <ShoppingBag className="w-20 h-20 text-white/10 mx-auto mb-8" />
            <h3 className="text-3xl mb-4">Your bag is empty</h3>
            <p className="text-white/40 mb-8">You're missing out on the boujee life.</p>
            <LiquidButton onClick={() => onNavigate('menu')} className="px-10 py-4 rounded-2xl font-display text-xl">Go to Menu</LiquidButton>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-4">
              {cart.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="glass p-6 rounded-2xl flex items-center gap-6">
                  <img src={item.image} className="w-20 h-20 rounded-xl object-cover" alt={item.name} />
                  <div className="flex-1">
                    <h4 className="text-xl">{item.name}</h4>
                    <p className="text-white/40 text-xs">Rs. {item.price}</p>
                  </div>
                  <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-brand transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="glass p-8 rounded-3xl h-fit sticky top-32">
              <h3 className="text-2xl mb-8">Summary</h3>
              <div className="flex justify-between mb-4 text-white/60">
                <span>Subtotal</span>
                <span>Rs. {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-white/60">
                <span>Delivery</span>
                <span>Rs. 150.00</span>
              </div>
              <div className="flex justify-between mb-8 text-xl font-bold pt-4 border-t border-white/10">
                <span>Total</span>
                <span className="text-brand">Rs. {(total + 150).toFixed(2)}</span>
              </div>
              <LiquidButton 
                onClick={() => { alert('Order placed! Your boujee feast is on the way.'); onClear(); }}
                className="w-full py-5 rounded-2xl font-display text-2xl hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,69,0,0.4)]"
              >
                Checkout Now
              </LiquidButton>
              <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/30">
                <CheckCircle2 className="w-3 h-3" /> Secure Payment Guaranteed
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [cart, setCart] = useState<MenuItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart([...cart, item]);
    // Optional: Show a toast or notification
  };

  const removeFromCart = (id: string) => {
    const idx = cart.findIndex(i => i.id === id);
    if (idx > -1) {
      const newCart = [...cart];
      newCart.splice(idx, 1);
      setCart(newCart);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activePage={activePage} setActivePage={setActivePage} cartCount={cart.length} />
      
      <main>
        <AnimatePresence mode="wait">
          {activePage === 'home' && <HomePage key="home" onAddToCart={addToCart} onNavigate={setActivePage} />}
          {activePage === 'menu' && <MenuPage key="menu" onAddToCart={addToCart} />}
          {activePage === 'locations' && <LocationsPage key="locations" />}
          {activePage === 'about' && <AboutPage key="about" />}
          {activePage === 'order' && <OrderPage key="order" cart={cart} onRemove={removeFromCart} onClear={() => setCart([])} onNavigate={setActivePage} />}
        </AnimatePresence>
      </main>

      <Footer />

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <LiquidButton 
          onClick={() => setActivePage('order')}
          className="w-full py-4 rounded-2xl font-display text-2xl flex items-center justify-center gap-3 shadow-2xl"
        >
          View Bag ({cart.length}) <ArrowRight className="w-6 h-6" />
        </LiquidButton>
      </div>
    </div>
  );
}
