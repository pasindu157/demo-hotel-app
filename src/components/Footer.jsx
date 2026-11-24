import React from 'react';
import { HOTEL_DATA } from '../data/hotelData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Hotel Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-700 to-amber-600 flex items-center justify-center text-white font-serif font-bold text-lg">
                GA
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-wide">
                {HOTEL_DATA.name}
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {HOTEL_DATA.tagline}. Designed specifically as a single-hotel luxury showcase for Sri Lanka featuring authentic Ayurvedic wellness, coastal living, and direct client-side room reservations.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Bentota, Sri Lanka
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Sri Lankan Rupees (LKR)
              </span>
            </div>
          </div>

          {/* Sri Lankan Contact & Address */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Bentota Sanctuary
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{HOTEL_DATA.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{HOTEL_DATA.phone} / {HOTEL_DATA.mobile}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{HOTEL_DATA.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Check-in: {HOTEL_DATA.checkInTime} • Check-out: {HOTEL_DATA.checkOutTime}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Guest Concierge
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/reservations" className="hover:text-amber-400 transition-colors">
                  Guest Reservation Portal
                </Link>
              </li>
              <li>
                <a href="#suites" className="hover:text-amber-400 transition-colors">
                  Bentota Suites & Villas
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-amber-400 transition-colors">
                  The Ocean Grill & Ceylon Tea
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-amber-400 transition-colors">
                  Ayurvedic Spa & Shirodhara
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {HOTEL_DATA.name}, Bentota, Sri Lanka. Client Demo Application.</p>
          <p>Local currency: Sri Lankan Rupee (LKR) • 100% Frontend</p>
        </div>
      </div>
    </footer>
  );
}
