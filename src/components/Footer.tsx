import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, direction } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { key: 'services.full_control.title', href: '#services' },
      { key: 'services.open_code.title', href: '#services' },
      { key: 'services.limitless_growth.title', href: '#services' },
      { key: 'services.investment_protection.title', href: '#services' }
    ],
    company: [
      { key: 'nav.about', href: '#about' },
      { key: 'nav.portfolio', href: '#portfolio' },
      { key: 'nav.blog', href: '#blog' },
      { key: 'nav.contact', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gradient-gold mb-2">Ask-ar</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {t('footer.tagline')}
                </p>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-turquoise">
                  {direction === 'rtl' ? 'تابعنا' : 'Follow Us'}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className="w-10 h-10 p-0 hover:bg-turquoise/20 hover:text-turquoise transition-colors"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="font-semibold text-turquoise text-lg">
                {t('footer.contact.title')}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">info@ask-ar.net</p>
                    <p className="text-primary-foreground/80">support@ask-ar.net</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80">+966 XX XXX XXXX</p>
                    <p className="text-primary-foreground/80">+1 (XXX) XXX-XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-turquoise mt-1 flex-shrink-0" />
                  <p className="text-primary-foreground/80">
                    {direction === 'rtl' 
                      ? 'الرياض، المملكة العربية السعودية'
                      : 'Riyadh, Saudi Arabia'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-semibold text-turquoise text-lg">
                {t('footer.services.title')}
              </h4>
              <nav className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-turquoise transition-colors"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h4 className="font-semibold text-turquoise text-lg">
                {t('footer.company.title')}
              </h4>
              <nav className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-turquoise transition-colors"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Ask-ar Software Solutions. {direction === 'rtl' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-primary-foreground/60 hover:text-turquoise transition-colors">
                  {direction === 'rtl' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-turquoise transition-colors">
                  {direction === 'rtl' ? 'شروط الخدمة' : 'Terms of Service'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};