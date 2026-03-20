"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  MapPin,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import dynamic from "next/dynamic";

const CanvasRevealEffect = dynamic(
  () => import("@/components/ui/canvas-reveal-effect").then((m) => m.CanvasRevealEffect),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Dot matrix background */}
      <div className="absolute inset-0 pointer-events-none">
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent"
          colors={[
            [0, 122, 255],
            [0, 122, 255],
          ]}
          dotSize={5}
          opacities={[0.4, 0.4, 0.5, 0.5, 0.6, 0.6, 0.7, 0.7, 0.8, 1]}
          showGradient={true}
        />
      </div>

      {/* Radial fade so dots don't overwhelm the content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--background)_15%,_transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Copy */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            Location-aware rewards
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            The right card,
            <br />
            <span className="text-primary">at the right time</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground-secondary max-w-lg mx-auto lg:mx-0 mb-8">
            Steward detects where you shop and instantly tells you which credit
            card maximizes your rewards — factoring in bonuses, offers, and
            loyalty perks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <MovingBorderButton
              as="a"
              href="#download"
              borderRadius="1.75rem"
              containerClassName="h-14 w-52"
              className="bg-background/80 dark:bg-slate-900/80 text-foreground dark:text-white border-foreground/10 dark:border-slate-800 font-medium text-base gap-2"
              borderClassName="bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
            >
              Join the Waitlist
              <ChevronRight className="w-4 h-4" />
            </MovingBorderButton>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-foreground/10 font-medium px-7 py-3.5 rounded-full hover:bg-foreground/5 transition-colors text-base"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-[280px] sm:w-[320px]">
            {/* Phone frame */}
            <div className="bg-surface rounded-[2.5rem] p-3 shadow-2xl shadow-primary/10 border border-foreground/5">
              <div className="bg-background rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-2 text-xs font-medium">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2.5 bg-foreground/30 rounded-sm" />
                    <div className="w-4 h-2.5 bg-foreground/30 rounded-sm" />
                    <div className="w-6 h-2.5 bg-foreground/30 rounded-sm" />
                  </div>
                </div>

                {/* App content */}
                <div className="px-5 pb-8 pt-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground-secondary">
                        You&apos;re at
                      </p>
                      <p className="text-sm font-semibold">Whole Foods Market</p>
                    </div>
                  </div>

                  {/* Recommended card */}
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white mb-4 shadow-lg shadow-green-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-medium opacity-80">
                        BEST CARD
                      </p>
                      <CreditCard className="w-5 h-5 opacity-60" />
                    </div>
                    <p className="font-bold text-lg mb-1">Amex Gold</p>
                    <p className="text-sm opacity-90">4x points on groceries</p>
                    <div className="flex items-center gap-1 mt-3">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-xs font-medium">
                        +$10 Amex Offer active
                      </span>
                    </div>
                  </div>

                  {/* Alternative */}
                  <div className="bg-surface rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-foreground-secondary mb-0.5">
                        Runner-up
                      </p>
                      <p className="text-sm font-medium">Citi Custom Cash</p>
                      <p className="text-xs text-foreground-secondary">
                        5% cash back
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-foreground-secondary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -right-4 top-24 bg-background rounded-xl px-3 py-2 shadow-lg border border-foreground/5 flex items-center gap-2"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-6 h-6 rounded-full bg-dining/15 flex items-center justify-center">
                <span className="text-xs">🍽</span>
              </div>
              <span className="text-xs font-medium">3x dining</span>
            </motion.div>

            <motion.div
              className="absolute -left-4 bottom-32 bg-background rounded-xl px-3 py-2 shadow-lg border border-foreground/5 flex items-center gap-2"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <div className="w-6 h-6 rounded-full bg-travel/15 flex items-center justify-center">
                <span className="text-xs">✈️</span>
              </div>
              <span className="text-xs font-medium">5x travel</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
