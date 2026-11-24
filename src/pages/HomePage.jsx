import React, { useState } from 'react';
import { HOTEL_DATA, formatLKR } from '../data/hotelData';
import { useBooking } from '../context/BookingContext';
import toast from 'react-hot-toast';
import {
  Calendar,
  Users,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  MapPin,
  Clock,
  Bed,
  Waves
} from 'lucide-react';

export default function HomePage() {
  const { openBookingModal } = useBooking();
  const [roomFilter, setRoomFilter] = useState('All'); // 'All', 'Suites', 'Villas'

  // Standard date helpers
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const inThreeDays = new Date(today);
  inThreeDays.setDate(inThreeDays.getDate() + 4);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const todayStr = formatDate(today);
  const [heroCheckIn, setHeroCheckIn] = useState(formatDate(tomorrow));
  const [heroCheckOut, setHeroCheckOut] = useState(formatDate(inThreeDays));
  const [heroGuests, setHeroGuests] = useState('2');

  // Compute minimum check-out date (must be at least 1 day after check-in)
  const getMinCheckOut = (checkInDateStr) => {
    if (!checkInDateStr) return todayStr;
    const d = new Date(checkInDateStr);
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  };

  const handleCheckInChange = (newCheckIn) => {
    setHeroCheckIn(newCheckIn);
    const minOut = getMinCheckOut(newCheckIn);
    // If checkout is same day or earlier, auto-advance to next day
    if (!heroCheckOut || heroCheckOut <= newCheckIn) {
      setHeroCheckOut(minOut);
    }
  };

  const filteredRooms = roomFilter === 'All'
    ? HOTEL_DATA.rooms
    : HOTEL_DATA.rooms.filter((r) => r.category === roomFilter);

  const handleHeroCheck = (e) => {
    e.preventDefault();
    if (!heroCheckIn || !heroCheckOut) {
      toast.error('Please select both check-in and check-out dates.');
      return;
    }
    if (heroCheckIn >= heroCheckOut) {
      toast.error('Check-out date must be at least 1 day after check-in.');
      return;
    }
    openBookingModal(HOTEL_DATA.rooms[0], {
      checkIn: heroCheckIn,
      checkOut: heroCheckOut,
      guests: Number(heroGuests)
    });
  };

  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-amber-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-24">
        {/* Background Image & Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_DATA.heroImage}
            alt={HOTEL_DATA.name}
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-in fade-in duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Sri Lanka's Premier 5-Star Ocean & Ayurvedic Sanctuary</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
            {HOTEL_DATA.name}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            {HOTEL_DATA.tagline}
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-amber-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bentota, Southern Province, Sri Lanka</span>
            <span>•</span>
            <div className="flex items-center gap-0.5 text-amber-400 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
              <span className="text-white ml-1 font-normal">({HOTEL_DATA.reviewsCount} verified reviews)</span>
            </div>
          </div>

          {/* Direct Availability & Booking Bar */}
          <div className="mt-12 max-w-4xl mx-auto bg-white p-3 sm:p-4 rounded-3xl shadow-2xl border border-slate-100 text-slate-800">
            <form onSubmit={handleHeroCheck} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
              
              <div className="p-3 rounded-2xl bg-slate-50 text-left border border-slate-100">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-700" />
                  <span>Check-In</span>
                </label>
                <input
                  type="date"
                  required
                  min={todayStr}
                  value={heroCheckIn}
                  onChange={(e) => handleCheckInChange(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 text-left border border-slate-100">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-700" />
                  <span>Check-Out (Min. 1 night)</span>
                </label>
                <input
                  type="date"
                  required
                  min={getMinCheckOut(heroCheckIn)}
                  value={heroCheckOut}
                  onChange={(e) => setHeroCheckOut(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 text-left border border-slate-100">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-amber-700" />
                  <span>Guests</span>
                </label>
                <select
                  value={heroGuests}
                  onChange={(e) => setHeroGuests(e.target.value)}
                  className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4+ Guests (Villa)</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full h-full min-h-[50px] rounded-2xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-900/25 transition-all hover:scale-102 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap px-4 shrink-0"
                >
                  <span className="whitespace-nowrap">Check & Book</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* 2. THE SANCTUARY / ABOUT SECTION */}
      <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-2">
              The Bentota Sanctuary
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-snug">
              {HOTEL_DATA.about.headline}
            </h2>
            <p className="mt-3 text-lg font-serif italic text-amber-900/80">
              "{HOTEL_DATA.about.subtitle}"
            </p>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {HOTEL_DATA.about.description}
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              {HOTEL_DATA.about.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-800 block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-100">
              <img
                src={HOTEL_DATA.gallery[2]}
                alt="The Grand Azure Bentota Overview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
              <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">
                Sri Lanka Tourism Accolade
              </span>
              <p className="text-xs text-slate-600 mt-1 font-medium">
                Awarded Sri Lanka's Leading Luxury Beach Resort & Ayurvedic Sanctuary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUITES & VILLAS SHOWCASE (PRICED IN LKR) */}
      <section id="suites" className="py-20 bg-white border-y border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">
                Accommodations & Rates
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Suites & Oceanfront Villas
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Prices shown in Sri Lankan Rupees (LKR) with direct booking privileges.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200 self-start sm:self-auto">
              {['All', 'Suites', 'Villas'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setRoomFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    roomFilter === cat
                      ? 'bg-amber-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image with Tag */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-xs">
                        {room.tag}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-amber-900/80 backdrop-blur-md text-white text-xs font-medium">
                        {room.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-xs font-medium">
                      {room.size} • {room.view}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-800 transition-colors mb-2">
                      {room.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {room.description}
                    </p>

                    {/* Room Specs */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 mb-4 pb-4 border-b border-slate-200">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-amber-700" />
                        {room.capacity}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-amber-700" />
                        {room.bed}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Waves className="w-3.5 h-3.5 text-amber-700" />
                        {room.view}
                      </span>
                    </div>

                    {/* Amenities list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {room.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 stroke-[3]" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer / LKR Price & CTA */}
                <div className="p-6 pt-4 border-t border-slate-200/80 flex items-center justify-between bg-white">
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      Direct Rate (LKR)
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-serif font-black text-slate-900">
                        {formatLKR(room.price)}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ night</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openBookingModal(room)}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-900/20 transition-all hover:scale-102 cursor-pointer flex items-center gap-2"
                  >
                    <span>Reserve Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DINING & RESTAURANTS */}
      <section id="dining" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">
            Sri Lankan & International Gastronomy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            On-Site Signature Dining
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Featuring wild lagoon seafood, Ceylon cinnamon-infused arrack cocktails, and handpicked highland teas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOTEL_DATA.dining.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block mb-1">
                    {restaurant.type}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    {restaurant.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {restaurant.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <span className="text-amber-800 font-bold">Complimentary for Guests</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RESORT EXPERIENCES & AYURVEDA */}
      <section id="amenities" className="py-20 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest block mb-1">
              Holistic Ceylon Rejuvenation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Ayurvedic Spa & Bentota Experiences
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Centuries-old healing rituals, oceanfront yoga, and excursions across Southern Sri Lanka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTEL_DATA.amenities.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY */}
      <section id="gallery" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-800 text-xs font-bold uppercase tracking-widest block mb-1">
            Visual Sanctuary
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
            Moments at The Grand Azure Bentota
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Golden sands, turquoise Indian Ocean waters, and tranquil frangipani courtyards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {HOTEL_DATA.gallery.map((imgUrl, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xs hover:shadow-xl transition-shadow group"
            >
              <img
                src={imgUrl}
                alt="Grand Azure Bentota moment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM INVITATION CTA */}
      <section className="bg-gradient-to-tr from-amber-950 via-slate-950 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
            Direct Bentota Reservation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight">
            Plan Your Escape to {HOTEL_DATA.name}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Experience genuine Sri Lankan hospitality. Instant simulated client checkout with zero external backend or database calls.
          </p>
          <div>
            <button
              onClick={() => openBookingModal(HOTEL_DATA.rooms[0])}
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest shadow-xl transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Book Your Bentota Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
