import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t, direction } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@ask-ar.net',
      href: 'mailto:info@ask-ar.net'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Tech Hub, Innovation District',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder={t('contact.form.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <div>
                <Input
                  placeholder={t('contact.form.company')}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="h-12 text-base"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder={t('contact.form.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-32 text-base resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-turquoise hover:bg-turquoise-dark text-white py-4 text-lg font-semibold hover-lift"
              >
                {t('contact.form.submit')}
                <Send className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180' : ''}`} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-turquoise rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {info.label}
                    </h3>
                    {info.href !== '#' ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-turquoise transition-smooth"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Map Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-medium">
              <div className="w-full h-64 bg-gradient-to-br from-turquoise/20 to-gold/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-turquoise mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};