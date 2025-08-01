import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { fetchCareerPosts, type CareerPost } from '@/lib/cms';

const CareersPage: React.FC = () => {
  const { t } = useLanguage();
  const { data, isLoading, error } = useQuery<CareerPost[]>({
    queryKey: ['careerPosts'],
    queryFn: fetchCareerPosts,
  });
  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('careersTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('careersSubtitle')} />
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
          {t('careersTitle')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('careersSubtitle')}
        </p>
        {isLoading && <p>Loading...</p>}
        {error && <p>Failed to load jobs</p>}
        {data && (
          <ul className="space-y-4 mt-8">
            {data.map((career) => (
              <li key={career.id} className="text-left">
                <h2 className="text-2xl font-semibold text-foreground">
                  {career.title}
                </h2>
                {career.location && (
                  <p className="text-muted-foreground">{career.location}</p>
                )}
                <Button size="sm" className="mt-2">
                  {t('applyNow')}
                </Button>
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

export default CareersPage;
