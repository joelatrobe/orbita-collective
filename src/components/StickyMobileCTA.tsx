"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { RESPONSE_PROMISE } from "@/lib/services";

/**
 * Mobile-only persistent CTA. Appears once the visitor has scrolled past the
 * hero (where the primary CTA already lives) so it never doubles up.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100%)" }}
          animate={{ opacity: 1, transform: "translateY(0%)" }}
          exit={{ opacity: 0, transform: "translateY(100%)" }}
          transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-dark/[0.07] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
        >
          <button
            onClick={openBooking}
            className="group w-full bg-dark text-cream py-3.5 rounded-full text-sm font-medium cursor-pointer inline-flex items-center justify-center gap-2"
          >
            Start a conversation
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-active:translate-x-0.5 group-active:-translate-y-0.5"
            />
          </button>
          <p className="text-center text-muted-light text-[11px] mt-2">
            {RESPONSE_PROMISE}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
