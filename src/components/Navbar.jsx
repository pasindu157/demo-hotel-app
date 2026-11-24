import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Menu, X, BookmarkCheck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { HOTEL_DATA } from '../data/hotelData';

export default function Navbar() {
  const { bookings, openBookingModal } = useBooking();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCount = bookings.filter((b) => b.status === 'Confirmed').length;
  const isHome = location.pathname === '/';

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Navbar: Stays permanently locked at the top during scrolling */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 gap-2 sm:gap-4 w-full">
            
            {/* Hotel Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-amber-700 via-amber-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-900/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-widest">GA</span>
              </div>
              <div className="min-w-0">
                <span className="text-base sm:text-xl font-serif font-bold tracking-wide text-slate-900 block leading-tight truncate">
                  <span className="sm:hidden">Grand Azure</span>
                  <span className="hidden sm:inline">{HOTEL_DATA.name}</span>
                </span>
                <span className="block text-[10px] font-semibold tracking-wider text-amber-700 uppercase truncate">
                  Bentota, Sri Lanka
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-semibold tracking-wider uppercase text-slate-600 whitespace-nowrap shrink-0">
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-amber-800 transition-colors cursor-pointer whitespace-nowrap py-1"
              >
                The Sanctuary
              </button>
              <button
                onClick={() => scrollToSection('suites')}
                className="hover:text-amber-800 transition-colors cursor-pointer whitespace-nowrap py-1"
              >
                Suites & Villas
              </button>
              <button
                onClick={() => scrollToSection('dining')}
                className="hover:text-amber-800 transition-colors cursor-pointer whitespace-nowrap py-1"
              >
                Dining
              </button>
              <button
                onClick={() => scrollToSection('amenities')}
                className="hover:text-amber-800 transition-colors cursor-pointer whitespace-nowrap py-1"
              >
                Ayurveda & Spa
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="hover:text-amber-800 transition-colors cursor-pointer whitespace-nowrap py-1"
              >
                Gallery
              </button>
              <Link
                to="/reservations"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all whitespace-nowrap shrink-0 ${
                  location.pathname === '/reservations'
                    ? 'bg-amber-100 text-amber-900 font-bold'
                    : 'hover:text-amber-800'
                }`}
              >
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span className="whitespace-nowrap">My Reservations</span>
                {activeCount > 0 && (
                  <span className="ml-0.5 px-1.5 py-0.2 bg-amber-700 text-white text-[10px] rounded-full font-bold">
                    {activeCount}
                  </span>
                )}
              </Link>
            </nav>

            {/* Desktop Header Action Button */}
            <div className="hidden sm:flex items-center shrink-0">
              <button
                onClick={() => openBookingModal()}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-amber-900/20 transition-all hover:scale-102 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Book a Stay</span>
              </button>
            </div>

            {/* Mobile Right Controls */}
            <div className="lg:hidden flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => openBookingModal()}
                className="px-3 py-1.5 rounded-lg bg-amber-700 text-white text-xs font-bold whitespace-nowrap shrink-0 hover:bg-amber-800 transition-colors"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 shrink-0 rounded-lg hover:bg-slate-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3 text-sm font-semibold uppercase tracking-wider text-slate-700 shadow-xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-amber-800 whitespace-nowrap"
            >
              The Sanctuary
            </button>
            <button
              onClick={() => scrollToSection('suites')}
              className="block w-full text-left py-2 hover:text-amber-800 whitespace-nowrap"
            >
              Suites & Villas
            </button>
            <button
              onClick={() => scrollToSection('dining')}
              className="block w-full text-left py-2 hover:text-amber-800 whitespace-nowrap"
            >
              Dining
            </button>
            <button
              onClick={() => scrollToSection('amenities')}
              className="block w-full text-left py-2 hover:text-amber-800 whitespace-nowrap"
            >
              Ayurveda & Spa
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 hover:text-amber-800 whitespace-nowrap"
            >
              Gallery
            </button>
            <Link
              to="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 border-t border-slate-100 text-amber-800 whitespace-nowrap"
            >
              <span>My Reservations</span>
              {activeCount > 0 && (
                <span className="px-2 py-0.5 bg-amber-700 text-white text-xs rounded-full">
                  {activeCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </header>

      {/* Spacer to prevent page content from being hidden behind the 80px fixed navbar */}
      <div className="h-20 w-full shrink-0" aria-hidden="true" />
    </>
  );
}
