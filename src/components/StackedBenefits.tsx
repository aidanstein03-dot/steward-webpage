"use client";

import { motion } from "framer-motion";
import { Layers, Tag, Crown, Plus } from "lucide-react";

export default function StackedBenefits() {
  return (
    <section className="px-6 py-24 bg-surface">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            See the full picture
          </h2>
          <p className="text-foreground-secondary text-lg max-w-2xl mx-auto">
            Steward stacks category bonuses, merchant offers, and loyalty perks
            to show you the true value of every card at every merchant.
          </p>
        </motion.div>

        {/* Stacked benefit example */}
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-background rounded-2xl border border-foreground/5 overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-sm font-medium opacity-80">
                  STACKED BENEFITS
                </span>
              </div>
              <p className="text-lg font-bold">Marriott Bonvoy Brilliant</p>
              <p className="text-sm opacity-80">at Marriott Downtown</p>
            </div>

            {/* Benefit stack */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Tag className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Base Rate</p>
                  <p className="text-xs text-foreground-secondary">
                    6x Bonvoy points per dollar
                  </p>
                </div>
                <span className="font-bold text-primary text-sm">6x</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-dining/10 flex items-center justify-center shrink-0">
                  <Crown className="w-5 h-5 text-dining" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Platinum Elite Bonus</p>
                  <p className="text-xs text-foreground-secondary">
                    50% bonus points on stays
                  </p>
                </div>
                <span className="font-bold text-dining text-sm">+50%</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-grocery/10 flex items-center justify-center shrink-0">
                  <Plus className="w-5 h-5 text-grocery" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Amex Offer</p>
                  <p className="text-xs text-foreground-secondary">
                    $50 back on $250+ Marriott spend
                  </p>
                </div>
                <span className="font-bold text-grocery text-sm">$50</span>
              </div>

              <div className="border-t border-foreground/5 pt-4 flex items-center justify-between">
                <span className="font-bold">Total Value</span>
                <span className="text-lg font-bold text-primary">
                  9x + $50 back
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
