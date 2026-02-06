import { MapPin, ShieldCheck, Heart, TrendingUp } from 'lucide-react';

const advantages = [
    {
        icon: <MapPin className="w-8 h-8 text-brand-accent" />,
        title: "Locație Strategică",
        description: "Aer curat, dar acces rapid spre București prin Bragadiru/Măgurele. Feriți de zgomotul infernal al orașului."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
        title: "Calitate Construcție",
        description: "Cărămidă porotherm, izolație de top, finisaje pe care le alegi tu (în stadiile timpurii). Zero compromisuri la structură."
    },
    {
        icon: <Heart className="w-8 h-8 text-brand-accent" />,
        title: "Community-First",
        description: "Vecini ca tine – tineri, entuziaști. Nu doar locuințe, ci un mediu unde copiii pot crește împreună în siguranță."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-brand-accent" />,
        title: "Investiție Sigură",
        description: "Zona Clinceni este în plină ascensiune. Valoarea casei tale va crește constant în următorii ani."
    }
];

export default function Advantages() {
    return (
        <section id="advantages" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">De ce să alegi NOA Residence?</h2>
                    <p className="text-gray-600">Nu doar construim, ci creăm valoare pe termen lung pentru familia ta.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((adv, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100 group">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {adv.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
