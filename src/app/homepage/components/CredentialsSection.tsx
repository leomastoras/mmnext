import Icon from '@/components/ui/AppIcon';

interface Credential {
  id: string;
  icon: string;
  title: string;
  description: string;
  year?: string;
}

export default function CredentialsSection() {
  const credentials: Credential[] = [
    {
      id: 'cred_degree',
      icon: 'AcademicCapIcon',
      title: 'Πτυχίο Ψυχολογίας',
      description: 'Πανεπιστήμιο Αθηνών, Τμήμα Ψυχολογίας',
      year: '2008',
    },
    {
      id: 'cred_masters',
      icon: 'BookOpenIcon',
      title: 'Μεταπτυχιακό στην Κλινική Ψυχολογία',
      description: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης',
      year: '2010',
    },
    {
      id: 'cred_certification',
      icon: 'CheckBadgeIcon',
      title: 'Πιστοποίηση Γνωσιακής-Συμπεριφορικής Θεραπείας',
      description: 'Ευρωπαϊκή Ένωση Γνωσιακής-Συμπεριφορικής Θεραπείας',
      year: '2012',
    },
    {
      id: 'cred_member',
      icon: 'UserGroupIcon',
      title: 'Μέλος Ελληνικής Ψυχολογικής Εταιρείας',
      description: 'Πλήρες μέλος από το 2010',
      year: '2010',
    },
    {
      id: 'cred_training_mindfulness',
      icon: 'SparklesIcon',
      title: 'Εκπαίδευση στη Θεραπεία Ενσυνειδητότητας',
      description: 'Mindfulness-Based Stress Reduction (MBSR)',
      year: '2015',
    },
    {
      id: 'cred_training_trauma',
      icon: 'HeartIcon',
      title: 'Εξειδίκευση στην Αντιμετώπιση Τραύματος',
      description: 'Trauma-Focused Cognitive Behavioral Therapy',
      year: '2018',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Προσόντα & Πιστοποιήσεις
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Εκπαίδευση και <span className="text-primary">Εμπειρία</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Με συνεχή εκπαίδευση και πιστοποιήσεις, προσφέρω υψηλής ποιότητας ψυχολογικές υπηρεσίες βασισμένες στις πιο σύγχρονες επιστημονικές προσεγγίσεις.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {credentials.map((credential, index) => (
            <div
              key={credential.id}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon
                    name={credential.icon as any}
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <div className="flex-1">
                  {credential.year && (
                    <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded mb-2">
                      {credential.year}
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {credential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {credential.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeInUp delay-300">
          <p className="text-muted-foreground mb-6">
            Θέλετε να μάθετε περισσότερα για την εκπαίδευση και την εμπειρία μου;
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Δείτε το πλήρες βιογραφικό
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}