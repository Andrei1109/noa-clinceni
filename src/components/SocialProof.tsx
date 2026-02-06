import { Heart, MessageCircle, Instagram } from 'lucide-react';

export default function SocialProof() {
    return (
        <section className="py-20 bg-white border-t border-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-brand-primary mb-12">O comunitate care crește sub ochii tăi</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
                    <div className="text-center group cursor-default">
                        <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Instagram size={32} />
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900">5.000+</h3>
                        <p className="text-gray-500 font-medium">Urmăritori Social Media</p>
                    </div>

                    <div className="text-center group cursor-default">
                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MessageCircle size={32} />
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900">24/7</h3>
                        <p className="text-gray-500 font-medium">Răspunsuri la Întrebări</p>
                    </div>

                    <div className="text-center group cursor-default">
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900">100%</h3>
                        <p className="text-gray-500 font-medium">Recomandări Clienți</p>
                    </div>
                </div>

                <div className="bg-brand-primary/5 rounded-2xl p-8 max-w-2xl mx-auto italic text-gray-600 relative">
                    <span className="text-6xl text-brand-accent/20 absolute -top-4 -left-2 font-serif">"</span>
                    <p className="text-lg mb-4">
                        Am ales NOA pentru că mi-au răspuns la toate întrebările, oricât de tehnice au fost. Am vizitat șantierul de 3 ori înainte să semnez și de fiecare dată am fost primit cu răbdare.
                    </p>
                    <div className="font-bold text-brand-primary">– Andrei & Maria, viitori locatari</div>
                </div>
            </div>
        </section>
    );
}
