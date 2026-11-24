import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  X,
  Code2
} from 'lucide-react';

export default function ClientWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Clear any past permanent dismissal so the demo modal always pops up when opened
    try {
      localStorage.removeItem('grand_azure_intro_dismissed');
    } catch (e) {
      // ignore
    }

    // Auto-open on initial load after brief 350ms delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const handleDismiss = () => {
    setIsOpen(false);
  };

  const handleReopen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating trigger button in bottom-right corner so clients can reopen it anytime */}
      <button
        onClick={handleReopen}
        className="fixed bottom-5 right-5 z-40 px-3.5 py-2 rounded-full bg-slate-900/95 hover:bg-slate-900 text-amber-400 hover:text-amber-300 text-xs font-bold border border-slate-700 shadow-xl backdrop-blur-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2 group"
        title="View Demo Information & Developer Contact"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
        <Sparkles className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden sm:inline">Demo Info & Contact</span>
        <span className="sm:hidden">Demo Info</span>
      </button>

      {/* Modal Overlay: z-[60] to guarantee it displays on top of everything */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleDismiss();
          }}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full flex flex-col overflow-hidden max-h-[92vh] animate-in zoom-in-95 duration-200"
            style={{ transform: 'translateZ(0)' }}
          >
            {/* Header with decorative badge */}
            <div className="px-6 pt-6 pb-4 bg-gradient-to-br from-amber-950 via-slate-950 to-amber-900 text-white relative shrink-0">
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Client Presentation Edition</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-white tracking-tight">
                Welcome to the Hotel Demo
              </h2>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                A custom, single-property web application built specifically for luxury Sri Lankan hotels and resorts.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-700 text-xs flex-1">
              
              {/* How this demo works */}
              <div className="space-y-2.5">
                <h3 className="font-bold uppercase tracking-wider text-slate-900 text-[11px] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>How This Demo Operates</span>
                </h3>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>100% Frontend Only:</strong> No external database or server needed. All room reservations and cancellations happen instantly.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Browser State Persistence:</strong> All bookings you create are saved in your browser's local storage and persist even if you refresh or close the page.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                    <span><strong>Sri Lankan Currency & Localization:</strong> Localized in Sri Lankan Rupees (LKR) with Bentota Ayurvedic experiences and airport transfers.</span>
                  </div>
                </div>
              </div>

              {/* Developer / Agency Contact Card */}
              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-800 text-white flex items-center justify-center font-bold text-xs">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Developer & Creator Contact</h4>
                      <p className="text-[10px] text-slate-500">Available for production development & integration</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                    Direct Contact
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Phone className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span><strong>Phone / WhatsApp:</strong> +94 7X XXX XXXX</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800">
                    <Mail className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span><strong>Email:</strong> developer@example.com</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 italic border-t border-amber-200/60 pt-2">
                  "Ready to be converted into a production booking platform connected to your payment gateway (Stripe / PayHere) and property management database."
                </p>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={handleDismiss}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-amber-900/20 transition-all hover:scale-102 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Explore Hotel Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
