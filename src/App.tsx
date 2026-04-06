/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  CheckCircle2, 
  Clock, 
  Users, 
  Apple, 
  Instagram, 
  Facebook, 
  Phone, 
  MapPin,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#features' },
    { name: 'الأسعار', href: '#pricing' },
    { name: 'انضم دلوقتي', href: '#join' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gym-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="text-gym-red w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter">IRONZONE <span className="text-gym-red">GYM</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-bold hover:text-gym-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-gym-black border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xl font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gym-black">
        <div className="absolute inset-0 bg-gradient-to-b from-gym-red/20 to-transparent opacity-30" />
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gym-red/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gym-red/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
        >
          غيّر جسمك. <br />
          <span className="text-gym-red">غيّر حياتك.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto"
        >
          انضم لأقوى مجتمع فيتنس في القاهرة وابدأ رحلتك النهارده. مش بس جيم، ده المكان اللي هتبني فيه النسخة الأفضل من نفسك.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#join" 
            className="inline-block bg-gym-red hover:bg-red-700 text-white text-xl font-black px-10 py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.4)]"
          >
            ابدأ تجربتك المجانية
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gym-red rounded-full" />
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'أجهزة حديثة', desc: 'أحدث معدات الكارديو والمقاومة من براندات عالمية.', icon: <Dumbbell className="w-10 h-10" /> },
    { title: 'مدربين محترفين', desc: 'فريق من الخبراء هيساعدوك توصل لهدفك بأمان.', icon: <Users className="w-10 h-10" /> },
    { title: 'متاح 24 ساعة', desc: 'اتمرن في أي وقت يناسبك، إحنا دايماً موجودين.', icon: <Clock className="w-10 h-10" /> },
    { title: 'تغذية وتخطيط', desc: 'أنظمة غذائية مخصصة تسرع نتايج تمرينك.', icon: <Apple className="w-10 h-10" /> },
  ];

  return (
    <section id="features" className="py-24 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">ليه <span className="text-gym-red">آيرون زون؟</span></h2>
          <div className="w-24 h-1.5 bg-gym-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gym-gray p-8 rounded-3xl border border-white/5 hover:border-gym-red/50 transition-all group"
            >
              <div className="text-gym-red mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-2xl font-black mb-4">{f.title}</h3>
              <p className="text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Classes = () => {
  const classes = [
    { name: 'باور ليفتينج', emoji: '🏋️‍♂️', time: '06:00 PM', trainer: 'كابتن أحمد' },
    { name: 'كارديو', emoji: '🏃‍♂️', time: '08:00 AM', trainer: 'كابتن سارة' },
    { name: 'كروس فيت', emoji: '🔥', time: '07:00 PM', trainer: 'كابتن عمر' },
    { name: 'يوجا', emoji: '🧘‍♀️', time: '10:00 AM', trainer: 'كابتن ليلى' },
    { name: 'ملاكمة', emoji: '🥊', time: '09:00 PM', trainer: 'كابتن علي' },
  ];

  return (
    <section className="py-24 bg-gym-gray">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">الكلاسات <span className="text-gym-red">المتاحة</span></h2>
            <p className="text-white/60">اختار الكلاس اللي يناسبك وابدأ التحدي</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="p-3 bg-gym-black rounded-full hover:bg-gym-red transition-colors"><ChevronRight /></button>
            <button className="p-3 bg-gym-black rounded-full hover:bg-gym-red transition-colors"><ChevronLeft /></button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
          {classes.map((c, i) => (
            <motion.div 
              key={i}
              className="min-w-[280px] md:min-w-[350px] bg-gym-black p-8 rounded-3xl border border-white/5 snap-center relative overflow-hidden group"
            >
              <div className="text-6xl mb-6">{c.emoji}</div>
              <h3 className="text-3xl font-black mb-2">{c.name}</h3>
              <div className="flex flex-col gap-1 text-white/50">
                <span className="flex items-center gap-2"><Clock size={16} className="text-gym-red" /> {c.time}</span>
                <span className="flex items-center gap-2"><Users size={16} className="text-gym-red" /> {c.trainer}</span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gym-red/5 rounded-full -mr-16 -mt-16 group-hover:bg-gym-red/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'شهري', price: '500', duration: 'شهر واحد', features: ['دخول كامل للجيم', 'تقييم بدني مجاني', 'خزانة خاصة', 'متاح 24/7'], highlight: false },
    { name: 'ربع سنوي', price: '1200', duration: '3 شهور', features: ['دخول كامل للجيم', '3 جلسات تدريب خاص', 'نظام غذائي مخصص', 'متاح 24/7'], highlight: true },
    { name: 'سنوي', price: '3500', duration: '12 شهر', features: ['دخول كامل للجيم', '12 جلسة تدريب خاص', 'اشتراك مجاني لصديق', 'متاح 24/7'], highlight: false },
  ];

  return (
    <section id="pricing" className="py-24 bg-gym-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">اشتراكاتنا</h2>
          <p className="text-white/60">اختار الباقة اللي تناسب ميزانيتك وأهدافك</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[40px] border ${p.highlight ? 'bg-gym-red border-gym-red scale-105 z-10 shadow-[0_20px_50px_rgba(220,38,38,0.3)]' : 'bg-gym-gray border-white/5'}`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-gym-red px-6 py-1 rounded-full font-black text-sm uppercase tracking-widest">
                  الأكثر مبيعاً
                </div>
              )}
              <h3 className="text-2xl font-black mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black">{p.price}</span>
                <span className="text-xl opacity-70">جنيه</span>
              </div>
              <p className={`mb-8 font-bold ${p.highlight ? 'text-white/90' : 'text-gym-red'}`}>{p.duration}</p>
              <ul className="space-y-4 mb-10">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className={p.highlight ? 'text-white' : 'text-gym-red'} />
                    <span className="font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#join"
                className={`block text-center w-full py-4 rounded-2xl font-black text-lg transition-all ${p.highlight ? 'bg-white text-gym-red hover:bg-gray-100' : 'bg-gym-red text-white hover:bg-red-700'}`}
              >
                اشترك الآن
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformation = () => {
  const results = [
    { 
      name: 'محمد علي', 
      change: '-15 كجم', 
      duration: '3 شهور', 
      before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: 'سارة حسن', 
      change: '+8 كجم عضل', 
      duration: '6 شهور', 
      before: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: 'أحمد محمود', 
      change: '-22 كجم', 
      duration: '5 شهور', 
      before: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=400&auto=format&fit=crop'
    },
  ];

  return (
    <section className="py-24 bg-gym-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">نتايج <span className="text-gym-red">حقيقية</span></h2>
          <p className="text-white/60">قصص نجاح أبطال آيرون زون</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gym-black p-8 rounded-3xl border border-white/5 overflow-hidden group"
            >
              <div className="flex gap-4 mb-6">
                <div className="w-1/2 relative h-48 overflow-hidden rounded-2xl">
                  <img src={r.before} alt="Before" className="w-full h-full object-cover grayscale opacity-50" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 font-black text-xl">قبل</div>
                </div>
                <div className="w-1/2 relative h-48 overflow-hidden rounded-2xl shadow-lg group-hover:scale-105 transition-transform">
                  <img src={r.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 flex items-center justify-center bg-gym-red/20 font-black text-xl">بعد</div>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2">{r.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gym-red font-black text-xl">{r.change}</span>
                <span className="text-white/40">{r.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="join" className="py-24 bg-gym-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gym-red/5 skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gym-gray p-8 md:p-16 rounded-[50px] border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-4">انضم <span className="text-gym-red">دلوقتي</span></h2>
            <p className="text-white/60">سيب بياناتك وإحنا هنتواصل معاك في خلال 24 ساعة</p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-white/70 mr-2">الاسم بالكامل</label>
                  <input 
                    required
                    type="text" 
                    placeholder="مثال: أحمد محمد"
                    className="bg-gym-black border border-white/10 rounded-2xl p-4 focus:border-gym-red outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-white/70 mr-2">رقم الموبايل</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="01xxxxxxxxx"
                    className="bg-gym-black border border-white/10 rounded-2xl p-4 focus:border-gym-red outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-bold text-white/70 mr-2">هدفك من التمرين</label>
                  <select className="bg-gym-black border border-white/10 rounded-2xl p-4 focus:border-gym-red outline-none transition-all appearance-none cursor-pointer">
                    <option>خسارة وزن</option>
                    <option>بناء عضلات</option>
                    <option>لياقة عامة</option>
                    <option>تحسين صحة</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="md:col-span-2 bg-gym-red hover:bg-red-700 text-white font-black py-5 rounded-2xl text-xl transition-all shadow-lg hover:shadow-gym-red/20"
                >
                  انضم دلوقتي
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gym-red rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4">تم الإرسال بنجاح!</h3>
                <p className="text-white/60">فريقنا هيتواصل معاك قريب جداً. استعد للبداية!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gym-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="text-gym-red w-8 h-8" />
              <span className="text-2xl font-black tracking-tighter">IRONZONE <span className="text-gym-red">GYM</span></span>
            </div>
            <p className="text-white/50 mb-8 leading-relaxed">
              مش بس جيم، ده أسلوب حياة. إحنا هنا عشان نساعدك توصل لأقصى إمكانياتك البدنية والذهنية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gym-gray rounded-full flex items-center justify-center hover:bg-gym-red transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-12 h-12 bg-gym-gray rounded-full flex items-center justify-center hover:bg-gym-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 bg-gym-gray rounded-full flex items-center justify-center hover:bg-gym-red transition-colors font-black">TikTok</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8">روابط سريعة</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#home" className="hover:text-gym-red transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-gym-red transition-colors">خدماتنا</a></li>
              <li><a href="#pricing" className="hover:text-gym-red transition-colors">الأسعار</a></li>
              <li><a href="#join" className="hover:text-gym-red transition-colors">انضم دلوقتي</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8">تواصل معانا</h4>
            <ul className="space-y-6 text-white/50">
              <li className="flex items-start gap-4">
                <MapPin className="text-gym-red shrink-0" />
                <span>التجمع الخامس، القاهرة، مصر</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gym-red shrink-0" />
                <span dir="ltr">01000000000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white/30 text-sm">
          <p>© {new Date().getFullYear()} IRONZONE GYM. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gym-red selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Pricing />
      <Transformation />
      <ContactForm />
      <Footer />
    </div>
  );
}
