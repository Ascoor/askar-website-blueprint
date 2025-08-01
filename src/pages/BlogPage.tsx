import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackToTopButton from '@/components/layout/BackToTopButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { fetchBlogPosts, type BlogPost } from '@/lib/cms';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const { data, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  return (
    <div id="main" className="min-h-screen">
      <Helmet>
        <title>{`${t('blogTitle')} - ${t('siteTitle')}`}</title>
        <meta name="description" content={t('blogSubtitle')} />
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
          {t('blogTitle')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t('blogSubtitle')}
        </p>
        {isLoading && <p>Loading...</p>}
        {error && <p>Failed to load blog posts</p>}
        {data && (
          <ul className="space-y-4 mt-8">
            {data.map((post) => (
              <li key={post.id} className="text-left">
                <h2 className="text-2xl font-semibold text-foreground">
                  {post.title}
                </h2>
                {post.summary && (
                  <p className="text-muted-foreground">{post.summary}</p>
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

export default BlogPage;
