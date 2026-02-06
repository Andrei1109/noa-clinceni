import { Truck, ShoppingBag, Clock, Navigation } from 'lucide-react';

export default function Location() {
    return (
        <section id="location" className="py-20 bg-brand-primary text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    <div className="lg:w-1/2">
                        <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-2 block">Locație & Acces</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conectat la oraș, deconectat de zgomot.</h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            NOA Residence este poziționat strategic în noua zonă rezidențială din Clinceni, oferind echilibrul perfect între liniște și accesibilitate.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent"><Clock size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">15 Minute</h4>
                                    <p className="text-gray-400 text-sm">Până la intrarea în București / Cora Alexandriei</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent"><ShoppingBag size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">5 Minute</h4>
                                    <p className="text-gray-400 text-sm">Magazine locale (Mega Image, Profi) și Farmacie</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent"><Navigation size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Acces Rapid</h4>
                                    <p className="text-gray-400 text-sm">Centura Bucureștiului și Șoseaua Alexandriei</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-brand-accent/20 p-3 rounded-full text-brand-accent"><Truck size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Transport Public</h4>
                                    <p className="text-gray-400 text-sm">Stație STB la distanță de mers pe jos</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-96 w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative">
                        {/* Abstract Map Placeholder since we can't embed real interactive map without API key comfortably or iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45607.5684617578!2d25.9388!3d44.3756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2006768393527%3A0xe6700f1352e8006e!2sClinceni%20077060!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                        <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                            <p className="text-brand-primary font-bold text-xs">📍 NOA Residence</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
