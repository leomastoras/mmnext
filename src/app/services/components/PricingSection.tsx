import Icon from '@/components/ui/AppIcon';

interface PricingItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export default function PricingSection() {
  const pricingItems: PricingItem[] = [
    {
      id: 'pricing_individual',
      title: 'Ατομική Συνεδρία',
      price: '€60',
      description: 'Μία συνεδρία 50-60 λεπτών',
      features: ['Εξατομικευμένη προσέγγιση', 'Ευέλικτο πρόγραμμα', 'Online ή δια ζώσης'],
    },
    {
      id: 'pricing_couples',
      title: 'Συνεδρία Ζευγαριών',
      price: '€80',
      description: 'Μία συνεδρία 60-75 λεπτών',
      features: ['Για ζευγάρια', 'Εκτεταμένη συνεδρία', 'Εξειδικευμένη προσέγγιση'],
    },
    {
      id: 'pricing_family',
      title: 'Οικογενειακή Συνεδρία',
      price: '€90',
      description: 'Μία συνεδρία 75-90 λεπτών',
      features: ['Για όλη την οικογένεια', 'Εκτεταμένη διάρκεια', 'Ομαδική δυναμική'],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Τιμοκατάλογος
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Διαφανής <span className="text-primary">Τιμολόγηση</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Οι τιμές μου είναι ανταγωνιστικές και αντικατοπτρίζουν την ποιότητα των υπηρεσιών που προσφέρω.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingItems.map((item, index) => (
            <div
              key={item.id}
              className="p-8 bg-card rounded-2xl border-2 border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{item.price}</span>
                <span className="text-muted-foreground ml-2">/ συνεδρία</span>
              </div>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={`${item.id}_feature_${idx}`} className="flex items-center gap-2">
                    <Icon name="CheckIcon" size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="p-6 bg-secondary/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <Icon name="CreditCardIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Τρόποι Πληρωμής</h4>
                <p className="text-muted-foreground">
                  Δέχομαι μετρητά, κάρτα και τραπεζική κατάθεση. Η πληρωμή γίνεται στο τέλος κάθε συνεδρίας.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-secondary/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <Icon name="DocumentTextIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Ασφαλιστικές Εταιρείες</h4>
                <p className="text-muted-foreground">
                  Παρέχω απόδειξη για να την υποβάλλετε στην ασφαλιστική σας εταιρεία. Οι όροι κάλυψης εξαρτώνται από το ασφαλιστήριό σας.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-secondary/30 rounded-xl border border-border">
            <div className="flex items-start gap-4">
              <Icon name="CalendarDaysIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Πολιτική Ακύρωσης</h4>
                <p className="text-muted-foreground">
                  Παρακαλώ ειδοποιήστε με τουλάχιστον 24 ώρες πριν αν χρειαστεί να ακυρώσετε ή να αναβάλλετε το ραντεβού σας.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}