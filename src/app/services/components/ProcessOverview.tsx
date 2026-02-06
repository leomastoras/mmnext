import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

export default function ProcessOverview() {
  const steps: ProcessStep[] = [
    {
      id: 'step_initial',
      number: 1,
      title: 'Αρχική Συνάντηση',
      description: 'Στην πρώτη συνάντηση γνωριζόμαστε, συζητάμε τις ανάγκες σας και θέτουμε τους στόχους της θεραπείας. Είναι μια ευκαιρία να δείτε αν νιώθετε άνετα να εργαστείτε μαζί μου.',
      icon: 'UserPlusIcon',
    },
    {
      id: 'step_assessment',
      number: 2,
      title: 'Αξιολόγηση & Σχεδιασμός',
      description: 'Κατανοώ σε βάθος την κατάστασή σας και δημιουργούμε μαζί ένα εξατομικευμένο θεραπευτικό σχέδιο που ταιριάζει στις δικές σας ανάγκες και στόχους.',
      icon: 'ClipboardDocumentCheckIcon',
    },
    {
      id: 'step_therapy',
      number: 3,
      title: 'Θεραπευτική Διαδικασία',
      description: 'Εργαζόμαστε μαζί μέσα από τακτικές συνεδρίες, χρησιμοποιώντας αποδεδειγμένες τεχνικές και στρατηγικές. Παρακολουθούμε την πρόοδο και προσαρμόζουμε το σχέδιο όπου χρειάζεται.',
      icon: 'ChatBubbleLeftRightIcon',
    },
    {
      id: 'step_progress',
      number: 4,
      title: 'Αξιολόγηση Προόδου',
      description: 'Αξιολογούμε τακτικά την πρόοδό σας και προσαρμόζουμε τη θεραπεία ανάλογα. Γιορτάζουμε τα επιτεύγματα και αντιμετωπίζουμε τυχόν προκλήσεις που προκύπτουν.',
      icon: 'ChartBarIcon',
    },
    {
      id: 'step_completion',
      number: 5,
      title: 'Ολοκλήρωση & Συντήρηση',
      description: 'Όταν επιτύχουμε τους στόχους σας, προετοιμάζουμε την ολοκλήρωση της θεραπείας. Σας εξοπλίζω με εργαλεία για να διατηρήσετε την πρόοδό σας και να αντιμετωπίζετε μελλοντικές προκλήσεις.',
      icon: 'TrophyIcon',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Πώς Λειτουργεί
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Η Θεραπευτική <span className="text-primary">Διαδικασία</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Κάθε θεραπευτική πορεία είναι μοναδική, αλλά ακολουθεί μια δομημένη προσέγγιση που εξασφαλίζει τα καλύτερα αποτελέσματα.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex gap-6 items-start animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 p-6 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                <div className="flex items-start gap-4">
                  <Icon name={step.icon as any} size={28} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-border text-center">
            <Icon name="ClockIcon" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Διάρκεια Συνεδρίας</h4>
            <p className="text-muted-foreground">50-60 λεπτά</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-border text-center">
            <Icon name="CalendarIcon" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Συχνότητα</h4>
            <p className="text-muted-foreground">Εβδομαδιαία ή κάθε 2 εβδομάδες</p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-border text-center">
            <Icon name="ShieldCheckIcon" size={32} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Εμπιστευτικότητα</h4>
            <p className="text-muted-foreground">100% Διασφαλισμένη</p>
          </div>
        </div>
      </div>
    </section>
  );
}