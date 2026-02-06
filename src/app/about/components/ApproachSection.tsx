import Icon from '@/components/ui/AppIcon';

interface ApproachMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  applications: string[];
}

export default function ApproachSection() {
  const methods: ApproachMethod[] = [
    {
      id: 'approach_cbt',
      name: 'Γνωσιακή-Συμπεριφορική Θεραπεία (CBT)',
      description: 'Η CBT βοηθά στον εντοπισμό και τη μετατροπή αρνητικών σκέψεων και συμπεριφορών που επηρεάζουν την ψυχική υγεία.',
      icon: 'LightBulbIcon',
      applications: ['Άγχος', 'Κατάθλιψη', 'Φοβίες', 'OCD'],
    },
    {
      id: 'approach_mindfulness',
      name: 'Θεραπεία Ενσυνειδητότητας',
      description: 'Η ενσυνειδητότητα βοηθά στην αύξηση της επίγνωσης του παρόντος και στη μείωση του στρες μέσω τεχνικών διαλογισμού.',
      icon: 'SparklesIcon',
      applications: ['Διαχείριση Στρες', 'Συναισθηματική Ρύθμιση', 'Χρόνιος Πόνος'],
    },
    {
      id: 'approach_psychodynamic',
      name: 'Ψυχοδυναμική Θεραπεία',
      description: 'Εξερευνά τα ασυνείδητα μοτίβα και τις παιδικές εμπειρίες που επηρεάζουν τη σημερινή συμπεριφορά.',
      icon: 'MagnifyingGlassIcon',
      applications: ['Προβλήματα Σχέσεων', 'Αυτογνωσία', 'Επαναλαμβανόμενα Μοτίβα'],
    },
    {
      id: 'approach_systemic',
      name: 'Συστημική Θεραπεία',
      description: 'Εξετάζει τις σχέσεις και τις δυναμικές μεταξύ ατόμων, ιδιαίτερα χρήσιμη για ζευγάρια και οικογένειες.',
      icon: 'UserGroupIcon',
      applications: ['Οικογενειακά Θέματα', 'Ζευγάρια', 'Επικοινωνία'],
    },
  ];

  return (
    <section id="approach" className="scroll-mt-24 py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Θεραπευτική Προσέγγιση
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Οι <span className="text-primary">Μέθοδοί</span> Μου
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Χρησιμοποιώ μια ολοκληρωμένη προσέγγιση που συνδυάζει αποδεδειγμένες θεραπευτικές μεθόδους προσαρμοσμένες στις μοναδικές σας ανάγκες.
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {methods.map((method, index) => (
            <div
              key={method.id}
              className="p-8 bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name={method.icon as any} size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {method.name}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {method.description}
              </p>

              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Εφαρμογές:</p>
                <div className="flex flex-wrap gap-2">
                  {method.applications.map((app, idx) => (
                    <span
                      key={`${method.id}_app_${idx}`}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Statement */}
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl border border-border shadow-soft animate-fadeInUp delay-300">
          <div className="flex items-start gap-6">
            <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary flex-shrink-0" />
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Η Φιλοσοφία Μου
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Πιστεύω ότι δεν υπάρχει μία "σωστή" προσέγγιση για όλους. Κάθε άνθρωπος είναι μοναδικός και χρειάζεται μια εξατομικευμένη θεραπευτική προσέγγιση. Γι' αυτό συνδυάζω διάφορες μεθόδους με βάση τις δικές σας ανάγκες, προσωπικότητα και στόχους.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Η θεραπεία είναι μια συνεργασία. Εργαζόμαστε μαζί για να κατανοήσουμε τις προκλήσεις σας, να αναπτύξουμε νέες δεξιότητες και να δημιουργήσουμε θετικές αλλαγές που θα διαρκέσουν. Ο στόχος μου είναι να σας ενδυναμώσω ώστε να γίνετε ο δικός σας θεραπευτής.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}