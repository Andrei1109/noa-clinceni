import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const textColor = isScrolled ? 'text-brand-primary' : 'text-white';
    const hoverColor = isScrolled ? 'hover:text-brand-accent' : 'hover:text-white/80';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <div className={`text-2xl font-bold font-serif tracking-tighter cursor-pointer ${textColor}`} onClick={() => scrollToSection('hero')}>
                    NOA<span className="text-brand-accent">.</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <button onClick={() => scrollToSection('about')} className={`${textColor} ${hoverColor} transition-colors font-medium`}>Despre</button>
                    <button onClick={() => scrollToSection('units')} className={`${textColor} ${hoverColor} transition-colors font-medium`}>Case</button>
                    <button onClick={() => scrollToSection('advantages')} className={`${textColor} ${hoverColor} transition-colors font-medium`}>Avantaje</button>
                    <button onClick={() => scrollToSection('location')} className={`${textColor} ${hoverColor} transition-colors font-medium`}>Locație</button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 font-bold ${isScrolled ? 'bg-brand-primary text-white hover:bg-brand-dark' : 'bg-white text-brand-primary hover:bg-gray-100'}`}
                    >
                        <Phone size={18} />
                        Contact
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className={`md:hidden ${textColor}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg py-8 flex flex-col items-center space-y-6 md:hidden">
                    <button onClick={() => scrollToSection('about')} className="text-xl text-brand-primary">Despre</button>
                    <button onClick={() => scrollToSection('units')} className="text-xl text-brand-primary">Apartamente</button>
                    <button onClick={() => scrollToSection('location')} className="text-xl text-brand-primary">Locație</button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-brand-primary text-white px-8 py-3 rounded-full"
                    >
                        Programează Vizionare
                    </button>
                </div>
            )}
        </nav>
    );
}
