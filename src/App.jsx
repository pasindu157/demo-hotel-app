import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookingModal from './components/BookingModal';
import ClientWelcomeModal from './components/ClientWelcomeModal';
import HomePage from './pages/HomePage';
import MyBookingsPage from './pages/MyBookingsPage';

export default function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              background: '#1c1917',
              color: '#fff',
              fontSize: '13px',
              borderRadius: '12px',
              padding: '12px 18px',
              border: '1px solid #44403c',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
            }
          }}
        />

        <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reservations" element={<MyBookingsPage />} />
              {/* Backwards compatibility if someone accesses /bookings */}
              <Route path="/bookings" element={<Navigate to="/reservations" replace />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Single Hotel Reservation Modal */}
          <BookingModal />

          {/* Client Intro & Developer Presentation Modal */}
          <ClientWelcomeModal />
        </div>
      </Router>
    </BookingProvider>
  );
}
