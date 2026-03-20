import Image from "next/image";

interface StewardLogoProps {
  size?: number;
  className?: string;
}

export default function StewardLogo({ size = 20, className }: StewardLogoProps) {
  return (
    <Image
      src="/steward-logo.png"
      alt="Steward"
      width={size}
      height={size}
      className={className}
    />
  );
}
