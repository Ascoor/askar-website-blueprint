import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext.helpers';
import { fetchPartner, type Partner } from '@/lib/cms';

const PartnerPage: React.FC = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const { data, isLoading, error } = useQuery<Partner>({
    queryKey: ['partner', id],
    queryFn: () => fetchPartner(id as string),
    enabled: !!id,
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
      <main id="main-content" className="py-32 container">
        {isLoading && <p>Loading...</p>}
        {error && <p>Failed to load partner</p>}
        {data && (
          <article>
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              {data.name}
            </h1>
            {data.description && (
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            )}
          </article>
        )}
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default PartnerPage;
