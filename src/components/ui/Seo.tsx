import React from 'react';
import { Helmet } from 'react-helmet';

export interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown> | string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  ogImage,
  structuredData,
}) => {
  const jsonLd = typeof structuredData === 'string'
    ? structuredData
    : structuredData
    ? JSON.stringify(structuredData)
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {jsonLd && (
        <script type="application/ld+json">{jsonLd}</script>
      )}
    </Helmet>
  );
};

export default Seo;