import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from './components/HeroSection';
import CredentialsSection from './components/CredentialsSection';
import ServicesOverview from './components/ServicesOverview';
import PhilosophySection from './components/PhilosophySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactCTA from './components/ContactCTA';

export const metadata: Metadata = {
  title: 'Μαρία Μανωλά - Ψυχολόγος | Αθήνα',
  description: 'Ψυχολογική υποστήριξη με ενσυναίσθηση και επαγγελματισμό. Ατομική, ζευγαριών και οικογενειακή θεραπεία στην Αθήνα.',
  keywords: 'ψυχολόγος, θεραπεία, Αθήνα, ατομική θεραπεία, ζευγαριών, οικογενειακή',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <CredentialsSection />
        <ServicesOverview />
        <PhilosophySection />
        <TestimonialsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}