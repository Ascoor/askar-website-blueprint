import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { fetchPartners, type Partner } from '@/lib/cms';

const PartnersPage: React.FC = () => {
  const { t } = useLanguage();
  const { data, isLoading, error } = useQuery<Partner[]>({
    queryKey: ['partners'],
    queryFn: fetchPartners,
  });
  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('partnersTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('partnersSubtitle')} />
      </Helmet>

      <a
        href="#main-content"
        className="skip-link absolute left-2 top-2 bg-primary text-white p-2 rounded focus:block focus:z-50"
      >
        {t('skipToContent')}
      </a>

      <Navigation />
      <main id="main-content" className="py-32 text-center container">
        <h1 className="text-5xl font-bold mb-4 text-foreground">
          {t('partnersTitle')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('partnersSubtitle')}
        </p>
        {isLoading && <p>Loading...</p>}
        {error && <p>Failed to load partners</p>}
        {data && (
          <ul className="space-y-4 mt-8">
            {data.map((partner) => (
              <li key={partner.id} className="text-left">
                <h2 className="text-2xl font-semibold text-foreground">
                  {partner.name}
                </h2>
                {partner.description && (
                  <p className="text-muted-foreground">{partner.description}</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default PartnersPage;
