"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

const BOOKING_URL =
  "https://calendar.google.com/appointments/schedules/AcZssZ0ZYv-ySdW9lGSDxU_HMjG3769IY4BkZZATufc_gZoG-mwe5B4QMZAFpz1FbMsHZo-6iTmiibev";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-dark/50 backdrop-blur-sm cursor-pointer"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, transform: "scale(0.95) translateY(10px)" }}
            animate={{ opacity: 1, transform: "scale(1) translateY(0px)" }}
            exit={{ opacity: 0, transform: "scale(0.97) translateY(5px)" }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="relative bg-cream rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-dark/30 hover:text-dark/60 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              <img
                src="/logos/logo-dark.png"
                alt="Orbita Collective"
                className="h-5 w-auto object-contain mb-6"
              />

              <h3 className="font-sans font-semibold text-2xl text-dark mb-2">
                Book a conversation
              </h3>
              <p className="text-muted text-sm mb-6">
                Pick a time that works for you and we&apos;ll take it from there.
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-dark text-cream px-6 py-3.5 rounded-full text-sm font-medium cursor-pointer hover:bg-dark/90 transition-colors duration-200 inline-flex items-center gap-2 w-full justify-center"
              >
                Open scheduling page
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              <p className="text-center text-muted-light text-xs mt-4">
                Or email us at{" "}
                <a
                  href="mailto:hello@orbitacollective.com"
                  className="text-coral hover:text-coral/80 transition-colors cursor-pointer"
                >
                  hello@orbitacollective.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
