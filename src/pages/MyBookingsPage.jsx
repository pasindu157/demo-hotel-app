import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { HOTEL_DATA, formatLKR } from '../data/hotelData';
import { Link } from 'react-router-dom';
import {
  BookmarkCheck,
  Calendar,
  Users,
  Clock,
  Sparkles,
  Ban,
  Trash2,
  PlusCircle,
  MapPin,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function MyBookingsPage() {
  const { bookings, cancelBooking, deleteBookingRecord, openBookingModal } = useBooking();
  const [filter, setFilter] = useState('all'); // 'all', 'confirmed', 'cancelled'

  const filtered = bookings.filter((b) => {
    if (filter === 'confirmed') return b.status === 'Confirmed';
    if (filter === 'cancelled') return b.status === 'Cancelled';
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-1">
            <BookmarkCheck className="w-4 h-4" />
            <span>{HOTEL_DATA.name} • Bentota Guest Portal</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
            Guest Reservations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review and manage your bookings at {HOTEL_DATA.name} in Sri Lankan Rupees (LKR).
          </p>
        </div>

        <button
          onClick={() => openBookingModal()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>New Reservation</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-amber-800 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          All ({bookings.length})
        </button>
        <button
          onClick={() => setFilter('confirmed')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'confirmed'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Confirmed ({bookings.filter((b) => b.status === 'Confirmed').length})
        </button>
        <button
          onClick={() => setFilter('cancelled')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'cancelled'
              ? 'bg-rose-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          Cancelled ({bookings.filter((b) => b.status === 'Cancelled').length})
        </button>
      </div>

      {/* Bookings List */}
      {filtered.length > 0 ? (
        <div className="space-y-6">
          {filtered.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow"
            >
              {/* Suite Photo */}
              <div className="md:w-64 h-48 md:h-auto shrink-0 relative bg-slate-100">
                <img
                  src={booking.roomImage}
                  alt={booking.roomName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                      booking.status === 'Confirmed'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
                    <span className="font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                      Ref: {booking.id}
                    </span>
                    <span className="text-slate-400">
                      Booked {booking.createdAt ? new Date(booking.createdAt).toLocaleDateString() : 'Recently'}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900">
                    {booking.roomName}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    {HOTEL_DATA.name} • {HOTEL_DATA.address}
                  </p>

                  {/* Stay Grid in LKR */}
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 bg-slate-50 rounded-2xl text-xs text-slate-600 border border-slate-100">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Check-in</span>
                      <span className="font-semibold text-slate-800">{booking.checkIn}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Check-out</span>
                      <span className="font-semibold text-slate-800">{booking.checkOut}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Duration</span>
                      <span className="font-semibold text-slate-800">{booking.nights} Nights</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Rate (LKR)</span>
                      <span className="font-extrabold text-amber-800">{formatLKR(booking.totalPrice)}</span>
                    </div>
                  </div>

                  {/* Add-ons if any */}
                  {booking.addOns && booking.addOns.length > 0 && (
                    <div className="mt-3 text-xs text-slate-600 flex flex-wrap items-center gap-1.5">
                      <span className="font-semibold text-slate-700">Included Ceylon Experiences:</span>
                      {booking.addOns.map((a) => (
                        <span key={a.id} className="px-2 py-0.5 bg-amber-50 text-amber-800 rounded-md font-medium text-[11px] border border-amber-200">
                          {a.name} (+{formatLKR(a.price)})
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Lead guest info */}
                  <div className="mt-3 text-xs text-slate-500">
                    <span>Guest: <strong className="text-slate-800">{booking.guestName}</strong></span>
                    <span className="mx-2">•</span>
                    <span>{booking.guestPhone}</span>
                    <span className="mx-2">•</span>
                    <span>{booking.guestEmail}</span>
                    {booking.specialRequests && (
                      <p className="mt-1 text-[11px] text-slate-500 italic">
                        Special Requests: "{booking.specialRequests}"
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Free concierge cancellation up to 48 hours prior
                  </span>

                  <div className="flex items-center gap-2">
                    {booking.status === 'Confirmed' && (
                      <button
                        onClick={() => {
                          if (window.confirm(`Cancel reservation ${booking.id} at ${HOTEL_DATA.name}?`)) {
                            cancelBooking(booking.id);
                          }
                        }}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Ban className="w-3.5 h-3.5" />
                        <span>Cancel Stay</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        if (window.confirm('Delete this reservation record from local storage?')) {
                          deleteBookingRecord(booking.id);
                        }
                      }}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 text-amber-800 flex items-center justify-center font-serif text-2xl font-bold">
            GA
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900">No Reservations Recorded</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            There are currently no {filter !== 'all' ? filter : ''} reservations at {HOTEL_DATA.name} saved in your browser state.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openBookingModal()}
              className="px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
            >
              Book a Suite Now
            </button>
          </div>
        </div>
      )}

      {/* Guest portal notice */}
      <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-600">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0" />
        <span>
          <strong>Bentota Sanctuary Demo Architecture:</strong> All reservations and modifications are saved directly in your browser's LocalStorage in Sri Lankan Rupees (LKR).
        </span>
      </div>

    </div>
  );
}
