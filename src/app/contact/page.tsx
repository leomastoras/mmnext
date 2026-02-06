import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Επικοινωνία - Μαρία Μανωλά Ψυχολόγος',
  description: 'Επικοινωνήστε με τη Μαρία Μανωλά για να κλείσετε ραντεβού. Τηλέφωνο, email και φόρμα επικοινωνίας.',
  keywords: 'επικοινωνία, ραντεβού, ψυχολόγος Αθήνα, Κολωνάκι',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Page Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Επικοινωνία
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Είμαι Εδώ για να σας <span className="text-primary">Βοηθήσω</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Το πρώτο βήμα είναι το πιο δύσκολο. Επικοινωνήστε μαζί μου σήμερα και ας ξεκινήσουμε αυτή την πορεία μαζί.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section id="form" className="scroll-mt-24 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: Form */}
              <div>
                <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                  Στείλτε Μήνυμα
                </h2>
                <p className="text-muted-foreground mb-8">
                  Συμπληρώστε τη φόρμα παρακάτω και θα επικοινωνήσω μαζί σας το συντομότερο δυνατό.
                </p>
                <ContactForm />
              </div>

              {/* Right: Contact Info */}
              <div>
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className="scroll-mt-24 py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6">
            <LocationMap />
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}