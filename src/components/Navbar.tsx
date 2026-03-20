"use client";

import { Sparkles, Lightbulb, Target } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import StewardLogo from "@/components/StewardLogo";

const navItems = [
  { name: "Features", url: "#features", icon: Sparkles },
  { name: "How It Works", url: "#how-it-works", icon: Lightbulb },
  { name: "Goals", url: "#goals", icon: Target },
];

export default function Navbar() {
  return (
    <NavBar
      items={navItems}
      logo={
        <>
          <span>Steward</span>
          <StewardLogo size={20} />
        </>
      }
    />
  );
}
