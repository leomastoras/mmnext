import Icon from '@/components/ui/AppIcon';

interface Experience {
  id: string;
  icon: string;
  stat: string;
  label: string;
  description: string;
}

interface Membership {
  id: string;
  name: string;
  role: string;
  year: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: 'exp_years',
      icon: 'CalendarIcon',
      stat: '15+',
      label: 'Χρόνια Εμπειρίας',
      description: 'Πάνω από μια δεκαπενταετία παροχής ψυχολογικών υπηρεσιών υψηλής ποιότητας.',
    },
    {
      id: 'exp_clients',
      icon: 'UserGroupIcon',
      stat: '500+',
      label: 'Ικανοποιημένοι Πελάτες',
      description: 'Έχω βοηθήσει εκατοντάδες ανθρώπους να επιτύχουν τους θεραπευτικούς τους στόχους.',
    },
    {
      id: 'exp_sessions',
      icon: 'ChatBubbleLeftRightIcon',
      stat: '8000+',
      label: 'Συνεδρίες Θεραπείας',
      description: 'Χιλιάδες ώρες κλινικής εμπειρίας σε ποικίλες ψυχολογικές προκλήσεις.',
    },
    {
      id: 'exp_success',
      icon: 'ChartBarIcon',
      stat: '95%',
      label: 'Ποσοστό Επιτυχίας',
      description: 'Υψηλά ποσοστά ικανοποίησης πελατών και επίτευξης θεραπευτικών στόχων.',
    },
  ];

  const memberships: Membership[] = [
    {
      id: 'member_hps',
      name: 'Ελληνική Ψυχολογική Εταιρεία',
      role: 'Πλήρες Μέλος',
      year: 'Από 2010',
    },
    {
      id: 'member_eacbt',
      name: 'Ευρωπαϊκή Ένωση Γνωσιακής-Συμπεριφορικής Θεραπείας',
      role: 'Πιστοποιημένο Μέλος',
      year: 'Από 2012',
    },
    {
      id: 'member_istss',
      name: 'International Society for Traumatic Stress Studies',
      role: 'Μέλος',
      year: 'Από 2018',
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Επαγγελματική Εμπειρία
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Χρόνια <span className="text-primary">Εμπειρίας</span> και Επιτυχίας
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Η πολυετής εμπειρία μου καλύπτει ένα ευρύ φάσμα ψυχολογικών ζητημάτων και πληθυσμών.
          </p>
        </div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={exp.icon as any} size={32} className="text-primary" />
              </div>
              <p className="text-5xl font-bold text-primary mb-2">{exp.stat}</p>
              <p className="font-semibold text-lg text-foreground mb-3">{exp.label}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Professional Memberships */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-3xl font-semibold text-foreground mb-8 text-center animate-fadeInUp">
            Επαγγελματικές Ενώσεις
          </h3>
          <div className="space-y-6">
            {memberships.map((member, index) => (
              <div
                key={member.id}
                className="p-6 bg-secondary/30 rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="BuildingLibraryIcon" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground mb-1">{member.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{member.role}</span>
                      <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <span>{member.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}