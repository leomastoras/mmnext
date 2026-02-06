import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface PhilosophyPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export default function PhilosophySection() {
  const philosophyPoints: PhilosophyPoint[] = [
  {
    id: 'philosophy_empathy',
    icon: 'HeartIcon',
    title: 'Ενσυναίσθηση & Κατανόηση',
    description: 'Κάθε άνθρωπος είναι μοναδικός. Ακούω με ενσυναίσθηση και χωρίς κρίση, δημιουργώντας έναν ασφαλή χώρο για την έκφραση των συναισθημάτων σας.'
  },
  {
    id: 'philosophy_evidence',
    icon: 'BeakerIcon',
    title: 'Επιστημονική Προσέγγιση',
    description: 'Χρησιμοποιώ αποδεδειγμένες θεραπευτικές μεθόδους βασισμένες στην επιστημονική έρευνα, προσαρμοσμένες στις ατομικές σας ανάγκες.'
  },
  {
    id: 'philosophy_collaboration',
    icon: 'UserGroupIcon',
    title: 'Συνεργατική Σχέση',
    description: 'Η θεραπεία είναι μια συνεργασία. Δουλεύουμε μαζί για να θέσουμε στόχους και να δημιουργήσουμε ένα σχέδιο που ταιριάζει στις δικές σας ανάγκες.'
  },
  {
    id: 'philosophy_growth',
    icon: 'SparklesIcon',
    title: 'Προσωπική Ανάπτυξη',
    description: 'Πιστεύω στη δυνατότητα κάθε ανθρώπου να αλλάξει και να αναπτυχθεί. Στόχος μας είναι η ενδυνάμωση και η αυτοπραγμάτωση.'
  }];


  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative animate-fadeInUp">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_19686b1d1-1764892982525.png"
                alt="Ήρεμο θεραπευτικό περιβάλλον με άνετα καθίσματα και φυσικό φως"
                className="w-full h-full object-cover" />
              
            </div>
            {/* Decorative Quote Card */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl max-w-xs backdrop-blur-xl shadow-lg">
              <Icon name="ChatBubbleLeftRightIcon" size={32} className="text-primary mb-3" />
              <p className="text-sm italic text-foreground leading-relaxed">
                "Η θεραπεία δεν είναι η επίλυση προβλημάτων, αλλά η δημιουργία ενός χώρου όπου μπορείτε να ανακαλύψετε τις δικές σας λύσεις."
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fadeInUp delay-200">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Η Προσέγγισή Μου
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Φιλοσοφία & <span className="text-primary">Αξίες</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Η θεραπευτική μου προσέγγιση στηρίζεται σε βασικές αρχές που διαμορφώνουν τον τρόπο με τον οποίο εργάζομαι με κάθε πελάτη.
              </p>
            </div>

            {/* Philosophy Points */}
            <div className="space-y-6">
              {philosophyPoints.map((point, index) =>
              <div
                key={point.id}
                className="flex items-start gap-4 p-6 rounded-xl hover:bg-secondary/30 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={point.icon as any} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/about#approach"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
                
                Μάθετε περισσότερα για τη θεραπευτική μου προσέγγιση
                <Icon name="ArrowRightIcon" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}