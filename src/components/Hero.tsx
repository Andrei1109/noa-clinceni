import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[url('/assets/hero_real.jpg')] bg-cover bg-center animate-pulse-slow"></div>
                {/* Horizontal Gradient: Dark on Left (Text), Transparent on Right (Image) */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 to-transparent" />
                {/* Top Gradient for Menu Visibility */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-dark/80 to-transparent" />
            </div>

            {/* Content - Left Aligned */}
            <div className="container mx-auto px-4 relative z-10 text-white pt-20">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} // Slide from left
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                            Clinceni • Finalizare 2026
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg text-white">
                            Mai mult decât metri pătrați. <br />
                            <span className="text-brand-accent">Acasă</span>, pe pământ.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-xl leading-relaxed drop-shadow-md font-medium">
                            Ansamblu rezidențial de case pe un singur nivel. Evadează din aglomerație și bucură-te de un cer senin, fără vecini deasupra ta.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold hover:bg-brand-gold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-accent/20"
                            >
                                Programează o vizionare
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </button>

                            <button
                                onClick={() => scrollToSection('units')}
                                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Download size={20} />
                                Vezi planurile
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
