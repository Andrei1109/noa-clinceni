import { useState } from 'react';
import { Maximize, Home, Users } from 'lucide-react';

const units = [
    {
        id: 'garden-ground',
        name: 'Parter cu Grădină',
        type: 'Garden Apartments',
        description: 'Locuiește ca la casă. Ai propria ta grădină de 50-100mp, acces direct din living și intimitate totală. Ideal pentru familii cu copii sau animale de companie.',
        fitFor: 'Familii, Iubitori de natură',
        features: ['Grădină Privată', 'Living Open Space', 'Acces Direct'],
        image: '/assets/render_street.jpg'
    },
    {
        id: 'terrace-floor',
        name: 'Etaj cu Terasă',
        type: 'Terrace Apartments',
        description: 'Priveliște și aer curat. Apartamente situate la etaj, cu terase generoase tip logie, perfecte pentru serile de vară. Lumină naturală din abundență.',
        fitFor: 'Tineri, Cupluri, Investiție',
        features: ['Terasă Spațioasă', 'Intimitate', 'View Panoramic'],
        image: '/assets/render_aerial.jpg'
    },
    {
        id: 'duplex',
        name: 'Penthouse / Duplex',
        type: 'Sky Villas',
        description: 'Experiența supremă. Două niveluri, scară interioară și terase spectaculoase. Spațiul unei case, confortul unui apartament de lux.',
        fitFor: 'Lifestyle Premium, Familii extinse',
        features: ['2 Niveluri', 'Suprafețe Mari', 'Finisaje Premium'],
        image: '/assets/render_street.jpg'
    }
];

export default function UnitTypes() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="units" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-accent uppercase tracking-widest text-sm font-bold">Oferta Noastră</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-brand-primary">Găsește spațiul care ți se potrivește</h2>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {units.map((unit, index) => (
                        <button
                            key={unit.id}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${activeTab === index
                                ? 'bg-brand-primary text-white shadow-lg scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-transparent'
                                }`}
                        >
                            {unit.name}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2">

                        {/* Image */}
                        <div className="h-64 md:h-auto overflow-hidden relative">
                            <img
                                src={units[activeTab].image}
                                alt={units[activeTab].name}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 md:hidden">
                                <h3 className="text-white text-2xl font-bold">{units[activeTab].name}</h3>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-brand-primary mb-2 hidden md:block">
                                {units[activeTab].name}
                            </h3>
                            <p className="text-brand-accent font-medium mb-6 uppercase tracking-wider text-sm">
                                {units[activeTab].fitFor}
                            </p>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {units[activeTab].description}
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {units[activeTab].features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="bg-brand-light p-2 rounded-full text-brand-primary">
                                            {i === 0 ? <Maximize size={18} /> : i === 1 ? <Home size={18} /> : <Users size={18} />}
                                        </div>
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-all"
                                >
                                    Cere detalii & preț
                                </button>
                                <button className="border border-brand-primary text-brand-primary px-8 py-3 rounded-xl font-bold hover:bg-brand-light transition-all">
                                    Descarcă schița
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
