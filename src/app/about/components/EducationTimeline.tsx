import Icon from '@/components/ui/AppIcon';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: string;
}

export default function EducationTimeline() {
  const timeline: TimelineItem[] = [
    {
      id: 'edu_phd',
      year: '2018',
      title: 'Εξειδίκευση στην Αντιμετώπιση Τραύματος',
      institution: 'Trauma-Focused Cognitive Behavioral Therapy',
      description: 'Ειδική εκπαίδευση στην αντιμετώπιση τραυματικών εμπειριών και PTSD με αποδεδειγμένες τεχνικές.',
      icon: 'AcademicCapIcon',
    },
    {
      id: 'edu_mindfulness',
      year: '2015',
      title: 'Πιστοποίηση Ενσυνειδητότητας',
      institution: 'Mindfulness-Based Stress Reduction (MBSR)',
      description: 'Ολοκληρωμένη εκπαίδευση στη θεραπεία ενσυνειδητότητας για τη διαχείριση στρες και άγχους.',
      icon: 'SparklesIcon',
    },
    {
      id: 'edu_cbt',
      year: '2012',
      title: 'Πιστοποίηση Γνωσιακής-Συμπεριφορικής Θεραπείας',
      institution: 'Ευρωπαϊκή Ένωση Γνωσιακής-Συμπεριφορικής Θεραπείας',
      description: 'Πιστοποίηση στη CBT, μια από τις πιο αποτελεσματικές θεραπευτικές προσεγγίσεις για άγχος και κατάθλιψη.',
      icon: 'CheckBadgeIcon',
    },
    {
      id: 'edu_masters',
      year: '2010',
      title: 'Μεταπτυχιακό στην Κλινική Ψυχολογία',
      institution: 'Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης',
      description: 'Εξειδίκευση στην κλινική ψυχολογία με έμφαση στην αξιολόγηση και θεραπεία ψυχολογικών διαταραχών.',
      icon: 'BookOpenIcon',
    },
    {
      id: 'edu_bachelor',
      year: '2008',
      title: 'Πτυχίο Ψυχολογίας',
      institution: 'Πανεπιστήμιο Αθηνών',
      description: 'Πτυχίο στην Ψυχολογία με διάκριση, θεωρητική και πρακτική εκπαίδευση σε όλους τους τομείς της ψυχολογίας.',
      icon: 'AcademicCapIcon',
    },
  ];

  return (
    <section id="education" className="scroll-mt-24 py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Εκπαίδευση & Πιστοποιήσεις
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ακαδημαϊκή <span className="text-primary">Πορεία</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Η συνεχής εκπαίδευση και εξέλιξη είναι βασικό μέρος της επαγγελματικής μου ταυτότητας.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.id}
                className="relative flex gap-8 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10 shadow-soft">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{item.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuing Education Note */}
        <div className="mt-16 p-8 bg-white rounded-2xl border border-border animate-fadeInUp delay-300">
          <div className="flex items-start gap-4">
            <Icon name="BookOpenIcon" size={32} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                Συνεχιζόμενη Εκπαίδευση
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Παρακολουθώ τακτικά σεμινάρια, συνέδρια και προγράμματα συνεχιζόμενης εκπαίδευσης για να παραμένω ενημερωμένη με τις πιο πρόσφατες εξελίξεις στον τομέα της ψυχολογίας. Η δέσμευσή μου στην εξέλιξη διασφαλίζει ότι οι πελάτες μου λαμβάνουν τη βέλτιστη φροντίδα.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}