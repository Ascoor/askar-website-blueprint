import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import PenguinMascot from "@/components/ui/PenguinMascot";

const translations = {
  en: {
    title: "Askar Software Solutions",
    subtitle: "Crafting elegant solutions under the calm of the lunar night.",
  },
  ar: {
    title: "أسكار للبرمجيات",
    subtitle: "نبتكر حلولاً برمجية مميزة تحت هدوء الليل القمري.",
  },
} as const;

type Locale = keyof typeof translations;

export interface LunarHeroSectionProps {
  title?: string;
  subtitle?: string;
  showMascot?: boolean;
  alignText?: "left" | "center" | "right";
}

const LunarHeroSection: React.FC<LunarHeroSectionProps> = ({
  title,
  subtitle,
  showMascot = true,
  alignText = "center",
}) => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const content = translations[language as Locale];

  return (
    <section
      id="hero"
      className={cn(
        "relative pt-20 pb-20 overflow-hidden transition-colors duration-500",
        alignText === "center" && "text-center",
        alignText === "left" && "text-left",
        alignText === "right" && "text-right",
        theme === "dark"
          ? "bg-midnight text-moonWhite"
          : "bg-brand-bg text-foreground",
      )}
    >
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-primary via-transparent to-brand-secondary/20"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-secondary/10 blur-2xl"
        aria-hidden="true"
      />
      <h1 className="font-heading text-brand-glow mb-4 animate-fade-in-up delay-100">
        {title ?? content.title}
      </h1>
      <p className="text-base text-muted-foreground mb-8 animate-fade-in-up delay-100 max-w-xl mx-auto">
        {subtitle ?? content.subtitle}
      </p>
      {showMascot && (
        <PenguinMascot className="animate-float mx-auto w-32 md:w-48" />
      )}
    </section>
  );
};

export default LunarHeroSection;
