import Header from '@/components/Header';
import InteractiveHero from '@/components/InteractiveHero';
import StatsCounter from '@/components/StatsCounter';
import Products from '@/components/Products';
import Features from '@/components/Features';
import InteractiveProductShowcase from '@/components/InteractiveProductShowcase';
import VideoSection from '@/components/VideoSection';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import Accessories from '@/components/Accessories';
import SpecSheet from '@/components/SpecSheet';
import FinancingCalculator from '@/components/FinancingCalculator';
import DealerLocator from '@/components/DealerLocator';
import VirtualTestRide from '@/components/VirtualTestRide';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <InteractiveHero />
        <StatsCounter />
        <Products />
        <Features />
        <InteractiveProductShowcase />
        <VideoSection />
        <ComparisonTable />
        <Testimonials />
        <Accessories />
        <SpecSheet />
        <FinancingCalculator />
        <DealerLocator />
        <VirtualTestRide />
        <About />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;