import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/layout/Navigation';
import SolutionsSection from '@/components/sections/SolutionsSection/SolutionsSection';
import CTASection from '@/components/sections/CTASection/CTASection';
import ContactSection from '@/components/sections/ContactSection/ContactSection';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext.helpers';

const SolutionsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('solutionsTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('solutionsSubtitle')} />
      </Helmet>

      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 bg-primary text-white p-2 rounded focus:block focus:z-50"
      >
        {t('skipToContent')}
      </a>

      <Navigation />
      <main id="main-content">
        <SolutionsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default SolutionsPage;
