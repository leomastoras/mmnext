import { Metadata } from 'next';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import BioSection from './components/BioSection';
import EducationTimeline from './components/EducationTimeline';
import ExperienceSection from './components/ExperienceSection';
import ApproachSection from './components/ApproachSection';
import PersonalSection from './components/PersonalSection';
import Icon from '@/components/ui/AppIcon';


export const metadata: Metadata = {
  title: 'Σχετικά - Μαρία Μανωλά Ψυχολόγος',
  description: 'Γνωρίστε τη Μαρία Μανωλά - 15+ χρόνια εμπειρίας, πιστοποιήσεις, θεραπευτική προσέγγιση και φιλοσοφία.',
  keywords: 'βιογραφικό, εκπαίδευση, εμπειρία, προσέγγιση, ψυχολόγος Αθήνα',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Page Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Σχετικά με Εμένα
            </span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Γνωρίστε τη <span className="text-primary">Μαρία Μανωλά</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Πιστοποιημένη ψυχολόγος με πάνω από 15 χρόνια εμπειρίας στην παροχή συμπονετικής και αποτελεσματικής ψυχολογικής υποστήριξης.
            </p>
          </div>
        </section>

        {/* Bio */}
        <BioSection />

        {/* Education */}
        <EducationTimeline />

        {/* Experience */}
        <ExperienceSection />

        {/* Approach */}
        <ApproachSection />

        {/* Personal */}
        <PersonalSection />

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ας Εργαστούμε <span className="text-primary">Μαζί</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Αν αναζητάτε έναν θεραπευτή που θα σας ακούσει με ενσυναίσθηση και θα σας καθοδηγήσει με επαγγελματισμό, θα χαρώ να σας γνωρίσω.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-lg"
            >
              Επικοινωνήστε Μαζί Μου
              <Icon name="ArrowRightIcon" size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}