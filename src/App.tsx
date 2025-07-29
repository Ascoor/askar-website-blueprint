
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import SiteIndex from "./pages/SiteIndex";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import SolutionsPage from "./pages/SolutionsPage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>  
<Routes>
  <Route path="/" element={<Layout><SiteIndex /></Layout>} />
  <Route path="/demo" element={<Layout><Index /></Layout>} />
  <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
  <Route path="/about" element={<Layout><AboutPage /></Layout>} />
  <Route path="/portfolio" element={<Layout><PortfolioPage isArabic={false} /></Layout>} />
  <Route path="/solutions" element={<Layout><SolutionsPage /></Layout>} />
  <Route path="*" element={<Layout><NotFound /></Layout>} />
</Routes>

          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
