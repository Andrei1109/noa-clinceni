import { XCircle, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary">
                        Te-ai săturat de promisiuni neterminate și "cutii de chibrituri"?
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Știm cum e. Vizionări peste vizionări. Pereți subțiri, randări care nu seamănă cu realitatea și senzația că ești doar o cifră într-un tabel.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Standard Market (Problem) */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold mb-6 text-gray-500 flex items-center gap-2">
                            <XCircle className="text-red-400" />
                            Ce găsești de obicei
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5 flex-shrink-0" />
                                <span>Compartimentări tip "vagon", înghesuite și nepractice</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5 flex-shrink-0" />
                                <span>Promisiuni despre parcuri care rămân doar pe hârtie</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5 flex-shrink-0" />
                                <span>Lipsă de transparență pe șantier și costuri ascunse</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 bg-red-300 rounded-full mt-2.5 flex-shrink-0" />
                                <span>Comunități lipsite de viață, "cartiere dormitor"</span>
                            </li>
                        </ul>
                    </div>

                    {/* NOA Solution */}
                    <div className="bg-brand-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/20 rounded-full -mr-16 -mt-16 blur-2xl" />

                        <h3 className="text-xl font-bold mb-6 text-brand-accent flex items-center gap-2 relative z-10">
                            <CheckCircle />
                            La NOA Residence
                        </h3>
                        <ul className="space-y-4 relative z-10">
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2.5 flex-shrink-0" />
                                <span>Compartimentări inteligente, decomandate, cu multă lumină naturală</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2.5 flex-shrink-0" />
                                <span>Comunitate reală, deja activă și transparentă pe Social Media</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2.5 flex-shrink-0" />
                                <span>Construcție solidă, făcută să dureze generații, nu doar garanția</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-200">
                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2.5 flex-shrink-0" />
                                <span>Stil de viață aerisit, cu spații verzi reale și intimitate</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
