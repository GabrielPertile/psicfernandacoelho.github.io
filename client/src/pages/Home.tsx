import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import AchievementsSection from '@/components/home/AchievementsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AchievementsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
