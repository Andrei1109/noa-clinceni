import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="text-2xl font-bold font-serif tracking-tighter">
                        NOA<span className="text-brand-accent">.</span>
                    </div>

                    <div className="flex gap-6 items-center">
                        <a href="https://www.instagram.com/noa_clinceni_2026/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors" title="Instagram">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@noaresidenceclinc?lang=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="TikTok">
                            {/* Custom TikTok SVG Icon as Lucide doesn't have it */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500 text-center md:text-left">
                    <p>&copy; 2026 NOA Residence Clinceni. Toate drepturile rezervate.</p>
                    <div className="flex gap-6 justify-center mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Politica de Confidențialitate</a>
                        <a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
