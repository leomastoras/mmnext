import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function BioSection() {
  return (
    <section id="bio" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative animate-fadeInUp">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <AppImage
                src="assets/images/2.jpg"
                alt="Μαρία Μανωλά σε επαγγελματική φωτογράφιση με ζεστό χαμόγελο και φυσικό φως"
                className="w-full h-full object-cover" />
              
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>

          {/* Right: Bio Content */}
          <div className="space-y-6 animate-fadeInUp delay-200">
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Η Ιστορία Μου
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Γεια σας, είμαι η <span className="text-primary">Μαρία</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Η ψυχολογία ήταν πάντα το πάθος μου. Από μικρή ηλικία με γοήτευε η ανθρώπινη συμπεριφορά και οι πολύπλοκοι τρόποι με τους οποίους οι άνθρωποι σκέφτονται, νιώθουν και αλληλεπιδρούν.
              </p>

              <p>
                Μετά από 15 χρόνια πρακτικής εμπειρίας, έχω βοηθήσει εκατοντάδες ανθρώπους να ξεπεράσουν προσωπικές προκλήσεις, να βελτιώσουν τις σχέσεις τους και να βρουν μεγαλύτερη ευημερία στη ζωή τους. Κάθε ιστορία είναι μοναδική και με εμπνέει να συνεχίζω αυτή τη δουλειά που αγαπώ.
              </p>

              <p>
                Πιστεύω ότι η θεραπεία είναι μια συνεργατική διαδικασία. Δεν είμαι εδώ για να σας πω τι να κάνετε, αλλά για να σας βοηθήσω να ανακαλύψετε τις δικές σας δυνάμεις και να βρείτε τις δικές σας λύσεις. Δημιουργώ έναν ασφαλή χώρο όπου μπορείτε να είστε ο εαυτός σας χωρίς κρίση ή φόβο.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3">
                <Icon name="HeartIcon" size={24} className="text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Ενσυναίσθηση</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="ShieldCheckIcon" size={24} className="text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Εμπιστευτικότητα</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="SparklesIcon" size={24} className="text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Αυθεντικότητα</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="AcademicCapIcon" size={24} className="text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Επαγγελματισμός</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}