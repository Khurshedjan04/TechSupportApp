import HeroSection from './components/HeroSection';
import TemplateShowcase from './components/TemplateShowcase';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import CtaSection from './components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <TemplateShowcase />
      <CtaSection />
    </>
  );
}