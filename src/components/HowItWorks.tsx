"use client";

import { motion } from "framer-motion";
import { MapPin, Bell, CreditCard } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    number: "1",
    title: "Walk into a store",
    description:
      "Steward quietly monitors your location in the background — no action needed.",
    color: "bg-primary",
  },
  {
    icon: Bell,
    number: "2",
    title: "Get a notification",
    description:
      "Instantly see the best card for this merchant, with a breakdown of why it wins.",
    color: "bg-grocery",
  },
  {
    icon: CreditCard,
    number: "3",
    title: "Use the best card",
    description:
      "Pull out the right card and earn maximum rewards — every single time.",
    color: "bg-travel",
  },
];

function FlowLines() {
  const lines = [
    { top: "20%", duration: 7, delay: 0, opacity: 0.3 },
    { top: "35%", duration: 9, delay: 1.5, opacity: 0.25 },
    { top: "50%", duration: 6, delay: 0.8, opacity: 0.35 },
    { top: "65%", duration: 8, delay: 2.2, opacity: 0.25 },
    { top: "80%", duration: 10, delay: 0.3, opacity: 0.3 },
    { top: "30%", duration: 11, delay: 3, opacity: 0.2 },
    { top: "55%", duration: 7.5, delay: 1, opacity: 0.35 },
    { top: "45%", duration: 8.5, delay: 2.8, opacity: 0.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className="absolute h-[2px] rounded-full"
          style={{
            top: line.top,
            opacity: line.opacity,
            width: "50%",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 30%, white 50%, rgba(255,255,255,0.8) 70%, transparent 100%)",
          }}
          initial={{ x: "-50%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: line.duration,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-24 overflow-hidden">
      <FlowLines />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-foreground-secondary text-lg max-w-xl mx-auto">
            Three steps. Zero effort. Maximum rewards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              <div className="text-sm font-bold text-foreground-secondary mb-2">
                Step {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground-secondary leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Connector line (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+48px)] w-[calc(100%-96px)] h-px bg-foreground/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
