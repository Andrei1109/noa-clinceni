import { Phone, MessageSquare } from 'lucide-react';

export default function ContactCTA() {
    return (
        <section id="contact" className="py-24 bg-brand-primary text-white relative overflow-hidden">
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white drop-shadow-md">Nu lăsa pe mâine casa în care poți să te muți în 2026.</h2>
                    <p className="text-xl text-blue-50 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                        Unitățile cele mai bune se rezervă primele. Hai să ne cunoaștem la o cafea și o vizionare pe șantier. Fără obligații, doar o discuție onestă.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="tel:+40700000000" className="flex items-center justify-center gap-3 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
                            <Phone size={24} />
                            Sună-ne Acum
                        </a>
                        <a href="https://wa.me/40700000000" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform border border-white/20">
                            <MessageSquare size={24} />
                            Scrie pe WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
