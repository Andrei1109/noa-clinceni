import { Calendar, Hammer, CheckCircle2 } from 'lucide-react';

export default function ConstructionStatus() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Șantier Live: Fără secrete.</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nu ascundem nimic sub preș (sau sub șapă). Postăm progresul constant pentru transparență totală.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l-4 border-brand-accent/30 space-y-12 ml-4 md:ml-0 md:pl-0">

                        {/* Step 1: Done */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="absolute -left-3 top-1 w-6 h-6 bg-brand-primary rounded-full border-4 border-white shadow-md z-10 md:hidden"></div>
                            <div className="md:flex items-center justify-between group">
                                <div className="md:w-5/12 md:text-right md:pr-12">
                                    <h3 className="text-xl font-bold text-brand-primary">Proiectare & Avize</h3>
                                    <span className="text-sm text-gray-500 font-medium">Ianuarie - Iunie 2025</span>
                                    <p className="mt-2 text-gray-600 text-sm">Obținerea tuturor autorizațiilor necesare și finalizarea conceptului arhitectural.</p>
                                </div>
                                <div className="hidden md:flex flex-col items-center z-10 px-4">
                                    <div className="w-8 h-8 bg-brand-primary rounded-full border-4 border-white shadow-md flex items-center justify-center text-white">
                                        <CheckCircle2 size={14} />
                                    </div>
                                </div>
                                <div className="md:w-5/12 md:pl-12 opacity-50 blur-[1px] md:blur-0 md:opacity-100">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                                        <span className="text-green-600 font-bold text-xs bg-green-100 px-2 py-1 rounded-full">FINALIZAT</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Current */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="absolute -left-3 top-1 w-6 h-6 bg-brand-accent rounded-full border-4 border-white shadow-md z-10 animate-pulse md:hidden"></div>
                            <div className="md:flex items-center justify-between group">
                                <div className="md:w-5/12 md:text-right md:pr-12">
                                    <h3 className="text-xl font-bold text-brand-accent">Execuție Structură</h3>
                                    <span className="text-sm text-brand-accent font-medium">Ianuarie - Iunie 2026</span>
                                    <p className="mt-2 text-gray-700 font-medium text-sm">Etapa curentă: Turnare placă peste parter și ridicare zidărie etaj 1.</p>
                                </div>
                                <div className="hidden md:flex flex-col items-center z-10 px-4">
                                    <div className="w-10 h-10 bg-brand-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white animate-pulse">
                                        <Hammer size={18} />
                                    </div>
                                </div>
                                <div className="md:w-5/12 md:pl-12">
                                    <div className="bg-brand-accent/10 border border-brand-accent/20 p-4 rounded-xl">
                                        <p className="text-brand-primary text-sm font-bold flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span>
                                            În derulare acum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Future */}
                        <div className="relative pl-12 md:pl-0">
                            <div className="absolute -left-3 top-1 w-6 h-6 bg-gray-300 rounded-full border-4 border-white z-10 md:hidden"></div>
                            <div className="md:flex items-center justify-between group opacity-60">
                                <div className="md:w-5/12 md:text-right md:pr-12">
                                    <h3 className="text-xl font-bold text-gray-500">Finisaje & Exterioare</h3>
                                    <span className="text-sm text-gray-400 font-medium">Iulie - Noiembrie 2026</span>
                                </div>
                                <div className="hidden md:flex flex-col items-center z-10 px-4">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-gray-500">
                                        <Calendar size={14} />
                                    </div>
                                </div>
                                <div className="md:w-5/12 md:pl-12">
                                    <p className="text-sm text-gray-500">Montare tâmplărie, instalații, amenajare spații verzi.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-brand-accent transition-colors underline decoration-brand-accent decoration-2 underline-offset-4"
                        >
                            Vezi video live de pe șantier pe TikTok
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
