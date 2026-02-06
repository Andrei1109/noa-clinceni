import { ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Left: Big Bright Image */}
                    <div className="md:w-1/2 relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/assets/about_bright.png"
                            alt="Exterior Arhitectură NOA Residence"
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Decorative Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 shadow-lg">
                            <p className="text-brand-primary font-bold text-lg">Design Minimalist</p>
                            <p className="text-brand-accent text-sm uppercase tracking-wider">Linii Curate</p>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="md:w-1/2">
                        <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">Viziunea Noastră</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 leading-tight">
                            Modern. Aerisit. <br /> <span className="text-brand-accent">Sigur.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Un proiect boutique, nu un "cartier dormitor". Situat într-o zonă în plină expansiune a Clinceniului, NOA Residence aduce laolaltă arhitectura modernă cu nevoia de spațiu verde.
                            </p>
                            <p>
                                Proiectăm locuințe unde lumina naturală nu este un lux, ci un standard. Fie că alegi un apartament cu grădină sau un etaj aerisit, ai garanția unei construcții solide, gândită să dureze generații.
                            </p>
                        </div>

                        <div className="flex gap-12 mt-10 border-t border-gray-100 pt-8">
                            <div>
                                <p className="text-4xl font-bold text-brand-primary mb-1">2026</p>
                                <p className="text-gray-500 text-sm">Termen Finalizare</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-brand-primary mb-1">Parter</p>
                                <p className="text-gray-500 text-sm">Regim Înălțime</p>
                            </div>
                        </div>

                        <button className="mt-10 flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors group">
                            Descarcă Broșura Tehnică
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
