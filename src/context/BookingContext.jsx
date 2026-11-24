import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { HOTEL_DATA, formatLKR } from '../data/hotelData';

const BookingContext = createContext(null);

const DEFAULT_BOOKINGS = [
  {
    id: "AZ-94821",
    hotelName: HOTEL_DATA.name,
    roomId: "room-cliff-pool-villa",
    roomName: "Oceanfront Private Plunge Pool Villa",
    roomImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    checkIn: "2026-12-15",
    checkOut: "2026-12-18",
    nights: 3,
    guests: { adults: 2, children: 0 },
    guestName: "Client Presentation Guest",
    guestEmail: "guest@srilanka-luxury.com",
    guestPhone: "+94 77 123 4567",
    specialRequests: "Arriving via Southern Expressway, King coconut welcome requested.",
    addOns: [
      { id: "addon-transfer", name: "Bandaranaike Airport (CMB) VIP Chauffeur Transfer", price: 26000 },
      { id: "addon-ayurveda", name: "Traditional Ayurvedic Shirodhara & Herbal Bath (90 Min)", price: 32000 }
    ],
    roomPricePerNight: 145000,
    roomSubtotal: 435000,
    addOnsTotal: 58000,
    taxes: 49300,
    totalPrice: 542300,
    status: "Confirmed",
    createdAt: "2026-11-20T14:30:00.000Z"
  }
];

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    try {
      const saved = localStorage.getItem('grand_azure_lk_bookings');
      return saved ? JSON.parse(saved) : DEFAULT_BOOKINGS;
    } catch (e) {
      console.error("Failed to read bookings", e);
      return DEFAULT_BOOKINGS;
    }
  });

  const [bookingModalState, setBookingModalState] = useState({
    isOpen: false,
    selectedRoom: null,
    initialDates: null
  });

  useEffect(() => {
    try {
      localStorage.setItem('grand_azure_lk_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error("Failed to save bookings", e);
    }
  }, [bookings]);

  const openBookingModal = (room = null, initialDates = null) => {
    setBookingModalState({
      isOpen: true,
      selectedRoom: room || HOTEL_DATA.rooms[0],
      initialDates
    });
  };

  const closeBookingModal = () => {
    setBookingModalState({
      isOpen: false,
      selectedRoom: null,
      initialDates: null
    });
  };

  const addBooking = (bookingData) => {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newBooking = {
      ...bookingData,
      id: `AZ-${randomDigits}`,
      hotelName: HOTEL_DATA.name,
      status: "Confirmed",
      createdAt: new Date().toISOString()
    };

    setBookings((prev) => [newBooking, ...prev]);
    toast.success(`Reservation ${newBooking.id} confirmed!`, {
      duration: 4000,
      position: 'top-center'
    });
    return newBooking;
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "Cancelled" } : b))
    );
    toast('Reservation status changed to Cancelled.', {
      icon: 'ℹ️',
      duration: 3500,
      position: 'top-center'
    });
  };

  const deleteBookingRecord = (bookingId) => {
    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    toast.success("Reservation record deleted.");
  };

  return (
    <BookingContext.Provider
      value={{
        hotel: HOTEL_DATA,
        formatLKR,
        bookings,
        bookingModalState,
        openBookingModal,
        closeBookingModal,
        addBooking,
        cancelBooking,
        deleteBookingRecord
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
