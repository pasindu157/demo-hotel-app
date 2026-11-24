import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, ShieldCheck, Check, Sparkles, Bed, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { HOTEL_DATA, formatLKR } from '../data/hotelData';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function BookingModal() {
  const { bookingModalState, closeBookingModal, addBooking } = useBooking();
  const navigate = useNavigate();

  const { isOpen, selectedRoom, initialDates } = bookingModalState;

  const [currentRoomId, setCurrentRoomId] = useState(
    selectedRoom ? selectedRoom.id : HOTEL_DATA.rooms[0].id
  );

  // Standard date helpers
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const inThreeDays = new Date(today);
  inThreeDays.setDate(inThreeDays.getDate() + 4);

  const formatDate = (d) => d.toISOString().split('T')[0];
  const todayStr = formatDate(today);

  const getMinCheckOut = (checkInStr) => {
    if (!checkInStr) return todayStr;
    const d = new Date(checkInStr);
    d.setDate(d.getDate() + 1);
    return formatDate(d);
  };

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(inThreeDays));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    if (selectedRoom) {
      setCurrentRoomId(selectedRoom.id);
    }
    if (initialDates) {
      if (initialDates.checkIn) setCheckIn(initialDates.checkIn);
      if (initialDates.checkOut) setCheckOut(initialDates.checkOut);
      if (initialDates.guests) setAdults(initialDates.guests);
    }
  }, [selectedRoom, initialDates]);

  // Lock background body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const handleCheckInChange = (newDate) => {
    setCheckIn(newDate);
    const minOut = getMinCheckOut(newDate);
    if (!checkOut || checkOut <= newDate) {
      setCheckOut(minOut);
    }
  };

  // Sri Lankan experiences selected
  const [selectedAddOnIds, setSelectedAddOnIds] = useState(['addon-transfer']);

  // Guest details (Sri Lanka demo)
  const [guestName, setGuestName] = useState('Client Guest');
  const [guestEmail, setGuestEmail] = useState('guest@srilanka-demo.lk');
  const [guestPhone, setGuestPhone] = useState('+94 77 123 4567');
  const [specialRequests, setSpecialRequests] = useState('Ocean facing suite, King coconut welcome');
  const [paymentOption, setPaymentOption] = useState('card');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!isOpen) return null;

  const currentRoom = HOTEL_DATA.rooms.find((r) => r.id === currentRoomId) || HOTEL_DATA.rooms[0];

  // Calculate nights (guaranteed >= 1)
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const nights = diffDays > 0 ? diffDays : 1;

  // Pricing in LKR
  const roomPricePerNight = currentRoom.price;
  const roomSubtotal = roomPricePerNight * nights;

  const selectedAddOns = HOTEL_DATA.addOns.filter((a) => selectedAddOnIds.includes(a.id));
  const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);

  // Sri Lankan VAT & service charges (approx 10%)
  const taxes = Number(((roomSubtotal + addOnsTotal) * 0.10).toFixed(0));
  const totalPrice = Number(roomSubtotal + addOnsTotal + taxes);

  const toggleAddOn = (id) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      toast.error('Please select both check-in and check-out dates.');
      return;
    }

    if (checkIn >= checkOut) {
      toast.error('Check-out date must be at least 1 day after check-in.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const record = addBooking({
        roomId: currentRoom.id,
        roomName: currentRoom.name,
        roomImage: currentRoom.image,
        checkIn,
        checkOut,
        nights,
        guests: { adults, children },
        guestName,
        guestEmail,
        guestPhone,
        specialRequests,
        addOns: selectedAddOns,
        roomPricePerNight,
        roomSubtotal,
        addOnsTotal,
        taxes,
        totalPrice,
        paymentOption
      });

      setIsSubmitting(false);
      setConfirmedBooking(record);
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBookingModal();
      }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full flex flex-col overflow-hidden max-h-[90vh]"
        style={{ transform: 'translateZ(0)', WebkitFontSmoothing: 'antialiased' }}
      >
        {/* Fixed Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-700 text-white flex items-center justify-center font-serif font-bold text-sm shrink-0">
              GA
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {confirmedBooking ? 'Reservation Confirmed' : `Reserve at ${HOTEL_DATA.name}`}
              </h3>
              <p className="text-xs text-slate-500">
                Bentota, Sri Lanka • Direct Guest Reservation Engine (LKR)
              </p>
            </div>
          </div>
          <button
            onClick={closeBookingModal}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          className="p-5 sm:p-6 overflow-y-auto overscroll-contain flex-1 space-y-6"
          style={{ willChange: 'scroll-position', WebkitOverflowScrolling: 'touch' }}
        >
          {confirmedBooking ? (
            /* Success confirmation card */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                <Check className="w-9 h-9 stroke-[3]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Ayubowan! Instant Confirmation Verified
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-1 font-serif">
                  We look forward to welcoming you to Bentota!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Your reservation at {HOTEL_DATA.name} has been stored directly in your local browser state.
                </p>
              </div>

              {/* Summary reference card */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2.5 max-w-md mx-auto text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-amber-700 text-sm bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    {confirmedBooking.id}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Suite / Villa:</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.roomName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Stay Dates:</span>
                  <span className="font-semibold text-slate-900">
                    {confirmedBooking.checkIn} to {confirmedBooking.checkOut} ({confirmedBooking.nights} nights)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lead Guest:</span>
                  <span className="font-semibold text-slate-900">{confirmedBooking.guestName}</span>
                </div>
                {confirmedBooking.addOns && confirmedBooking.addOns.length > 0 && (
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-500 block mb-1">Included Ceylon Experiences:</span>
                    <ul className="list-disc list-inside text-[11px] text-slate-700 space-y-0.5">
                      {confirmedBooking.addOns.map((a) => (
                        <li key={a.id}>{a.name} (+{formatLKR(a.price)})</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900">
                  <span>Total Amount (LKR):</span>
                  <span className="text-amber-800 text-base">{formatLKR(confirmedBooking.totalPrice)}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    closeBookingModal();
                    navigate('/reservations');
                  }}
                  className="px-6 py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  View in My Reservations
                </button>
                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form id="reservation-form" onSubmit={handleBookingSubmit} className="space-y-6">
              
              {/* 1. Suite / Villa Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Suite or Villa
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {HOTEL_DATA.rooms.map((room) => {
                    const isSelected = room.id === currentRoom.id;
                    return (
                      <button
                        key={room.id}
                        type="button"
                        onClick={() => setCurrentRoomId(room.id)}
                        className={`p-3 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                          isSelected
                            ? 'border-amber-600 bg-amber-50/60 ring-2 ring-amber-600/30 shadow-xs'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src={room.image}
                          alt={room.name}
                          loading="lazy"
                          className="w-14 h-14 rounded-xl object-cover shrink-0 bg-slate-100"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-bold text-slate-900 truncate">
                            {room.name}
                          </h4>
                          <span className="text-[11px] text-slate-500 block">
                            {room.capacity} • {room.size}
                          </span>
                          <span className="text-xs font-extrabold text-amber-800 mt-0.5 block whitespace-nowrap">
                            {formatLKR(room.price)} <span className="font-normal text-[10px] text-slate-500">/ night</span>
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Dates & Guests with Smart Minimum Constraints */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  2. Stay Dates & Guests
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      required
                      min={todayStr}
                      value={checkIn}
                      onChange={(e) => handleCheckInChange(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Check-Out Date (Min. 1 night)
                    </label>
                    <input
                      type="date"
                      required
                      min={getMinCheckOut(checkIn)}
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Adults
                    </label>
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                      <span className="text-xs font-semibold text-slate-800">{adults} Guests</span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setAdults((a) => Math.max(1, a - 1))}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setAdults((a) => Math.min(6, a + 1))}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-500 mb-1">
                      Children
                    </label>
                    <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                      <span className="text-xs font-semibold text-slate-800">{children}</span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setChildren((c) => Math.max(0, c - 1))}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => setChildren((c) => Math.min(4, c + 1))}
                          className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Sri Lankan Experiences / Add-ons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center justify-between">
                  <span>3. Enhance Your Ceylon Stay (Optional)</span>
                  <span className="text-[10px] text-amber-700 font-normal">Authentic Local Perks</span>
                </label>
                <div className="space-y-2">
                  {HOTEL_DATA.addOns.map((addOn) => {
                    const isChecked = selectedAddOnIds.includes(addOn.id);
                    return (
                      <div
                        key={addOn.id}
                        onClick={() => toggleAddOn(addOn.id)}
                        className={`p-3 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? 'border-amber-600 bg-amber-50/40 shadow-xs'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="pr-3">
                          <span className="text-xs font-bold text-slate-900 block">
                            {addOn.name}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {addOn.description}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-extrabold text-amber-800 whitespace-nowrap">
                            +{formatLKR(addOn.price)}
                          </span>
                          <div
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                              isChecked
                                ? 'bg-amber-700 border-amber-700 text-white'
                                : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4. Guest Details */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Lead Guest Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">Contact Phone (Sri Lanka / Intl)</label>
                    <input
                      type="tel"
                      required
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-500 font-medium mb-1">Special Requests for Concierge</label>
                    <input
                      type="text"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="e.g. Early check-in, dietary requirements, airport flight #"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation in LKR */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>{currentRoom.name} ({formatLKR(roomPricePerNight)} × {nights} {nights === 1 ? 'night' : 'nights'})</span>
                  <span className="font-semibold text-slate-800">{formatLKR(roomSubtotal)}</span>
                </div>
                {addOnsTotal > 0 && (
                  <div className="flex justify-between text-slate-600">
                    <span>Selected Ceylon Experiences ({selectedAddOns.length})</span>
                    <span className="font-semibold text-slate-800">+{formatLKR(addOnsTotal)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Resort Service & Local Sri Lankan Tourism Levy (10%)</span>
                  <span className="font-semibold text-slate-800">{formatLKR(taxes)}</span>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Pinned / Fixed Footer */}
        {!confirmedBooking && (
          <div className="px-6 py-4 bg-slate-50/95 border-t border-slate-100 flex items-center justify-between gap-4 shrink-0">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Total Due ({nights} {nights === 1 ? 'night' : 'nights'})
              </span>
              <span className="text-lg sm:text-xl font-serif font-black text-amber-800 whitespace-nowrap">
                {formatLKR(totalPrice)}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={closeBookingModal}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="reservation-form"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-900/20 transition-all hover:scale-102 cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Confirming...
                  </span>
                ) : (
                  <span>Confirm Stay</span>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
