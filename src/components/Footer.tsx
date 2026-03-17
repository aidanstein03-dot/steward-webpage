import { CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-foreground/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-semibold">
          <CreditCard className="w-5 h-5 text-primary" />
          Steward
        </div>

        <div className="flex items-center gap-6 text-sm text-foreground-secondary">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>

        <p className="text-sm text-foreground-secondary">
          &copy; {new Date().getFullYear()} Steward
        </p>
      </div>
    </footer>
  );
}
