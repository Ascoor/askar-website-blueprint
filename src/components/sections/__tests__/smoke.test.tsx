import { render } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import SocialProofSection from '../SocialProofSection/SocialProofSection';
import LunarHeroSection from '../LunarHeroSection/LunarHeroSection';
import Status from '@/components/ui/status';
import ServicesSection from '../ServicesSection/ServicesSection';
import SolutionsSection from '../SolutionsSection/SolutionsSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import AboutSection from '../AboutSection/AboutSection';
import FAQSection from '../FAQSection/FAQSection';
import CTASection from '../CTASection/CTASection';
import ContactSection from '../ContactSection/ContactSection';

const sections = [
  SocialProofSection,
  LunarHeroSection,
  Status,
  ServicesSection,
  SolutionsSection,
  PortfolioSection,
  AboutSection,
  FAQSection,
  CTASection,
  ContactSection,
];

describe('sections render without crashing', () => {
  sections.forEach((Section) => {
    it(`${Section.name} renders`, () => {
      expect(() =>
        render(
          <LanguageProvider>
            <Section />
          </LanguageProvider>,
        ),
      ).not.toThrow();
    });
  });
});
