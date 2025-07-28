import React from 'react';
import PenguinMascot from '@/components/ui/PenguinMascot';

const LunarHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 text-center overflow-hidden bg-brand-surface-dark">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-primary via-transparent to-brand-secondary/20" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-secondary/10 blur-2xl" />
      <h1 className="font-heading text-brand-glow mb-4 animate-fade-in">Askar Software Solutions</h1>
      <p className="text-base text-muted-foreground mb-8 animate-fade-in-up max-w-xl mx-auto">
        Crafting elegant solutions under the calm of the lunar night.
      </p>
      <PenguinMascot className="animate-float" />
    </section>
  );
};

export default LunarHero;
