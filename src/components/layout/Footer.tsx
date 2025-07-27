import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:info@askar.com', label: 'Email' }
  ];

  const quickLinks = [
    { key: 'home' as const, href: 'hero' },
    { key: 'services' as const, href: 'services' },
    { key: 'about' as const, href: 'about' },
    { key: 'contact' as const, href: 'contact' }
  ];

  return (
    <footer dir={isRTL ? 'rtl' : 'ltr'} className="bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <Logo className="mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Askar <span className="text-primary">Solutions</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('aboutDesc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => {
                    const element = document.getElementById(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('followUs')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Askar Software Solutions. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;