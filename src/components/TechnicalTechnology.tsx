import PhoneFrame from './PhoneFrame';
import { ShieldCheck, Zap, Clock } from 'lucide-react';

export default function TechnicalTechnology() {
    return (
        <section id="tech" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <span className="text-brand-accent font-bold tracking-widest text-sm uppercase mb-4 block">Tehnologie & Siguranță</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-8 leading-tight">
                            Ce se află sub tencuială<br /> contează cel mai mult.
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-brand-light rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-2">Rezistență Seismică Superioară</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Oțelul nu cedează sub presiune. Structura metalică oferă o flexibilitate maximă la cutremur, eliminând riscul fisurilor structurale majore specifice betonului.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-brand-light rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <Clock size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-2">Viteză de Execuție</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Mută-te în 2026, nu în 2028. Structura prefabricată elimină timpii morți de uscare și asigură o precizie milimetrică a pereților.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-brand-light rounded-2xl group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <Zap size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-2">Eficiență Termică Extremă</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Eliminăm punțile termice. Structura permite integrarea unor straturi de izolație superioare, reducând facturile la încălzire/răcire cu până la 40%.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual - Phone Frame with "Video" */}
                    <div className="lg:w-1/2 flex justify-center relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-3xl -z-10"></div>

                        <PhoneFrame>
                            {/* This represents the "Construction Video" - placing a static placeholder for now */}
                            {/* Video Player */}
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/render_aerial.jpg"
                            >
                                <source src="/assets/video1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                        </PhoneFrame>

                        {/* Contextual Card */}
                        <div className="absolute -bottom-8 -right-4 md:right-12 bg-white p-6 rounded-2xl shadow-xl max-w-xs border-l-4 border-brand-accent hidden md:block">
                            <p className="font-bold text-brand-primary text-lg mb-1">Video Stadiu Lucrări</p>
                            <p className="text-sm text-gray-500">Vezi progresul în timp real.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
