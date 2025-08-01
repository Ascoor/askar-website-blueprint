import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Preloader from '@/components/ui/Preloader';
const Index = lazy(() => import('./pages/Index'));
const SiteIndex = lazy(() => import('./pages/SiteIndex'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const DocsPage = lazy(() => import('./pages/DocsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const CareerPostPage = lazy(() => import('./pages/CareerPostPage'));
const PartnerPage = lazy(() => import('./pages/PartnerPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Layout = lazy(() => import('./components/Layout'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<Preloader onComplete={() => {}} />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <SiteIndex />
                    </Layout>
                  }
                />
                <Route
                  path="/demo"
                  element={
                    <Layout>
                      <Index />
                    </Layout>
                  }
                />
                <Route
                  path="/services"
                  element={
                    <Layout>
                      <ServicesPage />
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <AboutPage />
                    </Layout>
                  }
                />
                <Route
                  path="/portfolio"
                  element={
                    <Layout>
                      <PortfolioPage isArabic={false} />
                    </Layout>
                  }
                />
                <Route
                  path="/solutions"
                  element={
                    <Layout>
                      <SolutionsPage />
                    </Layout>
                  }
                />
                <Route
                  path="/careers"
                  element={
                    <Layout>
                      <CareersPage />
                    </Layout>
                  }
                />
                <Route
                  path="/careers/:id"
                  element={
                    <Layout>
                      <CareerPostPage />
                    </Layout>
                  }
                />
                <Route
                  path="/docs"
                  element={
                    <Layout>
                      <DocsPage />
                    </Layout>
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <Layout>
                      <BlogPage />
                    </Layout>
                  }
                />
                <Route
                  path="/blog/:id"
                  element={
                    <Layout>
                      <BlogPostPage />
                    </Layout>
                  }
                />
                <Route
                  path="/partners"
                  element={
                    <Layout>
                      <PartnersPage />
                    </Layout>
                  }
                />
                <Route
                  path="/partners/:id"
                  element={
                    <Layout>
                      <PartnerPage />
                    </Layout>
                  }
                />
                <Route
                  path="*"
                  element={
                    <Layout>
                      <NotFound />
                    </Layout>
                  }
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
